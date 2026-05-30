import LegalDocument from '../components/LegalDocument';

const sections = [
  {
    id: 'acceptance',
    title: 'Acceptance of Terms',
    body: [
      'These Terms and Conditions govern your use of the AI Media website and any services, proposals, retainers, campaigns, deliverables, or consulting work provided by AI Media.',
      'By using this website, contacting us, approving a proposal, or purchasing services, you agree to these terms unless a signed agreement says otherwise.',
    ],
  },
  {
    id: 'services',
    title: 'Services',
    body: [
      'AI Media provides website design, development, SEO, content, branding, advertising management, analytics, automation, and related digital marketing services for AV, smart home, security, commercial AV, and low-voltage businesses.',
      'Specific deliverables, timelines, fees, ad spend limits, review cycles, and support levels are defined in the applicable proposal, invoice, statement of work, or written agreement.',
    ],
  },
  {
    id: 'client-responsibilities',
    title: 'Client Responsibilities',
    body: [
      'Clients are responsible for providing accurate information, timely feedback, approvals, access credentials, brand assets, legal disclosures, and any industry-specific claims or compliance requirements needed for the project.',
      'Delays in feedback, content, access, or approvals may affect timelines, launch dates, campaign performance, and delivery schedules.',
    ],
    items: [
      'You must have the right to provide any content, images, data, marks, or access credentials shared with AI Media.',
      'You are responsible for reviewing and approving final public-facing claims, offers, pricing, guarantees, and compliance language.',
      'You must not use our website or services for unlawful, deceptive, abusive, or infringing activity.',
    ],
  },
  {
    id: 'payments',
    title: 'Pricing and Payments',
    body: [
      'Fees are due according to the payment schedule in the relevant proposal, invoice, or agreement. Monthly retainers, setup fees, and project fees may be billed in advance unless stated otherwise.',
      'Advertising spend, software fees, domain fees, hosting, stock assets, third-party subscriptions, and platform costs are separate unless explicitly included in writing.',
    ],
  },
  {
    id: 'guarantees',
    title: 'Guarantees and Results',
    body: [
      'AI Media may offer service guarantees or promotional terms on specific plans. Any guarantee applies only as described in the relevant offer, proposal, or agreement.',
      'Marketing results can be affected by market conditions, sales follow-up, offer quality, competition, budget, tracking accuracy, client responsiveness, and platform changes. We do not guarantee specific revenue, rankings, leads, or sales unless expressly stated in a signed agreement.',
    ],
  },
  {
    id: 'intellectual-property',
    title: 'Intellectual Property',
    body: [
      'Unless otherwise agreed in writing, once all required payments are received, clients receive ownership of final custom deliverables created specifically for them, excluding AI Media tools, templates, frameworks, processes, source libraries, pre-existing materials, and third-party assets.',
      'AI Media may use general knowledge, methods, workflows, and reusable components developed during service delivery for other projects, provided we do not disclose confidential client information.',
    ],
  },
  {
    id: 'portfolio',
    title: 'Portfolio Use',
    body: [
      'Unless a written agreement restricts it, AI Media may reference completed work, client names, logos, screenshots, results, and general project descriptions in our portfolio, case studies, proposals, and marketing materials.',
      'Clients may request reasonable restrictions on portfolio use for confidential or sensitive work.',
    ],
  },
  {
    id: 'limitation',
    title: 'Limitation of Liability',
    body: [
      'To the fullest extent allowed by law, AI Media is not liable for indirect, incidental, special, consequential, punitive, or lost-profit damages arising from website use, service delays, platform changes, campaign performance, third-party tools, or business interruption.',
      'Our total liability for a claim related to services is limited to the amount paid to AI Media for the specific service giving rise to the claim, unless applicable law requires otherwise.',
    ],
  },
  {
    id: 'termination',
    title: 'Termination',
    body: [
      'Either party may end services according to the cancellation or termination terms in the relevant proposal, invoice, or agreement. Work may be paused or access may be restricted if payment is overdue or if these terms are violated.',
      'Upon termination, the client remains responsible for outstanding fees, approved expenses, and third-party costs already incurred.',
    ],
  },
  {
    id: 'changes',
    title: 'Changes to These Terms',
    body: [
      'We may update these Terms and Conditions from time to time. The latest version will be posted on this page with the updated date shown above.',
    ],
  },
];

export const metadata = {
  title: 'Terms and Conditions - AI Media',
  description:
    'Review the terms that govern use of the AI Media website and digital marketing services.',
};

export default function TermsAndConditionsPage() {
  return (
    <LegalDocument
      badge="Terms and Conditions"
      title="Terms and Conditions"
      intro="These terms explain how our website, proposals, retainers, deliverables, payments, and client responsibilities are handled."
      lastUpdated="May 30, 2026"
      highlights={[
        { label: 'Services', value: 'Website, SEO, content, ads, and growth systems.' },
        { label: 'Billing', value: 'Fees follow the approved proposal or invoice.' },
        { label: 'Ownership', value: 'Final custom work transfers after payment.' },
      ]}
      sections={sections}
    />
  );
}
