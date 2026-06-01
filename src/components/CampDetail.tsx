import { motion } from "framer-motion";
import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { camps } from "@/data/camps";
import { Button } from "@/components/ui/button";
import logo from "@/assets/Logo.png";
import {
  ChevronLeft,
  ChevronRight,
  CalendarDays,
  Clock,
  MapPin,
  X,
} from "lucide-react";

const CampDetail = () => {
  const { id } = useParams();
  const camp = camps.find((item) => item.id === id);

  const [currentImage, setCurrentImage] = useState(0);
  const [isImageOpen, setIsImageOpen] = useState(false);

  const images = camp?.images ?? [];

  useEffect(() => {
    window.scrollTo(0, 0);
    setCurrentImage(0);
    setIsImageOpen(false);
  }, [id]);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsImageOpen(false);
      }

      if (images.length > 1 && isImageOpen) {
        if (event.key === "ArrowLeft") {
          setCurrentImage((prev) => (prev === 0 ? images.length - 1 : prev - 1));
        }

        if (event.key === "ArrowRight") {
          setCurrentImage((prev) => (prev === images.length - 1 ? 0 : prev + 1));
        }
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [images.length, isImageOpen]);

  const prevImage = () => {
    if (images.length === 0) return;
    setCurrentImage((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const nextImage = () => {
    if (images.length === 0) return;
    setCurrentImage((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  if (!camp) {
    return (
      <div className="container mx-auto flex min-h-screen items-center justify-center px-4 py-20">
        <div className="w-full max-w-xl rounded-3xl border bg-card p-10 text-center shadow-sm">
          <h1 className="text-3xl font-bold">ไม่พบข้อมูลค่าย</h1>
          <p className="mt-3 text-muted-foreground">
            ค่ายที่คุณกำลังค้นหาอาจถูกลบ ย้าย หรือไม่มีอยู่ในระบบ
          </p>
          <Link to="/">
            <Button className="mt-6">กลับหน้าแรก</Button>
          </Link>
        </div>
      </div>
    );
  }

 return (
    <>
      <div className="min-h-screen bg-background">
        {/* --- เริ่มส่วน Header ที่ปรับปรุงใหม่ --- */}
        <header className="sticky top-0 z-50 border-b border-slate-100 bg-white/80 backdrop-blur-md">
          <div className="container mx-auto flex h-20 items-center justify-between px-6">
            
            {/* Logo Section - ปรับให้เหมือนหน้าแรก */}
            <Link to="/" className="group flex items-center gap-4 transition-transform hover:scale-[1.02]">
              <img 
                src={logo} 
                alt="UDEFiNED" 
                className="h-14 w-14 object-contain md:h-16 md:w-16" 
              />
              <div className="flex flex-col">
                <span className="text-xl font-black tracking-tight text-slate-900 md:text-2xl">
                  UDEFiNED
                </span>
                <span className="text-[9px] font-bold uppercase tracking-[0.15em] text-orange-500 md:text-[11px]">
                  Technology Academy
                </span>
              </div>
            </Link>

            {/* ปุ่มกลับหน้าหลัก - คงไว้เพียงปุ่มเดียวตามต้องการ */}
            <Button
              variant="ghost"
              className="rounded-full px-5 font-bold text-slate-600 transition-all hover:bg-orange-50 hover:text-orange-600 active:scale-95"
              asChild
            >
              <Link to="/" className="flex items-center gap-2">
                <ChevronLeft className="h-4 w-4" />
                กลับหน้าหลัก
              </Link>
            </Button>
          </div>
        </header>

  <section className="container mx-auto px-4 py-8 md:py-14">

          <motion.div
            initial={{ opacity: 0, y: 24, filter: "blur(6px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.5 }}
            className="mx-auto max-w-5xl"
          >
            <article className="overflow-hidden rounded-[28px] border bg-card shadow-sm">
              {images.length > 0 && (
                <div className="relative overflow-hidden rounded-t-[28px] bg-white">
                  <button
                    type="button"
                    onClick={() => setIsImageOpen(true)}
                    className="block w-full cursor-zoom-in"
                    aria-label="ขยายรูปภาพ"
                  >
                    <img
                      src={images[currentImage]}
                      alt={`${camp.title} ${currentImage + 1}`}
                      className="h-[230px] w-full object-cover object-top md:h-[500px]"
                    />
                  </button>

                  {images.length > 1 && (
                    <>
                      <button
                        onClick={prevImage}
                        className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full bg-black/40 p-2 text-white transition hover:bg-black/60"
                        aria-label="รูปก่อนหน้า"
                      >
                        <ChevronLeft className="h-5 w-5" />
                      </button>

                      <button
                        onClick={nextImage}
                        className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full bg-black/40 p-2 text-white transition hover:bg-black/60"
                        aria-label="รูปถัดไป"
                      >
                        <ChevronRight className="h-5 w-5" />
                      </button>

                      <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 gap-2">
                        {images.map((_, index) => (
                          <button
                            key={index}
                            onClick={() => setCurrentImage(index)}
                            aria-label={`ไปยังรูปที่ ${index + 1}`}
                            className={`h-2.5 w-2.5 rounded-full transition ${
                              currentImage === index ? "bg-black" : "bg-black/30"
                            }`}
                          />
                        ))}
                      </div>
                    </>
                  )}
                </div>
              )}

              <div className="px-5 py-8 md:px-12 md:py-10">
                <div className="mb-4 inline-flex rounded-full bg-orange-100 px-3 py-1 text-xs font-medium text-orange-500">
                  {camp.badge ?? "ค่ายกิจกรรม"}
                </div>

                <h1 className="max-w-4xl text-2xl font-bold leading-tight tracking-tight md:text-4xl">
                  {camp.title}
                </h1>

                <p className="mt-4 max-w-4xl text-sm leading-7 text-muted-foreground md:text-base">
                  {camp.desc}
                </p>

                <div className="mt-6 grid gap-3 text-sm text-muted-foreground md:grid-cols-3">
                  <div className="flex items-center gap-2">
                    <CalendarDays className="h-4 w-4" />
                    {camp.date}
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="h-4 w-4" />
                    {camp.duration}
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="h-4 w-4" />
                    {camp.location}
                  </div>
                </div>

                <div className="mt-6 flex flex-wrap items-center justify-between gap-4">
                  <span className="text-2xl font-bold text-primary">
                    {camp.price}
                  </span>
                  <Button asChild>
                    <Link to="/register">สมัครค่ายนี้</Link>
                  </Button>
                </div>

                {camp.programs && camp.programs.length > 0 && (
                  <div className="mt-8">
                    <h2 className="text-lg font-semibold">โปรแกรม</h2>
                    <ul className="mt-3 space-y-2">
                      {camp.programs.map((program) => (
                        <li
                          key={program}
                          className="rounded-xl bg-muted/40 px-4 py-3 text-sm text-foreground/80"
                        >
                          • {program}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                <div className="mt-8 h-px w-full bg-border" />

                <div className="mt-8 max-w-4xl whitespace-pre-wrap text-[15px] leading-8 text-foreground/80 md:text-base">
                  {camp.content.trim()}
                </div>
              </div>
            </article>
          </motion.div>
        </section>
      </div>

      {isImageOpen && images.length > 0 && (
        <div
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/90 p-4"
          onClick={() => setIsImageOpen(false)}
        >
          <button
            onClick={() => setIsImageOpen(false)}
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

              <div className="absolute bottom-6 left-1/2 flex -translate-x-1/2 gap-2">
                {images.map((_, index) => (
                  <button
                    key={index}
                    onClick={(e) => {
                      e.stopPropagation();
                      setCurrentImage(index);
                    }}
                    aria-label={`ไปยังรูปที่ ${index + 1}`}
                    className={`h-2.5 w-2.5 rounded-full transition ${
                      currentImage === index ? "bg-white" : "bg-white/40"
                    }`}
                  />
                ))}
              </div>
            </>
          )}

          <img
            src={images[currentImage]}
            alt={`${camp.title} ${currentImage + 1}`}
            className="max-h-[90vh] max-w-[95vw] rounded-xl object-contain"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </>
  );
};

export default CampDetail;