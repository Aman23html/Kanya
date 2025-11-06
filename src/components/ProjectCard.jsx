import React from "react";

const ProjectCard = ({ project }) => {
  return (
    <article className="card">
      <img src={project.image} alt={project.title} />
      <div className="card-body">
        <h3>{project.title}</h3>
        <p>{project.summary}</p>
        <a href={project.link} target="_blank" rel="noreferrer">See More...</a>
      </div>
    </article>
  );
};

export default ProjectCard;
