import LegalDocument from '../components/LegalDocument';

const sections = [
  {
    id: 'information-we-collect',
    title: 'Information We Collect',
    body: [
      'AI Media collects information you choose to provide when you contact us, book a call, subscribe to updates, request a proposal, or work with us as a client.',
      'This may include your name, email address, phone number, company name, website, project details, marketing goals, billing details, and messages you send to our team.',
    ],
    items: [
      'Contact and business information submitted through forms or calls.',
      'Project materials such as brand assets, website access, content drafts, analytics exports, and campaign notes.',
      'Basic website usage information such as pages visited, device type, browser type, referral source, and approximate location.',
    ],
  },
  {
    id: 'how-we-use-information',
    title: 'How We Use Information',
    body: [
      'We use collected information to respond to enquiries, prepare proposals, deliver services, manage client communication, improve website performance, and measure marketing results.',
      'We may also use your contact details to send relevant service updates or marketing communications. You can ask us to stop sending non-essential messages at any time.',
    ],
  },
  {
    id: 'cookies-and-analytics',
    title: 'Cookies and Analytics',
    body: [
      'Our website may use cookies, pixels, analytics tools, and similar technologies to understand how visitors use the site and how our marketing performs.',
      'These tools help us see aggregate trends, improve page experience, and understand which content or campaigns are useful. You can manage cookies through your browser settings.',
    ],
  },
  {
    id: 'sharing-information',
    title: 'How We Share Information',
    body: [
      'We do not sell personal information. We may share information with trusted service providers only when needed to operate the website, communicate with you, process payments, deliver marketing services, host files, or analyze performance.',
      'We may also disclose information when required by law, to protect our rights, or to prevent fraud, abuse, or security issues.',
    ],
  },
  {
    id: 'data-security',
    title: 'Data Security and Retention',
    body: [
      'We use reasonable administrative, technical, and organizational measures to protect information from unauthorized access, misuse, loss, or disclosure.',
      'We keep information only as long as needed for business, legal, accounting, reporting, or service delivery purposes, unless a longer period is required or allowed by law.',
    ],
  },
  {
    id: 'your-choices',
    title: 'Your Choices',
    body: [
      'You may request access, correction, deletion, or restriction of personal information that we hold about you, subject to legal and operational limits.',
      'You may also unsubscribe from marketing emails or ask us not to contact you for promotional purposes.',
    ],
  },
  {
    id: 'third-party-links',
    title: 'Third-Party Links',
    body: [
      'This website may link to third-party websites, tools, platforms, or social media pages. Their privacy practices are controlled by those third parties, not AI Media.',
      'We recommend reviewing the privacy policies of any external services you use.',
    ],
  },
  {
    id: 'changes',
    title: 'Changes to This Policy',
    body: [
      'We may update this Privacy Policy from time to time. The latest version will be posted on this page with the updated date shown above.',
    ],
  },
];

export const metadata = {
  title: 'Privacy Policy - AI Media',
  description:
    'Learn how AI Media collects, uses, protects, and shares information through its website and client services.',
};

export default function PrivacyPolicyPage() {
  return (
    <LegalDocument
      badge="Privacy Policy"
      title="Privacy Policy"
      intro="This policy explains how AI Media handles information collected through our website, enquiries, subscriptions, proposals, and client work."
      lastUpdated="May 30, 2026"
      highlights={[
        { label: 'Data selling', value: 'We do not sell personal information.' },
        { label: 'Primary use', value: 'Service delivery and communication.' },
        { label: 'Control', value: 'You can request updates or deletion.' },
      ]}
      sections={sections}
    />
  );
}
