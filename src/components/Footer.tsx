import { GraduationCap, ArrowUp } from "lucide-react";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4">
        {/* Main Footer Content */}
        <div className="py-16 grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* School Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-secondary rounded-lg">
                <GraduationCap className="w-6 h-6 text-secondary-foreground" />
              </div>
              <div>
                <h3 className="text-lg font-serif font-bold">SMK YAMAS</h3>
                <p className="text-primary-foreground/70 text-xs">
                  Sekolah Menengah Kejuruan
                </p>
              </div>
            </div>
            <p className="text-primary-foreground/80 text-sm leading-relaxed mb-4">
              Inspiring minds and shaping futures since 1975. We are committed to
              academic excellence and holistic development.
            </p>
            <div className="flex gap-4">
              {["Facebook", "Instagram", "Twitter", "YouTube"].map((social) => (
                <a
                  key={social}
                  href="#"
                  className="w-9 h-9 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-secondary transition-colors"
                  aria-label={social}
                >
                  <span className="text-xs font-medium">
                    {social.charAt(0)}
                  </span>
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {[
                { name: "About Us", href: "#about" },
                { name: "Academic Programs", href: "#programs" },
                { name: "Admissions", href: "#contact" },
                { name: "Faculty & Staff", href: "#faculty" },
                { name: "News & Events", href: "#news" },
                { name: "Photo Gallery", href: "#gallery" }
              ].map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-primary-foreground/70 hover:text-secondary transition-colors text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          {/* <div>
            <h4 className="font-semibold mb-4">Resources</h4>
            <ul className="space-y-2">
              {[
                "Student Portal",
                "Parent Portal",
                "School Calendar",
                "Lunch Menu",
                "Transportation",
                "Forms & Documents"
              ].map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    className="text-primary-foreground/70 hover:text-secondary transition-colors text-sm"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div> */}

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold mb-4">Contact Info</h4>
            <ul className="space-y-3 text-sm">
              <li className="text-primary-foreground/80">
                <span className="block text-primary-foreground/60 text-xs mb-0.5">
                  Address
                </span>
                Jl. Pusdiklat Depnaker, RT.6/RW.5, Makasar, Kec. Makasar, Kota Jakarta Timur,<br/> 
                Daerah Khusus Ibukota Jakarta 13570
                
              </li>
              <li className="text-primary-foreground/80">
                <span className="block text-primary-foreground/60 text-xs mb-0.5">
                  Phone
                </span>
                (021) 8097955
              </li>
              <li className="text-primary-foreground/80">
                <span className="block text-primary-foreground/60 text-xs mb-0.5">
                  Email
                </span>
                smk_yamas@yahoo.co.id
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-primary-foreground/10 py-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-primary-foreground/60 text-sm text-center md:text-left">
            © {new Date().getFullYear()} SMK YAMAS. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <a
              href="#"
              className="text-primary-foreground/60 hover:text-secondary transition-colors text-sm"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="text-primary-foreground/60 hover:text-secondary transition-colors text-sm"
            >
              Terms of Use
            </a>
            <button
              onClick={scrollToTop}
              className="p-2 rounded-full bg-primary-foreground/10 hover:bg-secondary transition-colors"
              aria-label="Scroll to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
