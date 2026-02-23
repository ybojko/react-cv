export default function Languages({ languages }) {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-white flex items-center gap-2 after:h-px after:flex-1 after:bg-gradient-to-r after:from-indigo-500/50 after:to-transparent">
        <span className="text-indigo-400">🌐</span> Languages
      </h2>
      <dl className="flex flex-wrap gap-3">
        {languages.map((item, index) => (
          <div
            key={index}
            className="flex items-center gap-3 rounded-xl border border-slate-700/50 bg-slate-800/30 px-4 py-3"
          >
            <dt className="font-semibold text-white">{item.lang}</dt>
            <dd className="rounded-full bg-indigo-500/20 px-3 py-0.5 text-sm font-medium text-indigo-300">
              {item.level}
            </dd>
          </div>
        ))}
      </dl>
    </section>
  );
}