import Header from './components/Header';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Languages from './components/Languages';

function App() {
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

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-indigo-900 text-slate-100 font-sans antialiased">
      <div className="max-w-3xl mx-auto px-6 py-12 md:py-16">
        <div className="bg-slate-800/60 backdrop-blur-xl rounded-2xl shadow-2xl shadow-indigo-950/50 border border-slate-700/50 overflow-hidden">
          <Header 
            name={resumeData.name} 
            position={resumeData.position} 
            city={resumeData.city} 
            socials={resumeData.socials} 
          />
          
          <main className="px-8 pb-8 space-y-8">
            <Skills skills={resumeData.skills} />
            <Experience items={resumeData.experience} />
            <Languages languages={resumeData.languages} />
          </main>

          <footer className="px-8 py-4 border-t border-slate-700/50 bg-slate-900/40">
            <p className="text-sm text-slate-400 text-center">Last updated: 02.2026</p>
          </footer>
        </div>
      </div>
    </div>
  );
}

export default App;