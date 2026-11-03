import PageHeader from "../components/common/PageHeader/PageHeader";
import ContactCards from "../components/contact/ContactCards/ContactCards";
import ContactFormSection from "../components/contact/ContactFormSection/ContactFormSection";
import ContactFAQ from "../components/contact/ContactFAQ/ContactFAQ";

export default function ContactPage() {
  return (
    <>
      <PageHeader
        tag="تواصل معنا "
        title="يسعدنا تواصلك مع مركز المأمون الدولي"
        subtitle="فريقنا جاهز للإجابة على استفساراتك، مساعدتك في اختيار الدورة التدريبية الأنسب، واستقبال طلبات التسجيل."
        breadcrumbs={[{ label: "اتصل بنا" }]}
      />
      <ContactCards />
      <ContactFormSection />
      <ContactFAQ />
    </>
  );
}
