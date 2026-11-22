import { t } from "../i18n/index.js";
import { useState, useMemo } from "react";
import PageHeader from "../components/common/PageHeader/PageHeader";
import CoursesStats from "../components/courses/CoursesStats/CoursesStats";
import CoursesFilterBar from "../components/courses/CoursesFilterBar/CoursesFilterBar";
import CoursesCatalog from "../components/courses/CoursesCatalog/CoursesCatalog";
import LearningJourney from "../components/courses/LearningJourney/LearningJourney";
import CourseQuickModal from "../components/courses/CourseQuickModal/CourseQuickModal";
import CTASection from "../components/home/CTA/CTASection";
import { programs } from "../data/courses";

export default function CoursesPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [sortBy, setSortBy] = useState("featured");
  const [activeModalCourse, setActiveModalCourse] = useState(null);

  const filteredPrograms = useMemo(() => {
    let result = [...programs];

    if (selectedCategory !== "all") {
      result = result.filter((p) => p.categoryId === selectedCategory);
    }

    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase().trim();
      result = result.filter((p) => {
        const inTitle = p.title.toLowerCase().includes(q);
        const inSub = p.subtitle.toLowerCase().includes(q);
        const inDesc = p.description.toLowerCase().includes(q);
        const inCat = p.categoryLabel.toLowerCase().includes(q);
        const inHighlights = p.highlights?.some((h) =>
          h.toLowerCase().includes(q),
        );
        return inTitle || inSub || inDesc || inCat || inHighlights;
      });
    }

    // Sort
    if (sortBy === "rating") {
      result.sort((a, b) => (b.rating || 0) - (a.rating || 0));
    } else if (sortBy === "hours") {
      result.sort((a, b) => {
        const getNum = (str) => parseInt(str) || 0;
        return getNum(b.hours) - getNum(a.hours);
      });
    }

    return result;
  }, [searchQuery, selectedCategory, sortBy]);

  return (
    <>
      <PageHeader
        tag={t("البرامج والدورات المهنية")}
        title={t("استكشف البرامج والدورات التدريبية المعتمدة")}
        subtitle={t("برامج تطبيقية متطورة صُممت بعناية فائقة لتصقل مهاراتك وتمنحك الجاهزية التامة لسوق العمل والريادة المهنية.")}
        breadcrumbs={[{ label: t("الدورات والبرامج") }]}
      />

      <div className="container" style={{ position: "relative" }}>
        <CoursesStats />

        <CoursesFilterBar
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
          sortBy={sortBy}
          setSortBy={setSortBy}
          totalResults={filteredPrograms.length}
        />
      

        <CoursesCatalog
          programs={filteredPrograms}
          onQuickView={(prog) => setActiveModalCourse(prog)}
        />
      </div>

      <LearningJourney />

      <CTASection />

      {activeModalCourse && (
        <CourseQuickModal
          program={activeModalCourse}
          onClose={() => setActiveModalCourse(null)}
        />
      )}
    </>
  );
}
