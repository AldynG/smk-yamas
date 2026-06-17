import { useState } from "react";
import { MapPin, Phone, Mail, Clock, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import MapView from "@/components/MapComponent"

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: ""
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();

  try {
    const formDataToSend = new FormData();

    formDataToSend.append("name", formData.name);
    formDataToSend.append("email", formData.email);
    formDataToSend.append("phone", formData.phone);
    formDataToSend.append("subject", formData.subject);
    formDataToSend.append("message", formData.message);

    const response = await fetch("https://formspree.io/f/mlgkvyln", {
      method: "POST",
      body: formDataToSend,
      headers: {
        Accept: "application/json",
      },
    });

    const result = await response.json();

    if (response.ok) {
      alert("Pesan berhasil dikirim!");
      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
      });
    } else {
      console.log(result);
      alert(result?.error || "Gagal mengirim pesan.");
    }
  } catch (error) {
    console.error(error);
    alert("Error jaringan / server.");
  }
};


  return (
    <section id="contact" className="section-padding bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="divider-gold" />
          <h2 className="section-title">Hubungi Kami</h2>
          <p className="section-subtitle">
            Kami siap membantu Anda. Hubungi kami untuk informasi penerimaan siswa, kunjungan sekolah, atau pertanyaan lebih lanjut.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div>
            <h3 className="text-2xl font-serif font-bold text-foreground mb-6">
              Kontak Kami
            </h3>

            <div className="space-y-6 mb-8">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-primary/10 rounded-xl flex-shrink-0">
                  <MapPin className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">Alamat</h4>
                  <p className="text-muted-foreground">
                    Jl. Pusdiklat Depnaker, RT.6/RW.5<br />
                    Makasar, Kec. Makasar, Kota Jakarta Timur<br />
                    Daerah Khusus Ibukota Jakarta 13570
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 bg-primary/10 rounded-xl flex-shrink-0">
                  <Phone className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">Nomor Telepon</h4>
                  <p className="text-muted-foreground">
                    (021) 8097955
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 bg-primary/10 rounded-xl flex-shrink-0">
                  <Mail className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">Email</h4>
                  <p className="text-muted-foreground">
                     smk_yamas@yahoo.co.id
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 bg-primary/10 rounded-xl flex-shrink-0">
                  <Clock className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">Jam Kerja</h4>
                  <p className="text-muted-foreground">
                    Senin - Jumat: 7:30 AM - 4:30 PM<br />
                  </p>
                </div>
              </div>
            </div>

            {/* Map Placeholder */}
            <div className="rounded-2xl overflow-hidden shadow-elevated">
              <div className="h-64 rounded-2xl overflow-hidden">
                <MapView />
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-card rounded-2xl p-8 shadow-elevated">
            <h3 className="text-2xl font-serif font-bold text-foreground mb-6">
              Kirim Kami Pesan
            </h3>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid md:grid-cols-2 gap-5">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-foreground mb-2"
                  >
                    Nama Lengkap *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-input bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary transition-all"
                    placeholder="Nama anda"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-foreground mb-2"
                  >
                    Alamat Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-input bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary transition-all"
                    placeholder="alamatemail@gmail.com"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-5">
                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm font-medium text-foreground mb-2"
                  >
                    Nomor Telepon
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-input bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary transition-all"
                    placeholder="0812-3456-789"
                  />
                </div>
                <div>
                  <label
                    htmlFor="subject"
                    className="block text-sm font-medium text-foreground mb-2"
                  >
                    Subjek *
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-input bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary transition-all"
                  >
                    <option value="">Pilih Subjek</option>
                    <option value="admissions">Kebutuhan Pendaftaran</option>
                    <option value="tour">penjadwalan Kunjungan</option>
                    <option value="academics">Program Akademis</option>
                    <option value="general">Pertanyaan Umum</option>
                    <option value="other">Lainnya</option>
                  </select>
                </div>
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-foreground mb-2"
                >
                  Pesan *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 rounded-lg border border-input bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary transition-all resize-none"
                  placeholder="Apa yang bisa kami bantu?"
                />
              </div>

              <Button type="submit" size="lg" className="w-full">
                <Send className="w-4 h-4" />
                Kirim Pesan
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
