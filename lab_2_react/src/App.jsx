import { useEffect, useState } from 'react';
import Header from './components/Header';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Languages from './components/Languages';
import Reviews from './components/Reviews';
import ContactForm from './components/ContactForm';
import SystemInfoFooter from './components/SystemInfoFooter';

function App() {
  const [theme, setTheme] = useState(() => {
    if (typeof window === 'undefined') {
      return 'light';
    }

    try {
      const stored = window.localStorage.getItem('app-theme');
      if (stored === 'light' || stored === 'dark') {
        return stored;
      }
    } catch {
      // ignore read errors
    }

    const hour = new Date().getHours();
    return hour >= 7 && hour < 21 ? 'light' : 'dark';
  });

  useEffect(() => {
    document.body.setAttribute('data-theme', theme);
    try {
      window.localStorage.setItem('app-theme', theme);
    } catch {
      // ignore write errors
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));
  };

  const resumeData = {
    name: "Yurii Boiko",
    position: "DevOps engineer",
    city: "Lviv",
    socials: [
      { name: "LinkedIn", url: "https://www.linkedin.com/in/yurii-boiko-secure/" },
      { name: "GitHub", url: "https://github.com/ybojko" },
      { name: "Telegram", url: "https://t.me/yBojk0" }
    ],
    skills: [
      "Cloud (GCP, AWS)", "Infrastructure as a code", "Containerization(Docker)",
      "Git", "Windows, Linux", "Monitoring & Observability",
      "CI/CD(Jenkins, Gitlab CI, GitHub actions)", "Networking", "Scripting basics(python)"
    ],
    experience: [
      {
        company: "Insiders",
        role: "DevOps",
        period: "02.25 - Now",
        details: [
          "App deployment for production environments",
          "Automation of updates (building CI/CD pipelines)",
          "Transforming infrastructure into code (terraform)",
          "Troubleshooting issues with containers, images, EC2s etc"
        ]
      },
      {
        company: "Pet-Project",
        details: "Virtual machine management (manually and via Vagrant). IaC: Terraform, Ansible. Monitoring: Grafana, Prometheus. Project infrastructure: https://github.com/ybojko/registrar-2"
      },
      {
        company: "BEST Lviv",
        role: "Content Responsible",
        period: "05-11.25",
        details: [
          "Creating content for the BEST CTF 2025 cybersecurity competition.",
          "Designing, creating, supporting and customizing the infrastructure for the event on GCP.",
          "Managing a team of 5 people to achieve the best results."
        ]
      }
    ],
    languages: [
      { lang: "Ukrainian", level: "Native" },
      { lang: "English", level: "Intermediate (B1)" }
    ]
  };

  const shellClasses =
    'min-h-screen font-sans antialiased transition-colors duration-300';
  const backgroundClasses =
    theme === 'dark'
      ? 'bg-gradient-to-br from-slate-900 via-slate-800 to-indigo-900 text-slate-100'
      : 'bg-slate-100 text-slate-900';

  const cardClasses =
    theme === 'dark'
      ? 'bg-slate-800/60 backdrop-blur-xl rounded-2xl shadow-2xl shadow-indigo-950/50 border border-slate-700/50 overflow-hidden'
      : 'bg-white rounded-2xl shadow-xl border border-slate-200 overflow-hidden';

  return (
    <div className={`${shellClasses} ${backgroundClasses}`}>
      <div className="max-w-3xl mx-auto px-6 py-12 md:py-16">
        <div className={cardClasses}>
          <Header
            name={resumeData.name}
            position={resumeData.position}
            city={resumeData.city}
            socials={resumeData.socials}
            theme={theme}
            onToggleTheme={toggleTheme}
          />

          <main className="px-8 pb-8 space-y-8">
            <Skills skills={resumeData.skills} theme={theme} />
            <Experience items={resumeData.experience} theme={theme} />
            <Reviews theme={theme} />
            <Languages languages={resumeData.languages} theme={theme} />
            <ContactForm theme={theme} />
          </main>

          <SystemInfoFooter theme={theme} />
        </div>
      </div>
    </div>
  );
}

export default App;