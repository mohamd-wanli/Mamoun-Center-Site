import { useState } from "react";
import { HelpCircle, ChevronDown, Check } from "lucide-react";
import useScrollReveal from "../../../hooks/useScrollReveal";
import "./ContactFAQ.css";

const faqs = [
  {
    q: "ما هي الأوراق والشروط المطلوبة للتسجيل في الدورات؟",
    a: "التسجيل متاح لجميع الفئات دون قيود عمرية معقدة. المستندات المطلوبة تشمل: صورة عن الهوية الشخصية (أو جواز السفر)، صورتين شخصيتين، وملء استمارة التسجيل في مقر مركز المأمون أو عبر الموقع.",
  },
  {
    q: "هل الشهادات الممنوحة من مركز المأمون معتمدة رسمياً؟",
    a: "نعم، كافة الشهادات الصادرة عن مركز المأمون الدولي موثقة ومعتمدة من الجهات التعليمية والمهنية المختصة، وتمنح خريجينا الأولوية والمصداقية العالية في سوق العمل السوري والعربي.",
  },
  {
    q: "هل يمكن تقسيط رسوم الدورات التدريبية؟",
    a: "نعم بكل تأكيد، نوفر نظام دفع ميسر ومرن يمكن من خلاله تسديد رسوم الدورة على دفعات تتوزع طوال فترة التدريب دون أي أعباء إضافية.",
  },
  {
    q: "هل تتوفر أوقات تدريب مسائية تناسب الموظفين والطلاب؟",
    a: "نعم، نوفر شعب تدريبية صباحية (من 9:00 ص إلى 2:00 م) وشعب مسائية (من 3:00 م إلى 8:00 م) لتلائم مواعيد الجميع.",
  },
  {
    q: "كم تبلغ نسبة التدريب العملي في الدورات؟",
    a: "يعتمد نظام التدريب في المأمون على التطبيق العملي بنسبة تتجاوز 80% إلى 100% داخل ورش وقاعات مجهزة بأحدث المعدات والأدوات لمحاكاة بيئة العمل الفعلية.",
  },
];

export default function ContactFAQ() {
  const [sectionRef, isVisible] = useScrollReveal({ threshold: 0.15 });
  const [openIndex, setOpenIndex] = useState(0); // open first by default

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <section
      ref={sectionRef}
      className={`contact-faq-section section ${isVisible ? "faq--visible" : ""}`}
    >
      <div className="container">
        {/* Header */}
        <div className="contact-faq-header">
          <span className="section-tag">
            <HelpCircle size={15} style={{ verticalAlign: "middle", marginLeft: 6 }} />
            الأسئلة الشائعة
          </span>
          <h2 className="section-title">
            إجابات سريعة
            <span className="section-title-accent"> عن أكثر الاستفسارات تكراراً</span>
          </h2>
          <p className="contact-faq-sub">
            جمعنا لك إجابات واضحة عن كل ما قد يخطر ببالك قبل التسجيل في برامجنا.
          </p>
        </div>

        {/* Accordion */}
        <div className="faq-accordion">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className={`faq-item ${isOpen ? "faq-item--open" : ""}`}
                style={{ transitionDelay: `${index * 0.08}s` }}
              >
                <button
                  type="button"
                  className="faq-question-btn"
                  onClick={() => toggleFAQ(index)}
                  aria-expanded={isOpen}
                >
                  <span className="faq-question-text">{faq.q}</span>
                  <div className={`faq-icon-arrow ${isOpen ? "arrow--rotated" : ""}`}>
                    <ChevronDown size={20} />
                  </div>
                </button>

                <div className={`faq-answer-wrap ${isOpen ? "answer--expanded" : ""}`}>
                  <div className="faq-answer-inner">
                    <p>{faq.a}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

