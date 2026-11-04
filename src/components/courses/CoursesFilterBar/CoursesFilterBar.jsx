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
      {/* Top Search & Sort Row */}
      <div className="filter-top-row">
        {/* Search Input */}
        <div className="courses-search-box">
          <Search size={18} className="search-icon" />
          <input
            type="text"
            placeholder="ابحث عن اسم الدورة، المهارة، أو التخصص..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="courses-search-input"
          />
          {searchQuery && (
            <button
              className="clear-search-btn"
              onClick={() => setSearchQuery("")}
              aria-label="مسح البحث"
            >
              <X size={16} />
            </button>
          )}
        </div>

        {/* Sort Select */}
        <div className="courses-sort-box">
          <SlidersHorizontal size={16} className="sort-icon" />
          <span className="sort-label">ترتيب حسب:</span>
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="courses-sort-select"
          >
            <option value="featured">الموصى به (الأكثر طلباً)</option>
            <option value="rating">أعلى تقييم</option>
            <option value="hours">عدد ساعات التدريب</option>
          </select>
        </div>
      </div>

      {/* Category Pills Navigation */}
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

      {/* Results Indicator */}
      <div className="filter-results-bar">
        <span className="results-count">
          تم العثور على <strong>{totalResults}</strong> من البرامج التدريبية المعتمدة
        </span>
        {(searchQuery || selectedCategory !== "all") && (
          <button
            className="reset-filters-btn"
            onClick={() => {
              setSearchQuery("");
              setSelectedCategory("all");
            }}
          >
            إعادة تعيين الفلاتر
          </button>
        )}
      </div>
    </div>
  );
}

