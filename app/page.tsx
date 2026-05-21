export default function Home() {
  const checkoutUrl = process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#";

  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9]">
      {/* Hero */}
      <section className="max-w-3xl mx-auto px-6 pt-24 pb-20 text-center">
        <span className="inline-block bg-[#161b22] border border-[#30363d] text-[#58a6ff] text-xs font-semibold px-3 py-1 rounded-full mb-6 uppercase tracking-widest">
          Developer Productivity
        </span>
        <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-5">
          Your calendar says you code.<br />
          <span className="text-[#58a6ff]">The data disagrees.</span>
        </h1>
        <p className="text-lg text-[#8b949e] max-w-xl mx-auto mb-8">
          DevTime privately tracks your actual coding vs meeting time and compares it against anonymous industry benchmarks — so you finally know where your hours go.
        </p>
        <a
          href={checkoutUrl}
          className="inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold px-8 py-3 rounded-lg text-base transition-colors"
        >
          Start Tracking — $19/mo
        </a>
        <p className="mt-4 text-sm text-[#6e7681]">No data leaves your device. Cancel anytime.</p>

        {/* Stats bar */}
        <div className="mt-16 grid grid-cols-3 gap-4 border border-[#30363d] rounded-xl bg-[#161b22] p-6">
          <div>
            <p className="text-2xl font-bold text-[#58a6ff]">2.4h</p>
            <p className="text-xs text-[#6e7681] mt-1">avg deep coding/day<br />industry benchmark</p>
          </div>
          <div className="border-x border-[#30363d]">
            <p className="text-2xl font-bold text-[#f78166]">47%</p>
            <p className="text-xs text-[#6e7681] mt-1">of dev time lost<br />to meetings & context switching</p>
          </div>
          <div>
            <p className="text-2xl font-bold text-[#3fb950]">3×</p>
            <p className="text-xs text-[#6e7681] mt-1">more output when<br />flow time is protected</p>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="max-w-md mx-auto px-6 pb-20">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Simple Pricing</h2>
        <div className="border border-[#58a6ff] rounded-xl bg-[#161b22] p-8 text-center">
          <p className="text-sm text-[#58a6ff] font-semibold uppercase tracking-widest mb-2">Pro</p>
          <p className="text-5xl font-bold text-white mb-1">$19</p>
          <p className="text-[#6e7681] text-sm mb-6">per month</p>
          <ul className="text-left space-y-3 mb-8 text-sm text-[#c9d1d9]">
            {[
              "Local-first encrypted time tracking",
              "Coding vs meeting breakdown",
              "Anonymous industry benchmarks",
              "Weekly productivity reports",
              "IDE integrations (VS Code, JetBrains)",
              "Unlimited history"
            ].map((f) => (
              <li key={f} className="flex items-center gap-2">
                <span className="text-[#3fb950] font-bold">✓</span> {f}
              </li>
            ))}
          </ul>
          <a
            href={checkoutUrl}
            className="block w-full bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold py-3 rounded-lg text-base transition-colors"
          >
            Get DevTime
          </a>
          <p className="mt-3 text-xs text-[#6e7681]">14-day money-back guarantee</p>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-2xl mx-auto px-6 pb-24">
        <h2 className="text-2xl font-bold text-white text-center mb-8">FAQ</h2>
        <div className="space-y-4">
          {[
            {
              q: "Is my data private?",
              a: "Yes. All time tracking data is stored locally on your device and encrypted at rest. Only anonymous aggregate statistics are ever sent to our servers to power the industry benchmarks."
            },
            {
              q: "How does it track my coding time?",
              a: "DevTime integrates with VS Code and JetBrains IDEs via a lightweight plugin that detects active coding sessions. It also reads your calendar to identify meeting blocks — no manual input needed."
            },
            {
              q: "What are the industry benchmarks?",
              a: "Benchmarks are computed from anonymized, aggregated data across all DevTime users. You see how your coding-to-meeting ratio, deep work blocks, and context switches compare to peers in similar roles."
            }
          ].map(({ q, a }) => (
            <div key={q} className="border border-[#30363d] rounded-lg bg-[#161b22] p-5">
              <p className="font-semibold text-white mb-2">{q}</p>
              <p className="text-sm text-[#8b949e] leading-relaxed">{a}</p>
            </div>
          ))}
        </div>
      </section>

      <footer className="border-t border-[#21262d] text-center py-6 text-xs text-[#6e7681]">
        © {new Date().getFullYear()} DevTime. Built for developers who value their time.
      </footer>
    </main>
  );
}
