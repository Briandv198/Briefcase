import Projects from '../../components/projects/Projects';

export interface ProjectProps {
  title: string;
  description: string;
  repoLink: string;
  repoName: string;
  demoLink: string;
  demoName: string;
  technologies: string[];
  imageSrc?: string;
}

const projectData: ProjectProps[] = [
  {
    title: 'Rick and Morty',
    description: 'En este proyecto ocupe react para conectarme a la API de Rich and Morty y obtener la información de los personajes.',
    repoLink: 'https://github.com/Briandv198/rick-morty',
    repoName: 'rick-morty',
    demoLink: 'https://rick-and-morty-briandv198.netlify.app/',
    demoName: 'Rick and Morty página',
    technologies: ['React', 'JavaScript', 'CSS', 'Webpack', 'Node', 'Netlify'],
    imageSrc: 'https://cdn.discordapp.com/attachments/1217316505147015179/1217367384516595803/RyM.png?ex=6603c4ba&is=65f14fba&hm=e27e09286d61ddc0243f23db5ed95a80945349377342a1ff7ece786ce71ba4c4&',
  },
  {
    title: 'Varcha Transportes',
    description: 'Para este cliente desarrolle una Landing Page para su empresa de transporte, siendo mobile-first el diseño.',
    repoLink: '',
    repoName: '',
    demoLink: 'https://varcha-transportes.com/',
    demoName: 'Varcha Transportes',
    technologies: ['Astro', 'HTML', 'CSS', 'Node', 'Netlify'],
    imageSrc: 'https://cdn.discordapp.com/attachments/1217316505147015179/1217376288076070963/Varcha.png?ex=6603cd04&is=65f15804&hm=78cd1a18589b821d6f091474ab7c1c3d0341204bc9182d025f2a44a543c839c0&',
  },
];

function App() {
  return (
    <>
      {/* Hero */}
      <section className="hero-container max-w-7xl">
        <div className="flex flex-col gap-10 items-center">
          <h1 className="showXElements">Hola a todos!</h1>
          <p className="font-light showXElements">
            Soy un desarrollador Fullstack con especialización en el <b>frontend</b>, enfocado en el diseño (UI/UX) y desarrollo de interfaces web. Principalmente busco desarrollar aplicaciones{' '}
            <b>mantenibles</b>, <b>accesibles</b> y <b>fáciles de manejar</b> por el usuario. Tengo experiencia en tecnologías como <b>React</b>, <b>Next.js</b>, <b>Astro</b>, <b>Tailwind CSS</b>,{' '}
            <b>Bootstrap</b>, <b>Figma</b>, entre otras.
          </p>
          <a
            className="w-2/3 min-w-max no-underline font-medium text-2xl text-light-on-tertiary-container dark:text-dark-on-tertiary-container py-2 px-12 bg-light-tertiary-container dark:bg-dark-tertiary-container rounded-full shadow-sm shadow-light-shadow dark:shadow-dark-shadow hover:cursor-pointer hover:scale-105 transition-all ease-in-out"
            href="https://www.linkedin.com/in/briandv198"
          >
            Contacto
          </a>
        </div>
        <img loading="lazy" className="w-full md:w-1/2 max-w-96 showXElements" src="/base2.png" alt="Avatar" />
      </section>

      {/* Stack de Tecnologías */}
      <section className="w-full flex justify-center bg-light-secondary-container dark:bg-dark-secondary-container text-light-on-secondary-container dark:text-dark-on-secondary-container">
        <div className="w-full max-w-7xl p-8 text-center flex flex-col gap-12">
          <h3 className="font-light showXElements showXElements">Stack de tecnologías</h3>
          <div className="flex flex-wrap justify-around items-center gap-10">
            <img
              loading="lazy"
              className="stack-image"
              src="https://cdn.discordapp.com/attachments/1217316505147015179/1217371805640167424/icons8-react-a-javascript-library-for-building-user-interfaces-96.png?ex=6603c8d8&is=65f153d8&hm=5009ad9ec2b665df7ae3ebaa8267a46da32e108b57efa340d305215fede8425c&"
              alt="ReactJs"
            />
            <img
              loading="lazy"
              className="stack-image"
              src="https://cdn.discordapp.com/attachments/1217316505147015179/1217372018459017296/next_js_logo_icon_145038_1.png?ex=6603c90a&is=65f1540a&hm=c15ee9c5d2d059ebf2ef66ff24290c095816b096f60ff310f060f0d3a71e3767&"
              alt="NextJs"
            />
            <img
              loading="lazy"
              className="stack-image"
              src="https://cdn.discordapp.com/attachments/1217316505147015179/1217371400424390748/icons8-tailwind-css-96.png?ex=6603c877&is=65f15377&hm=3587d2f831e1bdb1cdf5022f8512df93dcd14037fa72c71673bbf072352fc701&"
              alt="Tailwind CSS"
            />
            <img
              loading="lazy"
              className="stack-image"
              src="https://cdn.discordapp.com/attachments/1217316505147015179/1217371631480213534/icons8-bootstrap-96.png?ex=6603c8ae&is=65f153ae&hm=c287a305cc4d92b956cf45f546d4396017cd97e6e234a2f8d52f2f41d86ff6a2&"
              alt="Bootstrap"
            />
            <img
              loading="lazy"
              className="stack-image"
              src="https://cdn.discordapp.com/attachments/1217316505147015179/1217371645216423946/icons8-figma-96.png?ex=6603c8b1&is=65f153b1&hm=4b8adc57dbe5acd8307362813fc4213aa1131557b7fb574d33f21e5e7380e051&"
              alt="Figma"
            />
            <img
              loading="lazy"
              className="stack-image"
              src="https://cdn.discordapp.com/attachments/1217316505147015179/1217371655467175936/icons8-adobe-96.png?ex=6603c8b4&is=65f153b4&hm=59163a4331f94eb0731bbcf17c8de9b35b2a375a793f102dc87fba257ea19901&"
              alt="Abobe"
            />
          </div>
        </div>
      </section>
      {/* Portafolio */}
      <section className="w-full max-w-7xl p-8 flex flex-col gap-12">
        <h2 className="text-center showXElements">Portafolio</h2>
        <div className="flex flex-wrap justify-around gap-8">
          {projectData.map((project, index) => (
            <Projects
              key={index}
              title={project.title}
              description={project.description}
              repoLink={project.repoLink}
              repoName={project.repoName}
              demoLink={project.demoLink}
              demoName={project.demoName}
              technologies={project.technologies}
              imageSrc={project.imageSrc}
            />
          ))}
        </div>
      </section>
    </>
  );
}

export default App;

