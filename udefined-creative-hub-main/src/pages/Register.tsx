import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { useToast } from "@/hooks/use-toast";
import { ArrowLeft, CheckCircle2 } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
const GOOGLE_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbx5k5PpTON0ccpkLeRAD7V2Ir59kNPo0Ybtp6MniPFZLsUcTikzrg-QYZllDtuBnkJLhA/exec";

const camps = [
  "ค่ายเขียนโปรแกรมเบื้องต้น (12-18 มี.ค. 2568)",
  "ค่ายหุ่นยนต์และอิเล็กทรอนิกส์ (25-31 มี.ค. 2568)",
  "ค่ายสร้างเกมและแอปพลิเคชัน (15-19 เม.ย. 2568)",
  "ค่ายนวัตกรรมและผู้ประกอบการ (5-9 พ.ค. 2568)",
  "ค่าย Coding Bootcamp (25-31 พ.ค. 2568)",
  "ค่าย AI & Machine Learning (10-16 มิ.ย. 2568)",
];

const registerSchema = z.object({
  studentName: z.string().trim().min(2, "กรุณากรอกชื่อ-นามสกุลนักเรียน").max(100),
  studentAge: z.string().trim().min(1, "กรุณากรอกอายุ").refine(
    (v) => { const n = Number(v); return !isNaN(n) && n >= 8 && n <= 20; },
    "อายุต้องอยู่ระหว่าง 8-20 ปี"
  ),
  school: z.string().trim().min(2, "กรุณากรอกชื่อโรงเรียน").max(150),
  grade: z.string().trim().min(1, "กรุณากรอกระดับชั้น").max(50),
  camp: z.string().min(1, "กรุณาเลือกค่ายกิจกรรม"),
  parentName: z.string().trim().min(2, "กรุณากรอกชื่อผู้ปกครอง").max(100),
  phone: z.string().trim().min(9, "กรุณากรอกเบอร์โทรศัพท์ที่ถูกต้อง").max(15).regex(/^[0-9\-+() ]+$/, "เบอร์โทรศัพท์ไม่ถูกต้อง"),
  email: z.string().trim().email("กรุณากรอกอีเมลที่ถูกต้อง").max(255),
  allergies: z.string().max(500).optional(),
  note: z.string().max(500).optional(),
});

type RegisterForm = z.infer<typeof registerSchema>;

