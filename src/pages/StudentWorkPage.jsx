import { useState, useMemo } from "react";
import PageHeader from "../components/common/PageHeader/PageHeader";
import WorkGalleryGrid from "../components/studentWork/WorkGalleryGrid/WorkGalleryGrid";
import WorkLightboxModal from "../components/studentWork/WorkLightboxModal/WorkLightboxModal";
import SuccessStories from "../components/studentWork/SuccessStories/SuccessStories";
import ExhibitionBanner from "../components/studentWork/ExhibitionBanner/ExhibitionBanner";
import CTASection from "../components/home/CTA/CTASection";
import { studentProjects, workCategories } from "../data/traineesWork";

export default function StudentWorkPage() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [selectedProject, setSelectedProject] = useState(null);

  const filteredProjects = useMemo(() => {
    if (activeCategory === "all") {
      return studentProjects;
    }
    return studentProjects.filter((p) => p.category === activeCategory);
  }, [activeCategory]);

  return (
    <>
      <PageHeader
        tag="إبداعات طلابنا"
        title="معرض إبداعات ومشاريع المتدربين"
        subtitle="شاهد ثمرة التدريب العملي المباشر ونماذج حية من مشاريع التخرج وقصص نجاح خريجينا في كبرى التخصصات المهنية والتقنية."
        breadcrumbs={[{ label: "أعمال المتدربين" }]}
      />

      <div className="container" style={{ position: "relative" }}>
        <WorkGalleryGrid
          projects={filteredProjects}
          categories={workCategories}
          activeCategory={activeCategory}
          onSelectCategory={setActiveCategory}
          onSelectProject={(proj) => setSelectedProject(proj)}
        />
      </div>

      <SuccessStories />

      <ExhibitionBanner />

      <CTASection />

      {selectedProject && (
        <WorkLightboxModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </>
  );
}
