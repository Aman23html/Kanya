import React from "react";
import ProjectCard from "../components/ProjectCard";
import projects from "../data/projects";

const Projects = () => {
  return (
    <section className="container section">
      <h2>Projects</h2>
      <div className="grid">
        {projects.map(p => <ProjectCard key={p.id} project={p} />)}
      </div>
    </section>
  );
};

export default Projects;
