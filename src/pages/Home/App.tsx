import { useState } from 'react';
import Projects from '../../components/projects/Projects';
import { FaGithub } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa';

export interface ProjectProps {
  title: string;
  description: string;
  repoLink: string;
  demoLink: string;
  technologies: string[];
  imageSrc: string[];
}

const projectData: ProjectProps[] = [
  {
    title: 'Rick and Morty',
    description: 'En este proyecto ocupe react para conectarme a la API de Rich and Morty y obtener la información de los personajes.',
    repoLink: 'https://github.com/Briandv198/rick-morty',
    demoLink: 'https://rick-and-morty-briandv198.netlify.app/',
    technologies: ['React', 'JavaScript', 'CSS', 'Webpack', 'Node', 'Netlify'],
    imageSrc: [
      'https://cdn.discordapp.com/attachments/1217316505147015179/1217367384516595803/RyM.png?ex=6603c4ba&is=65f14fba&hm=e27e09286d61ddc0243f23db5ed95a80945349377342a1ff7ece786ce71ba4c4&',
      'https://cdn.discordapp.com/attachments/1217316505147015179/1218272842320314418/RyM2.jpg?ex=66071000&is=65f49b00&hm=2b64073ce650203c826ece99369a86761c205f031c9fb86c7246f75f0fc59c64&',
      'https://cdn.discordapp.com/attachments/1217316505147015179/1218272853980348487/RyM3.jpg?ex=66071002&is=65f49b02&hm=7e614af4d0eded1c66e74ad8e3b1210b03a14babf8679baa56a43e4e9a28eded&',
    ],
  },
  {
    title: 'Varcha Transportes',
    description: 'Para este cliente desarrolle una Landing Page para su empresa de transporte, siendo mobile-first el diseño.',
    repoLink: '',
    demoLink: 'https://varcha-transportes.com/',
    technologies: ['Astro', 'HTML', 'CSS', 'Node', 'Netlify'],
    imageSrc: [
      'https://cdn.discordapp.com/attachments/1217316505147015179/1218276105484501002/varcha.jpg?ex=6607130a&is=65f49e0a&hm=0db9e9604eeea8715c90cee98abf4fd10bce974d0370b68dfcec8cf1487dace7&',
      'https://cdn.discordapp.com/attachments/1217316505147015179/1218276114552590396/varcha2.jpg?ex=6607130c&is=65f49e0c&hm=a390fcf4b6059582d889365b4f8b614f18c9e3c3db697ed9cb609267032f64a4&',
      'https://cdn.discordapp.com/attachments/1217316505147015179/1218276123645968404/varcha3.jpg?ex=6607130e&is=65f49e0e&hm=80b03727cf3921dfda3fef84cdd721926f4cd49053b9bd009c2ee035586bdfa5&',
    ],
  },
];

interface StackItemProps {
  src: string;
  alt: string;
  isHovered?: number;
  hoveredIndex?: number | null;
  onMouseEnter?: any;
  onMouseLeave?: any;
}
const stackItems: StackItemProps[] = [
  {
    src: 'https://cdn.discordapp.com/attachments/1217316505147015179/1217371805640167424/icons8-react-a-javascript-library-for-building-user-interfaces-96.png?ex=6603c8d8&is=65f153d8&hm=5009ad9ec2b665df7ae3ebaa8267a46da32e108b57efa340d305215fede8425c&',
    alt: 'ReactJs',
  },
  {
    src: 'https://cdn.discordapp.com/attachments/1217316505147015179/1217372018459017296/next_js_logo_icon_145038_1.png?ex=6603c90a&is=65f1540a&hm=c15ee9c5d2d059ebf2ef66ff24290c095816b096f60ff310f060f0d3a71e3767&',
    alt: 'NextJs',
  },
  {
    src: 'https://cdn.discordapp.com/attachments/1217316505147015179/1217371400424390748/icons8-tailwind-css-96.png?ex=6603c877&is=65f15377&hm=3587d2f831e1bdb1cdf5022f8512df93dcd14037fa72c71673bbf072352fc701&',
    alt: 'Tailwind CSS',
  },
  {
    src: 'https://cdn.discordapp.com/attachments/1217316505147015179/1217371631480213534/icons8-bootstrap-96.png?ex=6603c8ae&is=65f153ae&hm=c287a305cc4d92b956cf45f546d4396017cd97e6e234a2f8d52f2f41d86ff6a2&',
    alt: 'Bootstrap',
  },
  {
    src: 'https://cdn.discordapp.com/attachments/1217316505147015179/1217371645216423946/icons8-figma-96.png?ex=6603c8b1&is=65f153b1&hm=4b8adc57dbe5acd8307362813fc4213aa1131557b7fb574d33f21e5e7380e051&',
    alt: 'Figma',
  },
  {
    src: 'https://cdn.discordapp.com/attachments/1217316505147015179/1217371655467175936/icons8-adobe-96.png?ex=6603c8b4&is=65f153b4&hm=59163a4331f94eb0731bbcf17c8de9b35b2a375a793f102dc87fba257ea19901&',
    alt: 'Abobe',
  },
];
const StackItem = ({ src, alt, isHovered, hoveredIndex, onMouseEnter, onMouseLeave }: StackItemProps) => {
  return (
    <div className="stack-item">
      <img
        loading="lazy"
        className={`stack-image ${hoveredIndex != null ? isHovered != hoveredIndex && 'blur-sm scale-90 grayscale' : ''}`}
        src={src}
        alt={alt}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
      />
    </div>
  );
};

const TechnologyStack = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const handleMouseEnter = (index: number) => {
    setHoveredIndex(index);
  };

  const handleMouseLeave = () => {
    setHoveredIndex(null);
  };

  return (
    <>
      {stackItems.map((item, index) => (
        <StackItem key={index} src={item.src} alt={item.alt} isHovered={index} hoveredIndex={hoveredIndex} onMouseEnter={() => handleMouseEnter(index)} onMouseLeave={handleMouseLeave} />
      ))}
    </>
  );
};

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
          <div className="w-full flex flex-col md:flex-row justify-around items-center gap-4">
            <a className="link-button filled w-1/2" href="https://www.linkedin.com/in/briandv198">
              <FaLinkedin />
              Linkedin
            </a>
            <a className="link-button filled w-1/2" href="https://www.linkedin.com/in/briandv198">
              <FaGithub />
              Github
            </a>
          </div>
        </div>
        <img loading="lazy" className="w-full md:w-1/2 max-w-96 showXElements" src="/base2.png" alt="Avatar" />
      </section>

      {/* Stack de Tecnologías */}
      <section className="w-full flex justify-center bg-light-secondary-container dark:bg-dark-secondary-container border-y border-light-outline dark:border-dark-outline bg-opacity-75 dark:bg-opacity-75 backdrop-blur-sm dark:backdrop-blur-sm text-light-on-secondary-container dark:text-dark-on-secondary-container">
        <div className="w-full max-w-7xl p-8 text-center flex flex-col gap-12 overflow-hidden">
          <h3 className="font-light showXElements showXElements">Stack de tecnologías</h3>
          <div className="stack-container flex-wrap">
            <TechnologyStack />
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
              demoLink={project.demoLink}
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

