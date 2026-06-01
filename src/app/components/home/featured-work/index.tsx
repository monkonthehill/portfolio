"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const FeaturedWork = () => {
const featuredProjects = [
{
title: "Evox Shimla",
image:
"https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&q=80",
link: "https://evoxshimla.web.app/",
roles: [
"React",
"Firebase",
"Frontend Development",
"UI/UX Design",
],
description:
"A modern business website focused on clean design, responsive layouts, performance optimization, and user experience.",
},
{
title: "TermChat",
image:
"https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=1200&q=80",
link: "https://github.com/monkonthehill/Major_projects/tree/main/termchat",
roles: [
"C",
"Socket Programming",
"Networking",
"Systems Programming",
],
description:
"A terminal-based real-time chat application built to explore socket programming, communication protocols, and modular software architecture.",
},
];

return ( <section id="featured-work"> <div className="container"> <div className="border-x border-primary/10"> <div className="flex flex-col max-w-3xl mx-auto py-10 px-4 sm:px-7"> <div className="flex flex-col xs:flex-row gap-5 items-center justify-between"> <p className="text-sm tracking-[2px] text-primary uppercase font-medium">
Featured Projects </p>


          <Button asChild variant="outline" className="h-auto">
            <Link
              href="https://github.com/monkonthehill"
              target="_blank"
            >
              <span className="py-3 px-5">View GitHub</span>
            </Link>
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 border-t border-primary/10">
        {featuredProjects.map((project, index) => {
          const isRightCol = index % 2 === 1;

          return (
            <div
              key={index}
              className={`group flex flex-col gap-5 p-4 sm:p-6 ${
                isRightCol ? "md:border-l md:border-primary/10" : ""
              }`}
            >
              <Link
                href={project.link}
                target="_blank"
                className="overflow-hidden rounded-xl"
              >
                <Image
                  src={project.image}
                  alt={project.title}
                  width={800}
                  height={500}
                  className="w-full h-[260px] object-cover group-hover:scale-105 transition-all duration-500"
                />
              </Link>

              <div className="flex flex-col gap-3">
                <Link href={project.link} target="_blank">
                  <h4 className="hover:text-primary transition-colors">
                    {project.title}
                  </h4>
                </Link>

                <p className="text-secondary text-sm leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.roles.map((role, idx) => (
                    <span
                      key={idx}
                      className="text-xs border border-primary/10 rounded-lg px-3 py-1"
                    >
                      {role}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  </div>
</section>


);
};

export default FeaturedWork;
