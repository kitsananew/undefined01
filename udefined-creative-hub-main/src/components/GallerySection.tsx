import { motion } from "framer-motion";
import { useMemo, useState } from "react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";

import gallery1 from "@/assets/gallery-1.jpg";
import gallery2 from "@/assets/gallery-2.jpg";
import gallery3 from "@/assets/gallery-3.jpg";
import gallery4 from "@/assets/gallery-4.jpg";
import gallery5 from "@/assets/gallery-5.jpg";
import gallery6 from "@/assets/gallery-6.jpg";
import gallery7 from "@/assets/gallery-7.jpg";
import gallery8 from "@/assets/gallery-8.jpg";


import gallery9 from "@/assets/sut_coding1.jpg";
import gallery10 from "@/assets/sut_coding2.jpg";
import gallery11 from "@/assets/sut_coding3.jpg";
import gallery12 from "@/assets/sut_coding4.jpg";
import gallery13 from "@/assets/gallery-11.jpg";
import gallery14 from "@/assets/gallery-12.jpg";
import gallery15 from "@/assets/gallery-13.jpg";
import gallery16 from "@/assets/gallery-14.jpg";

const images = [
  { src: gallery1, alt: "นักเรียนทำกิจกรรม" },
  { src: gallery2, alt: "นักเรียนเรียนคอมพิวเตอร์" },
  { src: gallery3, alt: "นักเรียนนำเสนอผลงาน" },
  { src: gallery4, alt: "กิจกรรมหุ่นยนต์" },
  { src: gallery5, alt: "กิจกรรมหุ่นยนต์" },
  { src: gallery6, alt: "กิจกรรมหุ่นยนต์" },
  { src: gallery7, alt: "กิจกรรมหุ่นยนต์" },
  { src: gallery8, alt: "กิจกรรมหุ่นยนต์" },

  // เพิ่มรูปอีก 8 รูปแบบนี้ได้
   { src: gallery9, alt: "กิจกรรมชุดที่ 2 - 1" },
   { src: gallery10, alt: "กิจกรรมชุดที่ 2 - 2" },
   { src: gallery11, alt: "กิจกรรมชุดที่ 2 - 3" },
   { src: gallery12, alt: "กิจกรรมชุดที่ 2 - 4" },
   { src: gallery13, alt: "กิจกรรมชุดที่ 2 - 5" },
   { src: gallery14, alt: "กิจกรรมชุดที่ 2 - 6" },
   { src: gallery15, alt: "กิจกรรมชุดที่ 2 - 7" },
   { src: gallery16, alt: "กิจกรรมชุดที่ 2 - 8" },
];

const testimonials = [
  {
    quote:
      "ค่ายนี้ช่วยพัฒนาทักษะด้านเทคโนโลยีของลูกได้มาก ลูกกลับมาเล่าว่าสนุกมากและได้เรียนรู้สิ่งใหม่ๆ ครูผู้สอนใส่ใจและดูแลเด็กๆ อย่างดี",
   /*name: "คุณสมชาย ก.",
    role: "ผู้ปกครอง",
    img: gallery2,****/
  },
  {
    quote:
      "ค่ายกิจกรรมนี้ทำให้หนูได้เรียนรู้การเขียนโปรแกรมและทำหุ่นยนต์ที่สนุกมาก ได้เพื่อนใหม่เยอะและได้ลงมือทำจริงทุกอย่าง อยากกลับมาเรียนอีก!",
    /*name: "น้องนันท์นภัส ช.",
    role: "นักเรียน ม.2",
    img: gallery3,*/
  },
];

const chunkArray = <T,>(array: T[], size: number): T[][] => {
  const chunks: T[][] = [];
  for (let i = 0; i < array.length; i += size) {
    chunks.push(array.slice(i, i + size));
  }
  return chunks;
};

