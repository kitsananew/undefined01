import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

import { useToast } from "@/hooks/use-toast";
import { ChevronLeft, CheckCircle2 } from "lucide-react";
import logo from "@/assets/Logo.png";
import Footer from "@/components/Footer";

// ใส่ Google Apps Script Web App URL สำหรับฟอร์มขอใบเสนอราคาตรงนี้
const GOOGLE_SCRIPT_URL = "ใส่ลิงก์ Google Apps Script ตรงนี้";

const quotationSchema = z.object({
  teacherName: z.string().trim().min(2, "กรุณากรอกชื่อ-นามสกุลคุณครู"),
  schoolName: z.string().trim().min(2, "กรุณากรอกชื่อโรงเรียน"),
  affiliatedSchool: z.string().min(1, "กรุณาเลือกสังกัดโรงเรียน"),
  email: z.string().trim().email("กรุณากรอกอีเมลให้ถูกต้อง"),
  lineId: z.string().trim().optional(),
  phone: z
    .string()
    .trim()
    .min(9, "กรุณากรอกเบอร์โทรศัพท์")
    .max(15)
    .regex(/^[0-9+\-()\s]+$/, "เบอร์โทรศัพท์ไม่ถูกต้อง"),
  address: z.string().trim().min(5, "กรุณากรอกที่อยู่"),
  interestedActivity: z.string().trim().optional(),
  objectives: z.string().trim().min(5, "กรุณากรอกวัตถุประสงค์"),
  activityContent: z.string().trim().min(3, "กรุณากรอกเนื้อหากิจกรรมที่ต้องการ"),
  activityFormat: z.string().trim().min(3, "กรุณากรอกรูปแบบกิจกรรม"),
  venue: z.string().trim().min(3, "กรุณากรอกสถานที่จัดกิจกรรม"),
  activityDays: z.string().min(1, "กรุณาเลือกจำนวนวันที่ต้องการจัด"),
  preferredDate: z.string().min(1, "กรุณาระบุวันที่ต้องการจัด"),
  studentCount: z.string().trim().min(1, "กรุณากรอกจำนวนนักเรียน"),
  gradeLevel: z.string().trim().min(1, "กรุณากรอกระดับชั้น"),
  budgetType: z.string().min(1, "กรุณาเลือกรูปแบบงบประมาณ"),
  instructor: z.string().min(1, "กรุณาเลือกประเภทวิทยากร"),
  estimatedBudget: z.string().trim().min(1, "กรุณากรอกงบประมาณโดยประมาณ"),
  specialRequests: z.string().trim().optional(),
});

type QuotationForm = z.infer<typeof quotationSchema>;

const QuotationHeader = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-100 bg-white/90 backdrop-blur-md">
      <div className="container mx-auto flex h-20 items-center justify-between px-6">
        <Link
          to="/"
          className="group flex items-center gap-4 transition-transform hover:scale-[1.02]"
        >
          <img
            src={logo}
            alt="UDEFiNED"
            className="h-14 w-14 object-contain md:h-16 md:w-16"
          />

          <div className="flex flex-col">
            <span className="text-xl font-black tracking-tight text-slate-900 md:text-2xl">
              UDEFINED
            </span>
            <span className="text-[9px] font-bold uppercase tracking-[0.15em] text-orange-500 md:text-[11px]">
              TECHNOLOGY ACADEMY
            </span>
          </div>
        </Link>

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
  );
};

