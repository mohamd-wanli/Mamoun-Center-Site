import { t } from "../../../i18n/index.js";
import { Search, X, SlidersHorizontal, Sparkles } from "lucide-react";
import { courseCategories } from "../../../data/courses";
import "./CoursesFilterBar.css";

export default function CoursesFilterBar({
  searchQuery,
  setSearchQuery,
  selectedCategory,
  setSelectedCategory,
  sortBy,
  setSortBy,
  totalResults,
}) {
  return (
    <div className="courses-filter-wrapper">
      <div className="filter-top-row">
        <div className="courses-search-box">
          <Search size={18} className="search-icon" />
          <input
            type="text"
            placeholder={t("ابحث عن اسم الدورة، المهارة، أو التخصص...")}
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="courses-search-input"
          />
          {searchQuery && (
            <button
              className="clear-search-btn"
              onClick={() => setSearchQuery("")}
              aria-label={t("مسح البحث")}
            >
              <X size={16} />
            </button>
          )}
        </div>

        <div className="courses-sort-box">
          <SlidersHorizontal size={16} className="sort-icon" />
          <span className="sort-label"> {t("ترتيب حسب:")} </span>
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="courses-sort-select"
          >
            <option value="featured"> {t("الموصى به (الأكثر طلباً)")} </option>
            <option value="rating"> {t("أعلى تقييم")} </option>
            <option value="hours"> {t("عدد ساعات التدريب")} </option>
          </select>
        </div>
      </div>

      <div className="filter-categories-pills">
        {courseCategories.map((cat) => {
          const isActive = selectedCategory === cat.id;
          return (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`category-pill-btn ${isActive ? "category-pill--active" : ""}`}
            >
              <span>{cat.label}</span>
            </button>
          );
        })}
      </div>

      <div className="filter-results-bar">
        <span className="results-count">
           {t("تم العثور على")} <strong>{totalResults}</strong>  {t("من البرامج التدريبية المعتمدة")} </span>
        {(searchQuery || selectedCategory !== "all") && (
          <button
            className="reset-filters-btn"
            onClick={() => {
              setSearchQuery("");
              setSelectedCategory("all");
            }}
          >
             {t("إعادة تعيين الفلاتر")} </button>
        )}
      </div>
    </div>
  );
}

