import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, GraduationCap } from "lucide-react";

const navItems = [
  { name: "Home", href: "#home" },
  { name: "Tentang", href: "#about" },
  { name: "Jurusan", href: "#programs" },
  { name: "Fasilitas", href: "#facilities" },
  { name: "Guru & Staff", href: "#faculty" },
  { name: "News", href: "#news" },
  { name: "Galeri", href: "#gallery" },
  { name: "Kontak", href: "#contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-card/95 backdrop-blur-md shadow-elevated"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a
            href="#home"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection("#home");
            }}
            className="flex items-center gap-3"
          >
<div
  className={`w-12 h-12 flex items-center justify-center rounded-lg
    ${isScrolled ? "bg-transparent" : "bg-secondary"}`}
>
  <img
    src="src/assets/logoyamas-removebg-preview.png"
    alt="Logo"
    className="w-12 h-12 scale-[1.3] translate-y-0.5 object-contain"
  />
</div>

            <div>
              <h1 className={`text-xl font-serif font-bold ${isScrolled ? "text-primary" : "text-primary-foreground"}`}>
                SMK YAMAS
              </h1>
              <p className={`text-xs ${isScrolled ? "text-muted-foreground" : "text-primary-foreground/80"}`}>
                Sekolah Menengah Kejuruan
              </p>
            </div>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(item.href);
                }}
                className={`nav-link text-sm font-medium ${
                  isScrolled
                    ? "text-foreground hover:text-primary"
                    : "text-primary-foreground/90 hover:text-primary-foreground"
                }`}
              >
                {item.name}
              </a>
            ))}
            <Button
              variant={isScrolled ? "default" : "hero"}
              size="sm"
              onClick={() => scrollToSection("#contact")}
            >
              Pendaftaran
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? (
              <X className={`w-6 h-6 ${isScrolled ? "text-foreground" : "text-primary-foreground"}`} />
            ) : (
              <Menu className={`w-6 h-6 ${isScrolled ? "text-foreground" : "text-primary-foreground"}`} />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden bg-card rounded-lg shadow-prominent mb-4 p-4 animate-fade-up">
            <div className="flex flex-col gap-2">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection(item.href);
                  }}
                  className="px-4 py-3 text-foreground hover:bg-muted rounded-lg transition-colors"
                >
                  {item.name}
                </a>
              ))}
              <Button
                variant="hero"
                className="mt-2"
                onClick={() => scrollToSection("#contact")}
              >
                Pendaftaran
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