const Quotation = () => {
  const [submitted, setSubmitted] = useState(false);
  const { toast } = useToast();
  const navigate = useNavigate();

  const form = useForm<QuotationForm>({
    resolver: zodResolver(quotationSchema),
    defaultValues: {
      teacherName: "",
      schoolName: "",
      affiliatedSchool: "",
      email: "",
      lineId: "",
      phone: "",
      address: "",
      interestedActivity: "",
      objectives: "",
      activityContent: "",
      activityFormat: "",
      venue: "",
      activityDays: "",
      preferredDate: "",
      studentCount: "",
      gradeLevel: "",
      budgetType: "",
      instructor: "",
      estimatedBudget: "",
      specialRequests: "",
    },
  });

  const onSubmit = async (data: QuotationForm) => {
    const payload = {
      teacherName: data.teacherName,
      schoolName: data.schoolName,
      affiliatedSchool: data.affiliatedSchool,
      email: data.email,
      lineId: data.lineId || "",
      phone: data.phone,
      address: data.address,
      interestedActivity: data.interestedActivity || "",
      objectives: data.objectives,
      activityContent: data.activityContent,
      activityFormat: data.activityFormat,
      venue: data.venue,
      activityDays: data.activityDays,
      preferredDate: data.preferredDate,
      studentCount: data.studentCount,
      gradeLevel: data.gradeLevel,
      budgetType: data.budgetType,
      instructor: data.instructor,
      estimatedBudget: data.estimatedBudget,
      specialRequests: data.specialRequests || "",
    };

    try {
      const formBody = new URLSearchParams();
      formBody.append("payload", JSON.stringify(payload));

      await fetch(GOOGLE_SCRIPT_URL, {
        method: "POST",
        mode: "no-cors",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8",
        },
        body: formBody.toString(),
      });

      setSubmitted(true);

      toast({
        title: "ส่งคำขอสำเร็จ!",
        description: "ทีมงานได้รับข้อมูลสำหรับจัดทำใบเสนอราคาแล้ว",
      });

      form.reset();
    } catch (error) {
      console.error("Quotation submit error:", error);

      toast({
        title: "เกิดข้อผิดพลาด",
        description: "ไม่สามารถส่งข้อมูลได้ กรุณาลองใหม่อีกครั้ง",
        variant: "destructive",
      });
    }
  };

  if (submitted) {
    return (
      <div className="min-h-screen bg-background">
        <QuotationHeader />

        <section
          className="section-padding-lg"
          style={{ background: "var(--hero-gradient)" }}
        >
          <div className="container">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="mx-auto max-w-md rounded-2xl border border-border bg-card p-10 text-center shadow-lg"
            >
              <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-accent">
                <CheckCircle2 className="h-8 w-8 text-primary" />
              </div>

              <h2 className="text-2xl font-bold">ส่งคำขอใบเสนอราคาสำเร็จ!</h2>

              <p className="mt-3 text-sm text-muted-foreground">
                ขอบคุณที่สนใจจัดกิจกรรมกับเรา ทีมงานจะตรวจสอบข้อมูลและติดต่อกลับเพื่อจัดทำใบเสนอราคาที่เหมาะสมที่สุด
              </p>

              <Button className="mt-6" onClick={() => navigate("/")}>
                กลับหน้าแรก
              </Button>
            </motion.div>
          </div>
        </section>

        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <QuotationHeader />

      <section
        className="section-padding"
        style={{ background: "var(--hero-gradient)" }}
      >
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20, filter: "blur(4px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.6 }}
            className="mx-auto max-w-3xl"
          >
            <div className="text-center">
              <span className="inline-block rounded-full border border-primary/20 bg-accent px-4 py-1.5 text-xs font-semibold text-accent-foreground">
                Request Quotation
              </span>

              <h1 className="mt-4 text-2xl font-bold md:text-4xl">
                ขอใบเสนอราคากิจกรรม
              </h1>

              <p className="mx-auto mt-3 max-w-2xl text-muted-foreground">
                กรอกข้อมูลความต้องการของโรงเรียน แล้วทีมงานจะจัดทำใบเสนอราคาที่เหมาะสมที่สุดให้คุณ
              </p>
            </div>

            <div className="mt-10 rounded-2xl border border-border bg-card p-6 shadow-sm md:p-8">
              <Form {...form}>
                <form
                  onSubmit={form.handleSubmit(onSubmit)}
                  className="space-y-8"
                >
                  <div>
                    <h3 className="mb-4 text-lg font-semibold">
                      ข้อมูลผู้ติดต่อ
                    </h3>

                    <div className="grid gap-4 sm:grid-cols-2">
                      <FormField
                        control={form.control}
                        name="teacherName"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>ชื่อ-นามสกุลคุณครู *</FormLabel>
                            <FormControl>
                              <Input placeholder="เช่น ครูสมชาย ใจดี" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="schoolName"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>ชื่อโรงเรียน *</FormLabel>
                            <FormControl>
                              <Input placeholder="ชื่อโรงเรียน" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="affiliatedSchool"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>โรงเรียนในสังกัด *</FormLabel>
                            <Select
                              onValueChange={field.onChange}
                              value={field.value}
                            >
                              <FormControl>
                                <SelectTrigger>
                                  <SelectValue placeholder="เลือกสังกัดโรงเรียน" />
                                </SelectTrigger>
                              </FormControl>
                              <SelectContent>
                                <SelectItem value="เอกชน (Private School)">
                                  เอกชน (Private School)
                                </SelectItem>
                                <SelectItem value="รัฐบาล (Government School)">
                                  รัฐบาล (Government School)
                                </SelectItem>
                                <SelectItem value="นานาชาติ (International School)">
                                  นานาชาติ (International School)
                                </SelectItem>
                              </SelectContent>
                            </Select>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>อีเมล *</FormLabel>
                            <FormControl>
                              <Input
                                type="email"
                                placeholder="email@example.com"
                                {...field}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="lineId"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>ID LINE</FormLabel>
                            <FormControl>
                              <Input placeholder="@lineid หรือ LINE ID" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="phone"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>เบอร์โทรศัพท์ *</FormLabel>
                            <FormControl>
                              <Input
                                type="tel"
                                placeholder="0xx-xxx-xxxx"
                                {...field}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="address"
                        render={({ field }) => (
                          <FormItem className="sm:col-span-2">
                            <FormLabel>ที่อยู่ *</FormLabel>
                            <FormControl>
                              <Textarea
                                placeholder="ที่อยู่โรงเรียนหรือสถานที่ติดต่อ"
                                rows={3}
                                {...field}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                  </div>

                  <div>
                    <h3 className="mb-4 text-lg font-semibold">
                      รายละเอียดกิจกรรม
                    </h3>

                    <div className="grid gap-4 sm:grid-cols-2">
                      <FormField
                        control={form.control}
                        name="interestedActivity"
                        render={({ field }) => (
                          <FormItem className="sm:col-span-2">
                            <FormLabel>
                              รายละเอียดกิจกรรมที่สนใจ
                            </FormLabel>
                            <FormControl>
                              <Textarea
                                placeholder="เช่น ค่ายต่างประเทศ / ค่าย AI / ค่าย Coding / ค่ายหุ่นยนต์"
                                rows={3}
                                {...field}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="objectives"
                        render={({ field }) => (
                          <FormItem className="sm:col-span-2">
                            <FormLabel>
                              วัตถุประสงค์ / สิ่งที่อยากให้นักเรียนได้รับ *
                            </FormLabel>
                            <FormControl>
                              <Textarea
                                placeholder="ระบุเป้าหมายของกิจกรรม เช่น พัฒนาทักษะ Coding, AI, Teamwork"
                                rows={3}
                                {...field}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="activityContent"
                        render={({ field }) => (
                          <FormItem className="sm:col-span-2">
                            <FormLabel>เนื้อหากิจกรรมที่ต้องการ *</FormLabel>
                            <FormControl>
                              <Textarea
                                placeholder="ระบุหัวข้อหรือเนื้อหาที่ต้องการให้จัดกิจกรรม"
                                rows={3}
                                {...field}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="activityFormat"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>รูปแบบกิจกรรม *</FormLabel>
                            <FormControl>
                              <Input
                                placeholder="เช่น Workshop / Camp / Online / On-site"
                                {...field}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="venue"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>สถานที่จัดกิจกรรม *</FormLabel>
                            <FormControl>
                              <Input
                                placeholder="เช่น ในโรงเรียน / ห้องประชุม / หอประชุม"
                                {...field}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="activityDays"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>จำนวนวันที่ต้องการจัด *</FormLabel>
                            <Select
                              onValueChange={field.onChange}
                              value={field.value}
                            >
                              <FormControl>
                                <SelectTrigger>
                                  <SelectValue placeholder="เลือกจำนวนวัน" />
                                </SelectTrigger>
                              </FormControl>
                              <SelectContent>
                                <SelectItem value="1 วัน">1 วัน</SelectItem>
                                <SelectItem value="2 วัน">2 วัน</SelectItem>
                                <SelectItem value="3 วัน">3 วัน</SelectItem>
                                <SelectItem value="อื่น ๆ">อื่น ๆ</SelectItem>
                              </SelectContent>
                            </Select>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="preferredDate"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>วันที่ต้องการจัด *</FormLabel>
                            <FormControl>
                              <Input type="date" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="studentCount"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>จำนวนนักเรียน *</FormLabel>
                            <FormControl>
                              <Input
                                type="number"
                                placeholder="เช่น 100"
                                {...field}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="gradeLevel"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>ระดับชั้น *</FormLabel>
                            <FormControl>
                              <Input
                                placeholder="เช่น ป.4-ป.6 / ม.1-ม.3"
                                {...field}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                  </div>

                  <div>
                    <h3 className="mb-4 text-lg font-semibold">
                      งบประมาณและวิทยากร
                    </h3>

                    <div className="grid gap-4 sm:grid-cols-2">
                      <FormField
                        control={form.control}
                        name="budgetType"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>รูปแบบงบประมาณ *</FormLabel>
                            <Select
                              onValueChange={field.onChange}
                              value={field.value}
                            >
                              <FormControl>
                                <SelectTrigger>
                                  <SelectValue placeholder="เลือกรูปแบบงบประมาณ" />
                                </SelectTrigger>
                              </FormControl>
                              <SelectContent>
                                <SelectItem value="แบบรายหัว">
                                  แบบรายหัว (ต่อนักเรียน 1 คน)
                                </SelectItem>
                                <SelectItem value="แบบเหมาวิทยากร">
                                  แบบเหมาวิทยากร (จ้างวิทยากรเหมา)
                                </SelectItem>
                                <SelectItem value="Project Base">
                                  Project Base (งบประมาณรวมทั้งโครงการ)
                                </SelectItem>
                              </SelectContent>
                            </Select>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="instructor"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>วิทยากร *</FormLabel>
                            <Select
                              onValueChange={field.onChange}
                              value={field.value}
                            >
                              <FormControl>
                                <SelectTrigger>
                                  <SelectValue placeholder="เลือกประเภทวิทยากร" />
                                </SelectTrigger>
                              </FormControl>
                              <SelectContent>
                                <SelectItem value="วิทยากรไทย">
                                  วิทยากรไทย (Thai Instructor)
                                </SelectItem>
                                <SelectItem value="วิทยากรต่างชาติ">
                                  วิทยากรต่างชาติ (International Instructor)
                                </SelectItem>
                                <SelectItem value="ทั้งสองแบบ">
                                  ทั้งสองแบบ (Both Thai and Foreign Instructors)
                                </SelectItem>
                              </SelectContent>
                            </Select>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="estimatedBudget"
                        render={({ field }) => (
                          <FormItem className="sm:col-span-2">
                            <FormLabel>งบประมาณโดยประมาณ *</FormLabel>
                            <FormControl>
                              <Input
                                placeholder="เช่น 30,000 บาท / 100,000 บาท"
                                {...field}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="specialRequests"
                        render={({ field }) => (
                          <FormItem className="sm:col-span-2">
                            <FormLabel>ข้อเสนอพิเศษที่ต้องการ</FormLabel>
                            <FormControl>
                              <Textarea
                                placeholder="เช่น ต้องการใบเสนอราคาแบบละเอียด / ต้องการรวมค่าเดินทาง / ต้องการกิจกรรมพิเศษ"
                                rows={3}
                                {...field}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                  </div>

                  <Button
                    type="submit"
                    size="lg"
                    className="w-full shadow-lg shadow-primary/20"
                  >
                    ส่งคำขอใบเสนอราคา
                  </Button>

                  <p className="text-center text-xs text-muted-foreground">
                    เมื่อกดส่งคำขอ ทีมงานจะตรวจสอบข้อมูลและติดต่อกลับเพื่อจัดทำใบเสนอราคา
                  </p>
                </form>
              </Form>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Quotation;