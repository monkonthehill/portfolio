"use client";

const Projects = () => {
const projectsData = [
{
title: "Ankurit",
period: "2025 - Present",
description:
"A marketplace platform connecting farmers and nursery owners. Built to simplify product discovery, seller management, and agricultural networking.",
technologies: [
"React",
"Firebase",
"JavaScript",
"Material UI",
],
link: "https://ankurit-8fc54.web.app/",
},
{
title: "ChickenCurryMan",
period: "2025 - Present",
description:
"A gaming review platform where users can discover, review, and rate indie and mainstream games with dynamic content fetched from Firebase.",
technologies: ["React", "Firebase", "Firestore"],
link: "https://chickencurryman-669f7.web.app/",
},
{
title: "TermChat",
period: "2025",
description:
"A modular terminal chat application focused on scalable communication handling, clean architecture, and networking concepts.",
technologies: ["C", "Sockets", "Networking"],
link: "https://github.com/monkonthehill/Major_projects/tree/main/termchat",
},
{
title: "DockTrack",
period: "2025",
description:
"A backend-focused project designed for structured data tracking, management, and scalable processing logic.",
technologies: ["C++", "Data Structures"],
link: "https://github.com/monkonthehill/Major_projects/tree/main/docktrack",
},
{
title: "Raylib Projects",
period: "2025 - Present",
description:
"A collection of graphics programming and game development experiments including Snake and interactive visual applications built with Raylib.",
technologies: ["C", "Raylib", "Game Development"],
link: "https://github.com/monkonthehill/Major_projects/tree/main/raylib",
},
];

return ( <section id="projects"> <div className="container"> <div className="border-x border-primary/10"> <div className="flex flex-col max-w-3xl mx-auto py-10 px-4 sm:px-7"> <p className="text-sm tracking-[2px] text-primary uppercase font-medium">
Projects </p> </div>


      <div className="border-t border-primary/10">
        <div className="flex flex-col max-w-3xl mx-auto px-4 sm:px-7 py-9 md:py-16">
          {projectsData.map((project, index) => (
            <div
              key={index}
              className="border-b border-dashed border-primary/10 last:border-b-0 py-8 first:pt-0"
            >
              <div className="flex flex-col gap-5">
                <div className="flex flex-wrap justify-between items-center gap-4">
                  <h3 className="text-xl font-semibold">
                    {project.title}
                  </h3>

                  <span className="text-sm text-primary border border-primary/10 rounded-lg px-3 py-1.5">
                    {project.period}
                  </span>
                </div>

                <p className="text-secondary leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, i) => (
                    <span
                      key={i}
                      className="border border-primary/10 rounded-lg px-3 py-1 text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary underline underline-offset-4 w-fit"
                >
                  View Project →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>
</section>

);
};

export default Projects;
