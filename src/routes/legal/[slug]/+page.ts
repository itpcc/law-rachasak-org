import { error } from '@sveltejs/kit';

/** @type {import('./$types').PageLoad} */
export function load({ params }) {
	interface pageDict {
		[key: string]: {
			title: string,
			content: string
		},
	};
    const lookup: pageDict = {
		'privacy-policy': {
			title: 'นโยบายเว็บไซต์',
			content: `
## คำนิยาม

- “สำนักงาน” หรือ “ผู้ให้บริการ” หมายความถึง สำนักงานที่ปรึกษาและว่าความนายเอริค
- “ผู้ใช้บริการ” หมายความถึง บุคคลธรรมดาหรือนิติบุคคลที่ใช้บริการใดๆ ของสำนักงาน
- “บริการ” หมายความรวมถึง การใช้ผลิตภัณฑ์ ซอฟต์แวร์ และเว็บไซต์ของสำนักงาน

## ข้อกำหนดในการให้บริการของสำนักงาน

1. ข้อกำหนด

1.1 สำนักงานจะให้บริการแก่ผู้ใช้บริการภายใต้ข้อกำหนดและนโยบายการให้บริการ ที่กำหนดไว้ในเอกสารฉบับนี้ ซึ่งต่อไปจะเรียกว่า “ข้อกำหนดทั่วไป” และภายใต้ข้อตกลงการใช้บริการที่กำหนดเพิ่มเติมไว้ สำหรับบริการหนึ่ง บริการใดโดยเฉพาะ ซึ่งต่อไปจะเรียกว่า “ข้อกำหนดเฉพาะ”

1.2 ผู้ใช้บริการสามารถรับทราบข้อกำหนดทั่วไป และข้อกำหนดเฉพาะได้โดยการเข้าใช้งานผ่านบริการของสำนักงาน

1.3 ข้อกำหนดทั่วไปและข้อกำหนดเฉพาะซึ่งต่อไปจะเรียกรวมว่า “ข้อกำหนด” ถือเป็นสาระสำคัญในการให้บริการของสำนักงานโดยผู้ใช้บริการมีหน้าที่จะต้องอ่านข้อกำหนดเหล่านี้ให้เข้าใจโดยละเอียด และให้มีผลผูกพันทางกฎหมายระหว่างผู้ใช้บริการและสำนักงาน

1.4 ในกรณีที่ข้อกำหนดทั่วไปมีข้อความขัดแย้งกับข้อกำหนดเฉพาะ ให้ข้อความในข้อกำหนดเฉพาะบังคับมีผลบังคับใช้สำหรับบริการนั้นแทนข้อกำหนดทั่วไป

1.5 สำนักงานคงไว้ซึ่งสิทธิในการแก้ไขเพิ่มเติมข้อกำหนด โดยไม่ต้องแจ้งให้แก่ผู้ใช้บริการทราบล่วงหน้าเป็นลายลักษณ์อักษร

2. การยอมรับข้อกำหนด

2.1 ผู้ใช้บริการจะต้องรับทราบและยอมรับข้อกำหนด มิฉะนั้น ผู้ใช้บริการจะไม่สามารถใช้บริการได้

2.2 ผู้ใช้บริการสามารถรับทราบและยอมรับข้อกำหนดได้การใช้บริการของสำนักงานในกรณีนี้ ให้ถือว่าผู้ใช้บริการรับทราบและยอมรับข้อกำหนดโดยปริยายนับจากเวลาที่เริ่มใช้บริการเป็นต้นไป

2.3 ผู้ใช้บริการควรบันทึกหรือทำสำเนาข้อกำหนดทั่วไปไว้เพื่อเป็นหลักฐาน

3. การให้บริการโดยสำนักงาน

3.1 สำนักงานอาจมีการพัฒนาหรือปรับปรุงรูปแบบและลักษณะของบริการเพื่อมอบประสบการณ์ที่ดีที่สุดเท่าที่จะเป็นไปได้แก่ผู้ใช้บริการ โดยไม่ต้องแจ้งให้ผู้ใช้บริการทราบล่วงหน้า

3.2 สำนักงานอาจหยุดให้บริการเป็นการชั่วคราวหรือถาวร หรือยกเลิกการให้บริการแก่ผู้ใช้บริการรายใดเป็นการเฉพาะหากการให้บริการดังกล่าวส่งผลกระทบต่อผู้ใช้บริการอื่นๆ หรือขัดแย้งต่อข้อกฏหมาย โดยไม่ต้องแจ้งให้ผู้ใช้บริการทราบล่วงหน้า และจะทำการแจ้งให้ผู้ใช้บริการทราบหลังจากดำเนินการภายใน 7 วัน

3.3 การหยุด หรือการยกเลิกบริการตามข้อ 3.2 ผู้ใช้บริการจะไม่สามารถเข้าใช้บริการ และเข้าถึงรายละเอียดบัญชีของผู้ใช้บริการ ไฟล์เอกสารใดๆ หรือเนื้อหาอื่นๆ ที่อยู่ในบัญชีของผู้ใช้บริการได้

**ใน กรณีที่สำนักงานหยุดให้บริการเป็นการถาวร หรือยกเลิกบริการแก่ผู้ใช้บริการ สำนักงานมีสิทธิในการลบข้อมูลต่างๆ ที่อยู่ในบัญชีของผู้ใช้บริการได้ โดยไม่ต้องแจ้งให้ผู้ใช้บริการทราบล่วงหน้า**

3.4 สำนักงานอาจกำหนดขอบเขตสูงสุดของปริมาณข้อมูลที่ผู้ใช้บริการอาจส่งหรือได้รับผ่านบริการหรือจำนวนพื้นที่จัดเก็บที่ใช้สำหรับการให้บริการใดๆ เมื่อใดก็ได้ โดยขึ้นอยู่กับการพิจารณาของสำนักงานยกเว้นกรณีที่มีการตกลงเป็นลายลักษณ์อักษรไว้กับทางสำนักงาน

4. การใช้บริการโดยผู้ใช้บริการ

4.1 ผู้ใช้บริการจะให้ข้อมูลเกี่ยวกับตนเอง เช่น ข้อมูลระบุตัวตนหรือรายละเอียดการติดต่อที่ถูกต้อง เป็นจริง และเป็นปัจจุบันเสมอ แก่สำนักงานอันเป็นส่วนหนึ่งของกระบวนการลงทะเบียนใช้บริการ หรือการใช้บริการที่ต่อเนื่อง

4.2 ผู้ใช้บริการจะใช้บริการนี้เพื่อวัตถุประสงค์ที่ได้รับอนุญาตตามข้อตกลงที่ได้ทำกับสำนักงานและไม่ขัดต่อกฎหมายกฎระเบียบ ข้อบังคับ หลักปฏิบัติ  ที่เป็นที่ยอมรับโดยทั่วไป

4.3 ผู้ใช้บริการจะไม่เข้าใช้ หรือพยายามเข้าใช้บริการหนึ่งบริการใดโดยวิธีอื่น รวมถึงการใช้วิธีการอัตโนมัติ (การใช้สคริปต์) นอกจากช่องทางที่สำนักงานจัดเตรียมไว้ให้ เว้นแต่ผู้ใช้บริการจะได้รับอนุญาตจากสำนักงานโดยชัดแจ้งให้ทำเช่นนั้นได้

4.4 ผู้ใช้บริการจะไม่ทำหรือมีส่วนร่วมในการขัดขวางหรือรบกวนบริการของสำนักงานรวมทั้งเครื่องแม่ข่ายและเครือข่ายที่เชื่อมต่อกับบริการ

4.5 ผู้ใช้บริการจะไม่ทำสำเนา คัดลอก ทำซ้ำ ขาย แลกเปลี่ยน หรือขายต่อบริการเพื่อวัตถุประสงค์ใดๆ เว้นแต่ผู้ใช้บริการจะได้รับอนุญาตจากสำนักงานโดยชัดแจ้งให้ทำเช่นนั้นได้

4.6 ผู้ใช้บริการจะเป็นผู้รับผิดชอบแต่เพียงผู้เดียวต่อบุคคลใดๆ ในความเสียหายอันเกิดจากการละเมิดข้อกำหนด

5. รหัสผ่านและการรักษาความปลอดภัยของบัญชี

5.1 ผู้ใช้บริการมีหน้าที่ในการรักษาความลับของรหัสผ่านที่เชื่อมโยงกับบัญชีใดๆ ที่ใช้ในการเข้าถึงบริการ

5.2 ผู้ใช้บริการจะเป็นผู้รับผิดชอบแต่เพียงผู้เดียวต่อสำนักงานสำหรับการใช้งานทั้งหมดที่เกิดขึ้นภายใต้บัญชีของผู้ใช้บริการ

6. การรักษาความเป็นส่วนตัวและข้อมูลส่วนบุคคลของผู้ใช้บริการ

6.1 สำนักงานจะปฏิบัติต่อข้อมูลส่วนบุคคลและปกป้องความเป็นส่วนตัวของผู้ใช้บริการ ภายใต้นโยบายส่วนบุคคลของสำนักงาน

6.2 ผู้ใช้บริการตกลงว่าจะปฏิบัติตามนโยบายส่วนบุคคลของสำนักงาน

7. เนื้อหาในบริการ

7.1 ผู้ใช้บริการอาจได้รับ เข้าถึง สร้าง ส่ง หรือแสดงข้อมูล เช่น ไฟล์ข้อมูล ข้อความลายลักษณ์อักษร ซอฟต์แวร์คอมพิวเตอร์ ดนตรี ไฟล์เสียง หรือเสียงอื่นๆ ภาพถ่าย วิดีโอ หรือรูปภาพอื่นๆ โดยเป็นส่วนหนึ่งของบริการหรือโดยผ่านการใช้บริการ ซึ่งต่อไปนี้จะเรียกว่า “เนื้อหา”

7.2 เนื้อหาที่นำเสนอต่อผู้ใช้บริการ อาจได้รับการคุ้มครองโดยสิทธิในทรัพย์สินทางปัญญาของเจ้าของเนื้อหานั้นผู้ใช้บริการไม่มีสิทธิเปลี่ยนแปลงแก้ไขจำหน่ายจ่ายโอน หรือสร้างผลงานต่อเนื่องโดยอาศัยเนื้อหาดังกล่าวไม่ว่าจะทั้งหมดหรือบางส่วน เว้นแต่ผู้ใช้บริการจะได้รับอนุญาตโดยชัดแจ้งจากเจ้าของเนื้อหานั้น

7.3 ผู้ใช้บริการอาจพบเนื้อหาที่ไม่เหมาะสมหรือหยาบคายอันก่อให้เกิดความไม่พอใจภายใต้ความเสี่ยงของตนเอง

7.4 สำนักงานทรงไว้ซึ่งสิทธิในการคัดกรอง ตรวจทาน ทำเครื่องหมาย เปลี่ยนแปลงแก้ไข ปฏิเสธ หรือลบเนื้อหาใดๆ ที่ไม่เหมาะสมออกจากบริการ ซึ่งสำนักงานอาจจัดเตรียมเครื่องมือในการคัดกรองเนื้อหาอย่างชัดเจนโดยไม่ขัดต่อกฎหมาย กฎ ระเบียบของทางราชการที่เกี่ยวข้อง

7.5 สำนักงานจะไม่มีส่วนรับผิดชอบต่อบุคคลใดๆ ในความสูญเสียหรือเสียหาย อันเกิดจากเนื้อหาที่สำนักงานมิได้เป็นผู้สร้างขึ้น โดยผู้ที่เนื้อหาดังกล่าวจะต้องเป็นผู้รับผิดชอบแต่เพียงผู้เดียว

**หากผู้ใช้บริการได้สร้าง ส่ง หรือแสดงเนื้อหาใดๆ ในบริการ ผู้ใช้บริการจะต้องเป็นผู้รับผิดชอบแต่เพียงผู้เดียวต่อความสูญเสียหรือเสียหายใดๆ อันเกิดจากเนื้อหาดังกล่าวนั้นต่อบุคคลใดๆ รวมถึงสำนักงานด้วย**

8. กรรมสิทธิ์และสิทธิในทรัพย์สินทางปัญญา

8.1 สำนักงานหรือผู้ให้อนุญาตแก่สำนักงานเป็นผู้มีสิทธิตามกฎหมายแต่เพียงผู้เดียวในกรรมสิทธิ์ ผลประโยชน์ทั้งหมดรวมถึงสิทธิในทรัพย์สินทางปัญญาใดๆ ที่มีอยู่ในบริการซึ่งสำนักงานหรือผู้ให้อนุญาตแก่สำนักงานเป็นผู้จัดทำขึ้น ไม่ว่าสิทธิเหล่านั้นจะได้รับการจดทะเบียนไว้หรือไม่ก็ตาม

8.2 ผู้ใช้บริการจะต้องไม่เปิดเผยข้อมูลที่สำนักงานกำหนดให้เป็นความลับ โดยไม่ได้รับความยินยอมเป็นลายลักษณ์อักษรล่วงหน้าจากสำนักงาน

8.3 ผู้ใช้บริการจะต้องไม่ใช้ชื่อทางการค้า เครื่องหมายการค้า เครื่องหมายการบริการ ตราสัญลักษณ์ ชื่อโดเมนของสำนักงานโดยไม่ได้รับความยินยอม เป็นลายลักษณ์อักษรจากสำนักงาน
			`,
		},
		'pdpa-msg': {
			title: 'Declaration of PDPA message',
			content: `
## นโยบายความเป็นส่วนตัวสำหรับลูกค้า

สำนักงานที่ปรึกษาและว่าความนายเอริค ให้ความสำคัญกับการคุ้มครองข้อมูลส่วนบุคคลของคุณ โดยนโยบายความเป็นส่วนตัวฉบับนี้ได้อธิบายแนวปฏิบัติเกี่ยวกับการเก็บรวบรวม ใช้ หรือเปิดเผยข้อมูลส่วนบุคคล รวมถึงสิทธิต่าง ๆ ของเจ้าของข้อมูลส่วนบุคคล ตามกฎหมายคุ้มครองข้อมูลส่วนบุคคล

### การเก็บรวบรวมข้อมูลส่วนบุคคล

เราจะเก็บรวบรวมข้อมูลส่วนบุคคลที่ได้รับโดยตรงจากคุณผ่านช่องทาง ดังต่อไปนี้

1. การสมัครสมาชิก
2. โทรศัพท์
3. อีเมล


### ประเภทข้อมูลส่วนบุคคลที่เก็บรวบรวม

- ข้อมูลส่วนบุคคล เช่น ชื่อ นามสกุล อายุ วันเดือนปีเกิด สัญชาติ เลขประจำตัวประชาชน หนังสือเดินทาง เป็นต้น
- ข้อมูลการติดต่อ เช่น ที่อยู่ หมายเลขโทรศัพท์ อีเมล เป็นต้น
- ข้อมูลบัญชี เช่น บัญชีผู้ใช้งาน ประวัติการใช้งาน เป็นต้น
- หลักฐานแสดงตัวตน เช่น สำเนาบัตรประจำตัวประชาชน สำเนาหนังสือเดินทาง เป็นต้น
- ข้อมูลการทำธุรกรรมและการเงิน เช่น ประวัติการสั่งซื้อ รายละเอียดบัตรเครดิต บัญชีธนาคาร เป็นต้น
- ข้อมูลทางเทคนิค เช่น IP address, Cookie ID, ประวัติการใช้งานเว็บไซต์ (Activity Log) เป็นต้น
- ข้อมูลอื่น ๆ เช่น รูปภาพ ภาพเคลื่อนไหว และข้อมูลอื่นใดที่ถือว่าเป็นข้อมูลส่วนบุคคลตามกฎหมายคุ้มครองข้อมูลส่วนบุคคล

### ผู้เยาว์

หากคุณมีอายุต่ำกว่า 20 ปีหรือมีข้อจำกัดความสามารถตามกฎหมาย เราอาจเก็บรวบรวม ใช้ หรือเปิดเผยข้อมูลส่วนบุคคลของคุณ เราอาจจำเป็นต้องให้พ่อแม่หรือผู้ปกครองของคุณให้ความยินยอมหรือที่กฎหมายอนุญาตให้ทำได้ หากเราทราบว่ามีการเก็บรวบรวมข้อมูลส่วนบุคคลจากผู้เยาว์โดยไม่ได้รับความยินยอมจากพ่อแม่หรือผู้ปกครอง เราจะดำเนินการลบข้อมูลนั้นออกจากเซิร์ฟเวอร์ของเรา


### วิธีการเก็บรักษาข้อมูลส่วนบุคคล

เราจะเก็บรักษาข้อมูลส่วนบุคคลของคุณในรูปแบบเอกสารและรูปแบบอิเล็กทรอนิกส์

เราเก็บรักษาข้อมูลส่วนบุคคลของคุณ ดังต่อไปนี้

1. เซิร์ฟเวอร์บริษัทของเราในประเทศไทย
2. ผู้ให้บริการเซิร์ฟเวอร์ในประเทศไทย
3. ผู้ให้บริการเซิร์ฟเวอร์ในต่างประเทศ


### การประมวลผลข้อมูลส่วนบุคคล

เราจะเก็บรวบรวม ใช้ หรือเปิดเผยข้อมูลส่วนบุคคลของคุณเพื่อวัตถุประสงค์ดังต่อไปนี้

1. เพื่อสร้างและจัดการบัญชีผู้ใช้งาน
2. เพื่อจัดส่งสินค้าหรือบริการ
3. เพื่อปรับปรุงสินค้า บริการ หรือประสบการณ์การใช้งาน
4. เพื่อการบริหารจัดการภายในบริษัท
5. เพื่อการบริการหลังการขาย
6. เพื่อรวบรวมข้อเสนอแนะ
7. เพื่อชำระค่าสินค้าหรือบริการ
8. เพื่อปฏิบัติตามข้อตกลงและเงื่อนไข (Terms and Conditions)
9. เพื่อปฏิบัติตามกฎหมายและกฎระเบียบของหน่วยงานราชการ


### การเปิดเผยข้อมูลส่วนบุคคล

เราอาจเปิดเผยข้อมูลส่วนบุคคลของคุณให้แก่ผู้อื่นภายใต้ความยินยอมของคุณหรือที่กฎหมายอนุญาตให้เปิดเผยได้ ดังต่อไปนี้

#### การบริหารจัดการภายในองค์กร

เราอาจเปิดเผยข้อมูลส่วนบุคคลของคุณภายในบริษัทเท่าที่จำเป็นเพื่อปรับปรุงและพัฒนาสินค้าหรือบริการของเรา เราอาจรวบรวมข้อมูลภายในสำหรับสินค้าหรือบริการต่าง ๆ ภายใต้นโยบายนี้เพื่อประโยชน์ของคุณและผู้อื่นมากขึ้น

#### ผู้ให้บริการ

เราอาจเปิดเผยข้อมูลส่วนบุคคลของคุณบางอย่างให้กับผู้ให้บริการของเราเท่าที่จำเป็นเพื่อดำเนินงานในด้านต่าง ๆ เช่น การชำระเงิน การตลาด การพัฒนาสินค้าหรือบริการ เป็นต้น ทั้งนี้ ผู้ให้บริการมีนโยบายความเป็นส่วนตัวของตนเอง

#### พันธมิตรทางธุรกิจ

เราอาจเปิดเผยข้อมูลบางอย่างกับพันธมิตรทางธุรกิจเพื่อติดต่อและประสานงานในการให้บริการสินค้าหรือบริการ และให้ข้อมูลเท่าที่จำเป็นเกี่ยวกับความพร้อมใช้งานของสินค้าหรือบริการ

#### การโอนข้อมูลส่วนบุคคลไปต่างประเทศ

เราอาจเปิดเผยหรือโอนข้อมูลส่วนบุคคลของคุณไปยังบุคคล องค์กร หรือเซิร์ฟเวอร์ (Server) ที่ตั้งอยู่ในต่างประเทศ โดยเราจะดำเนินการตามมาตรการต่าง ๆ เพื่อให้มั่นใจว่าการโอนข้อมูลส่วนบุคคลของคุณไปยังประเทศปลายทางนั้นมีมาตรฐานการคุ้มครองข้อมูลส่วนบุคคลอย่างเพียงพอ หรือกรณีอื่น ๆ ตามที่กฎหมายกำหนด


### ระยะเวลาจัดเก็บข้อมูลส่วนบุคคล

เราจะเก็บรักษาข้อมูลส่วนบุคคลของคุณไว้ตามระยะเวลาที่จำเป็นในระหว่างที่คุณเป็นลูกค้าหรือมีความสัมพันธ์อยู่กับเราหรือตลอดระยะเวลาที่จำเป็นเพื่อให้บรรลุวัตถุประสงค์ที่เกี่ยวข้องกับนโยบายฉบับนี้ ซึ่งอาจจำเป็นต้องเก็บรักษาไว้ต่อไปภายหลังจากนั้น หากมีกฎหมายกำหนดไว้ เราจะลบ ทำลาย หรือทำให้เป็นข้อมูลที่ไม่สามารถระบุตัวตนของคุณได้ เมื่อหมดความจำเป็นหรือสิ้นสุดระยะเวลาดังกล่าว


### สิทธิของเจ้าของข้อมูลส่วนบุคคล

ภายใต้กฎหมายคุ้มครองข้อมูลส่วนบุคคล  คุณมีสิทธิในการดำเนินการดังต่อไปนี้

- สิทธิขอถอนความยินยอม (right to withdraw consent) หากคุณได้ให้ความยินยอม เราจะเก็บรวบรวม ใช้ หรือเปิดเผยข้อมูลส่วนบุคคลของคุณ ไม่ว่าจะเป็นความยินยอมที่คุณให้ไว้ก่อนวันที่กฎหมายคุ้มครองข้อมูลส่วนบุคคลใช้บังคับหรือหลังจากนั้น คุณมีสิทธิที่จะถอนความยินยอมเมื่อใดก็ได้ตลอดเวลา

- สิทธิขอเข้าถึงข้อมูล (right to access) คุณมีสิทธิขอเข้าถึงข้อมูลส่วนบุคคลของคุณที่อยู่ในความรับผิดชอบของเราและขอให้เราทำสำเนาข้อมูลดังกล่าวให้แก่คุณ  รวมถึงขอให้เราเปิดเผยว่าเราได้ข้อมูลส่วนบุคคลของคุณมาได้อย่างไร

- สิทธิขอถ่ายโอนข้อมูล (right to data portability) คุณมีสิทธิขอรับข้อมูลส่วนบุคคลของคุณในกรณีที่เราได้จัดทำข้อมูลส่วนบุคคลนั้นอยู่ในรูปแบบให้สามารถอ่านหรือใช้งานได้ด้วยเครื่องมือหรืออุปกรณ์ที่ทำงานได้โดยอัตโนมัติและสามารถใช้หรือเปิดเผยข้อมูลส่วนบุคคลได้ด้วยวิธีการอัตโนมัติ รวมทั้งมีสิทธิขอให้เราส่งหรือโอนข้อมูลส่วนบุคคลในรูปแบบดังกล่าวไปยังผู้ควบคุมข้อมูลส่วนบุคคลอื่นเมื่อสามารถทำได้ด้วยวิธีการอัตโนมัติ และมีสิทธิขอรับข้อมูลส่วนบุคคลที่เราส่งหรือโอนข้อมูลส่วนบุคคลในรูปแบบดังกล่าวไปยังผู้ควบคุมข้อมูลส่วนบุคคลอื่นโดยตรง เว้นแต่ไม่สามารถดำเนินการได้เพราะเหตุทางเทคนิค

- สิทธิขอคัดค้าน (right to object)  คุณมีสิทธิขอคัดค้านการเก็บรวบรวม ใช้ หรือเปิดเผยข้อมูลส่วนบุคคลของคุณในเวลาใดก็ได้ หากการเก็บรวบรวม ใช้ หรือเปิดเผยข้อมูลส่วนบุคคลของคุณที่ทำขึ้นเพื่อการดำเนินงานที่จำเป็นภายใต้ประโยชน์โดยชอบด้วยกฎหมายของเราหรือของบุคคลหรือนิติบุคคลอื่น โดยไม่เกินขอบเขตที่คุณสามารถคาดหมายได้อย่างสมเหตุสมผลหรือเพื่อดำเนินการตามภารกิจเพื่อสาธารณประโยชน์

- สิทธิขอให้ลบหรือทำลายข้อมูล (right to erasure/destruction) คุณมีสิทธิขอลบหรือทำลายข้อมูลส่วนบุคคลของคุณหรือทำให้ข้อมูลส่วนบุคคลเป็นข้อมูลที่ไม่สามารถระบุตัวคุณได้ หากคุณเชื่อว่าข้อมูลส่วนบุคคลของคุณถูกเก็บรวบรวม ใช้ หรือเปิดเผยโดยไม่ชอบด้วยกฎหมายที่เกี่ยวข้องหรือเห็นว่าเราหมดความจำเป็นในการเก็บรักษาไว้ตามวัตถุประสงค์ที่เกี่ยวข้องในนโยบายฉบับนี้ หรือเมื่อคุณได้ใช้สิทธิขอถอนความยินยอมหรือใช้สิทธิขอคัดค้านตามที่แจ้งไว้ข้างต้นแล้ว

- สิทธิขอให้ระงับการใช้ข้อมูล (right to restriction of processing)  คุณมีสิทธิขอให้ระงับการใช้ข้อมูลส่วนบุคคลชั่วคราวในกรณีที่เราอยู่ระหว่างตรวจสอบตามคำร้องขอใช้สิทธิขอแก้ไขข้อมูลส่วนบุคคลหรือขอคัดค้านของคุณหรือกรณีอื่นใดที่เราหมดความจำเป็นและต้องลบหรือทำลายข้อมูลส่วนบุคคลของคุณตามกฎหมายที่เกี่ยวข้องแต่คุณขอให้เราระงับการใช้แทน

- สิทธิขอให้แก้ไขข้อมูล (right to rectification)  คุณมีสิทธิขอแก้ไขข้อมูลส่วนบุคคลของคุณให้ถูกต้อง เป็นปัจจุบัน สมบูรณ์ และไม่ก่อให้เกิดความเข้าใจผิด

- สิทธิร้องเรียน (right to lodge a complaint) คุณมีสิทธิร้องเรียนต่อผู้มีอำนาจตามกฎหมายที่เกี่ยวข้อง หากคุณเชื่อว่าการเก็บรวบรวม ใช้ หรือเปิดเผยข้อมูลส่วนบุคคลของคุณ เป็นการกระทำในลักษณะที่ฝ่าฝืนหรือไม่ปฏิบัติตามกฎหมายที่เกี่ยวข้อง


คุณสามารถใช้สิทธิของคุณในฐานะเจ้าของข้อมูลส่วนบุคคลข้างต้นได้ โดยติดต่อมาที่เจ้าหน้าที่คุ้มครองข้อมูลส่วนบุคคลของเราตามรายละเอียดท้ายนโยบายนี้ เราจะแจ้งผลการดำเนินการภายในระยะเวลา 30 วัน นับแต่วันที่เราได้รับคำขอใช้สิทธิจากคุณ ตามแบบฟอร์มหรือวิธีการที่เรากำหนด ทั้งนี้ หากเราปฏิเสธคำขอเราจะแจ้งเหตุผลของการปฏิเสธให้คุณทราบผ่านช่องทางต่าง ๆ เช่น ข้อความ (SMS) อีเมล โทรศัพท์ จดหมาย เป็นต้น



### เทคโนโลยีติดตามตัวบุคคล (Cookies)

เพื่อเพิ่มประสบการณ์การใช้งานของคุณให้สมบูรณ์และมีประสิทธิภาพมากขึ้น เราใช้คุกกี้ (Cookies)หรือเทคโนโลยีที่คล้ายคลึงกัน เพื่อพัฒนาการเข้าถึงสินค้าหรือบริการ โฆษณาที่เหมาะสม และติดตามการใช้งานของคุณ เราใช้คุกกี้เพื่อระบุและติดตามผู้ใช้งานเว็บไซต์และการเข้าถึงเว็บไซต์ของเรา หากคุณไม่ต้องการให้มีคุกกี้ไว้ในคอมพิวเตอร์ของคุณ คุณสามารถตั้งค่าบราวเซอร์เพื่อปฏิเสธคุกกี้ก่อนที่จะใช้เว็บไซต์ของเราได้


### การรักษาความมั่งคงปลอดภัยของข้อมูลส่วนบุคคล

เราจะรักษาความมั่นคงปลอดภัยของข้อมูลส่วนบุคคลของคุณไว้ตามหลักการ การรักษาความลับ (confidentiality) ความถูกต้องครบถ้วน (integrity) และสภาพพร้อมใช้งาน (availability) ทั้งนี้ เพื่อป้องกันการสูญหาย เข้าถึง ใช้ เปลี่ยนแปลง แก้ไข หรือเปิดเผย นอกจากนี้เราจะจัดให้มีมาตรการรักษาความมั่นคงปลอดภัยของข้อมูลส่วนบุคคล ซึ่งครอบคลุมถึงมาตรการป้องกันด้านการบริหารจัดการ (administrative safeguard) มาตรการป้องกันด้านเทคนิค (technical safeguard) และมาตรการป้องกันทางกายภาพ (physical safeguard) ในเรื่องการเข้าถึงหรือควบคุมการใช้งานข้อมูลส่วนบุคคล (access control)


### การแจ้งเหตุละเมิดข้อมูลส่วนบุคคล

ในกรณีที่มีเหตุละเมิดข้อมูลส่วนบุคคลของคุณเกิดขึ้น เราจะแจ้งให้สำนักงานคณะกรรมการคุ้มครองข้อมูลส่วนบุคคลทราบโดยไม่ชักช้าภายใน 72 ชั่วโมง นับแต่ทราบเหตุเท่าที่สามารถกระทำได้ ในกรณีที่การละเมิดมีความเสี่ยงสูงที่จะมีผลกระทบต่อสิทธิและเสรีภาพของคุณ เราจะแจ้งการละเมิดให้คุณทราบพร้อมกับแนวทางการเยียวยาโดยไม่ชักช้าผ่านช่องทางต่าง ๆ เช่น  เว็บไซต์ ข้อความ (SMS) อีเมล โทรศัพท์ จดหมาย เป็นต้น


### การแก้ไขเปลี่ยนแปลงนโยบายความเป็นส่วนตัว

เราอาจแก้ไขเปลี่ยนแปลงนโยบายนี้เป็นครั้งคราว โดยคุณสามารถทราบข้อกำหนดและเงื่อนไขนโยบายที่มีการแก้ไขเปลี่ยนแปลงนี้ได้ผ่านทางเว็บไซต์ของเรา

นโยบายนี้แก้ไขล่าสุดและมีผลใช้บังคับตั้งแต่วันที่ 13 มิถุนายน 2566


### นโยบายความเป็นส่วนตัวของเว็บไซต์อื่น

นโยบายความเป็นส่วนตัวฉบับนี้ใช้สำหรับการเสนอสินค้า บริการ และการใช้งานบนเว็บไซต์สำหรับลูกค้าของเราเท่านั้น หากคุณเข้าชมเว็บไซต์อื่นแม้จะผ่านช่องทางเว็บไซต์ของเรา การคุ้มครองข้อมูลส่วนบุคคลต่าง ๆ จะเป็นไปตามนโยบายความเป็นส่วนตัวของเว็บไซต์นั้น ซึ่งเราไม่มีส่วนเกี่ยวข้องด้วย

### รายละเอียดการติดต่อ

หากคุณต้องการสอบถามข้อมูลเกี่ยวกับนโยบายความเป็นส่วนตัวฉบับนี้ รวมถึงการขอใช้สิทธิต่าง ๆ คุณสามารถติดต่อเราหรือเจ้าหน้าที่คุ้มครองข้อมูลส่วนบุคคลของเราได้ ดังนี้

#### ผู้ควบคุมข้อมูลส่วนบุคคล

สำนักงานที่ปรึกษาและว่าความนายเอริค

92/1 หมู่ 7 ที่วัง ทุ่งสง นครศรีธรรมราช 80110

อีเมล dpo@ericconsultant.co.th

เว็บไซต์ [www.ericconsultant.co.th](https://www.ericconsultant.co.th)

หมายเลขโทรศัพท์ 02-1620958

#### เจ้าหน้าที่คุ้มครองข้อมูลส่วนบุคคล

นายราชศักดิ์ รักษ์กำเนิด

92/1 หมู่ 7 ที่วัง ทุ่งสง นครศรีธรรมราช 80110

อีเมล dpo@ericconsultant.co.th

------------------------------------------------------

## Privacy Policy for Customer

Eric Lawyer & Consultant office recognizes the importance of the protection of your personal data. This Privacy Policy explains our practices regarding the collection, use or disclosure of personal data including other rights of the Data Subjects in accordance with the Personal Data Protection Laws.


### Collection of Personal Data

We will collect your personal data that receive directly from you as following:

1. your account registration
2. telephone
3. email address


### Types of Data Collected

- Personal data such as name, surname, age, date of birth, nationality, identification card, passport, etc.
- Contact information such as address, telephone number, e-mail address, etc.
- Account details such as username, password, transactions history, etc.
- Proof of identity such as copy of identification card, copy of passport, etc.
- Transaction and Financial information such as purchase history, credit card details, bank account, etc.
- Technical data such as IP address, Cookie ID, Activity Log, etc.
- Other such as photo, video, and other information that is considered personal data under the Personal Data Protection Laws.

### Children

If you are under the age of 20 or having legal restrictions, we may collect use or disclose your personal data. We require your parents or guardian to be aware and provide consent to us or allowed by applicable laws. If we become aware that we have collected personal data from children without verification of parental consent, we take steps to remove that information from our servers.


### Storage of Data

We store your personal data as hard copy and soft copy.

We store your personal data by using the following systems:

1. Our server in Thailand
2. Third-party server service providers in Thailand
3. Third-party server service providers outside of Thailand


### Use of Data

We use the collected data for various purposes:

1. To create and manage accounts
2. To provide products or services
3. To improve products, services, or user experiences
4. To share and manage information within organization
5. To provide after-sales services
6. To gather user’s feedback
7. To process payments of products or services
8. To comply with our Terms and Conditions
9. To comply with laws, rules, and regulatory authorities


### Disclosure of Personal Data

We may disclose your personal data to the following parties in certain circumstances:

#### Organization

We may disclose your personal data within our organization to provide and develop our products or services. We may combine information internally across the different products or services covered by this Privacy Policy to help us be more relevant and useful to you and others.

#### Service Providers

We may use service providers to help us provide our services such as payments, marketing and development of products or services. Please note that service providers have their own privacy policy.

#### Business Partners

In relation with our business partners, we may disclose certain personal data to them in order to coordinate and provide our products or services to you and provide necessary information about the availability of our products or services.

#### Cross-Border Data Transfer

We may disclose or transfer your personal data to third parties, organizations or servers located in foreign countries. We will take steps and measures to ensure that your personal data is securely transferred, and the receiving parties have an appropriate level of personal data protection standard or as allowed by laws.


### Data Retention

We will retain your personal data for as long as necessary during the period you are a customer or under relationship with us, or for as long as necessary in connection with the purposes set out in this Privacy Policy, unless law requires or permits a longer retention period. We will erase, destroy or anonymize your personal data when it is no longer necessary or when the period lapses.


### Data Subject Rights

Subject to the Personal Data Protection Laws thereof, you may exercise any of these rights in the following:

- Withdrawal of consent: If you have given consent to us to collect, use or disclose your personal data whether before or after the effective date of the Personal Data Protection Laws, you have the right to withdraw such consent at any time throughout the period your personal data available to us, unless it is restricted by laws or you are still under beneficial contract.

- Data access: You have the right to access your personal data that is under our responsibility; to request us to make a copy of such data for you; and to request us to reveal as to how we obtain your personal data.

- Data portability: You have the right to obtain your personal data if we organize such personal data in automatic machine-readable or usable format and can be processed or disclosed by automatic means; to request us to send or transfer the personal data in such format directly to other data controllers if doable by automatic means; and to request to obtain the personal data in such format sent or transferred by us directly to other data controller unless not technically feasible.

- Objection: You have the right to object to collection, use or disclosure of your personal data at any time if such doing is conducted for legitimate interests of us, corporation or individual which is within your reasonable expectation; or for carrying out public tasks.

- Data erasure or destruction: You have the right to request us to erase, destroy or anonymize your personal data if you believe that the collection, use or disclosure of your personal data is against relevant laws; or retention of the data by us is no longer necessary in connection with related purposes under this Privacy Policy; or when you request to withdraw your consent or to object to the processing as earlier described.

- Suspension: You have the right to request us to suspend processing your personal data during the period where we examine your rectification or objection request; or when it is no longer necessary and we must erase or destroy your personal data pursuant to relevant laws but you instead request us to suspend the processing.

- Rectification: You have the right to rectify your personal data to be updated, complete and not misleading.

- Complaint lodging: You have the right to complain to competent authorities pursuant to relevant laws if you believe that the collection, use or disclosure of your personal data is violating or not in compliance with relevant laws.


You can exercise these rights as the Data Subject by contacting our Data Protection Officer as mentioned below. We will notify the result of your request within 30 days upon receipt of such request. If we deny the request, we will inform you of the reason via SMS, email address, telephone, registered mail (if applicable).



### Cookies

To enrich and perfect your experience, we use cookies or similar technologies to display personalized content, appropriate advertising and store your preferences on your computer. We use cookies to identify and track visitors, their usage of our website and their website access preferences. If you do not wish to have cookies placed on your computer you should set their browsers to refuse cookies before using our website.


### Data Security

We endeavor to protect your personal data by establishing security measures in accordance with the principles of confidentiality, integrity, and availability to prevent loss, unauthorized or unlawful access, destruction, use, alteration, or disclosure including administrative safeguard, technical safeguard, physical safeguard and access controls.


### Data Breach Notification

We will notify the Office of the Personal Data Protection Committee without delay and, where feasible, within 72 hours after having become aware of it, unless such personal data breach is unlikely to result in a risk to the rights and freedoms of you. If the personal data breach is likely to result in a high risk to the rights and freedoms of you, we will also notify the personal data breach and the remedial measures to you without delay through our website, SMS, email address, telephone or registered mail (if applicable).


### Changes to this Privacy Policy

We may change this Privacy Policy from time to time. Any changes of this Privacy Policy, we encourage you to frequently check on our website.
This Privacy Policy was last updated and effective on 13th June 2023


### Links to Other Sites

The purpose of this Privacy Policy is to offer products or services and use of our website. Any websites from other domains found on our site is subject to their privacy policy which is not related to us.

### Contact Information

If you have any questions about this Privacy Policy or would like to exercise your rights, you can contact us by using the following details:

#### Data Controller

Eric Lawyer & Consultant office

92/1, Ti Wang, Thung Song, Nakhon Si Thammarat, 80110

dpo@ericconsultant.co.th

[www.ericconsultant.co.th](https://www.ericconsultant.co.th)

(+66) 02-1620958

#### Data Protection Officer

Eric Lawyer & Consultant office

92/1, Ti Wang, Thung Song, Nakhon Si Thammarat, 80110

dpo@ericconsultant.co.th
			`,
		},
		'do-not-sell': {
			title: 'Do not sell',
			content: `
สำนักงานที่ปรึกษาและว่าความนายเอริคเคารพในสิทธิความเป็นส่วนตัวของคุณ และขอยืนยันว่าสำนักงานฯ ไม่ขาย ให้เช่า เปิดเผย เผยแพร่ ถ่ายโอน หรือสื่อสารข้อมูลที่เป็นส่วนตัวของคุณ โดยการออกเสียง เป็นลายลักษณ์อักษร หรือทางอิเล็กทรอนิกส์หรืออื่นใด ทั้งนี้เพื่อสอดคล้องกับกฎหมายคุ้มครองข้อมูลส่วนบุคคลของรัฐแคลิฟอร์เนีย หรือ California Consumer Privacy Act (CCPA)

## ติดต่อสำนักงาน

ในกรณีที่คุณมีคำถามเกี่ยวกับนโยบายคุกกี้ของบริษัทฯ สามารถติดต่อสอบถามได้ที่อีเมล support@ericconsultant.co.th
			`,
		},
	};

	if (lookup[params.slug.toLowerCase()] ?? null) {
		return lookup[params.slug.toLowerCase()];
	}

    throw error(404, 'Not found');
}
