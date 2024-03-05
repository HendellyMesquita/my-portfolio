import React from 'react';
import "./projects.scss"
import projectItem from '../projectItem/projectItem';
import ProjectCard from '../projectCard/projectCard';

export default function Project(){

    const data = projectItem;

    return(
        <main className='container_project'>
            <div className="projects">
                  <div className="project_descrition">
                    <h1>🗿 My Projects</h1>
                    <h2>❤️ Some of my work as a Software Developer </h2>
                  </div>
                    <section className="projects_item">
                      {data.map((prj) => (
                        <ProjectCard key={prj.id} data={prj} />
                      ))}
                    </section>
            </div>
        </main>
    )
}