const GallerySection = () => {
  const [page, setPage] = useState(0);
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null);

  const imagePages = useMemo(() => chunkArray(images, 8), []);
  const totalPages = imagePages.length;

  const prevPage = () => {
    setPage((prev) => (prev === 0 ? totalPages - 1 : prev - 1));
  };

  const nextPage = () => {
    setPage((prev) => (prev === totalPages - 1 ? 0 : prev + 1));
  };

  const openImage = (globalIndex: number) => {
    setSelectedImageIndex(globalIndex);
  };

  const closeImage = () => {
    setSelectedImageIndex(null);
  };

  const prevImage = () => {
    if (selectedImageIndex === null) return;
    setSelectedImageIndex((prev) =>
      prev === null ? 0 : prev === 0 ? images.length - 1 : prev - 1
    );
  };

  const nextImage = () => {
    if (selectedImageIndex === null) return;
    setSelectedImageIndex((prev) =>
      prev === null ? 0 : prev === images.length - 1 ? 0 : prev + 1
    );
  };

  return (
    <>
      <section id="gallery" className="section-padding bg-secondary/50">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20, filter: "blur(4px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
            className="mx-auto max-w-2xl text-center"
          >
            <h2 className="text-2xl font-bold md:text-4xl">รีวิวและภาพบรรยากาศ</h2>
            <p className="mt-3 text-muted-foreground">
              ดูรูปภาพกิจกรรมและบรรยากาศการเรียนรู้ที่สนุกสนานและเต็มไปด้วยประสบการณ์ใหม่ๆ
            </p>
          </motion.div>

          <div className="relative mt-10">
            <div className="grid grid-cols-2 gap-3 md:grid-cols-4 md:gap-4">
              {imagePages[page].map((img, i) => {
                const globalIndex = page * 8 + i;

                return (
                  <motion.div
                    key={`${page}-${i}`}
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.5, delay: i * 0.08 }}
                    className="group overflow-hidden rounded-xl"
                  >
                    <button
                      type="button"
                      onClick={() => openImage(globalIndex)}
                      className="block w-full cursor-zoom-in"
                      aria-label={`ขยายรูป ${img.alt}`}
                    >
                      <img
                        src={img.src}
                        alt={img.alt}
                        className="aspect-[4/3] w-full object-cover transition-transform duration-500 group-hover:scale-105"
                        loading="lazy"
                      />
                    </button>
                  </motion.div>
                );
              })}
            </div>

            {totalPages > 1 && (
              <>
               <button
  onClick={prevPage}
  className="absolute -left-20 top-1/2 z-10 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-white text-orange-500 shadow-lg ring-1 ring-orange-100 transition hover:scale-110 hover:bg-orange-500 hover:text-white hover:shadow-orange-500/30"
  aria-label="รูปชุดก่อนหน้า"
>
  <ChevronLeft className="h-6 w-6" strokeWidth={2.5} />
</button>

<button
  onClick={nextPage}
  className="absolute -right-20 top-1/2 z-10 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-white text-orange-500 shadow-lg ring-1 ring-orange-100 transition hover:scale-110 hover:bg-orange-500 hover:text-white hover:shadow-orange-500/30"
  aria-label="รูปชุดถัดไป"
>
  <ChevronRight className="h-6 w-6" strokeWidth={2.5} />
</button>

                <div className="mt-6 flex justify-center gap-2">
                  {imagePages.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setPage(index)}
                      aria-label={`ไปหน้ารูปชุดที่ ${index + 1}`}
                      className={`h-2.5 w-2.5 rounded-full transition ${
                        page === index ? "bg-foreground" : "bg-foreground/30"
                      }`}
                    />
                  ))}
                </div>
              </>
            )}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mx-auto mt-14 max-w-2xl text-center"
          >
            <h3 className="text-xl font-bold">ปัจจัยของเราที่ทุกคนชอบใจ</h3>
          </motion.div>

          <div className="mt-8 grid gap-6 md:grid-cols-2">
            {testimonials.map((t, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: i === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="rounded-2xl border border-border bg-card p-6 shadow-sm"
              >
                <p className="text-sm leading-relaxed text-muted-foreground">
                  "{t.quote}"
                </p>
               
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {selectedImageIndex !== null && (
        <div
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/90 p-4"
          onClick={closeImage}
        >
          <button
            onClick={closeImage}
            className="absolute right-4 top-4 rounded-full bg-white/10 p-2 text-white transition hover:bg-white/20"
            aria-label="ปิดรูปภาพ"
          >
            <X className="h-6 w-6" />
          </button>

          {images.length > 1 && (
            <>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  prevImage();
                }}
                className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full bg-white/10 p-3 text-white transition hover:bg-white/20"
                aria-label="รูปก่อนหน้า"
              >
                <ChevronLeft className="h-6 w-6" />
              </button>

              <button
                onClick={(e) => {
                  e.stopPropagation();
                  nextImage();
                }}
                className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full bg-white/10 p-3 text-white transition hover:bg-white/20"
                aria-label="รูปถัดไป"
              >
                <ChevronRight className="h-6 w-6" />
              </button>
            </>
          )}

          <img
            src={images[selectedImageIndex].src}
            alt={images[selectedImageIndex].alt}
            className="max-h-[90vh] max-w-[95vw] rounded-xl object-contain"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </>
  );
};

export default GallerySection;