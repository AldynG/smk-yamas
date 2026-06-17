import { User } from "lucide-react";
import sukino from "@/assets/pak-kino.jpeg"
import emie from "@/assets/bu-emie.jpeg"
import daryanto from "@/assets/pak-dar.jpeg"
import eva from "@/assets/bu-eva.jpeg"
const faculty = [
  {
    name: "Sukino, S.E",
    role: "Kepala Sekolah ",
    education: "S1 Sarjana Ekonomi",
    img : sukino

  },
  {
    name: "Emie Jamilah, S.Pd",
    role: "Kesiswaan",
    education:"S1 Sarjana Pendidikan",
    img : emie
  },
  {
    name: "Daryanto, S.Pd",
    role: "Kesiswaan",
    education: "S1 Sarjana Pendidikan",
    img : daryanto
  },
  {
    name: "Umar Hasan, S.pd",
    role: "Guru Olahraga",
    education: "S1 Sarjana Pendidikan",
    img : ""
  },
  {
    name: "Dra. Zulasmar",
    role: "Guru Sejarah",
    education: "S1 Sarjana Pendidikan",
    img : ""
  },
  {
    name: "Ir. Hj. Eva Zaenal, S.Pdi",
    role: "Guru Matematika",
    education: "S1 Sarjana Pendidikan",
    img: ""
  },
  {
    name: "Ibnu Riyanto, S.Kom",
    role: "Guru Informatika",
    education: "S1 Sarjana Komputer"
  },
  {
    name: "Sulis Setiawati, S.Pd",
    role: "Guru Matematika",
    education: "S1 Sarjana Informatika"
  },
  {
    name: "Rini Ariani, M.Pd",
    role: "Guru Bahasa Inggris",
    education: "S2 Pendidikan Bahasa Inggris"
  },
  {
    name: "Triana Yuliawati, S.Si",
    role: "Guru IPA",
    education: "S1 Sarjana Sains"
  },
  {
    name: "Sudarwanti, S.Pd",
    role: "Kepala Program MPLB",
    education: "S1 Sarjana Pendidikan"
  },
  {
    name: "Ria Nur Fauzia, S.Pd",
    role: "Guru Produktif MPLB",
    education: "S1 Sarjana Pendidikan"
  },
  {
    name :"Menik Ernawati, S.E",
    role :"Guru PKK",
    education : "S1 Sarjana Ekonomi"
  },
  {
    name:"Dwi Astuti, SPsi",
    role : "Guru BK",
    education:"S1 Sarjana Psikologi"
  },
  {
    name : "Wulan Nurul H, S.Pd",
    role : "Kepala Program Kuliner",
    education : "S1 Sarjana Pendidikan"
  },
  {
    name : "Novi Oktavia, M.Pd",
    role : "Guru Bahasa Inggris",
    education : "S2 Sarjana Pendidikan"
  },
  {
    name : "Ir. Sjamsuddar",
    role : "Guru Matematika",
    education:"Sarjana Teknik"
  },
  {
    name : "Abdul Hadi, S.Pd",
    role : "Guru IPAS",
    education : "S1 Sarjana Pendidikan"
  },
  {
    name : "Shahnaz Kharisma",
    role :"Guru Produktif Kuliner",
    education : ""
  },
  {
    name : "Nadira Oktasari Putri, S.Pd",
    role : "Guru Produktif MPLB",
    education : "S1 Sarjana Pendidikan"
  },
  {
    name : "Muhamad Aldyn Ghifari, S.Kom",
    role : "Guru Koding & Kecerdasan Artifisial",
    education : "S1 Sarjana Teknik Informatika"
  }
];

const FacultySection = () => {
  return (
    <section id="faculty" className="section-padding bg-muted">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="divider-gold" />
          <h2 className="section-title">Guru & Staff kami</h2>
          <p className="section-subtitle">
            Pendidik dan Staff yang berdedikasi dan berkomitmen untuk mengembangkan potensi terbaik setiap siswa.
          </p>
        </div>

        {/* Faculty Grid */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {faculty.map((member, index) => (
            <div
              key={member.name}
              className="bg-card rounded-2xl overflow-hidden shadow-soft card-hover group"
              style={{ animationDelay: `${index * 50}ms` }}
            >
              {/* Avatar Placeholder */}
              <div className="aspect-square flex items-center justify-center bg-blue-200">
                  <img
                       src={member.img}
                       alt={member.name}
                       className="w-32 h-32 rounded-full object-cover border-4 border-white shadow-lg"
                   />
              </div>
              
              {/* Info */}
              <div className="p-5 text-center">
                <h3 className="font-serif font-bold text-foreground mb-1">
                  {member.name}
                </h3>
                <p className="text-secondary font-medium text-sm mb-1">
                  {member.role}
                </p>
                {/* <p className="text-muted-foreground text-xs mb-2">
                  {member.department}
                </p> */}
                <p className="text-muted-foreground/70 text-xs">
                  {member.education}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Join Our Team CTA */}
        {/* <div className="mt-16 text-center">
          <div className="bg-card rounded-2xl p-8 md:p-12 shadow-elevated max-w-2xl mx-auto">
            <h3 className="text-2xl font-serif font-bold text-foreground mb-4">
              Join Our Team
            </h3>
            <p className="text-muted-foreground mb-6">
              We're always looking for passionate educators who share our commitment
              to excellence. Explore career opportunities at Bright Horizons Academy.
            </p>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 text-primary font-semibold hover:text-secondary transition-colors"
            >
              View Open Positions
              <span className="text-lg">→</span>
            </a>
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default FacultySection;
