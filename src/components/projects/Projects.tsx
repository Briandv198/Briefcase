import { ProjectProps } from '../../pages/Home/App';

const Projects = ({ title, description, repoLink, repoName, demoLink, demoName, technologies, imageSrc }: ProjectProps) => (
  <div className="p-4 flex flex-col gap-3 bg-dark-secondary-container rounded border border-dark-outline showXElements">
    <h2 className="text-3xl font-boldshowXElements">{title}</h2>
    <p className="text-baseshowXElements">{description}</p>
    <div className="text-sm font-light flex flex-col gap-1">
      <p className="showXElements">
        Tecnologías usadas: <i className="font-semibold">{technologies.join(', ')}</i>
      </p>
      {repoLink && (
        <p className="showXElements">
          Repositorio: <a href={repoLink}>{repoName}</a>
        </p>
      )}
      {demoLink && (
        <p className="showXElements">
          Demo: <a href={demoLink}>{demoName}</a>
        </p>
      )}
    </div>
    {imageSrc && <img src={imageSrc} className="showXElements" alt={title} />}
  </div>
);

export default Projects;
