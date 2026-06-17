import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";
import heroImage from "@/assets/foto-sekolah.jpeg";
import { Label } from "recharts";

const HeroSection = () => {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="
    relative min-h-screen
    flex items-center justify-center
    overflow-hidden
    pb-20 md:pb-0
  "
    >
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="foto-sekolah"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 hero-gradient opacity-85" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Badge */}
        
          {/* Spacer khusus mobile */}
<div className="h-40 md:hidden" />


          {/* Main Heading */}
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-serif font-bold text-primary-foreground mb-6 animate-fade-up animation-delay-100">
            Keterampilan Nyata,
            <br />
            <span className="text-gradient-gold">Karakter Unggul</span>
          </h1>

          {/* Subheading */}
          <p className="text-lg md:text-xl text-primary-foreground/80 mb-10 max-w-2xl mx-auto animate-fade-up animation-delay-200">
            Di SMK YAMAS, Kami membekali siswa dengan keterampilan nyata,
            sikap profesional, dan karakter unggul untuk siap kerja, kuliah,
            dan berkarya di masyarakat umum.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-up animation-delay-300">
            <Button
              variant="hero"
              size="xl"
              onClick={() => scrollToSection("#contact")}
            >
              Daftar Sekarang
            </Button>
            <Button
              variant="heroOutline"
              size="xl"
              onClick={() => scrollToSection("#about")}
            >
              Tentang Kami
            </Button>
          </div>



          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-16 animate-fade-up animation-delay-400">
            {[
              { value: "50+", label: "Tahun didirikan" },
              { value: "2,500+", label: "Murid Sudah Bergabung" },
              { value: "3", label: "Program Keahlian" },
              {value : "45", label :"Guru dan staff"}
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-secondary mb-1">
                  {stat.value}
                </div>
                <div className="text-primary-foreground/70 text-sm">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
                      {/* Spacer khusus mobile */}
<div className="h-30 md:hidden" />

      {/* Scroll Indicator */}
      <button
        onClick={() => scrollToSection("#about")}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-primary-foreground/60 hover:text-primary-foreground transition-colors animate-float"
        aria-label="Scroll to next section"
      >
        <ChevronDown className="w-8 h-8" />
      </button>
    </section>
  );
};

export default HeroSection;
