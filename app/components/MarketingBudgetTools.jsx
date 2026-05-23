'use client';

import { useMemo, useState } from 'react';

const modes = {
  stable: {
    label: 'referral-heavy / stable',
    totalLow: 0.04,
    totalHigh: 0.06,
    adLow: 0.01,
    adHigh: 0.02,
  },
  prudent: {
    label: 'prudent growth',
    totalLow: 0.06,
    totalHigh: 0.1,
    adLow: 0.025,
    adHigh: 0.05,
  },
  aggressive: {
    label: 'aggressive expansion',
    totalLow: 0.1,
    totalHigh: 0.15,
    adLow: 0.05,
    adHigh: 0.08,
  },
};

const readinessItems = [
  'We can track lead source from first touch to closed deal.',
  'We know close rate by lead source or campaign.',
  'Our website clearly explains services, markets, locations, and ideal projects.',
  'We have project photos, case studies, testimonials, or reviews that prove quality.',
  'We have dedicated landing pages for priority offers or verticals.',
  'Sales follow-up is fast, documented, and assigned to an owner.',
  'We know approximate gross profit per project or customer type.',
  'We review performance monthly and make budget decisions from data.',
];

const allocationRows = [
  ['Strategy, positioning, and campaign planning', '10% to 15%', 0.1, 0.15],
  ['Website, landing pages, tracking, and CRM', '15% to 25%', 0.15, 0.25],
  ['SEO, GEO, AEO, and content', '20% to 30%', 0.2, 0.3],
  ['Paid media and sponsorships', '30% to 45%', 0.3, 0.45],
  ['Creative, proof, case studies, and sales assets', '10% to 20%', 0.1, 0.2],
  ['Reporting, optimization, and management', '5% to 10%', 0.05, 0.1],
];

function money(value) {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    maximumFractionDigits: 0,
  }).format(value || 0);
}

function rangeText(low, high) {
  return `${money(low)} - ${money(high)}`;
}

function positionText(currentAnnual, low, high, blankText) {
  if (!currentAnnual || currentAnnual <= 0) return blankText;
  if (currentAnnual < low) return `${money(low - currentAnnual)} below range`;
  if (currentAnnual > high) return `${money(currentAnnual - high)} above range`;
  return 'Within recommended range';
}

function percentRange(low, high) {
  return `${Math.round(low * 1000) / 10}% - ${Math.round(high * 1000) / 10}%`;
}

