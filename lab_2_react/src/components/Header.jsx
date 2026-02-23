export default function Header({ name, position, city, socials }) {
  return (
    <header className="relative px-8 py-10 bg-gradient-to-r from-indigo-600/20 via-violet-600/10 to-transparent border-b border-slate-700/50">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-indigo-500/5 via-transparent to-transparent" />
      <div className="relative">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-white drop-shadow-sm">
          {name}
        </h1>
        <p className="mt-1 text-xl text-indigo-300 font-medium">
          {position}
        </p>
        <p className="mt-3 flex items-center gap-2 text-slate-400">
          <span className="inline-flex items-center rounded-full bg-slate-700/80 px-2.5 py-0.5 text-xs font-medium text-slate-300">
            📍 {city}
          </span>
        </p>
        <nav className="mt-6">
          <ul className="flex flex-wrap gap-3">
            {socials.map((link, index) => (
              <li key={index}>
                <a
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center rounded-lg bg-indigo-600/80 px-4 py-2 text-sm font-medium text-white transition-all duration-200 hover:bg-indigo-500 hover:scale-105 hover:shadow-lg hover:shadow-indigo-500/25 focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:ring-offset-2 focus:ring-offset-slate-800"
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}