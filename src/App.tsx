import { useState } from 'react';
import { Github, Linkedin, Mail, Bike, Globe, ExternalLink } from 'lucide-react';
// Define the type for the language keys
type LanguageKeys = 'fr' | 'en';

interface Translations {
  fr: {
    title: string;
    subtitle: string;
    whoAmI: string;
    aboutMe: string;
    contact: string;
    name: string;
    email: string;
    message: string;
    send: string;
    projects: string;
    experience: string;
    additionalProjects: string;
    viewProject: string;
    fixieRunTitle: string;
    fixieRunDesc: string;
    playground: string;
    landing: string;
    ethos: string;
  };
  en: {
    title: string;
    subtitle: string;
    whoAmI: string;
    aboutMe: string;
    contact: string;
    name: string;
    email: string;
    message: string;
    send: string;
    projects: string;
    experience: string;
    additionalProjects: string;
    viewProject: string;
    fixieRunTitle: string;
    fixieRunDesc: string;
    playground: string;
    landing: string;
    ethos: string;
  };
}

function App() {
  const [language, setLanguage] = useState<LanguageKeys>('fr');

  const translations: Translations = {
    fr: {
      title: "Développeur Full Stack & Expert Blockchain",
      subtitle: "Spécialisé en Web3, Intégration IA et Optimisation des Processus",
      whoAmI: "Qui suis-je?",
      aboutMe: "Je suis Antony Lambinon, 37 ans, père de deux enfants, et passionné par les vélos Fixie. Ma passion pour les technologies émergentes et mon expérience dans le domaine me qualifient idéalement pour contribuer à des projets innovants et faire progresser une équipe vers ses objectifs. Je recherche des opportunités qui me permettront d'utiliser mes compétences en développement, ma compréhension de la blockchain et mon intérêt pour l'IA, tout en continuant à me former et à évoluer dans l'industrie technologique.",
      contact: "Me Contacter",
      name: "Nom",
      email: "Email",
      message: "Message",
      send: "Envoyer le Message",
      projects: "Projets",
      experience: "Expérience",
      additionalProjects: "Projets & Réalisations Supplémentaires",
      viewProject: "Voir le Projet",
      fixieRunTitle: "Fixie.Run - Plateforme Web3 de Vélos Fixie",
      fixieRunDesc: "Une plateforme innovante combinant la passion des vélos fixie avec la technologie blockchain et le Web3.",
      playground: "Terrain de Jeu",
      landing: "Page d'Accueil",
      ethos: "Ethos"
    },
    en: {
      title: "Full Stack Developer & Blockchain Expert",
      subtitle: "Specializing in Web3, AI Integration, and Process Optimization",
      whoAmI: "Who am I?",
      aboutMe: "I'm Antony Lambinon, 37 years old with two children, and I have a great passion for Fixie bikes. My passion for emerging technologies and my experience in the field make me ideally qualified to contribute to innovative projects and advance a team towards its goals. I'm looking for opportunities that will allow me to use my development skills, my understanding of blockchain and my interest in AI, while continuing to train and grow within the technology industry.",
      contact: "Contact Me",
      name: "Name",
      email: "Email",
      message: "Message",
      send: "Send Message",
      projects: "Projects",
      experience: "Experience",
      additionalProjects: "Additional Projects & Achievements",
      viewProject: "View Project",
      fixieRunTitle: "Fixie.Run - Web3 Fixie Bike Platform",
      fixieRunDesc: "An innovative platform combining fixie bike passion with blockchain technology and Web3.",
      playground: "Playground",
      landing: "Landing Page",
      ethos: "Ethos"
    }
  };

  const t = translations[language];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800">
      {/* Language Selector */}
      <div className="fixed top-4 right-4 z-50">
        <button
          onClick={() => setLanguage(language === 'fr' ? 'en' : 'fr')}
          className="flex items-center gap-2 px-4 py-2 bg-gray-800 rounded-lg text-white hover:bg-gray-700 transition-colors"
        >
          <Globe className="w-4 h-4" />
          {language.toUpperCase()}
        </button>
      </div>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center text-white px-4 py-20">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-8 relative">
            <img
              src="https://media.licdn.com/dms/image/v2/D4E03AQEXStDkZud5Og/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1711100515160?e=1746057600&v=beta&t=JLvXsl1AMBMRbuscZCAneJ-0YAUxoVUmbgcSkuhY9Gw"
              alt="Antony Lambinon"
              className="w-48 h-48 rounded-full mx-auto object-cover border-4 border-blue-500 shadow-xl"
            />
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
            Antony Lambinon
          </h1>
          <h2 className="text-2xl md:text-3xl mb-8 text-gray-300">
            {t.title}
          </h2>
          <p className="text-xl text-gray-400 mb-8">
            {t.subtitle}
          </p>
          <div className="flex justify-center gap-6">
            <a href="https://github.com/tehen1" className="text-gray-400 hover:text-white transition-colors">
              <Github className="w-8 h-8" />
            </a>
            <a href="https://linkedin.com/in/antony-lambi" className="text-gray-400 hover:text-white transition-colors">
              <Linkedin className="w-8 h-8" />
            </a>
            <a href="mailto:contact@example.com" className="text-gray-400 hover:text-white transition-colors">
              <Mail className="w-8 h-8" />
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 px-4 bg-gray-900/50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-white mb-12">{t.whoAmI}</h2>
          <p className="text-xl text-gray-300 leading-relaxed">
            {t.aboutMe}
          </p>
        </div>
      </section>

      {/* Featured Project - Fixie.Run */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-white mb-12">{t.fixieRunTitle}</h2>
          <div className="bg-gray-800 rounded-xl overflow-hidden shadow-2xl">
            <div className="relative h-64 bg-gradient-to-r from-blue-600 to-purple-600">
              <div className="absolute inset-0 flex items-center justify-center">
                <Bike className="w-24 h-24 text-white opacity-50" />
              </div>
            </div>
            <div className="p-8">
              <p className="text-gray-300 text-lg mb-6">{t.fixieRunDesc}</p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <a
                  href="https://pedal-playground.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                >
                  <ExternalLink className="w-4 h-4" />
                  {t.playground}
                </a>
                <a
                  href="https://fixierun-ethos.lovable.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors"
                >
                  <ExternalLink className="w-4 h-4" />
                  {t.ethos}
                </a>
                <a
                  href="https://fixierun-landing-tehens-projects.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors"
                >
                  <ExternalLink className="w-4 h-4" />
                  {t.landing}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-20 px-4 bg-gray-900/50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-white mb-12">{t.experience}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <ExperienceCard
              title="Investment Management Web Application"
              description="Web application for investment management, used by over 1000 people."
              tech={['Node.js', 'React', 'Next.js', 'JS']}
            />
            <ExperienceCard
              title="Decentralized Investment Portfolio"
              description="Decentralized investment wallet with a trading volume of 500k"
              tech={['Blockchain Ethereum', 'Solidity']}
            />
          </div>
        </div>
      </section>

      {/* Additional Projects Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-white mb-12">{t.additionalProjects}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <ProjectCard
              title="Blockchain Integration"
              description="Implemented secure and scalable blockchain solutions for decentralized applications, enhancing transparency and trust."
            />
            <ProjectCard
              title="AI-Powered Analytics"
              description="Developed AI-driven analytics tools to provide actionable insights, optimizing business decision-making processes."
            />
            <ProjectCard
              title="Open Source Contributions"
              description="Contributed to various open-source projects, fostering community collaboration and advancing technological innovation."
            />
            <ProjectCard
              title="AI Chatbots"
              description="Creation of AI Chatbots for various tasks. Notable projects include poe.com/tehen (200+ users) and poe.com/aiftwdotnet"
            />
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-4 bg-gray-900/50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-white mb-12">{t.contact}</h2>
          <form className="max-w-lg mx-auto space-y-6">
            <div>
              <label className="block text-gray-300 mb-2">{t.name}</label>
              <input
                type="text"
                className="w-full px-4 py-2 bg-gray-800 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block text-gray-300 mb-2">{t.email}</label>
              <input
                type="email"
                className="w-full px-4 py-2 bg-gray-800 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block text-gray-300 mb-2">{t.message}</label>
              <textarea
                rows={5}
                className="w-full px-4 py-2 bg-gray-800 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <button
              type="submit"
              className="w-full py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              {t.send}
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}

function ExperienceCard({ title, description, tech }: { title: string; description: string; tech: string[] }) {
  return (
    <div className="bg-gray-800 rounded-xl p-6 hover:bg-gray-700 transition-colors">
      <h3 className="text-xl font-bold text-white mb-4">{title}</h3>
      <p className="text-gray-400 mb-4">{description}</p>
      <div className="flex flex-wrap gap-2">
        {tech.map((item, index) => (
          <span
            key={index}
            className="px-3 py-1 text-sm bg-gray-900 text-blue-400 rounded-full"
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}

function ProjectCard({ title, description }: { title: string; description: string }) {
  return (
    <div className="bg-gray-800 rounded-xl p-6 hover:bg-gray-700 transition-colors">
      <h3 className="text-xl font-bold text-white mb-4">{title}</h3>
      <p className="text-gray-400">{description}</p>
    </div>
  );
}

export default App;
