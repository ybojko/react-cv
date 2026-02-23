export default function Skills({ skills, theme }) {
  return (
    <section>
      <h2
        className={`mb-4 text-2xl font-bold flex items-center gap-2 after:h-px after:flex-1 after:bg-gradient-to-r after:from-indigo-500/50 after:to-transparent ${
          theme === 'dark' ? 'text-white' : 'text-slate-900'
        }`}
      >
        <span className="text-indigo-400">⚡</span> Skills
      </h2>
      <ul className="flex flex-wrap gap-2">
        {skills.map((skill, index) => (
          <li
            key={index}
            className="rounded-lg border border-slate-600/50 bg-slate-700/40 px-3 py-1.5 text-sm text-slate-200 transition-colors hover:border-indigo-500/50 hover:bg-indigo-500/10"
          >
            {skill}
          </li>
        ))}
      </ul>
    </section>
  );
}