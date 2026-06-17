import { useState } from "react";
import { X } from "lucide-react";
import gallery1 from "@/assets/gallery-1.jpg";
import gallery2 from "@/assets/gallery-2.jpg";
import gallery3 from "@/assets/gallery-3.jpg";
import gallery4 from "@/assets/gallery-4.jpg";
import gallery5 from "@/assets/gallery-5.jpg";
import gallery6 from "@/assets/gallery-6.jpg";

const images = [
  { src: gallery1, alt: "Students engaged in classroom discussion", category: "Academic" },
  { src: gallery2, alt: "Graduation ceremony celebration", category: "Events" },
  { src: gallery3, alt: "Sports day athletic competition", category: "Sports" },
  { src: gallery4, alt: "Science fair presentations", category: "Academic" },
  { src: gallery5, alt: "Music concert performance", category: "Arts" },
  { src: gallery6, alt: "Art class creativity", category: "Arts" },
];

const categories = ["All", "Academic", "Events", "Sports", "Arts"];

const GallerySection = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const filteredImages =
    selectedCategory === "All"
      ? images
      : images.filter((img) => img.category === selectedCategory);

  return (
    <section id="gallery" className="section-padding bg-muted">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="divider-gold" />
          <h2 className="section-title">Photo Gallery</h2>
          <p className="section-subtitle">
            Glimpses of life, learning, and memories at SMK YAMAS
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${
                selectedCategory === category
                  ? "bg-primary text-primary-foreground shadow-soft"
                  : "bg-card text-foreground hover:bg-primary/10"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {filteredImages.map((image, index) => (
            <div
              key={image.alt}
              onClick={() => setSelectedImage(image.src)}
              className="relative aspect-square rounded-2xl overflow-hidden cursor-pointer group"
              style={{ animationDelay: `${index * 50}ms` }}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/60 transition-colors flex items-center justify-center">
                <span className="text-primary-foreground font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                  {image.category}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox */}
        {selectedImage && (
          <div
            className="fixed inset-0 z-50 bg-foreground/90 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-6 right-6 text-background hover:text-secondary transition-colors"
              aria-label="Close gallery"
            >
              <X className="w-8 h-8" />
            </button>
            <img
              src={selectedImage}
              alt="Gallery preview"
              className="max-w-full max-h-[85vh] rounded-lg shadow-prominent"
              onClick={(e) => e.stopPropagation()}
            />
          </div>
        )}

        {/* View More */}
        <div className="text-center mt-12">
          <p className="text-muted-foreground">
            Follow us on social media for more updates and photos
          </p>
          <div className="flex justify-center gap-4 mt-4">
            {["Facebook", "Instagram", "Twitter", "YouTube"].map((social) => (
              <a
                key={social}
                href="#"
                className="text-primary hover:text-secondary transition-colors font-medium text-sm"
              >
                {social}
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
