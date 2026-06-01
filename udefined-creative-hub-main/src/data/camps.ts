import coding3 from "@/assets/AR3.jpg";
import coding2 from "@/assets/AR2.jpg";
import coding1 from "@/assets/AR1.jpg";

import printing1 from "@/assets/print.jpg";
import printing2 from "@/assets/gallery-7.jpg";
import printing3 from "@/assets/gallery-8.jpg";

import sut1 from "@/assets/SUT Camp.png";
import sut2 from "@/assets/sut_coding1.jpg";
import sut3 from "@/assets/sut_coding2.jpg";
import sut4 from "@/assets/sut_coding3.jpg";
import sut5 from "@/assets/sut_coding4.jpg";

import kku from "@/assets/coding ai.jpg";

import japan1 from "@/assets/gallery-10.jpg";
import japan2 from "@/assets/cumpjapan2.png";
import japan3 from "@/assets/cumpjapan3.png";
import japan4 from "@/assets/cumpjapan4.png";

import py1 from "@/assets/python1.jpg";
import py2 from "@/assets/python2.jpg";
import py3 from "@/assets/python3.jpg";
import py4 from "@/assets/python4.jpg";
import py5 from "@/assets/python5.jpg";
import py6 from "@/assets/python6.jpg";


import ai_1 from "@/assets/cumpai_1.jpg";
import ai_2 from "@/assets/cumpai_2.jpg";
import ai_3 from "@/assets/cumpai_3.jpg";
import ai_4 from "@/assets/cumpai_4.jpg";





export type Camp = {
  id: string;
  images?: string[];
  badge?: string;
  duration: string;
  age?: string;
  title: string;
  desc: string;
  date: string;
  location: string;
  programs?: string[];
  price: string;
  popular?: boolean;
  type: "domestic" | "international" | "special";
  content: string;
};

