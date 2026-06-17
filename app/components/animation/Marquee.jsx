'use client';

export default function Marquee({
  items,
  renderItem,
  className = '',
  trackClassName = '',
  groupClassName = '',
  itemClassName = '',
}) {
  const renderGroup = (suffix, hidden = false) => (
    <div className={`motion-marquee-group ${groupClassName}`} aria-hidden={hidden}>
      {items.map((item, index) => (
        <div
          key={`${item.label || item}-${suffix}-${index}`}
          className={`motion-marquee-item ${itemClassName}`}
        >
          {renderItem ? renderItem(item, index) : item.label || item}
        </div>
      ))}
    </div>
  );

  return (
    <div className={`motion-marquee ${className}`} data-motion-managed="true">
      <div className={`motion-marquee-track ${trackClassName}`}>
        {renderGroup('a')}
        {renderGroup('b', true)}
      </div>
    </div>
  );
}
