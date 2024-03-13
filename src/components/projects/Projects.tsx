import { ProjectProps } from '../../pages/Home/App';

const Projects = ({ title, description, repoLink, repoName, demoLink, demoName, technologies, imageSrc }: ProjectProps) => (
  <div className="card-project">
    <div className="flex flex-col gap-3">
      <div className="flex flex-col gap-3">
        <h3 className="howXElements">{title}</h3>
        <p className="howXElements">{description}</p>
      </div>
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
    </div>
    {imageSrc && <img src={imageSrc} className="showXElements" alt={title} />}
  </div>
);

export default Projects;
