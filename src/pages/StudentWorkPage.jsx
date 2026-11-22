import { t } from "../i18n/index.js";
import { useState, useMemo } from "react";
import PageHeader from "../components/common/PageHeader/PageHeader";
import WorkGalleryGrid from "../components/studentWork/WorkGalleryGrid/WorkGalleryGrid";
import WorkLightboxModal from "../components/studentWork/WorkLightboxModal/WorkLightboxModal";
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
        tag={t("إبداعات طلابنا")}
        title={t("معرض إبداعات ومشاريع المتدربين")}
        subtitle={t("شاهد ثمرة التدريب العملي المباشر ونماذج حية من مشاريع التخرج وقصص نجاح خريجينا في كبرى التخصصات المهنية والتقنية.")}
        breadcrumbs={[{ label: t("أعمال المتدربين") }]}
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
