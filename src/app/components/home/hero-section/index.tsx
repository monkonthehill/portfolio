"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Twitter, Instagram, Linkedin } from "lucide-react";

const HeroSection = () => {
const socialLinks = [
{
href: "https://x.com/thelearnerloop",
icon: Twitter,
label: "X",
},
{
href: "https://www.instagram.com/monk_from_the_hills",
icon: Instagram,
label: "Instagram",
},
{
href: "https://linkedin.com/in/nitish-sharma-26a9a221b",
icon: Linkedin,
label: "LinkedIn",
},
];

return ( <section> <div className="container"> <div> <div className="w-full h-72"> <Image
           src="/images/hero-sec/banner-bg-img.png"
           alt="banner-img"
           width={1080}
           height={267}
           className="w-full h-full object-cover"
         /> </div>


      <div className="border-x border-primary/10">
        <div className="relative flex flex-col xs:flex-row items-center xs:items-start justify-center xs:justify-between max-w-3xl mx-auto gap-10 xs:gap-3 px-4 sm:px-7 pt-22 pb-8 sm:pb-12">
<div className="absolute top-0 transform -translate-y-1/2">
  <Image
    src="https://ik.imagekit.io/ankurit/ankurit_uploads/profile_D1zSr8GflnMwkwOqMB3NHfor0Wq2_1751140951916_Screenshot_2025-06-26_085622_h3k1nM6dY.png"
    alt="Nitish Kumar"
    width={145}
    height={145}
    className="border-4 border-white rounded-full"
  />
  <span className="absolute bottom-2.5 right-5 w-4 h-4 bg-green-500 border-2 border-white rounded-full" />
</div>

          <div className="flex flex-col gap-2 sm:gap-3 items-center text-center xs:items-start">
            <h1>Nitish Kumar</h1>

            <p className="text-violet-700 font-normal">
              Computer Science Student • Frontend Developer
            </p>

            <div className="flex items-center gap-2">
              <Image
                src="/images/icon/map-icon.svg"
                alt="Location"
                width={20}
                height={20}
              />
              <p className="text-primary">Himachal, India</p>
            </div>
          </div>

          <div className="flex flex-col md:flex-row items-center gap-4">
            <div className="flex items-center gap-2">
              {socialLinks.map((social, index) => {
                const Icon = social.icon;

                return (
                  <Link
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className="p-3 hover:bg-primary/5 border border-primary/10 rounded-full transition-colors"
                  >
                    <Icon size={18} />
                  </Link>
                );
              })}
            </div>

            <Button asChild className="h-auto rounded-full p-0.5!">
              <Link
                href="mailto:ns708090100@gmail.com"
                className="inline-block p-0.5 rounded-full bg-[linear-gradient(96.09deg,_#9282F8_12.17%,_#F3CA4D_90.71%)]"
              >
                <span className="flex items-center gap-3 bg-primary hover:bg-[linear-gradient(96.09deg,_#9282F8_12.17%,_#F3CA4D_90.71%)] py-2.5 px-5 rounded-full">
                  <span className="text-sm sm:text-base font-semibold text-white">
                    Get In Touch
                  </span>
                </span>
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>


);
};

export default HeroSection;
