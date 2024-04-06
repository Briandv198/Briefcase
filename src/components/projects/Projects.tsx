import { useEffect, useState } from 'react';
import { ProjectProps } from '../../pages/Home/App';
import { FaGithub } from 'react-icons/fa';
import { FaGlobe } from 'react-icons/fa';

const Projects = ({ title, description, repoLink, demoLink, figmaLink, technologies, imageSrc }: ProjectProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      const nextIndex = (currentIndex + 1) % imageSrc.length; // Calcula el próximo índice basado en el tamaño del arreglo imageSrc

      setCurrentIndex(nextIndex);
    }, 5000); // 5000 milisegundos = 10 segundos

    return () => clearInterval(interval);
  }, [currentIndex, imageSrc.length]);

  return (
    <div className="card-project justify-between">
      <div className="md:w-1/3 relative flex rounded-md overflow-hidden">
        <div className="scroll-content">
          {imageSrc.map((src, index) => (
            <img key={index} src={src} className={`${index != currentIndex ? 'hidden' : 'show'}`} alt={title} />
          ))}
        </div>
      </div>
      <div className="md:w-2/3 p-4 flex flex-col gap-3">
        <div className="flex flex-col gap-3">
          <h3 className="howXElements">{title}</h3>
          <p className="text-sm font-medium dark:font-normal howXElements">{description}</p>
          <p className="text-sm showXElements">
            Tecnologías usadas: <i className="font-semibold">{technologies.join(', ')}</i>
          </p>
        </div>
        <div className="w-full self-end flex justify-evenly md:justify-end flex-wrap gap-6 my-2">
          {repoLink && (
            <a href={repoLink} className="link-button outlined self-end w-full md:w-auto" target="_blank">
              <FaGithub />
              Repositorio
            </a>
          )}
          {figmaLink && (
            <a href={figmaLink} className="link-button outlined self-end w-full md:w-auto" target="_blank">
              <FaGithub />
              Figma
            </a>
          )}
          {demoLink && (
            <a href={demoLink} className="link-button outlined self-end w-full md:w-auto" target="_blank">
              <FaGlobe />
              Demo
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default Projects;
