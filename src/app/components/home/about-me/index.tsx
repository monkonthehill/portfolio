import { Badge } from "@/components/ui/badge";

const AboutMe = () => {
    const skills = [
        "React",
        "JavaScript",
        "Firebase",
        "Node.js",
        "Frontend Development",
        "UI/UX Design",
        "C++",
        "DSA",
        "Web Development",
        "Startup Building",
        "C",
        "Product Design"
    ];

    return (
        <section>
            <div className="container">
                <div className="border-x border-primary/10 bg-[url('/images/about-me/about-me-bg.svg')] bg-cover bg-center bg-no-repeat">
                    <div className="flex flex-col gap-9 sm:gap-12 max-w-3xl mx-auto px-4 sm:px-7 py-11 md:py-20">
                        
                        <div className="flex flex-col gap-4">
                            <p className="text-sm tracking-[2px] text-primary uppercase font-medium">
                                About Me
                            </p>

                            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-[32px]">
                                Hey, I'm <span className="bg-[linear-gradient(90deg,_rgba(243,202,77,0.4)_0%,_rgba(243,202,77,0.05)_100%)]">Nitish Kumar</span> — a Computer Science Engineering student and frontend developer passionate about building impactful digital products.
                            </h2>

                            <h5 className="text-secondary font-normal">
                                Co-founder of Ankurit, a platform connecting farmers and nursery owners. I enjoy creating modern web applications, solving challenging problems, and turning ideas into real-world products.
                            </h5>
                        </div>

                        <div className="flex flex-col gap-4">
                            <p className="text-sm text-primary uppercase font-medium">
                                Skills & Interests
                            </p>

                            <div className="flex flex-wrap gap-2 sm:gap-3">
                                {skills.map((skill, index) => (
                                    <Badge
                                        variant="outline"
                                        key={index}
                                        className="py-1.5 px-3 rounded-lg"
                                    >
                                        <p className="text-xs sm:text-sm font-medium text-primary">
                                            {skill}
                                        </p>
                                    </Badge>
                                ))}
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutMe;
