import { motion } from "framer-motion";
import { MapPin, CalendarDays, Clock, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Link } from "react-router-dom";
import { camps, type Camp } from "@/data/camps";

const CampCard = ({ camp, index }: { camp: Camp; index: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 24 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.2 }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
    className="group overflow-hidden rounded-2xl border border-border bg-card shadow-sm transition-shadow hover:shadow-md"
  >
  {camp.images?.[0] && (
  <div className="relative overflow-hidden">
    <img
      src={camp.images[0]}
      alt={camp.title}
      className="aspect-[16/10] w-full object-cover transition-transform duration-500 group-hover:scale-105"
      loading="lazy"
    />
        {camp.badge && (
          <span className="absolute left-3 top-3 rounded-full bg-primary px-3 py-1 text-xs font-semibold text-primary-foreground">
            {camp.badge}
          </span>
        )}
        <div className="absolute bottom-3 left-3 flex gap-2">
          <span className="rounded-full bg-background/90 px-2.5 py-1 text-xs font-medium backdrop-blur">
            {camp.duration}
          </span>
          {camp.age && (
            <span className="rounded-full bg-background/90 px-2.5 py-1 text-xs font-medium backdrop-blur">
              {camp.age}
            </span>
          )}
        </div>
      </div>
    )}

    <div className="p-5">
      <h3 className="text-lg font-bold">{camp.title}</h3>
      <p className="mt-1.5 text-sm text-muted-foreground">{camp.desc}</p>

      <div className="mt-4 flex flex-wrap gap-2 text-xs text-muted-foreground">
        <span className="flex items-center gap-1">
          <CalendarDays className="h-3.5 w-3.5" />
          {camp.date}
        </span>
        <span className="flex items-center gap-1">
          <MapPin className="h-3.5 w-3.5" />
          {camp.location}
        </span>
      </div>

      {camp.programs && (
        <div className="mt-4">
          <p className="text-xs font-semibold text-muted-foreground">โปรแกรม:</p>
          <ul className="mt-1.5 space-y-1">
            {camp.programs.map((p) => (
              <li key={p} className="text-xs text-muted-foreground">
                • {p}
              </li>
            ))}
          </ul>
        </div>
      )}

      <div className="mt-5 flex items-center justify-between">
        <span className="text-xl font-bold text-primary">{camp.price}</span>
        <Button size="sm" variant="outline" asChild>
          <Link to={`/camps/${camp.id}`}>ดูรายละเอียด</Link>
        </Button>
      </div>
    </div>
  </motion.div>
);

const CampsSection = () => {
  const [tab, setTab] = useState<"domestic" | "international">("domestic");

  const visibleCamps = camps.filter((camp) =>
    tab === "domestic" ? camp.type === "domestic" : camp.type === "international"
  );

  const specialCamps = camps.filter((camp) => camp.type === "special");

  return (
    <section id="camps" className="section-padding">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20, filter: "blur(4px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-2xl text-center"
        >
          <h2 className="text-2xl font-bold md:text-4xl">ค่ายกิจกรรมที่มีให้เลือก</h2>
          <p className="mt-3 text-muted-foreground">
            ค้นหาค่ายที่เหมาะกับความสนใจของคุณ
          </p>
        </motion.div>

        <div className="mt-8 flex justify-center gap-2">
          {(["domestic", "international"] as const).map((t) => (
            <button
              key={t}
              onClick={() => setTab(t)}
              className={`rounded-full px-5 py-2 text-sm font-medium transition-all ${
                tab === t
                  ? "bg-primary text-primary-foreground shadow-sm"
                  : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
              }`}
            >
              {t === "domestic" ? "ค่ายในประเทศ" : "ค่ายต่างประเทศ"}
            </button>
          ))}
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {visibleCamps.map((camp, i) => (
            <CampCard key={camp.id} camp={camp} index={i} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="mt-20 text-center"
        >
          <h2 className="text-2xl font-bold md:text-3xl">ค่ายพิเศษเพิ่มเติม</h2>
          <p className="mt-2 text-muted-foreground">ค่ายกิจกรรมพิเศษที่น่าสนใจ</p>
        </motion.div>

        <div className="mt-8 grid gap-5 md:grid-cols-3">
          {specialCamps.map((c, i) => (
            <motion.div
              key={c.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="relative rounded-2xl border border-border bg-card p-6 shadow-sm transition-shadow hover:shadow-md"
            >
              {c.popular && (
                <span className="absolute -top-3 right-4 flex items-center gap-1 rounded-full bg-primary px-3 py-1 text-xs font-semibold text-primary-foreground">
                  <Star className="h-3 w-3" /> ยอดนิยม
                </span>
              )}

              <h3 className="text-lg font-bold">{c.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{c.desc}</p>

              <div className="mt-4 space-y-1.5 text-xs text-muted-foreground">
                <p className="flex items-center gap-1.5">
                  <CalendarDays className="h-3.5 w-3.5" />
                  {c.date}
                </p>
                <p className="flex items-center gap-1.5">
                  <Clock className="h-3.5 w-3.5" />
                  {c.duration}
                </p>
                <p className="flex items-center gap-1.5">
                  <MapPin className="h-3.5 w-3.5" />
                  {c.location}
                </p>
              </div>

              <div className="mt-5 flex items-center justify-between">
                <span className="text-lg font-bold text-primary">{c.price}</span>
                <Button size="sm" variant="outline" asChild>
                  <Link to={`/camps/${c.id}`}>ดูรายละเอียด</Link>
                </Button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CampsSection;