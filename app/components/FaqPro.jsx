'use client';

import { AnimatePresence, motion } from 'motion/react';
import * as React from 'react';

// Simple utility to conditionally join class names
const cn = (...classes) => classes.filter(Boolean).join(' ');

// SVG icon to replace lucide-react ChevronDown
function ChevronDownIcon({ className, 'aria-hidden': ariaHidden }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden={ariaHidden}
    >
      <path d="m6 9 6 6 6-6" />
    </svg>
  );
}

const PANEL_EASE = [0.16, 1, 0.3, 1];
const EXPAND_SPRING = {
  type: 'spring',
  stiffness: 150,
  damping: 26,
  mass: 1.05,
};
const COLLAPSE_SPRING = {
  type: 'spring',
  stiffness: 190,
  damping: 30,
  mass: 1.1,
};

function getDefaultOpenId(items, defaultOpenFirst) {
  if (defaultOpenFirst && items[0]) {
    return items[0].id;
  }
  return null;
}

function FaqProRow({
  isOpen,
  item,
  onToggle,
  panelId,
  triggerId,
}) {
  return (
    <div className="faq-pro-row">
      <button
        aria-controls={panelId}
        aria-expanded={isOpen}
        className="faq-pro-trigger"
        id={triggerId}
        onClick={onToggle}
        type="button"
      >
        <span className="faq-pro-question">
          {item.question}
        </span>
        <ChevronDownIcon
          aria-hidden="true"
          className={cn('faq-pro-icon', isOpen && 'open')}
        />
      </button>

      <motion.div
        animate={{ height: isOpen ? 'auto' : 0 }}
        aria-labelledby={triggerId}
        className="faq-pro-panel-container"
        id={panelId}
        initial={false}
        role="region"
        transition={{
          height: isOpen ? EXPAND_SPRING : COLLAPSE_SPRING,
        }}
      >
        <motion.div
          animate={{
            opacity: isOpen ? 1 : 0,
            y: isOpen ? 0 : -6,
          }}
          aria-hidden={!isOpen}
          className="faq-pro-answer"
          inert={!isOpen}
          initial={false}
          transition={{
            opacity: {
              duration: isOpen ? 0.38 : 0.2,
              ease: PANEL_EASE,
              delay: isOpen ? 0.06 : 0,
            },
            y: isOpen ? EXPAND_SPRING : COLLAPSE_SPRING,
          }}
        >
          {item.answer}
        </motion.div>
      </motion.div>
    </div>
  );
}

function FaqPro({
  className,
  defaultOpenFirst = false,
  items,
}) {
  const listId = React.useId();
  const [openId, setOpenId] = React.useState(() =>
    getDefaultOpenId(items, defaultOpenFirst)
  );

  React.useEffect(() => {
    setOpenId((current) => {
      if (!current) {
        return current;
      }
      return items.some((item) => item.id === current) ? current : null;
    });
  }, [items]);

  const toggleItem = React.useCallback((id) => {
    setOpenId((current) => (current === id ? null : id));
  }, []);

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: `
        .faq-pro-wrapper {
          --ic-foreground: #111111;
          --ic-muted-foreground: #6d7480;
          --ic-ring: rgba(17,17,17,0.16);
          background: transparent;
          color: var(--ic-foreground);
          font-family: inherit;
          width: 100%;
          max-width: 42rem;
          margin: 0 auto;
          display: flex;
          flex-direction: column;
          gap: 16px;
        }
        
        .faq-pro-row {
          overflow: hidden;
          border-radius: 16px;
          background-color: var(--white, #ffffff);
          border: 1px solid var(--border, #e3e3e3);
          box-shadow: var(--card-shadow, 0 1px 2px rgba(0,0,0,0.04), 0 8px 18px rgba(0,0,0,0.04));
          transition: transform 0.2s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.2s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .faq-pro-row:hover {
          box-shadow: 0 4px 12px rgba(0,0,0,0.08), 0 12px 24px rgba(0,0,0,0.06);
          transform: translateY(-2px);
        }
        
        .faq-pro-trigger {
          display: flex;
          width: 100%;
          align-items: flex-start;
          justify-content: space-between;
          gap: 16px;
          padding: 20px 24px;
          text-align: left;
          outline: none;
          background: none;
          border: none;
          cursor: pointer;
        }
        
        .faq-pro-trigger:focus-visible {
          box-shadow: 0 0 0 2px var(--ic-ring) inset;
        }
        
        .faq-pro-question {
          font-weight: 600;
          font-size: 16px;
          color: var(--ic-foreground);
          line-height: 24px;
          letter-spacing: -0.01em;
        }
        
        .faq-pro-icon {
          margin-top: 2px;
          height: 18px;
          width: 18px;
          flex-shrink: 0;
          color: var(--ic-foreground);
          transition: transform 0.3s cubic-bezier(0.16,1,0.3,1);
        }
        
        .faq-pro-icon.open {
          transform: rotate(180deg);
        }
        
        .faq-pro-panel-container {
          overflow: hidden;
        }
        
        .faq-pro-answer {
          padding: 0 24px 24px;
          font-size: 15px;
          color: var(--ic-muted-foreground);
          line-height: 26px;
        }
      `}} />
      <div className={cn('faq-pro-wrapper', className)}>
        <AnimatePresence initial={false} mode="popLayout">
          {items.map((item) => (
            <motion.div
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -4 }}
              initial={{ opacity: 0, y: 4 }}
              key={item.id}
              layout="position"
              transition={{ duration: 0.2, ease: PANEL_EASE }}
            >
              <FaqProRow
                isOpen={openId === item.id}
                item={item}
                onToggle={() => toggleItem(item.id)}
                panelId={`${listId}-${item.id}-panel`}
                triggerId={`${listId}-${item.id}-trigger`}
              />
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </>
  );
}

FaqPro.displayName = 'FaqPro';

export default FaqPro;
