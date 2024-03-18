import React from "react";
import ProjectCard from "./sub/ProjectCard";

import Link from "next/link";

const Projects = () => {
  return (
    <div
      className="flex flex-col items-center justify-center py-20"
      id="projects"
    >
      <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20">
        My Projects
      </h1>
      <div className="h-full w-full flex flex-col md:flex-row gap-10 px-10">
        <ProjectCard
          src="/Grafos.png"
          title="Graph Website in Nextjs with Subpabase and OAuth Authentication"
          description={`This time, an application for web graphs was made that had authentication with Google and allowed the user to create their own graphs. And the excalidraw API was used for the graphs. View Code in:https: http://github.com/Lizardo10/proyecto_grafos`}
        />
        <ProjectCard
          src="/Hospital.png"
          title="Web development for making queries to a hospital with React"
          description="The main problem was that a client could not make a remote query, so this web was created with React, websockets, framer motion, and Firebase. View Code in: https://github.com/Lizardo10/hospital"
        />
       
      </div>
    </div>
  );
};

export default Projects;
