import { Icon } from "lucide-react";
import useScrollReveal from "../../../hooks/useScrollReveal";

export default function Intro() {
  const benefits = [
    {
      icon: Icon,
      title: "مرونة كاملة في التصميم",
      subtitle: "تفصيل البرامج والمناهج وفق احتياجات المتدرب أو الشركة"
    }, {
      icon: Icon,
      title: "اعتمادات رسمية و دولية",
      subtitle: "شهادات معترف بها تفتح لك أفق التوظيف"

    }, {
      icon: Icon,
      title: "تجهيز عملي تطبيقي",
      subtitle: "مختبرات وقاعات مجهزة بأحدث المعدات والأجهزة الاحترافية"
    }
  ]
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
              في مركز المأمون الدولي، لا نكتفي بتقديم الدورات التعليمية التقليدية،
              بل نوفر منظومة خدمات متطورة تشمل تصميم المناهج حسب الطلب، تدريب فرق
              العمل المؤسسية، والاستشارات المهنية المجانية، مدعومة بأحدث الورش
              التدريبية وشهادات معتمدة توثق تميزك في سوق العمل.
            </p>

            {benefits.map((item) => {
              <div className="benefits-wrapper">
                <Icon className="benefits-icon" />
                <span className="benefits-title">{item.title}</span>
                <p className="benefits-sub">{item.subtitle}</p>
              </div>
            })}
          </div>
          <div className="intro-visual">

          </div>

        </div>

      </div>
    </section>
  );
}
