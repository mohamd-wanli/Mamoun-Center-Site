import { Landmark, Users, GraduationCap, MapPin, Award } from "lucide-react";
import "./StatsSection.css";

const stats = [
  {
    id: 1,
    icon: Landmark,
    number: "25+",
    title: "سنة من التميز",
    subtitle: "Years of Excellence",
  },
  {
    id: 2,
    icon: Users,
    number: "1500+",
    title: "طالب ومتدرب",
    subtitle: "Students Enrolled",
  },
  {
    id: 3,
    icon: GraduationCap,
    number: "120+",
    title: "مدرب ومدرس خبير",
    subtitle: "Skilled Teachers",
  },
  {
    id: 4,
    icon: MapPin,
    number: "100+",
    title: "قاعات ومرافق حديثة",
    subtitle: "Acres Campus",
  },
  {
    id: 5,
    icon: Award,
    number: "98%",
    title: "نسبة النجاح والتفوق",
    subtitle: "Acceptance Rate",
  },
];

export default function StatsSection() {
  return (
    <section className="stats-section">
      <div className="container">
        <div className="stats-banner">
          {stats.map((item) => {
            const Icon = item.icon;
            return (
              <div className="stat-item" key={item.id}>
                <div className="stat-icon-wrap">
                  <Icon size={26} strokeWidth={1.8} />
                </div>
                <div className="stat-info">
                  <span className="stat-number">{item.number}</span>
                  <span className="stat-title">{item.title}</span>
                  <small className="stat-subtitle">{item.subtitle}</small>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
