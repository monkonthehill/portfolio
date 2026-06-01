import Link from "next/link";

const Footer = () => {
return ( <footer className="-translate-y-[1px] bg-white border-t border-primary/10"> <div className="container"> <div className="border-x border-primary/10"> <div className="max-w-3xl mx-auto px-4 sm:px-7 py-4 md:py-7 flex flex-col gap-2">

        <p>
        </p>

        <p className="text-muted-foreground">
          Computer Science Student • Developer
        </p>

        <div className="flex flex-wrap gap-4 text-sm">
          <Link
            href="https://github.com/monkonthehill"
            target="_blank"
            className="hover:text-primary transition-colors"
          >
            GitHub
          </Link>

          <Link
            href="https://linkedin.com/in/nitish-sharma-26a9a221b"
            target="_blank"
            className="hover:text-primary transition-colors"
          >
            LinkedIn
          </Link>

          <Link
            href="https://x.com/thelearnerloop"
            target="_blank"
            className="hover:text-primary transition-colors"
          >
            X (Twitter)
          </Link>

          <Link
            href="https://www.instagram.com/monk_from_the_hills"
            target="_blank"
            className="hover:text-primary transition-colors"
          >
            Instagram
          </Link>
        </div>

      </div>
    </div>
  </div>
</footer>

);
};

export default Footer;
