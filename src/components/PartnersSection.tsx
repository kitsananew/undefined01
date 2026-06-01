import { motion } from "framer-motion";
import niaLogo from "@/assets/partner-nia.png";
import ftiLogo from "@/assets/12-FTI-Lampang RGB โปร่ง-01.png";

const partners = [
  {
    name: "สำนักงานนวัตกรรมแห่งชาติ (NIA)",
    logo: niaLogo,
  },
  {
    name: "Federation of Thai Industries",
    logo: ftiLogo,
  },
];

const PartnersSection = () => {
  return (
    <section className="section-padding">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20, filter: "blur(4px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-2xl text-center"
        >
          <h2 className="text-2xl font-bold md:text-3xl">
            พันธมิตรและผู้สนับสนุน
          </h2>
          <p className="mt-3 text-muted-foreground">
            องค์กรที่ไว้วางใจและสนับสนุนการพัฒนาทักษะเยาวชนไทย
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="mt-10 flex flex-wrap items-center justify-center gap-10"
        >
          {partners.map((partner) => (
            <div
              key={partner.name}
              className="flex h-24 w-56 items-center justify-center rounded-xl border border-border bg-white px-4 shadow-sm"
            >
              <img
                src={partner.logo}
                alt={partner.name}
                className="max-h-12 w-auto object-contain"
              />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default PartnersSection;