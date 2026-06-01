import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { FileText } from "lucide-react";
import { Link } from "react-router-dom";

const stats = [
  { value: "5+", label: "ค่าย", sub: "โครงการค่ายที่หลากหลาย" },
  { value: "500+", label: "นักเรียน", sub: "เข้าร่วมกิจกรรม" },
  { value: "95%", label: "ความพึงพอใจ", sub: "จากนักเรียนทั้งหมด" },
];

const HeroSection = () => {
  return (
    <section
      className="section-padding-lg relative overflow-hidden"
      style={{ background: "var(--hero-gradient)" }}
    >
      <div className="container text-center">
        <motion.span
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-4 inline-block rounded-full border border-primary/20 bg-accent px-4 py-1.5 text-xs font-semibold text-accent-foreground"
        >
          โครงการค่ายกิจกรรม
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 20, filter: "blur(4px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="mx-auto max-w-3xl text-3xl font-extrabold leading-tight text-foreground md:text-5xl lg:text-6xl"
          style={{ lineHeight: 1.15 }}
        >
          ค่ายกิจกรรมนักเรียน
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.25 }}
          className="mx-auto mt-5 max-w-xl text-base text-muted-foreground md:text-lg"
        >
          เปิดการเรียนรู้นอกห้องเรียนที่เน้นการปฏิบัติเพื่อเสริมวิทยาการ
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.35 }}
          className="mx-auto mt-3 max-w-2xl text-sm text-muted-foreground"
        >
          ด้วยการจัดการเรียนรู้ที่เน้นให้ผู้เรียนลงมือปฏิบัติจริงในทุกกิจกรรมเพื่อเสริมสร้างทักษะที่จำเป็นต่อการดำรงชีวิตในศตวรรษที่ 21 และเพื่อเตรียมความพร้อมสู่การเป็นผู้ประกอบการที่มีความสามารถในการแข่งขันและความคิดสร้างสรรค์ในอนาคต
        </motion.p>

              <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.45 }}
        className="mt-8 flex flex-wrap items-center justify-center gap-4"
      >
        <Button size="lg" className="shadow-lg shadow-primary/20" asChild>
          <Link to="/register">สมัครค่ายกิจกรรม</Link>
        </Button>

        <Button variant="outline" size="lg" asChild>
          <a
            href="https://forms.gle/7M867BaY6kHve55J8"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FileText className="mr-2 h-4 w-4" />
            ขอใบเสนอราคากิจกรรม
          </a>
        </Button>
      </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-3"
        >
          {stats.map((s, i) => (
            <div key={i} className="text-center">
              <p className="text-gradient text-3xl font-extrabold md:text-4xl">
                {s.value} <span className="text-lg">{s.label}</span>
              </p>
              <p className="mt-1 text-sm text-muted-foreground">{s.sub}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
