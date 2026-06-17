import { 
  BookOpen, 
  FlaskConical, 
  Dumbbell, 
  Monitor,
  Theater,
  Utensils,
  GraduationCap,
  Icon
} from "lucide-react";
import libraryImage from "@/assets/perpus.jpeg";
import labImage from "@/assets/facility-lab.jpg";
import sportsImage from "@/assets/facility-sports.jpg";
import computerImage from "@/assets/facility-computer.jpg";
import TeacherImage from "@/assets/guru.jpeg"
import { Description } from "@radix-ui/react-toast";
import { title } from "process";

const facilities = [
  {
    icon: BookOpen,
    title: "Perpustakaan",
    description: "Koleksi buku yang beragam, sumber daya digital, serta area belajar yang tenang",
    image: libraryImage
  },

  {
    icon: Dumbbell,
    title: "Lapangan",
    description: "Olympic-sized pool, gymnasium, outdoor fields, tennis courts, and fitness center.",
    image: sportsImage
  },
  {
    icon: Monitor,
    title: "Lab Komputer",
    description: "Multiple computer lab and high-speed connectivity.",
    image: computerImage
  },
  {
    icon: Monitor,
    title : "Lab MPLB",
    description : "Lab Untuk MPLB",
    image : computerImage
  },
  {
  icon : Monitor,
  title : "Lab RPL",
  description : " Lab untuk RPL",
  image : computerImage
  },
  {
    icon: Utensils,
    title: "Dapur Tata Boga",
    description : "Ruang Praktek Tata Boga",
    image : ""
  },
   {
    icon: GraduationCap,
    title: "Tenaga Kependidikan",
    description: "Lebih dari 30 tenaga kependidikan.",
    image: TeacherImage
  },
  {
    icon: Utensils,
    title :"Cafe",
    description : "ya cafe tempat buat makan apa lagi kocak",
    image: labImage
  }

];

const additionalFacilities = [
  {
    icon: Theater,
    title: "Performing Arts Center",
    description: "500-seat auditorium with professional sound and lighting for performances and events."
  },
  {
    icon: Utensils,
    title: "Cafeteria & Dining",
    description: "Nutritious meal options with fresh, locally-sourced ingredients served daily."
  }
];

const FacilitiesSection = () => {
  return (
    <section id="facilities" className="section-padding bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="divider-gold" />
          <h2 className="section-title">Fasilitas Kami</h2>
          <p className="section-subtitle">
      
          </p>
        </div>

        {/* Main Facilities Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {facilities.map((facility, index) => {
            const Icon = facility.icon;
            return (
              <div
                key={facility.title}
                className="group relative rounded-2xl overflow-hidden shadow-elevated card-hover"
              >
                <img
                  src={facility.image}
                  alt={facility.title}
                  className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/50 to-transparent opacity-90" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="p-2 bg-secondary rounded-lg">
                      <Icon className="w-5 h-5 text-secondary-foreground" />
                    </div>
                    <h3 className="text-xl font-serif font-bold text-primary-foreground">
                      {facility.title}
                    </h3>
                  </div>
                  <p className="text-primary-foreground/80 text-sm">
                    {facility.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Additional Facilities */}
        {/* <div className="grid md:grid-cols-2 gap-6">
          {additionalFacilities.map((facility) => {
            const Icon = facility.icon;
            return (
              <div
                key={facility.title}
                className="flex items-start gap-4 bg-card rounded-xl p-6 shadow-soft card-hover"
              >
                <div className="p-3 bg-accent/10 rounded-xl flex-shrink-0">
                  <Icon className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <h3 className="font-serif font-bold text-foreground mb-2">
                    {facility.title}
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    {facility.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div> */}

        {/* Campus Stats */}
        <div className="mt-16 bg-muted rounded-3xl p-8 md:p-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { value: "25", label: "Acre Campus" },
              { value: "4", label: "Academic Buildings" },
              { value: "100+", label: "Smart Classrooms" },
              { value: "24/7", label: "Security & Safety" }
            ].map((stat) => (
              <div key={stat.label}>
                <div className="text-3xl md:text-4xl font-bold text-primary mb-1">
                  {stat.value}
                </div>
                <div className="text-muted-foreground text-sm">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FacilitiesSection;
