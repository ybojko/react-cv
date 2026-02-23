function ExperienceItem({ company, role, period, details }) {
  return (
    <article className="group rounded-xl border border-slate-700/50 bg-slate-800/30 p-5 transition-all duration-200 hover:border-indigo-500/30 hover:bg-slate-800/50">
      <h3 className="text-lg font-bold text-white">{company}</h3>
      {role && (
        <p className="mt-1 text-sm text-indigo-300 font-medium">
          {role} <span className="text-slate-500">|</span> {period}
        </p>
      )}
      {Array.isArray(details) ? (
        <ul className="mt-3 space-y-2">
          {details.map((item, index) => (
            <li
              key={index}
              className="flex items-start gap-2 text-slate-300 text-sm before:mt-1.5 before:shrink-0 before:size-1.5 before:rounded-full before:bg-indigo-400"
            >
              <span>{item}</span>
            </li>
          ))}
        </ul>
      ) : (
        <p className="mt-3 text-slate-300 text-sm leading-relaxed">{details}</p>
      )}
    </article>
  );
}

export default function Experience({ items }) {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-white flex items-center gap-2 after:h-px after:flex-1 after:bg-gradient-to-r after:from-indigo-500/50 after:to-transparent">
        <span className="text-indigo-400">💼</span> Experience
      </h2>
      <div className="space-y-4">
        {items.map((job, index) => (
          <ExperienceItem key={index} {...job} />
        ))}
      </div>
    </section>
  );
}