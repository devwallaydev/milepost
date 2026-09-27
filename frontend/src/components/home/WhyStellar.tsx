import React from 'react';
import './WhyStellar.css';

type StellarFeature = {
  t: string;
  d: string;
  tech: string;
};

const STELLAR_FEATURES: StellarFeature[] = [
  { t: 'Cash out locally', d: 'Anchors turn stablecoins into local money through bank and mobile-money off-ramps. Without them, the rest is theatre.', tech: 'SEP-24 · SEP-31' },
  { t: 'No gas to buy', d: 'The protocol is designed for sponsored transaction fees, meaning recipients won\'t need to hold XLM when implemented.', tech: 'Fee-bump / sponsored transactions' },
  { t: 'Sign in with a passkey', d: 'Built to support smart wallets, meaning Face ID or a fingerprint can eventually replace seed phrases.', tech: 'Passkey smart wallets (secp256r1)' },
  { t: 'Spending rules in the wallet', d: 'A policy can limit grant money to one asset, verified payees and a cap.', tech: 'policy_spend signer' },
];

export const WhyStellar: React.FC = () => {
  return (
    <section aria-labelledby="h-stellar" className="why-stellar-section">
      <div className="why-stellar-header">
        <span className="eyebrow" style={{ color: 'var(--accent-strong)' }}>Why Stellar</span>
        <h2 id="h-stellar">Built for people who have never used crypto.</h2>
      </div>
      <div className="stellar-grid">
        {STELLAR_FEATURES.map((s, i) => (
          <div key={i} className="stellar-card">
            <span className="stellar-title">{s.t}</span>
            <span className="stellar-desc">{s.d}</span>
            <span className="stellar-tech">{s.tech}</span>
          </div>
        ))}
      </div>
    </section>
  );
};
