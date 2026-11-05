import PageHeader from "../components/common/PageHeader/PageHeader";
import AboutStory from "../components/about/AboutStory/AboutStory";
import VisionMission from "../components/about/VisionMission/VisionMission";
import AboutWhyUs from "../components/about/WhyUs/AboutWhyUs";
import Milestones from "../components/about/Milestones/Milestones";
import CTASection from "../components/home/CTA/CTASection";

export default function AboutPage() {
  return (
    <>
      <PageHeader
        tag="من نحن "
        title="عن مركز المأمون الدولي"
        subtitle="أكثر من ستة عقود من الريادة في التعليم المهني والتقني، وصناعة الكفاءات والمهارات التي تقود سوق العمل."
        breadcrumbs={[{ label: "من نحن" }]}
      />
      <AboutStory />
      <VisionMission />
      <AboutWhyUs />
      <Milestones />
      <CTASection />
    </>
  );
}
