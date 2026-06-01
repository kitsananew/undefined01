import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { articles } from "@/data/articles";

const ArticlesSection = () => {
  return (
    <section id="articles" className="section-padding">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20, filter: "blur(4px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-2xl text-center"
        >
          <h2 className="text-2xl font-bold md:text-4xl">บทความและกิจกรรม</h2>
          <p className="mt-4 text-muted-foreground">
            อัปเดตเรื่องราว กิจกรรม และบทความน่าสนใจจากค่ายของเรา
          </p>
        </motion.div>

        <div className="mt-14 grid gap-8 sm:grid-cols-2 xl:grid-cols-3">
          {articles.map((article, i) => (
            <motion.div
              key={article.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="overflow-hidden rounded-2xl border border-border bg-card shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={article.image}
                  alt={article.title}
                  className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>

              <div className="p-6">
                <h3 className="line-clamp-2 text-lg font-semibold">
                  {article.title}
                </h3>
                <p className="mt-3 line-clamp-3 text-sm text-muted-foreground">
                  {article.excerpt}
                </p>

                <Link
                  to={`/articles/${article.id}`}
                  className="mt-5 inline-flex items-center text-sm font-medium text-primary hover:underline"
                >
                  อ่านเพิ่มเติม →
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ArticlesSection;