export const camps: Camp[] = [
 {
  id: "coding-basic",
  images: [coding1, coding2, coding3],
  badge: "ในประเทศ",
  duration: "5-7 วัน",
  age: "อายุ 12-15 ปี",
  title: "Arduino simulator / Robotic Coding",
  desc: "เรียนรู้พื้นฐานอิเล็กทรอนิกส์ การเขียนโปรแกรม Arduino การจำลองวงจร และการควบคุมหุ่นยนต์เบื้องต้นแบบลงมือปฏิบัติจริง",
  date: "20 กุมภาพันธ์ 2569",
  location: "กรุงเทพฯ",
 
  price: "สอบถามเพิ่มเติม",
  type: "domestic",
content: `
Arduino simulator / Robotic Coding

Future Skills Set

    1. ความรู้พื้นฐานด้านอิเล็กทรอนิกส์
    2. การเขียนโปรแกรมควบคุมบอร์ด Arduino
    3. การจำลองวงจร (Simulation) ก่อนใช้งานจริง
    4. ความเข้าใจการทำงานของ Input / Output
    5. การคิดวิเคราะห์และแก้ไขปัญหาวงจร
    6. ความเข้าใจพื้นฐานด้าน Coding และ Computational Thinking
    7. ทักษะการเขียนโปรแกรมด้วย Micro:bit
    8. การออกแบบและควบคุมหุ่นยนต์เบื้องต้น (Robotic Control)
    9. ทักษะการแก้ปัญหาเชิงตรรกะ (Logical Thinking)
    10. การทำงานร่วมกันเป็นทีม (Collaboration Skills)
    11. ความคิดสร้างสรรค์ในการพัฒนานวัตกรรมขนาดเล็ก

รูปแบบการฝึกอบรม

    1. เรียนรู้โครงสร้างและอุปกรณ์บนบอร์ด Arduino
    2. ฝึกต่อวงจรผ่านโปรแกรมจำลอง (Arduino Simulator)
    3. เขียนโค้ดควบคุมอุปกรณ์ เช่น LED, Sensor
    4. ทดลองแก้ไขโค้ดและปรับค่าพารามิเตอร์
    5. เรียนรู้แบบปฏิบัติจริง (Hands-on Practice)
    6. บรรยายพื้นฐานเกี่ยวกับ Micro:bit และหลักการทำงานของหุ่นยนต์
    7. สาธิตการเขียนโปรแกรมผ่าน Microsoft MakeCode
    8. ฝึกปฏิบัติการเขียนโปรแกรมควบคุม LED, ปุ่มกด และ Sensor
    9. ทดลองควบคุมมอเตอร์และอุปกรณ์เสริมของชุดหุ่นยนต์
    10. ทำกิจกรรม Workshop แบบกลุ่ม เช่น สร้างรถหุ่นยนต์เคลื่อนที่ตามคำสั่ง
    11. นำเสนอผลงานและแลกเปลี่ยนแนวคิด

ผลลัพธ์การเรียนรู้

    - สามารถเขียนโปรแกรมพื้นฐานควบคุม Arduino ได้
    - เข้าใจหลักการทำงานของวงจรอิเล็กทรอนิกส์
    - สามารถจำลองและทดสอบโค้ดก่อนใช้งานจริง
    - พัฒนาทักษะการคิดเชิงตรรกะ (Logical Thinking)
    - สามารถเขียนโปรแกรมพื้นฐานด้วย Micro:bit ได้
    - เข้าใจหลักการทำงานของระบบ Input–Process–Output
    - สามารถประยุกต์ Micro:bit ในการควบคุมอุปกรณ์หรือหุ่นยนต์อย่างง่ายได้
    - มีทักษะการคิดวิเคราะห์และแก้ปัญหาอย่างเป็นระบบ
    - สามารถทำงานร่วมกับผู้อื่นในการพัฒนาโครงงานขนาดเล็กได้
`,
},{
  id: "workshop-3d-printing",
  images: [printing1, printing2, printing3],
  badge: "ในประเทศ",
  duration: "1 วัน",
  age: "อายุ 12-18 ปี",
  title: "Workshop 3D Printing",
  desc: "เรียนรู้การออกแบบโมเดล 3 มิติด้วย Onshape และฝึกใช้งานเครื่องพิมพ์ 3 มิติ พร้อมพัฒนาทักษะการคิดเชิงสร้างสรรค์และการออกแบบอย่างเป็นระบบ",
  date: "20 กุมภาพันธ์ 2569",
  location: "กรุงเทพฯ",

  price: "สอบถามเพิ่มเติม",
  type: "domestic",
  content: `
Workshop 3D Printing

Future Skills Set

1. การใช้งาน Onshape บนระบบ Cloud
2. การออกแบบ 2D และ 3D
3. การทำงานแบบ Realtime Collaboration
4. Version Control (ป้องกันการเขียนไฟล์ทับ)
5. Parametric Modeling
6. Direct Modeling
7. การสร้าง Assembly
8. การใช้งานเครื่องมือ Sketch เช่น
   - Line
   - Midpoint Line
   - Corner Rectangle
   - Center Point Rectangle
   - Tangent Arc
   - Elliptical Arc
   - Offset
   - Split
   - Slot
   - Transform

รูปแบบการฝึกอบรม

1. เรียนรู้การใช้งานระบบ Onshape
2. ออกแบบชิ้นงาน 3 มิติ
3. สร้างแบบจำลอง (Modeling)
4. ปรับแต่งไฟล์สำหรับการพิมพ์ 3 มิติ
5. ทดลองพิมพ์งานด้วย 3D Printing

ผลลัพธ์การเรียนรู้

- สามารถออกแบบชิ้นงาน 3 มิติได้
- เข้าใจกระบวนการสร้างต้นแบบ (Prototype Development)
- สามารถวิเคราะห์และปรับแต่งไฟล์สำหรับพิมพ์ 3 มิติ
- มีพัฒนาการด้านการออกแบบอย่างเป็นระบบ
`,
},
  {
    id: "sut-coding-bootcamp-2026",
  images: [sut1, sut2, sut3, sut4, sut5],
  badge: "ในประเทศ",
  duration: "2-3 วัน",
  age: "อายุ 15-22 ปี",
  title: "SUT Coding Bootcamp 2026",
  desc: "ค่ายพัฒนาทักษะ Coding นวัตกรรม และการสร้าง Prototype สำหรับเยาวชนรุ่นใหม่ พร้อมฝึกการทำงานจริง การนำเสนอ และการต่อยอดสู่ Portfolio",
  date: "20 กุมภาพันธ์ 2569",
  location: "มหาวิทยาลัยเทคโนโลยีสุรนารี",
 
  price: "สอบถามเพิ่มเติม",
  type: "domestic",
  content: `
SUT Camp

SUT CODING BOOTCAMP 2026
The Next Gen Innovator ปั้นนักพัฒนานวัตกรรมรุ่นใหม่

Future Skills Set

1. การพัฒนาไอเดีย Startup และสร้างรายได้จากทักษะเทคโนโลยี
2. ทักษะ Coding และการพัฒนาโปรแกรม
3. Smart IOT และ AI
4. 3D Printing / 3D Animation
5. Data Visualization
6. Cyber Security & Hacking
7. Robotic AGV (รถจำลอง)
8. การพัฒนา Smart Home / Smart Farm
9. ทักษะการทำงานเป็นทีม
10. การคิดเชิงสร้างสรรค์
11. การวางแผนธุรกิจ (Business Model)
12. การสร้าง Prototype
13. ทักษะการ Pitching และการนำเสนอ

รูปแบบการฝึกอบรม

1. ค่าย 2-3 วัน (2-3DAY SUT CODING BOOTCAMP)
2. แบ่งกลุ่มตามสายการเรียน
3. เลือก Project Idea ที่จะทำ
4. เรียนตามสายการเรียนที่รู้
5. ทำ Workshop ลงมือปฏิบัติจริง
6. ลงพื้นที่สัมภาษณ์ / สำรวจความเป็นไปได้ของไอเดีย
7. มีอาจารย์ Mentor
8. สร้าง Prototype ให้ใช้งานได้จริง
9. ซ้อมนำเสนอและทำ Presentation
10. Pitching รอบคัดเลือก และรอบ Final
11. มีเกณฑ์การตัดสิน ได้แก่
   - Idea
   - Design & Desirability
   - Functional

ผลลัพธ์การเรียนรู้

- ได้สร้างผลงานจริงระดับ Portfolio
- ได้ทำ Prototype ที่ใช้งานได้จริง
- ได้ประสบการณ์ Pitching แบบจริงจัง
- ได้รับเกียรติบัตร
- มีไอเดียไปต่อยอดและสร้าง Portfolio
- มีโอกาสแข่งขันระดับประเทศ (เช่น Coding / Python Competition)
- ได้พัฒนาทักษะการทำงานเป็นทีมและการคิดเชิงสร้างสรรค์
- ได้แนวทางการสร้างอาชีพด้าน Coding

การรับสมัคร

วันที่ 20-21 มีนาคม พ.ศ.2569
วันที่ 29-30 เมษายน พ.ศ.2569
วันที่ 29-30 พฤษภาคม พ.ศ.2569
วันที่ 19-20 มิถุนายน พ.ศ.2569
วันที่ 17-18 กรกฎาคม พ.ศ.2569
วันที่ 14-15 สิงหาคม พ.ศ.2569
วันที่ 18-19 กันยายน พ.ศ.2569
วันที่ 22-24 ตุลาคม พ.ศ.2569 (ค่ายใหญ่ 3 วัน)
วันที่ 20-21 พฤศจิกายน พ.ศ.2569
วันที่ 18-19 ธันวาคม พ.ศ.2569

หมายเหตุ: วันที่จัดอบรมอาจมีการเปลี่ยนแปลงในอนาคต
`,
},
  {
  id: "python-basic",
  images: [py6, py5, py3, py4, py1, py2],
  badge: "ในประเทศ",
  duration: "18 ชั่วโมง",
  age: "อายุ 12-18 ปี",
  title: "Python",
  desc: "เรียนรู้พื้นฐานการเขียนโปรแกรมภาษา Python ตั้งแต่ Flowchart ตัวแปร ชนิดข้อมูล ตัวดำเนินการ เงื่อนไข การวนซ้ำ โครงสร้างข้อมูล และฟังก์ชัน สำหรับผู้เริ่มต้น",
  date: "20 กุมภาพันธ์ 2569",
  location: "กรุงเทพฯ",
 
  price: "9,900 บาท",
  type: "domestic",
  content: `
Python

Future Skills Set

1. การเขียนผังงาน Flowchart
2. การกำหนดตัวแปรและชนิดข้อมูล
3. เริ่มต้นเขียนโปรแกรมด้วยภาษา Python
4. ตัวดำเนินการทางคณิตศาสตร์ (Arithmetic Operator)
5. ตัวดำเนินการเปรียบเทียบ
6. ตัวดำเนินการทางตรรกะ
7. การเลือกทำโดยกำหนดเงื่อนไขไว้ (if, if...else)
8. การเลือกทำโดยกำหนดหลายเงื่อนไข
9. คำสั่งวนรอบทำซ้ำ while
10. การวนรอบทำซ้ำ for
11. โครงสร้างข้อมูลแบบรายการ
12. การสร้างและใช้งานฟังก์ชัน

รูปแบบการฝึกอบรม

เรียน Basic Python 18 ชั่วโมง

ผลลัพธ์การเรียนรู้

- อธิบายหลักการทำงานของอัลกอริทึมและออกแบบผังงาน (Flowchart) เพื่อแก้ปัญหาเชิงตรรกะได้
- กำหนดตัวแปรและเลือกใช้ชนิดข้อมูลพื้นฐานในภาษา Python ได้อย่างเหมาะสม
- เริ่มเขียนโปรแกรมพื้นฐานด้วยภาษา Python เพื่อประมวลผลข้อมูลต่าง ๆ ได้
- ใช้ตัวดำเนินการทางคณิตศาสตร์ ตัวดำเนินการเปรียบเทียบ และตัวดำเนินการทางตรรกะในการคำนวณและตรวจสอบเงื่อนไขได้
- เขียนโปรแกรมที่มีการตัดสินใจโดยใช้คำสั่ง if, if...else และหลายเงื่อนไขได้
- เขียนโปรแกรมที่มีการทำงานแบบวนซ้ำโดยใช้คำสั่ง while และ for loop ได้
- ใช้โครงสร้างข้อมูลแบบรายการ (List) เพื่อจัดเก็บและจัดการข้อมูลได้
- สร้างและเรียกใช้ฟังก์ชัน (Function) เพื่อจัดโครงสร้างโปรแกรมให้มีความเป็นระบบและสามารถนำกลับมาใช้ได้

Course เรียน Basic Python 18 ชั่วโมง
`,
},

{
  id: "ai-machine-learning",
  images: [ai_1, ai_2, ai_3, ai_4],
  badge: "ในประเทศ",
duration: "7 วัน",
  age: "อายุ 15-22 ปี",
  title: "Aachine Learning Algorithms & AI",
  desc: "หลักสูตรพื้นฐานด้าน Data Science และ Machine Learning พร้อมปูพื้นฐาน Python และฝึกพัฒนาโมเดลสำหรับงานประยุกต์จริง โดยเฉพาะด้านเกษตรและเทคโนโลยีชีวภาพ",
  date: "20 กุมภาพันธ์ 2569",
  location: "กรุงเทพฯ",

  price: "สอบถามเพิ่มเติม",
  type: "domestic",
  content: `
Future Skills Set

1. Data Science
2. Machine Learning

Python

1. การเขียนผังงาน Flowchart
2. การกำหนดค่าตัวแปรและชนิดข้อมูล
3. เริ่มต้นเขียนโปรแกรมด้วยภาษา Python
4. ตัวดำเนินการทางคณิตศาสตร์ (Arithmetic Operator)
5. ตัวดำเนินการเปรียบเทียบ
6. ตัวดำเนินการทางตรรกะ
7. การเลือกทำโดยกำหนดเงื่อนไขไว้ (if, if...else)
8. การเลือกทำโดยกำหนดหลายเงื่อนไข
9. คำสั่งวนรอบทำซ้ำ while
10. การวนรอบทำซ้ำ for
11. โครงสร้างข้อมูลแบบรายการ
12. การสร้างและใช้งานฟังก์ชัน

รูปแบบการฝึกอบรม

1. Lecture: Foundations of Data Science for Agriculture
2. Workshop: Data Collection & Preprocessing
3. Lecture: Machine Learning Concepts & Algorithms
4. Workshop: Building ML Models for Agriculture
5. Hackathon Briefing & Team Formation
6. Hands-on Hackathon: AI for Smart Agriculture

ผลลัพธ์การเรียนรู้

ผลลัพธ์การเรียนรู้ (Learning Outcomes) จากหลักสูตรมีรายละเอียดดังนี้
1. สร้าง Pipeline การเก็บข้อมูลเกษตรจากหลายแหล่ง เช่น IoT, Sensor, Drone, ภาพถ่าย
2. วิเคราะห์ข้อมูลด้วย Python, Pandas และเครื่องมือ Visualization เพื่อค้นหา insight
3. เตรียมข้อมูลสำหรับ Machine Learning (Data Cleaning, Labeling, Feature Engineering)
4. พัฒนาโมเดล ML เช่น Classification / Regression สำหรับโรคพืชหรือทำนายผลผลิต
5. พัฒนาต้นแบบระบบ AI ที่ใช้งานได้จริงในการแข่งขัน Hackathon เป็นทีม
6. สามารถนำเสนอผลงาน (Pitching) พร้อม Dashboard หรือ Model Demo ได้

คำอธิบายหลักสูตร

หลักสูตร “การประยุกต์ใช้ Data Science และ Machine Learning สำหรับอุตสาหกรรมเกษตรและเทคโนโลยีชีวภาพ” ได้รับการออกแบบเพื่อพัฒนาทักษะขั้นสูงด้านการวิเคราะห์ข้อมูลและการประยุกต์ใช้เทคโนโลยีปัญญาประดิษฐ์ในระบบการผลิตทางการเกษตรและชีวภาพ ตั้งแต่ขั้นตอนการเก็บข้อมูล การจัดการข้อมูล การวิเคราะห์เชิงสถิติ ไปจนถึงการพัฒนาโมเดล Machine Learning เพื่อแก้ปัญหาจริงในอุตสาหกรรม เช่น การตรวจจับโรคพืชจากภาพถ่าย การคาดการณ์ผลผลิต การวิเคราะห์คุณภาพวัตถุดิบ และการเพิ่มประสิทธิภาพการจัดการฟาร์ม

โดยหลักสูตรมุ่งเน้นให้ผู้เรียนสามารถทำงานกับข้อมูลขนาดใหญ่ทั้งแบบมีโครงสร้างและไม่มีโครงสร้าง (Structured / Unstructured Data) โดยใช้เครื่องมือสำคัญ เช่น Python, Pandas, Scikit-learn และเทคนิค Feature Engineering เพื่อสร้างชุดข้อมูลคุณภาพสูงสำหรับงานเกษตร พร้อมทั้งเรียนรู้กระบวนการออกแบบ พัฒนา ทดสอบ และนำเสนอโมเดล Machine Learning อย่างเป็นระบบ

ร่วมกับกิจกรรม Bootcamp ที่เปิดโอกาสให้ผู้เรียนทำงานเป็นทีมเพื่อพัฒนาระบบต้นแบบด้านการเกษตรอัจฉริยะ (Smart Agriculture) โดยใช้ข้อมูลจริง ช่วยให้ผู้เรียนมีทักษะครบถ้วนทั้งด้านเทคนิค กระบวนการคิดเชิงข้อมูล และการแก้ปัญหาเชิงระบบ พร้อมนำความรู้ไปประยุกต์ใช้จริงในภาคอุตสาหกรรม

วิธีการสอนและการเรียนรู้

หลักสูตรนี้ใช้แนวทางการสอนแบบผสมผสาน (Blended Instructional Approach) ที่ช่วยให้ผู้เรียนได้ทั้งความรู้เชิงทฤษฎีและประสบการณ์ปฏิบัติจริง โดยครอบคลุมวิธีการหลักดังนี้

1) การบรรยายเชิงทฤษฎี (Lecture-Based Learning)
• ถ่ายทอดความรู้พื้นฐานที่จำเป็นสำหรับงาน Data Science และ Machine Learning เช่น การจัดการข้อมูล การวิเคราะห์เชิงสถิติ โครงสร้างโมเดล ML ประเภทต่าง ๆ
• นำเสนอกรณีศึกษา (Case Studies) จากอุตสาหกรรมเกษตรและเทคโนโลยีชีวภาพ
• ใช้สไลด์ประกอบและตัวอย่างการประยุกต์จริง เพื่อให้ผู้เรียนเข้าใจภาพรวมและแนวคิดหลักอย่างเป็นระบบ

2) การฝึกปฏิบัติแบบลงมือทำ (Hands-on Workshop)
• ผู้เรียนได้ฝึกเขียนโปรแกรมแบบ step-by-step ตั้งแต่ การโหลดข้อมูล การเตรียมข้อมูล การวิเคราะห์ จนถึงการสร้างโมเดล ML
• ใช้ชุดข้อมูลจริงจากฟาร์ม ภาพใบพืช สภาพอากาศ ข้อมูลดิน หรือข้อมูลไลน์ผลิตอาหาร
• ฝึกทดลองและสังเกตผลลัพธ์ของโมเดล เพื่อทำความเข้าใจปัญหาและเทคนิคการแก้ไข
• เป็นการเรียนรู้ที่ช่วยให้เกิดความเข้าใจแบบเห็นภาพ (Experiential Learning)

3) การเรียนรู้จากปัญหาและสถานการณ์จริง (Problem-Based Learning - PBL)
• ผู้เรียนได้รับโจทย์สถานการณ์จริง เช่น การตรวจโรคพืชหรือการทำนายผลผลิต
• ให้ผู้เรียนวิเคราะห์ปัญหา วางแผนเลือกวิธีและอัลกอริทึมที่เหมาะสม
• ฝึกการคัดเลือก Feature ที่สำคัญ และการสร้างโมเดล ML เพื่อแก้ปัญหา
• ช่วยเพิ่มทักษะการคิดเชิงวิเคราะห์ การแก้ปัญหา และการออกแบบโซลูชันเชิงระบบ

4) การทำงานเป็นทีมแบบ Bootcamp (Team-Based Bootcamp Learning)
• ผู้เรียนรวมทีมเพื่อสร้างระบบต้นแบบ (Prototype) ภายในเวลาจำกัด
• ฝึกตั้งโจทย์ วิเคราะห์ข้อมูล สร้างโมเดล และพัฒนา Demo หรือ Dashboard
• กระตุ้นการเรียนรู้แบบร่วมมือ (Collaborative Learning) และทักษะ Soft Skills เช่น การสื่อสาร การจัดการเวลา และการแบ่งงาน
• ปิดท้ายด้วยการ Pitching เพื่อนำเสนอผลงานต่อคณะกรรมการ ช่วยฝึกทักษะการนำเสนอเชิงมืออาชีพ

5) การประเมินผลเพื่อพัฒนา (Formative & Summative Assessment)
• มีแบบฝึกหัดระหว่างเรียนเพื่อประเมินความเข้าใจใน Workshop
• ประเมินผลงาน Bootcamp เพื่อวัดทักษะการประยุกต์ใช้จริง
• ให้ข้อเสนอแนะรายทีมเพื่อให้ผู้เรียนเห็นจุดแข็ง–จุดปรับปรุง
• ใช้ระบบประเมินตามเกณฑ์ S/U และกำหนดให้ผู้เรียนผ่านเกณฑ์ ≥ 60% และเข้าเรียน ≥ 80%
`,
},

  {
  id: "summer-camp-japan",
  images: [japan1, japan2, japan3, japan4],
  badge: "ต่างประเทศ",
  duration: "5 วัน 3 คืน",
  age: "อายุ 15-22 ปี",
  title: "Summer Camp Japan",
  desc: "เปิดโอกาสให้นักศึกษาญี่ปุ่นใจด้าน Coding & Robotics เข้าร่วมกิจกรรมเวิร์กชอประดับมหาวิทยาลัย เยี่ยมชมบริษัทเทคโนโลยี และสร้างประสบการณ์นานาชาติที่ประเทศญี่ปุ่น",
  date: "กุมภาพันธ์ 2569",
  location: "Doshisha University, เกียวโต - โอซาก้า, ญี่ปุ่น",
  price: "สอบถามเพิ่มเติม",
  type: "international",
  content: `
Summer Camp Japan

เปิดโอกาสให้นักศึกษาญี่ปุ่นใจด้าน Coding & Robotics
เข้าร่วมการแข่งขันระดับนานาชาติ NORTHERN ROBODING CHALLENGE 2026
พร้อมสัมผัสประสบการณ์ Summer Camp ที่ประเทศญี่ปุ่น

สถานที่จัด: Doshisha University, เกียวโต - โอซาก้า
ระยะเวลา: 5 วัน 3 คืน

จุดเด่นของโครงการ (Why This Program?)

1. Coding & Robotics Workshop ระดับมหาวิทยาลัยญี่ปุ่น
   - Company Visit บริษัทเทคโนโลยีระดับโลก
   - Museum & Innovation Tour
   - International Networking
   - พัฒนา Business Idea & Prototype จริง

Learning Outcomes (Key Takeaways)

ผู้เข้าร่วมจะได้รับ 5 ด้านหลัก:

1. Knowledge
   - เทคโนโลยีและอุตสาหกรรมญี่ปุ่น
   - Robotics & AI Ecosystem

2. Skills
   - Coding & Computational Thinking
   - Robotics Design
   - Business Idea Validation

3. Experience
   - เรียนในมหาวิทยาลัยญี่ปุ่น
   - Exclusive Workshop

4. Network
   - บริษัทเทคโนโลยีระดับโลก
   - อาจารย์และนักศึกษาญี่ปุ่น

5. Tangible Output
   - Prototype หรือผลงานจริง
   - Certificate of Completion

โครงสร้างกิจกรรมโครงการ

1. Academic & Workshop
   - Coding Workshop
   - STEM Workshop
   - Prototype Development

2. Company Visit
   - เยี่ยมชมบริษัทเทคโนโลยีระดับโลก

3. Innovation & Science Tour
   - Nintendo Museum
   - Osaka Science Museum

4. Cultural & Networking Activities
   - Ice Breaking
   - Dinner Party
   - Free Day in Osaka

5. Academic Lectures
   - วิทยากรไทย 3 ท่าน
   - วิทยากรจากญี่ปุ่น (Fukuoka University, Doshisha University)

กำหนดการเดินทาง

DAY 1 – Arrival & Osaka Exploration
DAY 2 – Workshop @ Doshisha University
DAY 3 – Company Visit & Cultural Tour
DAY 4 – Free Day in Osaka
DAY 5 – Return to Bangkok

รายการที่รวมในค่าใช้จ่าย

- ที่พัก 3 คืน
- อาหาร 9 มื้อ
- ค่าเข้าชมสถานที่
- รถรับส่ง
- ประกันการเดินทาง
`,
  },
  {
    id: "innovation-entrepreneur",
    images: [kku],
    title: "ค่ายนวัตกรรมและผู้ประกอบการ",
    desc: "เรียนรู้การคิดเชิงนวัตกรรมและพัฒนาไอเดียธุรกิจของคุณเอง พร้อมนำเสนอต่อนักลงทุน",
    date: "5-9 พฤษภาคม 2568",
    duration: "5 วัน",
    location: "กรุงเทพฯ",
    price: "สอบถามเพิ่มเติม",
    type: "special",
    content: `
ค่ายนี้เน้นการพัฒนาความคิดสร้างสรรค์ การแก้ปัญหา และการออกแบบแนวคิดธุรกิจ
ผู้เรียนจะได้ฝึกวิเคราะห์ปัญหา สร้างโมเดลธุรกิจ และนำเสนอไอเดียต่อหน้าผู้ฟังอย่างมั่นใจ
    `,
  },
  {
    id: "sut-coding-bootcamp-2026",
    title: "ค่าย Coding Bootcamp",
    desc: "เข้มข้นกับการเขียนโค้ดแบบมืออาชีพ เรียนรู้ Full-Stack Development และสร้างโปรเจกต์จริง",
    date: "25-31 พฤษภาคม 2568",
    duration: "7 วัน",
    location: "กรุงเทพฯ",
    price: "สอบถามเพิ่มเติม",
    type: "special",
      content: `
SUT CODING BOOTCAMP 2026
The Next Gen Innovator ปั้นนักพัฒนานวัตกรรมรุ่นใหม่

Future Skills Set

1. การพัฒนาไอเดีย Startup และสร้างรายได้จากทักษะเทคโนโลยี
2. ทักษะ Coding และการพัฒนาโปรแกรม
3. Smart IOT และ AI
4. 3D Printing / 3D Animation
5. Data Visualization
6. Cyber Security & Hacking
7. Robotic AGV (รถจำลอง)
8. การพัฒนา Smart Home / Smart Farm
9. ทักษะการทำงานเป็นทีม
10. การคิดเชิงสร้างสรรค์
11. การวางแผนธุรกิจ (Business Model)
12. การสร้าง Prototype
13. ทักษะการ Pitching และการนำเสนอ

รูปแบบการฝึกอบรม

1. ค่าย 2-3 วัน (2-3DAY SUT CODING BOOTCAMP)
2. แบ่งกลุ่มตามสายการเรียน
3. เลือก Project Idea ที่จะทำ
4. เรียนตามสายการเรียนที่รู้
5. ทำ Workshop ลงมือปฏิบัติจริง
6. ลงพื้นที่สัมภาษณ์ / สำรวจความเป็นไปได้ของไอเดีย
7. มีอาจารย์ Mentor
8. สร้าง Prototype ให้ใช้งานได้จริง
9. ซ้อมนำเสนอและทำ Presentation
10. Pitching รอบคัดเลือก และรอบ Final
11. มีเกณฑ์การตัดสิน ได้แก่
   - Idea
   - Design & Desirability
   - Functional

ผลลัพธ์การเรียนรู้

- ได้สร้างผลงานจริงระดับ Portfolio
- ได้ทำ Prototype ที่ใช้งานได้จริง
- ได้ประสบการณ์ Pitching แบบจริงจัง
- ได้รับเกียรติบัตร
- มีไอเดียไปต่อยอดและสร้าง Portfolio
- มีโอกาสแข่งขันระดับประเทศ (เช่น Coding / Python Competition)
- ได้พัฒนาทักษะการทำงานเป็นทีมและการคิดเชิงสร้างสรรค์
- ได้แนวทางการสร้างอาชีพด้าน Coding

การรับสมัคร

วันที่ 20-21 มีนาคม พ.ศ.2569
วันที่ 29-30 เมษายน พ.ศ.2569
วันที่ 29-30 พฤษภาคม พ.ศ.2569
วันที่ 19-20 มิถุนายน พ.ศ.2569
วันที่ 17-18 กรกฎาคม พ.ศ.2569
วันที่ 14-15 สิงหาคม พ.ศ.2569
วันที่ 18-19 กันยายน พ.ศ.2569
วันที่ 22-24 ตุลาคม พ.ศ.2569 (ค่ายใหญ่ 3 วัน)
วันที่ 20-21 พฤศจิกายน พ.ศ.2569
วันที่ 18-19 ธันวาคม พ.ศ.2569

หมายเหตุ: วันที่จัดอบรมอาจมีการเปลี่ยนแปลงในอนาคต
`,
},
  {
    id: "ai-machine-learning",
    title: "Aachine Learning Algorithms & AI ",
    desc: "หลักสูตร “การประยุกต์ใช้ Data Science และ Machine Learning สำหรับอุตสาหกรรมเกษตรและเทคโนโลยีชีวภาพ”",
    date: "10-16 มิถุนายน 2568",
    duration: "7 วัน",
    location: "เชียงใหม่",
    price: "สอบถามเพิ่มเติม",
    popular: true,
    type: "special",
    content: `
ค่าย AI Future Skills Set
AI

Data Science
Machine Learning
 Python

การเขียนผังงาน Flowchart
การกําหนดค่าตัวแปรและชนิดข้อมูล
เริ่มต้นเขียนโปรแกรมด้วยภาษา Python
ตัวดําเนินการทางคณิตศาสตร์ (Arithmetic Operator)
ตัวดําเนินการเปรียบเทียบ
ตัวดําเนินการทางตรรกะ
การเลือกทําโดยกําหนดเงื่อนไข (if, if…else)
การเลือกทําโดยกําหนดหลายเงื่อนไข
คําสั่งวนรอบทําซํํา while
การวนรอบทําซํํา for
 โครงสร้างข้อมูลแบบรายการ
การสร้างและใช้งานฟังก์ชัน
รูปแบบการฝึกอบรม :
Lecture: Foundations of Data Science for Agriculture
Workshop: Data Collection & Preprocessin
Lecture: Machine Learning Concepts & Algorithms
Workshop: Building ML Models for Agriculture
Hackathon Briefing & Team Formation
Hands-on Hackathon: AI for Smart Agriculture
ผลลัพธ์การเรียนรู้ :
ผลลัพธ์การเรียนรู้ (Learning Outcomes) จากหลักสูตรมีรายละเอียดดังนี้
1. สร้าง Pipeline การเก็บข้อมูลเกษตรจากหลายแหล่ง เช่น IoT, Sensor, Drone, ภาพถ่าย
2. วิเคราะห์ข้อมูลด้วย Python, Pandas, และเครื่องมือ Visualization เพื่อค้นหา insight
3. เตรียมข้อมูลสำหรับ Machine Learning (Data Cleaning, Labeling, Feature Engineering)
4. พัฒนาโมเดล ML เช่น Classification / Regression สำหรับโรคพืชหรือทำนายผลผลิต
5. พัฒนาต้นแบบระบบ AI ที่ใช้งานได้จริงในการแข่งขัน Hackathon เป็นทีม
6. สามารถนำเสนอผลงาน (Pitching) พร้อม Dashboard หรือ Model Demo ได้
คำอธิบายหลักสูตร
หลักสูตร “การประยุกต์ใช้ Data Science และ Machine Learning สำหรับอุตสาหกรรมเกษตรและเทคโนโลยีชีวภาพ” ได้รับการออกแบบเพื่อพัฒนาทักษะขั้นสูงด้านการวิเคราะห์ข้อมูลและการประยุกต์ใช้เทคโนโลยีปัญญาประดิษฐ์ในระบบการผลิตทางการเกษตรและชีวภาพ ตั้งแต่ขั้นตอนการเก็บข้อมูล การจัดการข้อมูล การวิเคราะห์เชิงสถิติ ไปจนถึงการพัฒนาโมเดล Machine Learning เพื่อแก้ปัญหาจริงในอุตสาหกรรม เช่น การตรวจจับโรคพืชจากภาพถ่าย การคาดการณ์ผลผลิต การวิเคราะห์คุณภาพวัตถุดิบ และการเพิ่มประสิทธิภาพการจัดการฟาร์ม
โดยหลักสูตรมุ่งเน้นให้ผู้เรียนสามารถทำงานกับข้อมูลขนาดใหญ่ทั้งแบบมีโครงสร้างและไม่มีโครงสร้าง (Structured / Unstructured Data) โดยใช้เครื่องมือสำคัญ เช่น Python, Pandas, Scikit-learn และเทคนิค Feature Engineering เพื่อสร้างชุดข้อมูลคุณภาพสูงสำหรับงานเกษตร พร้อมทั้งเรียนรู้กระบวนการออกแบบ พัฒนา ทดสอบ และนำเสนอโมเดล Machine Learning อย่างเป็นระบบ และผสมผสานการเรียนรู้เชิงปฏิบัติจริง (Hands-on Practice) ผ่าน Workshop
ร่วมกับกิจกรรม Bootcamp ที่เปิดโอกาสให้ผู้เรียนทำงานเป็นทีมเพื่อพัฒนาระบบต้นแบบด้านการเกษตรอัจฉริยะ (Smart Agriculture) โดยใช้ข้อมูลจริง ช่วยให้ผู้เรียนมีทักษะครบถ้วนทั้งด้านเทคนิค กระบวนการคิดเชิงข้อมูล และการแก้ปัญหาเชิงระบบ พร้อมนำความรู้ไปประยุกต์ใช้จริงในภาคอุตสาหกรรม
วิธีการสอนและการเรียนรู้
หลักสูตรนี้ใช้แนวทางการสอนแบบผสมผสาน (Blended Instructional Approach) ที่ช่วยให้ผู้เรียน
ได้ทั้งความรู้เชิงทฤษฎีและประสบการณ์ปฏิบัติจริง โดยครอบคลุมวิธีการหลักดังนี้:
1) การบรรยายเชิงทฤษฎี (Lecture-Based Learning)
• ถ่ายทอดความรู้พื้นฐานที่จำเป็นสำหรับงาน Data Science และ Machine Learning เช่น การจัดการข้อมูล การวิเคราะห์เชิงสถิติ โครงสร้างโมเดล ML ประเภทต่างๆ
• นำเสนอกรณีศึกษา (Case Studies) จากอุตสาหกรรมเกษตรและเทคโนโลยีชีวภาพ
• ใช้สไลด์ประกอบและตัวอย่างการประยุกต์จริง เพื่อให้ผู้เรียนเข้าใจภาพรวมและแนวคิดหลักอย่างเป็นระบบ
2) การฝึกปฏิบัติแบบลงมือทำ (Hands-on Workshop)
• ผู้เรียนได้ฝึกเขียนโปรแกรมแบบ step-by-step ตั้งแต่ การโหลดข้อมูล, การเตรียมข้อมูล, การวิเคราะห์, จนถึงการสร้างโมเดล ML
• ใช้ชุดข้อมูลจริงจากฟาร์ม, ภาพใบพืช, สภาพอากาศ, ข้อมูลดิน หรือข้อมูลไลน์ผลิตอาหาร
• ฝึกทดลองและสังเกตผลลัพธ์ของโมเดล เพื่อทำความเข้าใจปัญหาและเทคนิคการแก้ไข
• เป็นการเรียนรู้ที่ช่วยให้เกิดความเข้าใจแบบเห็นภาพ (Experiential Learning)
3) การเรียนรู้จากปัญหาและสถานการณ์จริง (Problem-Based Learning – PBL)
• ผู้เรียนได้รับโจทย์สถานการณ์จริง เช่น การตรวจโรคพืชหรือการทำนายผลผลิต
• ให้ผู้เรียนวิเคราะห์ปัญหา วางแผนเลือกวิธีและอัลกอริทึมที่เหมาะสม
• ฝึกการคัดเลือก Feature ที่สำคัญ และการสร้างโมเดล ML เพื่อแก้ปัญหา
• ช่วยเพิ่มทักษะการคิดเชิงวิเคราะห์ การแก้ปัญหา และการออกแบบโซลูชันเชิงระบบ
4) การทำงานเป็นทีมแบบ Bootcamp (Team-Based Bootcamp Learning)
• ผู้เรียนรวมทีมเพื่อสร้างระบบต้นแบบ (Prototype) ภายในเวลาจำกัด
• ฝึกตั้งโจทย์ วิเคราะห์ข้อมูล สร้างโมเดล และพัฒนา Demo หรือ Dashboard
• กระตุ้นการเรียนรู้แบบร่วมมือ (Collaborative Learning) และทักษะ Soft Skills เช่น การสื่อสาร การจัดการเวลา และการแบ่งงาน
• ปิดท้ายด้วยการ Pitching เพื่อนำเสนอผลงานต่อคณะกรรมการ ช่วยฝึกทักษะการนำเสนอเชิงมืออาชีพ
5) การประเมินผลเพื่อพัฒนา (Formative & Summative Assessment)
• มีแบบฝึกหัดระหว่างเรียนเพื่อประเมินความเข้าใจใน Workshop
• ประเมินผลงาน Bootcamp เพื่อวัดทักษะการประยุกต์ใช้จริง
• ให้ข้อเสนอแนะรายทีมเพื่อให้ผู้เรียนเห็นจุดแข็ง–จุดปรับปรุง
• ใช้ระบบประเมินตามเกณฑ์ S/U และกำหนดให้ผู้เรียนผ่านเกณฑ์ ≥ 60% และเข้าเรียน ≥ 80%
    `,
  },
];