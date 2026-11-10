import PageHeader from "../components/common/PageHeader/PageHeader";
import ServicesIntro from "../components/services/ServicesIntro/ServicesIntro";
import ServicesGrid from "../components/services/ServicesGrid/ServicesGrid";
import PartnersSection from "../components/services/PartnersSection/PartnersSection";
import BranchesSection from "../components/services/BranchesSection/BranchesSection";
import CTASection from "../components/home/CTA/CTASection";

export default function ServicesPage() {
  return (
    <>
      <PageHeader
        tag="خدماتنا وحلولنا التدريبية • OUR SERVICES"
        title="خدمات تدريبية واستشارية متكاملة"
        subtitle="نفتخر بتقديم مجموعة شاملة من البرامج المخصصة، وتدريب الشركات والمؤسسات، والشهادات المهنية المعتمدة دولياً."
        breadcrumbs={[{ label: "خدماتنا" }]}
      />

      <ServicesIntro />

      <ServicesGrid />

      <PartnersSection />

      <BranchesSection />

      <CTASection />
    </>
  );
}