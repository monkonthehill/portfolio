"use client";

import Image from "next/image";
import Link from "next/link";

const ProjectOverview = () => {
const featuredProjects = [
{
name: "Ankurit",
url: "https://ankurit-8fc54.web.app/",
},
{
name: "ChickenCurryMan",
url: "https://chickencurryman-669f7.web.app/",
},
{
name: "Evox Shimla",
url: "https://evoxshimla.web.app/",
},
{
name: "TermChat",
url: "https://github.com/monkonthehill/Major_projects/tree/main/termchat",
},
];

const sideProjects = [
{
name: "VOM Text Editor",
url: "https://github.com/monkonthehill/Major_projects/tree/main/texteditor",
},
{
name: "ConsoleChats",
url: "https://github.com/monkonthehill/Major_projects/tree/main/ConsoleChats",
},
{
name: "DockTrack",
url: "https://github.com/monkonthehill/Major_projects/tree/main/docktrack",
},
];

return ( <section> <div className="container"> <div className="border-x border-primary/10"> <div className="flex flex-col max-w-3xl mx-auto gap-10 sm:gap-16 px-4 sm:px-7 py-9 md:py-16">

        <div className="flex flex-col xs:flex-row items-start gap-5 xs:gap-10 md:gap-28 lg:gap-5">
          <p className="max-w-fit lg:max-w-2xs w-full text-sm tracking-[2px] text-primary uppercase font-medium">
            Featured Projects
          </p>

          <div className="flex flex-col gap-3">
            {featuredProjects.map((project, index) => (
              <Link
                key={index}
                href={project.url}
                target="_blank"
                className="group flex items-center gap-2"
              >
                <h4>{project.name}</h4>

                <Image
                  src="/images/icon/tile-arrow-icon.svg"
                  alt="arrow"
                  width={24}
                  height={24}
                  className="group-hover:translate-x-1.5 group-hover:rotate-45 transition-all duration-300"
                />
              </Link>
            ))}
          </div>
        </div>

        <div className="flex flex-col xs:flex-row items-start gap-5 xs:gap-10 md:gap-28 lg:gap-5">
          <p className="max-w-fit lg:max-w-2xs w-full text-sm tracking-[2px] text-primary uppercase font-medium">
            Systems & Side Projects
          </p>

          <div className="flex flex-col gap-3">
            {sideProjects.map((project, index) => (
              <Link
                key={index}
                href={project.url}
                target="_blank"
                className="group flex items-center gap-2"
              >
                <h4>{project.name}</h4>

                <Image
                  src="/images/icon/tile-arrow-icon.svg"
                  alt="arrow"
                  width={24}
                  height={24}
                  className="group-hover:translate-x-1.5 group-hover:rotate-45 transition-all duration-300"
                />
              </Link>
            ))}
          </div>
        </div>

      </div>
    </div>
  </div>
</section>

);
};

export default ProjectOverview;
