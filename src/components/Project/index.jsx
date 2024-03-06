const Project = ({ title, description, image, technologies, href }) => {
    return (
      <div className="project-container mb-4 p-3 shadow">
        <div className="row align-items-center">
          <div className="col-md-6">
            <div className="project-details">
              <h2 className="project-title mb-3">{title}</h2>
              <p className="project-description">{description}</p>
              <div className="technologies-box border p-3 mt-3">
                <p className="font-weight-bold mb-2">Technologies:</p>
                <p className="m-0">{technologies.join(', ')}</p>
              </div>
            </div>
          </div>
          <div className="col-md-6 text-center">
            <a href={href} target="_blank" rel="noopener noreferrer" className="project-link">
              <img src={image} alt={title} className="img-fluid cursor-pointer rounded" />
            </a>
          </div>
        </div>
      </div>
    );
  };
  
  export default Project;