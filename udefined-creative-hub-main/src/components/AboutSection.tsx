import { motion } from "framer-motion";
import { Users, Award, Heart } from "lucide-react";

const features = [
  {
    icon: Users,
    title: "ผู้สอนมืออาชีพ",
    desc: "เรียนรู้กับทีมผู้สอนมืออาชีพที่มีประสบการณ์ตรงในวงการเทคโนโลยี",
  },
  {
    icon: Award,
    title: "ใบประกาศนียบัตรมาตรฐานสากล",
    desc: "รับใบประกาศนียบัตรที่ได้รับการรับรองมาตรฐานสากลหลังจบกิจกรรม",
  },
  {
    icon: Heart,
    title: "พบเพื่อนใหม่ทันใจ",
    desc: "ความสัมพันธ์ที่ดีกับเพื่อนใหม่ที่มีความสนใจเดียวกัน 20 คนต่อค่าย",
  },
];

const AboutSection = () => {
  return (
    <section id="about" className="section-padding">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20, filter: "blur(4px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-2xl text-center"
        >
          <h2 className="text-2xl font-bold md:text-4xl">เกี่ยวกับค่ายของเรา</h2>
          <p className="mt-4 text-muted-foreground">
            ค่ายกิจกรรมของเราออกแบบมาเพื่อพัฒนาทักษะการเรียนรู้ในศตวรรษที่ 21
            ผ่านกิจกรรมที่หลากหลาย ประกอบด้วยเนื้อหาเชิงลึกและการลงมือปฏิบัติจริง
            ด้วยอุปกรณ์ที่ทันสมัย การสอนโดยผู้เชี่ยวชาญ และการดูแลอย่างใกล้ชิด
          </p>
        </motion.div>

        <div className="mt-14 grid gap-8 sm:grid-cols-3">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group rounded-2xl border border-border bg-card p-8 text-center shadow-sm transition-shadow hover:shadow-md"
            >
              <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-xl bg-accent text-primary transition-transform group-hover:scale-105">
                <f.icon className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-semibold">{f.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
