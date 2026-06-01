import Logo from "@/assets/Logo.png";
import { Facebook, Instagram, } from "lucide-react";

const Footer = () => {
  return (
    <footer id="contact" className="bg-[#020b1c] py-12 text-white">
      <div className="container mx-auto px-4">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <img
              src={Logo}
              alt="Udefined Technology Academy"
              className="w-[180px] max-w-full object-contain sm:w-[200px]"
            />
            <p className="mt-5 text-sm font-medium text-white">
              สร้างอนาคตด้วยเทคโนโลยีและนวัตกรรม
            </p>
          </div>

          <div>
            <h4 className="mb-4 text-2xl font-extrabold">เกี่ยวกับเรา</h4>
            <ul className="space-y-2 text-sm text-white/95">
              <li>
                <a href="#about" className="transition hover:text-[#1e88ff]">
                  เกี่ยวกับองค์กร
                </a>
              </li>
              <li>
                <a href="#camps" className="transition hover:text-[#1e88ff]">
                  ค่ายกิจกรรม
                </a>
              </li>
              <li>
                <a href="#gallery" className="transition hover:text-[#1e88ff]">
                  แกลเลอรี่
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="mb-4 text-2xl font-extrabold">ติดต่อเรา</h4>
            <div className="space-y-2 text-sm text-white/95">
              <p>065-591-6947</p>
              <p className="max-w-[260px] leading-7">
                20/6 Mahidol Road, Tha Sala Subdistrict, Mueang District,
                Chiang Mai Province 50000
              </p>
            </div>
          </div>

          <div>
            <h4 className="mb-4 text-2xl font-extrabold">ติดตามเรา</h4>

            <div className="space-y-4">
              <a
                href="https://www.facebook.com/udefined.ac/"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-3 text-sm transition hover:opacity-90"
              >
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#1877F2] text-white">
                  <Facebook className="h-5 w-5 fill-current" />
                </span>
                <span className="text-white transition group-hover:text-[#1e88ff]">
                  Udefined Tech Academy
                </span>
              </a>

              <a
                href="https://www.instagram.com/udefined.ac/"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-3 text-sm transition hover:opacity-90"
              >
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-[#f9ce34] via-[#ee2a7b] to-[#6228d7] text-white">
                  <Instagram className="h-5 w-5" />
                </span>
                <span className="text-white transition group-hover:text-[#1e88ff]">
                  udefined.ac
                </span>
              </a>

             <a
  href="https://www.youtube.com/@udefined12"
  target="_blank"
  rel="noopener noreferrer"
  className="group flex items-center gap-3 text-sm transition hover:opacity-90"
>
  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#FF0000] text-white">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="h-5 w-5"
    >
      <path d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.5 3.5 12 3.5 12 3.5s-7.5 0-9.4.6A3 3 0 0 0 .5 6.2 31.7 31.7 0 0 0 0 12a31.7 31.7 0 0 0 .5 5.8 3 3 0 0 0 2.1 2.1c1.9.6 9.4.6 9.4.6s7.5 0 9.4-.6a3 3 0 0 0 2.1-2.1A31.7 31.7 0 0 0 24 12a31.7 31.7 0 0 0-.5-5.8ZM9.6 15.5v-7l6.2 3.5-6.2 3.5Z" />
    </svg>
  </span>
  <span className="text-white transition group-hover:text-[#1e88ff]">
    Udefined Tech Academy
  </span>
</a>
              <a
                href="https://www.tiktok.com/@udefined12"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-3 text-sm transition hover:opacity-90"
              >
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-black text-white">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="h-5 w-5"
                  >
                    <path d="M19.589 6.686a4.793 4.793 0 0 1-3.77-4.68h-3.13v12.761a2.84 2.84 0 1 1-2.84-2.84c.228 0 .45.027.664.076V8.83a5.968 5.968 0 1 0 5.306 5.937V8.28a7.9 7.9 0 0 0 4.77 1.6V6.686Z" />
                  </svg>
                </span>
                <span className="text-white transition group-hover:text-[#1e88ff]">
                  @udefined12
                </span>
              </a>
            </div>
          </div>
        </div>

        <div className="mt-10 border-t border-white/10 pt-5 text-center text-xs text-white/60">
          © 2026 Udefined Technology Academy. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;