import { Calendar, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const news = [
  {
    date: "30 Mei, 2026",
    category: "Pengumuman",
    title: "Penerimaan Peserta Didik Baru (PPDB) Tahun Ajaran 2026/2027 telah resmi dibuka.",
    excerpt: "Kami mengundang calon peserta didik untuk bergabung dan menjadi bagian dari lingkungan belajar yang unggul, disiplin, dan berprestasi. Pendaftaran dapat dilakukan dengan cara datang langsung ke sekolah pada jam kerja.",
    featured: true
  },
  {
    date: "24 April, 2026",
    category: "Pencapaian",
    title: "Juara 2 O2SN Badminton tingkat kecamatan",
    excerpt:"Siswa berhasil meraih Juara 2 pada ajang O2SN cabang Badminton tingkat Kecamatan, membawa kebanggaan bagi sekolah"
  },
  {
    date: "3 Juni, 2026",
    category: "Event",
    title: "Acara Pelepasan kelas XII ",
    excerpt: "Pelepasan Kelas XII diselenggarakan sebagai penanda berakhirnya masa belajar sekaligus awal perjalanan baru para siswa menuju masa depan."
  },
  {
    date: "27-28 Mei, 2026",
    category: "Event",
    title: "Pelaksanaan Qurban Idul Adha",
    excerpt: "Peringatan Idul Adha di sekolah diisi dengan kegiatan keagamaan dan penyembelihan hewan kurban sebagai wujud kebersamaan"
  }
];

const NewsSection = () => {
  const featuredNews = news.find((item) => item.featured);
  const regularNews = news.filter((item) => !item.featured);

  return (
    <section id="news" className="section-padding bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="divider-gold" />
          <h2 className="section-title">Berita sekolah & Pengumuman</h2>
          <p className="section-subtitle">
            Berita terbaru di SMK YAMAS
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Featured News */}
          {featuredNews && (
            <div className="lg:col-span-2">
              <div className="bg-primary rounded-2xl overflow-hidden shadow-prominent h-full">
                <div className="p-8 md:p-10">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="px-3 py-1 bg-secondary text-secondary-foreground text-xs font-semibold rounded-full">
                      {featuredNews.category}
                    </span>
                    <span className="text-primary-foreground/60 text-sm flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      {featuredNews.date}
                    </span>
                  </div>
                  <h3 className="text-2xl md:text-3xl font-serif font-bold text-primary-foreground mb-4">
                    {featuredNews.title}
                  </h3>
                  <p className="text-primary-foreground/80 leading-relaxed mb-6">
                    {featuredNews.excerpt}
                  </p>
                  <Button onClick={() => window.open("https://wa.me/6281319126442", "_blank")} variant="hero" size="lg">
                    Tanya lebih lanjut
                    <ArrowRight className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </div>
          )}

          {/* News List */}
          <div className="space-y-4">
            {regularNews.slice(0, 4).map((item, index) => (
              <div
                key={item.title}
                className="bg-card rounded-xl p-5 shadow-soft card-hover group cursor-pointer"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <div className="flex items-center gap-2 mb-2">
                  <span className="px-2 py-0.5 bg-muted text-muted-foreground text-xs font-medium rounded">
                    {item.category}
                  </span>
                  <span className="text-muted-foreground/60 text-xs">
                    {item.date}
                  </span>
                </div>
                <h4 className="font-semibold text-foreground group-hover:text-primary transition-colors mb-1">
                  {item.title}
                </h4>
                {/* Excerpt: clamped by default, fully revealed on hover */}
                <p
                  className="text-muted-foreground text-sm overflow-hidden transition-all duration-500 ease-in-out
                    max-h-[2.8rem] opacity-70
                    group-hover:max-h-40 group-hover:opacity-100"
                >
                  {item.excerpt}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* More News */}
        <div className="mt-8 grid md:grid-cols-2 gap-4">
          {regularNews.slice(4).map((item) => (
            <div
              key={item.title}
              className="bg-card rounded-xl p-5 shadow-soft card-hover group cursor-pointer flex gap-4"
            >
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-2">
                  <span className="px-2 py-0.5 bg-muted text-muted-foreground text-xs font-medium rounded">
                    {item.category}
                  </span>
                  <span className="text-muted-foreground/60 text-xs">
                    {item.date}
                  </span>
                </div>
                <h4 className="font-semibold text-foreground group-hover:text-primary transition-colors mb-1">
                  {item.title}
                </h4>
                {/* Excerpt hidden by default, slides in on hover */}
                <p
                  className="text-muted-foreground text-sm overflow-hidden transition-all duration-500 ease-in-out
                    max-h-0 opacity-0
                    group-hover:max-h-40 group-hover:opacity-100"
                >
                  {item.excerpt}
                </p>
              </div>
              <ArrowRight className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors flex-shrink-0 mt-1" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewsSection;