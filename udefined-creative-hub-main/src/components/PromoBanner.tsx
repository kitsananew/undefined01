import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";

import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// ข้อมูลโปรโมชั่นสำหรับสไลด์
const promoItems = [
  {
    tag: "โปรโมชั่นพิเศษ!",
    title: "ค่ายกิจกรรมญี่ปุ่น 5 วัน",
    desc: "ที่ Doshisha University | เยี่ยมชม โอซาก้า และ ฟูกูโอกะ",
    buttonText: "สมัครเลย - ลดพิเศษ 15%",
    link: "/register",
    gradient: "from-red-600 via-orange-500 to-yellow-400",
    tagColor: "text-red-600",
  },
  {
    tag: "โปรโมชั่นพิเศษ!",
    title: "ค่าย AI & Robotics 4 วัน",
    desc: "เรียนรู้ปัญญาประดิษฐ์และหุ่นยนต์ขั้นสูง | เชียงใหม่",
    buttonText: "สมัครเลย - ลดพิเศษ 10%",
    link: "/register",
    gradient: "from-blue-600 via-cyan-500 to-emerald-500",
    tagColor: "text-blue-600",
  },
  {
    tag: "โปรโมชั่นพิเศษ!",
    title: "ค่ายเทคโนโลยีสุนทรีกิจกรรม 2 วัน",
    desc: "พัฒนาทักษะด้านวิศวกรรมและเทคโนโลยีสำหรับเยาวชน",
    buttonText: "สมัครเลย - ลดพิเศษ 20%",
    link: "/register",
    gradient: "from-purple-600 via-pink-500 to-rose-500",
    tagColor: "text-purple-600",
  },
];

const PromoBanner = () => {
  return (
    <div className="relative overflow-hidden text-white">
      <Swiper
        modules={[Autoplay, Navigation, Pagination]}
        spaceBetween={0}
        slidesPerView={1}
        loop={true}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        navigation={{
          nextEl: ".swiper-button-next-custom",
          prevEl: ".swiper-button-prev-custom",
        }}
        pagination={{
          clickable: true,
          el: ".promo-pagination",
        }}
        className="relative"
      >
        {promoItems.map((item, index) => (
          <SwiperSlide key={index}>
            <div
              className={`relative min-h-[96px] bg-gradient-to-r ${item.gradient}`}
            >
              <div className="container mx-auto flex min-h-[96px] items-center justify-between gap-6 px-14 md:px-20">
                <div className="flex flex-col items-start gap-2 md:flex-row md:items-center md:gap-5">
                  {/* Tag */}
                  <span
                    className={`whitespace-nowrap rounded-md bg-white px-3 py-1 text-xs font-bold shadow-sm ${item.tagColor}`}
                  >
                    {item.tag}
                  </span>

                  {/* ข้อความ */}
                  <div className="leading-tight">
                    <div className="text-base font-extrabold text-white md:text-xl">
                      {item.title}
                    </div>

                    <div className="mt-1 text-xs font-semibold text-white/95 md:text-sm">
                      {item.desc}
                    </div>
                  </div>
                </div>

                {/* ปุ่ม Action */}
                <Link to={item.link} className="hidden shrink-0 md:block">
                  <Button
                    size="sm"
                    className="h-10 rounded-md bg-white px-8 text-sm font-extrabold text-slate-900 shadow-lg transition hover:scale-105 hover:bg-white/95"
                  >
                    {item.buttonText}
                  </Button>
                </Link>
              </div>
            </div>
          </SwiperSlide>
        ))}

        {/* ปุ่มซ้าย */}
        <button
          className="swiper-button-prev-custom absolute left-4 top-1/2 z-20 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full bg-white/15 text-white backdrop-blur-sm transition hover:scale-110 hover:bg-white/25 md:left-6"
          aria-label="โปรโมชั่นก่อนหน้า"
        >
          <ChevronLeft className="h-5 w-5" strokeWidth={2.5} />
        </button>

        {/* ปุ่มขวา */}
        <button
          className="swiper-button-next-custom absolute right-4 top-1/2 z-20 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full bg-white/15 text-white backdrop-blur-sm transition hover:scale-110 hover:bg-white/25 md:right-6"
          aria-label="โปรโมชั่นถัดไป"
        >
          <ChevronRight className="h-5 w-5" strokeWidth={2.5} />
        </button>

        {/* จุด pagination */}
        <div className="promo-pagination !absolute !bottom-2 !left-1/2 !z-20 !flex !w-auto !-translate-x-1/2 !items-center !justify-center !gap-2" />
      </Swiper>
    </div>
  );
};

export default PromoBanner;