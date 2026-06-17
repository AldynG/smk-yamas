import { Target, Eye, BookOpen } from "lucide-react";
import principalImage from "@/assets/pak-kino.jpeg";

const AboutSection = () => {
  return (
    <section id="about" className="section-padding bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="divider-gold" />
          <h2 className="section-title">Tentang Sekolah Kami</h2>
          <p className="section-subtitle">
            Sekilas tentang identitas sekolah, nilai yang kami tanamkan, serta perjalanan kami dalam mencetak lulusan unggul.
          </p>
        </div>

        {/* History */}
        <div className="max-w-4xl mx-auto mb-20">
          <div className="bg-card rounded-2xl p-8 md:p-12 shadow-elevated">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 bg-primary rounded-lg">
                <BookOpen className="w-6 h-6 text-primary-foreground" />
              </div>
              <h3 className="text-2xl font-serif font-bold text-foreground">
                Sejarah Sekolah Kami
              </h3>
            </div>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Berdiri sejak 1983, SMK Yamas berawal dari
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Today, we serve over 2,500 students from diverse backgrounds, offering
              comprehensive programs from elementary through high school. Our alumni
              have gone on to excel in every field imaginable, from medicine and law
              to arts and entrepreneurship.
            </p>
          </div>
        </div>

        {/* Vision & Mission */}
        <div className="grid md:grid-cols-2 gap-8 mb-20">
          <div className="bg-card rounded-2xl p-8 shadow-elevated card-hover">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 bg-accent rounded-lg">
                <Eye className="w-6 h-6 text-accent-foreground" />
              </div>
              <h3 className="text-2xl font-serif font-bold text-foreground">
                Visi Kami
              </h3>
            </div>
            <p className="text-muted-foreground leading-relaxed">
              Menjadi lembaga pendidikan unggul yang mengembangkan peserta didik 
              yang percaya diri, kreatif, dan berjiwa empati sebagai warga global yang siap untuk 
              memimpin dan melayani di dunia yang saling terhubung.
              Kami memiliki visi untuk menciptakan lulusan yang tidak hanya unggul secara akademik,
              tetapi juga memiliki karakter moral yang kuat serta rasa tanggung jawab sosial yang tinggi.
            </p>
          </div>

          <div className="bg-card rounded-2xl p-8 shadow-elevated card-hover">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 bg-secondary rounded-lg">
                <Target className="w-6 h-6 text-secondary-foreground" />
              </div>
              <h3 className="text-2xl font-serif font-bold text-foreground">
                Misi Kami
              </h3>
            </div>
            <p className="text-muted-foreground leading-relaxed">
               Menciptakan lingkungan belajar yang nyaman namun tetap menantang, yang dapat menumbuhkan rasa ingin tahu,
               mendukung perkembangan pribadi, serta membangun kecintaan terhadap belajar. 
               Kami berkomitmen pada prestasi akademik, pembentukan karakter, dan mempersiapkan siswa agar siap melanjutkan pendidikan ke jenjang yang lebih tinggi serta menghadapi masa depan dengan percaya diri.
            </p>
          </div>
        </div>

        {/* Principal's Message */}
        <div className="bg-primary rounded-3xl overflow-hidden">
          <div className="grid md:grid-cols-5 items-center">
            <div className="md:col-span-2 p-8 md:p-0">
              <img
                src={principalImage}
                alt="Sukino, SE, School Principal"
                className="w-full h-64 md:h-full object-contain md:rounded-l-3xl"
              />
            </div>
            <div className="md:col-span-3 p-8 md:p-12">
              <h3 className="text-2xl font-serif font-bold text-primary-foreground mb-4">
                Sambutan kepala sekolah
              </h3>
              <blockquote className="text-primary-foreground/90 leading-relaxed mb-6 italic">
              Pendidikan bukan hanya tentang memperoleh pengetahuan; tetapi tentang mengembangkan manusia secara utuh.
               Di SMK YAMAS, kami percaya bahwa setiap anak memiliki potensi dan keunikan yang menunggu untuk ditemukan.
               Peran kami adalah menyediakan lingkungan, bimbingan, dan berbagai kesempatan yang memungkinkan potensi tersebut berkembang secara optimal. 
               Bersama para pendidik yang berdedikasi dan keluarga yang suportif, kami membangun komunitas di mana siswa dapat berkembang secara akademik, sosial, dan emosional.
              </blockquote>
              <div>
                <p className="text-secondary font-bold">
                  Sukino, S.E
                </p>
                <p className="text-primary-foreground/70 text-sm">
                  Kepala Sekolah | S1 Sarjana Ekonomi
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
