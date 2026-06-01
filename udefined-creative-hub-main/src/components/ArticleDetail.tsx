import { motion } from "framer-motion";
import { useParams, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { articles } from "@/data/articles";
import { ChevronLeft } from "lucide-react"; // เพิ่ม icon
import logo from "@/assets/Logo.png"; // อย่าลืม import logo

const ArticleDetail = () => {
  const { id } = useParams();
  const article = articles.find((item) => item.id === id);

  if (!article) {
    return (
      <div className="container mx-auto flex min-h-screen items-center justify-center px-4 py-20">
        <div className="w-full max-w-xl rounded-3xl border bg-card p-10 text-center shadow-sm">
          <h1 className="text-3xl font-bold">ไม่พบบทความ</h1>
          <p className="mt-3 text-muted-foreground">
            บทความที่คุณกำลังค้นหาอาจถูกลบ ย้าย หรือไม่มีอยู่ในระบบ
          </p>
          <Link to="/">
            <Button className="mt-6">กลับหน้าแรก</Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      {/* --- Header ใหม่ (เหมือนหน้า CampDetail) --- */}
      <header className="sticky top-0 z-50 border-b border-slate-100 bg-white/80 backdrop-blur-md">
        <div className="container mx-auto flex h-20 items-center justify-between px-6">
          
          {/* Logo Section */}
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

          {/* ปุ่มกลับหน้าหลัก */}
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

      {/* --- ส่วนเนื้อหา --- */}
      <section className="container mx-auto px-4 py-8 md:py-14">
        <motion.div
          initial={{ opacity: 0, y: 24, filter: "blur(6px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 0.5 }}
          className="mx-auto max-w-4xl"
        >
          <article className="overflow-hidden rounded-[28px] border bg-card shadow-sm">
            <div className="bg-muted/20 px-4 pt-4 md:px-6 md:pt-6">
              <div className="overflow-hidden rounded-2xl">
                <img
                  src={article.image}
                  alt={article.title}
                  className="h-[240px] w-full object-cover md:h-[380px]"
                />
              </div>
            </div>

            <div className="px-5 py-8 md:px-12 md:py-10">
              <div className="mb-4 inline-flex rounded-full bg-orange-100 px-3 py-1 text-xs font-medium text-orange-500">
                บทความกิจกรรม
              </div>

              <h1 className="max-w-3xl text-2xl font-bold leading-tight tracking-tight md:text-4xl">
                {article.title}
              </h1>

              <p className="mt-4 max-w-3xl text-sm leading-7 text-muted-foreground md:text-base">
                {article.excerpt}
              </p>

              <div className="mt-6 h-px w-full bg-border" />

              <div className="mt-8 max-w-3xl">
                {article.content
                  .trim()
                  .split("\n")
                  .map((paragraph, index) =>
                    paragraph.trim() ? (
                      <p
                        key={index}
                        className="mb-5 text-[15px] leading-8 text-foreground/80 md:text-base"
                      >
                        {paragraph.trim()}
                      </p>
                    ) : null
                  )}
              </div>
            </div>
          </article>
        </motion.div>
      </section>
    </div>
  );
};

export default ArticleDetail;