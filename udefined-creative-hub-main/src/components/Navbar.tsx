import { useEffect, useState } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import logo from "@/assets/Logo.png";

const quotationFormUrl = "https://forms.gle/7M867BaY6kHve55J8";

const navLinks = [
  { label: "หน้าแรก", href: "#", id: "home" },
  { label: "เกี่ยวกับเรา", href: "#about", id: "about" },
  { label: "ค่ายกิจกรรม", href: "#camps", id: "camps" },
  { label: "แกลเลอรี่", href: "#gallery", id: "gallery" },
  { label: "ติดต่อ", href: "#contact", id: "contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["about", "camps", "gallery", "contact"];
      const scrollPosition = window.scrollY + 120;

      if (window.scrollY < 50) {
        setActiveSection("home");
        return;
      }

      for (const section of sections) {
        const element = document.getElementById(section);

        if (element) {
          const top = element.offsetTop;
          const height = element.offsetHeight;

          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-100 bg-white/80 backdrop-blur-md">
      <div className="container mx-auto flex h-20 items-center justify-between px-6">
        {/* Logo Section */}
        <a
          href="#"
          className="group flex items-center gap-4 transition-transform hover:scale-[1.02]"
          onClick={() => setActiveSection("home")}
        >
          <img
            src={logo}
            alt="UDEFiNED"
            className="h-16 w-16 object-contain"
          />

          <div className="flex flex-col">
            <span className="text-2xl font-black leading-none tracking-tight text-slate-900">
              UDEFiNED
            </span>
            <span className="mt-1 text-[11px] font-bold uppercase tracking-[0.15em] text-orange-500">
              Technology Academy
            </span>
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-1 lg:flex">
          {navLinks.map((l) => {
            const isActive = activeSection === l.id;

            return (
              <a
                key={l.id}
                href={l.href}
                className={`relative rounded-full px-4 py-2 text-sm font-medium transition-all duration-300 ${
                  isActive
                    ? "bg-orange-50/50 text-orange-600"
                    : "text-slate-600 hover:bg-slate-50 hover:text-orange-500"
                }`}
              >
                {l.label}
              </a>
            );
          })}

          {/* External Link: Google Form */}
          <div className="mx-2 h-4 w-[1px] bg-slate-200" />

          <a
            href={quotationFormUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 px-4 py-2 text-sm font-semibold text-slate-500 transition-colors hover:text-orange-600"
          >
            ขอใบเสนอราคา <ArrowUpRight className="h-3 w-3" />
          </a>

          <Button
            size="sm"
            className="ml-2 rounded-full bg-orange-500 px-6 font-bold text-white shadow-lg shadow-orange-200 transition-all hover:bg-orange-600 hover:shadow-orange-300 active:scale-95"
            asChild
          >
            <Link to="/register">ลงทะเบียน</Link>
          </Button>
        </nav>

        {/* Mobile Button */}
        <button
          type="button"
          className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-50 text-slate-600 lg:hidden"
          onClick={() => setOpen((prev) => !prev)}
          aria-label={open ? "ปิดเมนู" : "เปิดเมนู"}
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="absolute inset-x-0 top-full border-b bg-white p-4 shadow-xl lg:hidden">
          <div className="flex flex-col gap-2">
            {navLinks.map((l) => (
              <a
                key={l.id}
                href={l.href}
                onClick={() => setOpen(false)}
                className={`rounded-lg px-4 py-3 text-base font-semibold ${
                  activeSection === l.id
                    ? "bg-orange-50 text-orange-600"
                    : "text-slate-600"
                }`}
              >
                {l.label}
              </a>
            ))}

            <hr className="my-2 border-slate-100" />

            <a
              href={quotationFormUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setOpen(false)}
              className="flex items-center justify-center gap-2 rounded-xl border border-orange-100 bg-orange-50 px-4 py-3 text-base font-bold text-orange-600 transition-colors hover:bg-orange-100"
            >
              ขอใบเสนอราคา <ArrowUpRight className="h-4 w-4" />
            </a>

            <Button
              className="w-full rounded-xl bg-orange-500 py-6 text-base font-bold"
              asChild
            >
              <Link to="/register" onClick={() => setOpen(false)}>
                ลงทะเบียนเลย
              </Link>
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;