import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const CTASection = () => {
  return (
    <section className="section-padding-lg relative overflow-hidden bg-foreground text-primary-foreground">
      <div
        className="absolute inset-0 opacity-10"
        style={{
          background:
            "radial-gradient(circle at 30% 50%, hsl(24 95% 53%), transparent 60%)",
        }}
      />

      <div className="container relative text-center">
        <motion.div
          initial={{ opacity: 0, y: 20, filter: "blur(4px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-2xl font-bold md:text-4xl">
            พร้อมเริ่มต้นการเรียนรู้แล้วหรือยัง?
          </h2>

          <p className="mx-auto mt-4 max-w-lg text-sm text-primary-foreground/70">
            ลงทะเบียนวันนี้และเริ่มต้นการผจญภัยทางเทคโนโลยีของคุณ
            รับส่วนลด 10% สำหรับการสมัครก่อนวันที่ 28 กุมภาพันธ์ 2568
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Button size="lg" className="shadow-lg shadow-primary/30" asChild>
              <Link to="/register">สมัครเลย</Link>
            </Button>

          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;