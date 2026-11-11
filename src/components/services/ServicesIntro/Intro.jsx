import { Zap, Users, Award } from "lucide-react";
import useScrollReveal from "../../../hooks/useScrollReveal";
import Img1 from "../../../assets/images/hrco.png";
import Img2 from "../../../assets/images/j.png";
export default function Intro() {
  const benefits = [
    {
      icon: Zap,
      title: "مرونة كاملة في التصميم",
      subtitle: "تفصيل البرامج والمناهج وفق احتياجات المتدرب أو الشركة",
    },
    {
      icon: Users,
      title: "اعتمادات رسمية و دولية",
      subtitle: "شهادات معترف بها تفتح لك أفق التوظيف",
    },
    {
      icon: Award,
      title: "تجهيز عملي تطبيقي",
      subtitle: "مختبرات وقاعات مجهزة بأحدث المعدات والأجهزة الاحترافية",
    },
  ];
  return (
    <section className="services-wrapper">
      <div className="container service-container">
        <div className="services-grid">
          <div className="intro-text">
            <div className="service-pill">حلول تدريبيةواستشارية متكاملة</div>
            <div className="services-header">
              نلهم العقول ونبني الكفاءات للأفراد والمؤسسات
            </div>
            <p className="services-header-desc">
              في مركز المأمون الدولي، لا نكتفي بتقديم الدورات التعليمية
              التقليدية، بل نوفر منظومة خدمات متطورة تشمل تصميم المناهج حسب
              الطلب، تدريب فرق العمل المؤسسية، والاستشارات المهنية المجانية،
              مدعومة بأحدث الورش التدريبية وشهادات معتمدة توثق تميزك في سوق
              العمل.
            </p>

            {benefits.map((item) => {
              return (
                <div className="benefits-wrapper">
                  <item.icon className="benefits-icon" />
                  <span className="benefits-title">{item.title}</span>
                  <p className="benefits-sub">{item.subtitle}</p>
                </div>
              );
            })}
          </div>
          <div className="intro-visual">
            <img src={Img1} alt="تصفح خدماتنا " />
            <div className="intro-visual-branch">
              <img src={Img2} alt="ودوراتنا التعليمية" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
