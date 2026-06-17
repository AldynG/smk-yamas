const programs = [
    {
    title: "Manajemen Perkantoran dan Layanan Bisnis (MPLB)",
    image: "src/assets/mplb.jpeg",
    description:
      "Mempersiapkan siswa menjadi tenaga profesional di bidang administrasi dan layanan bisnis.",
    highlights: [
      "Administrasi Perkantoran",
      "Kearsipan Digital",
      "Pelayanan Pelanggan",
      "Komunikasi Bisnis",
      "Sarana & Prasarana"
    ]
  },
    {
    title: "Kuliner",
    image: "src/assets/kuliner.jpeg",
    description:
      "Mengembangkan keterampilan memasak, pengolahan makanan, dan kewirausahaan di bidang kuliner.",
    highlights: [
      "Food Preparation",
      "Pastry & Bakery",
      "Food Hygiene",
      "Culinary Business"
    ]
  },
  {
    title: "Rekayasa Perangkat Lunak (RPL)",
    image: "/images/rpl.jpg",
    description:
      "Jurusan yang fokus pada pengembangan software, website, dan aplikasi modern sesuai kebutuhan industri.",
    highlights: [
      "Web Development",
      "Mobile App Development",
      "Database & Backend",
      "UI/UX Design"
    ]
  }

];


const ProgramsSection = () => {
  return (
    <section id="programs" className="section-padding bg-muted">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="divider-gold" />
          <h2 className="section-title">Jurusan</h2>
          <p className="section-subtitle">
            Kurikulum komprehensif yang dirancang untuk menginspirasi, menantang, dan mempersiapkan siswa menuju kesuksesan.
          </p>
        </div>

        {/* Programs Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

         {programs.map((program, index) => (
  <div
    key={program.title}
    className="bg-card rounded-2xl overflow-hidden shadow-soft card-hover"
    style={{ animationDelay: `${index * 100}ms` }}
  >
    {/* Image */}
    <div className="h-48 w-full overflow-hidden">
      <img
        src={program.image}
        alt={program.title}
        className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
      />
    </div>

    {/* Content */}
    <div className="p-6">
      <h3 className="font-serif font-bold text-xl text-foreground mb-2">
        {program.title}
      </h3>

      <p className="text-muted-foreground text-sm leading-relaxed mb-4">
        {program.description}
      </p>

      <ul className="space-y-1">
        {program.highlights.map((highlight) => (
          <li
            key={highlight}
            className="text-sm text-foreground/80 flex items-center gap-2"
          >
            <span className="w-1.5 h-1.5 bg-primary rounded-full" />
            {highlight}
          </li>
        ))}
      </ul>
    </div>
  </div>
))}

        </div>

        {/* Curriculum Highlights */}
        <div className="mt-16 bg-card rounded-3xl p-8 md:p-12 shadow-elevated">
          <h3 className="text-2xl font-serif font-bold text-foreground text-center mb-8">
            Sekilas Tentang Kami
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-secondary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-secondary">25:1</span>
              </div>
              <h4 className="font-semibold text-foreground mb-2">
                Rasio Guru dan Murid
              </h4>
              <p className="text-sm text-muted-foreground">
                Kelas yang terkelola dengan baik untuk mendukung pembelajaran yang efektif dan interaktif.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-accent">100%</span>
              </div>
              <h4 className="font-semibold text-foreground mb-2">
                Guru Bersertifikasi
              </h4>
              <p className="text-sm text-muted-foreground">
                Seluruh guru dan tenaga pendidik memiliki kualifikasi akademik serta sertifikasi profesional sesuai bidang masing-masing
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-primary">10+</span>
              </div>
              <h4 className="font-semibold text-foreground mb-2">
                Extrakurikuler
              </h4>
              <p className="text-sm text-muted-foreground">
                Beragam pilihan ekstrakulikuler untuk mengembangkan minat dan bakat
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProgramsSection;
