import "./filter.css";
import { Search, X, SlidersHorizontal, Sparkles } from "lucide-react";
import { courseCategories } from "../../../data/courses";

export default function filter({}) {
  return (
    <div className="course-filter-wrapper">
      <div className="course-filter-toprow">

        <div className="course-search">
          <Search size={18} className="search-icon" />
          <input
            type="text"
            placeholder="ابحث عن اسم الدورة، المهارة، أو التخصص..."
            value={searchQuery}
            onChange={(e) => SetsearchQuery(e.target.value)}
            classname="course-search-input"
          />
          (searchQuery &&(
          <button
            className="clear"
            onClick={() => SetsearchQuery("")}
            aria-label="مسح البحث"
          >
            <X size={16} />
          </button>
          ))
        </div>
        <div className="course-sort">
          <SlidersHorizontal size={16} className="sort-icon" />
          <span className="slider-holder">ترتيب حسب : </span>
          <select
            className="course-select"
            value={sortBy}
            onChange={() => SetsortBy(e.target.value)}
          >
            <option value="featured">الموصى به (الأكثر طلباً)</option>
            <option value="rating">أعلى تقييم</option>
            <option value="hours">عدد ساعات التدريب</option>
          </select>
        </div>

      </div>
      <div className="course-filter-pilles">
        {courseCategories.map((cat)=> {
            
        })}

      </div>
    </div>
  );
}
