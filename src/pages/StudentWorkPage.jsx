import { useState, useMemo } from "react";
import PageHeader from "../components/common/PageHeader/PageHeader";
import WorkFilterNav from "../components/studentWork/WorkFilterNav/WorkFilterNav";
import WorkGalleryGrid from "../components/studentWork/WorkGalleryGrid/WorkGalleryGrid";
import WorkLightboxModal from "../components/studentWork/WorkLightboxModal/WorkLightboxModal";
import SuccessStories from "../components/studentWork/SuccessStories/SuccessStories";
import ExhibitionBanner from "../components/studentWork/ExhibitionBanner/ExhibitionBanner";
import CTASection from "../components/home/CTA/CTASection";
import { studentProjects } from "../data/traineesWork";

export default function StudentWorkPage() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedProject, setSelectedProject] = useState(null);

  const filteredProjects = useMemo(() => {
    let list = [...studentProjects];

    if (activeCategory !== "all") {
      list = list.filter((p) => p.category === activeCategory);
    }

    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase().trim();
      list = list.filter((p) => {
        const inTitle = p.title.toLowerCase().includes(q);
        const inStudent = p.student.toLowerCase().includes(q);
        const inProgram = p.program.toLowerCase().includes(q);
        const inDesc = p.description.toLowerCase().includes(q);
        const inTags = p.tags?.some((t) => t.toLowerCase().includes(q));
        return inTitle || inStudent || inProgram || inDesc || inTags;
      });
    }

    return list;
  }, [activeCategory, searchQuery]);

  return (
    <>
      <PageHeader
        tag="إبداعات طلابنا "
        title="معرض إبداعات ومشاريع المتدربين"
        subtitle="شاهد ثمرة التدريب العملي المباشر ونماذج حية من مشاريع التخرج وقصص نجاح خريجينا في كبرى التخصصات المهنية والتقنية."
        breadcrumbs={[{ label: "أعمال المتدربين" }]}
      />

      <div className="container" style={{ position: "relative" }}>
{/* 
        <WorkFilterNav
          activeCategory={activeCategory}
          setActiveCategory={setActiveCategory}
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
          totalResults={filteredProjects.length}
        /> */}

        <WorkGalleryGrid
          projects={filteredProjects}
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
