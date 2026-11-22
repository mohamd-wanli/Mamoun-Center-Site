import { t } from "../../../i18n/index.js";
import { Landmark, Users, GraduationCap, MapPin, Award } from "lucide-react";
import useCountUp from "../../../hooks/useCountUp";
import "./StatsSection.css";

const stats = [
  {
    id: 1,
    icon: Landmark,
    number: "60+",
    title: t("سنة من التميز"),
  },
  {
    id: 2,
    icon: Users,
    number: "1500+",
    title: t("طالب ومتدرب"),
  },
  {
    id: 3,
    icon: GraduationCap,
    number: "50+",
    title: t("مدرب ومدرس خبير"),
  },
  {
    id: 4,
    icon: MapPin,
    number: "50+",
    title: t("قاعات ومرافق حديثة"),
  },
  {
    id: 5,
    icon: Award,
    number: "98%",
    title: t("نسبة النجاح والتفوق"),
  },
];

function StatItem({ item }) {
  const Icon = item.icon;
  const [ref, count] = useCountUp(item.number, 1800);
  const suffix = item.number.includes("+")
    ? "+"
    : item.number.includes("%")
    ? "%"
    : "";

  return (
    <div className="stat-item" ref={ref}>
      <div className="stat-icon-wrap">
        <Icon size={26} strokeWidth={1.8} />
      </div>
      <div className="stat-info">
        <span className="stat-number">
          {count}
          {suffix}
        </span>
        <span className="stat-title">{item.title}</span>
      </div>
    </div>
  );
}

export default function StatsSection() {
  return (
    <section className="stats-section">
      <div className="container">
        <div className="stats-banner">
          {stats.map((item) => (
            <StatItem key={item.id} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}
