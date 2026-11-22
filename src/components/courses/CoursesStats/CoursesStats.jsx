import { t } from "../../../i18n/index.js";
import { GraduationCap, Wrench, Award } from "lucide-react";
import "./CoursesStats.css";

const stats = [
  {
    icon: GraduationCap,
    value: "+30",
    label: t("برنامج وتخصص مهني"),
    subtext: t("مناهج معتمدة ومطورة دورياً"),
  },
  {
    icon: Wrench,
    value: "100%",
    label: t("تدريب عملي تطبيقي"),
    subtext: t("ورش ومختبرات تخصصية مجهزة"),
  },
  {
    icon: Award,
    value: "+60",
    label: t("عاماً من الاعتماد والريادة"),
    subtext: t("شهادات موثقة تفتح لك سوق العمل"),
  },
];

export default function CoursesStats() {
  return (
    <div className="courses-stats-wrap">
      <div className="container">
        <div className="courses-stats-grid">
          {stats.map((item, index) => {
            const Icon = item.icon;
            return (
              <div key={index} className="courses-stat-item">
                <div className="stat-icon-box">
                  <Icon size={24} />
                </div>
                <div className="stat-info-box">
                  <span className="stat-number">{item.value}</span>
                  <strong className="stat-title">{item.label}</strong>
                  <span className="stat-sub">{item.subtext}</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
