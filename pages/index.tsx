import Head from 'next/head';
import { useRouter } from 'next/router';
import { FunctionComponent, useRef } from 'react';
import Button from '../components/button';
import Footer from '../components/footer';
import HowItWork from '../components/how-it-work';
import NavigationBar from '../components/navigation-bar';
import TopicCard from '../components/topic-card';
import topics from '../data/topics';

const Home: FunctionComponent = () => {
  const router = useRouter();
  const howItWork = useRef<HTMLDivElement>(null);

  return (
    <main
      className="bg-gray-400 bg-top bg-no-repeat bg-double sm:bg-contain"
      style={{
        backgroundImage: `url(${require('../assets/images/header-bg.png')})`,
      }}
    >
      <Head>
        <title>Dream Constitution</title>
      </Head>
      <NavigationBar theme="transparent" hideLogo />
      <img
        src={require('../assets/images/logo-main.png')}
        alt="CONstitution LAB"
        className="w-64 md:w-96 mx-auto my-4"
      />
      <div>
        <div className="section space-y-10 py-12">
          <h1 className="text-large-2 text-oblique-shadow text-white">
            รัฐธรรมนูญ
            <p className="text-blue-200">เป็นเรื่องของทุกคน</p>
            รัฐธรรมนูญ
            <p className="text-yellow-400">เป็นกติกาสูงสุดของประเทศ</p>
          </h1>
          <div className="text-white">
            <b>CONLAB</b> - รัฐธรรมนูญก้าวหน้า
            ขอชวนทุกคนมาออกแบบรัฐธรรมนูญในแบบฉบับของตัวเองได้ที่นี่
          </div>
          <Button
            state="outline"
            className="w-full"
            onClick={() =>
              howItWork.current?.scrollIntoView({ behavior: 'smooth' })
            }
          >
            CONstitution LAB คืออะไร?
          </Button>
        </div>
        <div className="section space-y-10 mt-2 p-4 bg-gray-100 py-12">
          <div className="space-y-4">
            <h2 className="text-headline-1 text-center w-full">
              ออกแบบรัฐธรรมนูญ ไม่ยากอย่างที่คิด!
            </h2>
            <p className="text-center w-full">ลองเริ่มต้นจากเรื่องที่คุณสนใจ</p>
          </div>
          {topics.map((t, index) => (
            <TopicCard
              topicNumber={t.topicNumber}
              shortTitle={t.shortTitle}
              title={t.title}
              iconUrl={t.iconUrl}
              className={index % 2 === 0 ? 'bg-blue-300' : 'bg-yellow-400'}
              onClick={() => router.push(`/topics/${t.topicNumber}`)}
              showButton={false}
              key={t.topicNumber}
            />
          ))}
          <HowItWork />
        </div>
        <div className="section bg-blue-300 p-4 space-y-6 py-12">
          <h2 className="text-headline-1 text-left w-full">
            CONLAB - รัฐธรรมนูญก้าวหน้า คือใคร?
          </h2>
          <p>
            CONLAB - รัฐธรรมนูญก้าวหน้า คือ กลุ่มคนรุ่นใหม่จากหลากหลายวงการ
            ที่ต้องการผลักดันให้ประเทศไทยมีรัฐธรรมนูญที่ “ก้าวหน้า”
            เพื่อคุณภาพชีวิตที่ดีของประชาชน ก่อตั้งขึ้นในช่วงหลังการเลือกตั้งปี
            2562
          </p>
          <p>รัฐธรรมนูญที่ “ก้าวหน้า” ต้องยึดอยู่บน 3 หลักการเสมอ</p>
          <div className="space-y-4">
            <AboutPoint title="1 - เป็นกลางและเป็นธรรม">
              สร้างกติกาที่เป็นที่ยอมรับของทุกฝ่ายในสังคม
              เปิดโอกาสให้ทุกกลุ่มความคิดสามารถรณรงค์-แข่งขัน
              ได้อย่างเท่าเทียมและอยู่ร่วมกันได้โดยไม่แตกแยก
            </AboutPoint>
            <AboutPoint title="2 - สอดคล้องกับสากล">
              มีเนื้อหาที่คุ้มครองสิทธิเสรีภาพของประชาชน
              และวางความสัมพันธ์ของโครงสร้างทางการเมืองต่างๆ
              ให้มีความสอดคล้องระหว่างอำนาจและที่มา
            </AboutPoint>
            <AboutPoint title="3 - แก้ปัญหาที่อาจเกิดขึ้นในวันหน้า ตั้งแต่วันนี้">
              ออกแบบโครงสร้างประเทศให้สามารถรับมือกับการเปลี่ยนแปลงที่รวดเร็วของโลกได้อย่างมีประสิทธิภาพ
            </AboutPoint>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
};

type AboutPointProps = {
  title: string;
};

const AboutPoint: FunctionComponent<AboutPointProps> = ({
  title,
  children,
}) => (
  <div className="text-body-2 space-y-2">
    <h4 className="font-bold">{title}</h4>
    <p className="font-normal">{children}</p>
  </div>
);

export default Home;