export function MarketingBudgetCalculator() {
  const [revenue, setRevenue] = useState('');
  const [modeKey, setModeKey] = useState('prudent');
  const [currentMarketing, setCurrentMarketing] = useState('0');
  const [currentAds, setCurrentAds] = useState('0');
  const [grossProfit, setGrossProfit] = useState('');
  const [closeRate, setCloseRate] = useState('0.25');
  const [copyStatus, setCopyStatus] = useState('');

  const result = useMemo(() => {
    const annualRevenue = Number(revenue) || 0;
    const mode = modes[modeKey];

    if (annualRevenue <= 0) {
      return null;
    }

    const totalLow = annualRevenue * mode.totalLow;
    const totalHigh = annualRevenue * mode.totalHigh;
    const adLow = annualRevenue * mode.adLow;
    const adHigh = annualRevenue * mode.adHigh;
    const midpoint = (totalLow + totalHigh) / 2;
    const projectsNeeded =
      Number(grossProfit) > 0 ? Math.ceil(midpoint / Number(grossProfit)) : 0;
    const opportunitiesNeeded =
      Number(closeRate) > 0 && projectsNeeded > 0
        ? Math.ceil(projectsNeeded / Number(closeRate))
        : 0;

    return {
      annualRevenue,
      mode,
      totalLow,
      totalHigh,
      adLow,
      adHigh,
      midpoint,
      foundationLow: annualRevenue * 0.01,
      foundationHigh: annualRevenue * 0.025,
      projectsNeeded,
      opportunitiesNeeded,
    };
  }, [closeRate, grossProfit, modeKey, revenue]);

  const placeholder = 'Enter annual revenue';
  const summary =
    result &&
    `For a systems integrator with ${money(result.annualRevenue)} in annual revenue in ${result.mode.label} mode, a prudent total marketing budget is ${rangeText(result.totalLow, result.totalHigh)} per year, with paid advertising around ${rangeText(result.adLow, result.adHigh)} per year once tracking, website conversion, CRM, proof, and sales follow-up are ready.`;

  async function copySummary() {
    const text = summary || 'Enter annual revenue to generate a marketing budget summary.';
    try {
      await navigator.clipboard.writeText(text);
      setCopyStatus('Copied.');
    } catch {
      setCopyStatus(text);
    }
  }

  return (
    <section className="blog-tool" id="calculator">
      <div>
        <span className="blog-tool-kicker">Interactive calculator</span>
        <h2>Estimate your integrator marketing budget</h2>
        <p>
          Enter annual revenue and choose your growth posture. The calculator
          separates total marketing investment from paid advertising and shows
          whether your current spend is under, within, or above the recommended
          range.
        </p>
      </div>

      <div className="blog-form-grid">
        <label>
          Annual revenue
          <input
            type="number"
            min="0"
            step="50000"
            placeholder="Enter annual revenue"
            value={revenue}
            onChange={(event) => setRevenue(event.target.value)}
          />
        </label>
        <label>
          Growth posture
          <select value={modeKey} onChange={(event) => setModeKey(event.target.value)}>
            <option value="stable">Referral-heavy / stable</option>
            <option value="prudent">Prudent growth</option>
            <option value="aggressive">Aggressive expansion</option>
          </select>
        </label>
        <label>
          Current total marketing spend per month
          <input
            type="number"
            min="0"
            step="500"
            value={currentMarketing}
            onChange={(event) => setCurrentMarketing(event.target.value)}
          />
        </label>
        <label>
          Current paid ad spend per month
          <input
            type="number"
            min="0"
            step="500"
            value={currentAds}
            onChange={(event) => setCurrentAds(event.target.value)}
          />
        </label>
        <label>
          Average gross profit per won project
          <input
            type="number"
            min="0"
            step="1000"
            placeholder="Enter gross profit"
            value={grossProfit}
            onChange={(event) => setGrossProfit(event.target.value)}
          />
        </label>
        <label>
          Close rate on qualified opportunities
          <select value={closeRate} onChange={(event) => setCloseRate(event.target.value)}>
            <option value="0.15">15%</option>
            <option value="0.20">20%</option>
            <option value="0.25">25%</option>
            <option value="0.30">30%</option>
            <option value="0.40">40%</option>
            <option value="0.50">50%</option>
          </select>
        </label>
      </div>

      <div className="blog-result-grid">
        <ResultCard label="Total annual marketing range" value={result ? rangeText(result.totalLow, result.totalHigh) : placeholder} />
        <ResultCard label="Total monthly marketing range" value={result ? rangeText(result.totalLow / 12, result.totalHigh / 12) : placeholder} />
        <ResultCard label="Paid ad spend range" value={result ? rangeText(result.adLow, result.adHigh) : placeholder} />
        <ResultCard label="Monthly paid ad range" value={result ? rangeText(result.adLow / 12, result.adHigh / 12) : placeholder} />
        <ResultCard
          label="Current total marketing position"
          value={
            result
              ? positionText(Number(currentMarketing) * 12, result.totalLow, result.totalHigh, 'Enter current spend')
              : 'Enter current spend'
          }
        />
        <ResultCard
          label="Current paid ad position"
          value={
            result
              ? positionText(Number(currentAds) * 12, result.adLow, result.adHigh, 'Enter current ad spend')
              : 'Enter current ad spend'
          }
        />
        <ResultCard label="Foundation reserve to consider" value={result ? rangeText(result.foundationLow, result.foundationHigh) : placeholder} />
        <ResultCard label="Planning midpoint" value={result ? money(result.midpoint) : placeholder} />
        <ResultCard
          label="Break-even check"
          value={
            result && result.projectsNeeded > 0
              ? `${result.projectsNeeded} won projects / ${result.opportunitiesNeeded} qualified opps`
              : 'Enter revenue and gross profit'
          }
        />
      </div>

      <div className="blog-signal">
        {result
          ? `For an integrator with ${money(result.annualRevenue)} in annual revenue in ${result.mode.label} mode, the recommended total marketing investment is ${rangeText(result.totalLow, result.totalHigh)} per year (${percentRange(result.mode.totalLow, result.mode.totalHigh)} of revenue). The paid advertising portion is approximately ${rangeText(result.adLow, result.adHigh)} per year.`
          : 'Enter annual revenue to calculate a recommended marketing and advertising range for your integration company.'}
      </div>

      <button className="blog-button" type="button" onClick={copySummary}>
        Copy budget summary
      </button>
      {copyStatus && <span className="copy-status">{copyStatus}</span>}

      <h3>A practical allocation model based on your revenue</h3>
      <div className="blog-table-wrap">
        <table>
          <thead>
            <tr>
              <th>Category</th>
              <th>Typical share</th>
              <th>Estimated annual dollars</th>
            </tr>
          </thead>
          <tbody>
            {allocationRows.map(([category, share, low, high]) => (
              <tr key={category}>
                <td>{category}</td>
                <td>{share}</td>
                <td>{result ? rangeText(result.midpoint * low, result.midpoint * high) : placeholder}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}

function ResultCard({ label, value }) {
  return (
    <div className="blog-result-card">
      <span>{label}</span>
      <strong>{value}</strong>
    </div>
  );
}

export function AdReadinessScorecard() {
  const [checked, setChecked] = useState([]);

  const score = checked.length;
  let message = 'Build the foundation before scaling paid advertising.';
  if (score >= 4 && score <= 6) {
    message = 'You have a usable foundation. Increase ads gradually while fixing the remaining gaps.';
  }
  if (score >= 7) {
    message = 'You are close to scale-ready. Paid media can be expanded with monthly performance review.';
  }

  function toggleItem(item) {
    setChecked((current) =>
      current.includes(item)
        ? current.filter((value) => value !== item)
        : [...current, item],
    );
  }

  return (
    <section className="blog-tool" id="scorecard">
      <span className="blog-tool-kicker">Ad readiness</span>
      <h2>Before increasing ads, check ad-readiness</h2>
      <p>
        A larger ad budget is only prudent when the company can convert and
        measure the traffic it already has.
      </p>

      <div className="readiness-grid">
        {readinessItems.map((item) => (
          <label className="readiness-check" key={item}>
            <input
              type="checkbox"
              checked={checked.includes(item)}
              onChange={() => toggleItem(item)}
            />
            <span>{item}</span>
          </label>
        ))}
      </div>

      <div className="blog-signal">
        <strong>{score}/8 ready.</strong> {message}
      </div>
    </section>
  );
}