const Register = () => {
  const [submitted, setSubmitted] = useState(false);
  const { toast } = useToast();
  const navigate = useNavigate();

  const form = useForm<RegisterForm>({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      studentName: "",
      studentAge: "",
      school: "",
      grade: "",
      camp: "",
      parentName: "",
      phone: "",
      email: "",
      allergies: "",
      note: "",
    },
  });

  const onSubmit = async (data: RegisterForm) => {
  const payload = {
    studentName: data.studentName,
    age: data.studentAge,
    level: data.grade,
    school: data.school,
    camp: data.camp,
    parentName: data.parentName,
    phone: data.phone,
    email: data.email,
    healthNote: data.allergies || "",
    note: data.note || "",
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
      title: "สมัครสำเร็จ!",
      description: "บันทึกข้อมูลลง Google Sheet แล้ว ทีมงานจะติดต่อกลับภายใน 2 วันทำการ",
    });

    form.reset();
  } catch (error) {
    console.error("Submit error:", error);

    toast({
      title: "เกิดข้อผิดพลาด",
      description: "ไม่สามารถส่งข้อมูลได้ กรุณาลองใหม่อีกครั้ง",
      variant: "destructive",
    });
  }
};

  if (submitted) {
    return (
      <div className="min-h-screen">
        <Navbar />
        <section className="section-padding-lg" style={{ background: "var(--hero-gradient)" }}>
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
              <h2 className="text-2xl font-bold">สมัครสำเร็จแล้ว!</h2>
              <p className="mt-3 text-sm text-muted-foreground">
                ขอบคุณที่สนใจค่ายกิจกรรมของเรา ทีมงานจะติดต่อกลับเพื่อยืนยันการสมัครภายใน 2 วันทำการ
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
    <div className="min-h-screen">
      <Navbar />
      <section className="section-padding" style={{ background: "var(--hero-gradient)" }}>
        <div className="container">
          <button
            onClick={() => navigate("/")}
            className="mb-6 inline-flex items-center gap-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            <ArrowLeft className="h-4 w-4" /> กลับหน้าแรก
          </button>

          <motion.div
            initial={{ opacity: 0, y: 20, filter: "blur(4px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.6 }}
            className="mx-auto max-w-2xl"
          >
            <div className="text-center">
              <span className="inline-block rounded-full border border-primary/20 bg-accent px-4 py-1.5 text-xs font-semibold text-accent-foreground">
                ลงทะเบียน
              </span>
              <h1 className="mt-4 text-2xl font-bold md:text-4xl" style={{ lineHeight: 1.2 }}>
                สมัครค่ายกิจกรรม
              </h1>
              <p className="mt-3 text-muted-foreground">
                กรอกข้อมูลด้านล่างเพื่อสมัครเข้าร่วมค่ายกิจกรรม
              </p>
            </div>

            <div className="mt-10 rounded-2xl border border-border bg-card p-6 shadow-sm md:p-8">
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  {/* Student Info */}
                  <div>
                    <h3 className="mb-4 text-lg font-semibold">ข้อมูลนักเรียน</h3>
                    <div className="grid gap-4 sm:grid-cols-2">
                      <FormField control={form.control} name="studentName" render={({ field }) => (
                        <FormItem className="sm:col-span-2">
                          <FormLabel>ชื่อ-นามสกุล นักเรียน</FormLabel>
                          <FormControl><Input placeholder="ชื่อ นามสกุล" {...field} /></FormControl>
                          <FormMessage />
                        </FormItem>
                      )} />
                      <FormField control={form.control} name="studentAge" render={({ field }) => (
                        <FormItem>
                          <FormLabel>อายุ</FormLabel>
                          <FormControl><Input type="number" placeholder="เช่น 14" {...field} /></FormControl>
                          <FormMessage />
                        </FormItem>
                      )} />
                      <FormField control={form.control} name="grade" render={({ field }) => (
                        <FormItem>
                          <FormLabel>ระดับชั้น</FormLabel>
                          <FormControl><Input placeholder="เช่น ม.2" {...field} /></FormControl>
                          <FormMessage />
                        </FormItem>
                      )} />
                      <FormField control={form.control} name="school" render={({ field }) => (
                        <FormItem className="sm:col-span-2">
                          <FormLabel>โรงเรียน</FormLabel>
                          <FormControl><Input placeholder="ชื่อโรงเรียน" {...field} /></FormControl>
                          <FormMessage />
                        </FormItem>
                      )} />
                    </div>
                  </div>

                  {/* Camp Selection */}
                  <FormField control={form.control} name="camp" render={({ field }) => (
                    <FormItem>
                      <h3 className="mb-2 text-lg font-semibold">เลือกค่ายกิจกรรม</h3>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="เลือกค่ายที่ต้องการสมัคร" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          {camps.map((c) => (
                            <SelectItem key={c} value={c}>{c}</SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )} />

                  {/* Parent Info */}
                  <div>
                    <h3 className="mb-4 text-lg font-semibold">ข้อมูลผู้ปกครอง</h3>
                    <div className="grid gap-4 sm:grid-cols-2">
                      <FormField control={form.control} name="parentName" render={({ field }) => (
                        <FormItem className="sm:col-span-2">
                          <FormLabel>ชื่อ-นามสกุล ผู้ปกครอง</FormLabel>
                          <FormControl><Input placeholder="ชื่อ นามสกุล" {...field} /></FormControl>
                          <FormMessage />
                        </FormItem>
                      )} />
                      <FormField control={form.control} name="phone" render={({ field }) => (
                        <FormItem>
                          <FormLabel>เบอร์โทรศัพท์</FormLabel>
                          <FormControl><Input type="tel" placeholder="0xx-xxx-xxxx" {...field} /></FormControl>
                          <FormMessage />
                        </FormItem>
                      )} />
                      <FormField control={form.control} name="email" render={({ field }) => (
                        <FormItem>
                          <FormLabel>อีเมล</FormLabel>
                          <FormControl><Input type="email" placeholder="email@example.com" {...field} /></FormControl>
                          <FormMessage />
                        </FormItem>
                      )} />
                    </div>
                  </div>

                  {/* Additional */}
                  <div>
                    <h3 className="mb-4 text-lg font-semibold">ข้อมูลเพิ่มเติม</h3>
                    <div className="space-y-4">
                      <FormField control={form.control} name="allergies" render={({ field }) => (
                        <FormItem>
                          <FormLabel>โรคประจำตัว / อาการแพ้ (ถ้ามี)</FormLabel>
                          <FormControl><Input placeholder="ระบุถ้ามี" {...field} /></FormControl>
                          <FormMessage />
                        </FormItem>
                      )} />
                      <FormField control={form.control} name="note" render={({ field }) => (
                        <FormItem>
                          <FormLabel>หมายเหตุ (ถ้ามี)</FormLabel>
                          <FormControl><Textarea placeholder="ข้อความเพิ่มเติม..." rows={3} {...field} /></FormControl>
                          <FormMessage />
                        </FormItem>
                      )} />
                    </div>
                  </div>

                  <Button type="submit" size="lg" className="w-full shadow-lg shadow-primary/20">
                    สมัครค่ายกิจกรรม
                  </Button>
                  <p className="text-center text-xs text-muted-foreground">
                    เมื่อกดสมัคร ทีมงานจะติดต่อกลับเพื่อยืนยันและแจ้งรายละเอียดการชำระเงิน
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

export default Register;
