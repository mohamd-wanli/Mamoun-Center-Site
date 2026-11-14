import { Trophy, Wrench, Briefcase, Award } from "lucide-react";
import { workStats } from "../../../data/traineesWork";
import useScrollReveal from "../../../hooks/useScrollReveal";
import "./WorkStats.css";

const statIcons = [Trophy, Wrench, Briefcase, Award];

export default function WorkStats() {
  const [sectionRef, isVisible] = useScrollReveal({ threshold: 0.1 });

  return (
    <div
      ref={sectionRef}
      className={`work-stats-wrap ${isVisible ? "stats--visible" : ""}`}
    >
      <div className="container">
        <div className="work-stats-grid">
          {workStats.map((item, index) => {
            const Icon = statIcons[index] || Trophy;
            return (
              <div
                key={index}
                className="work-stat-card"
                style={{ transitionDelay: `${index * 0.1}s` }}
              >
                <div className="stat-ico-circle">
                  <Icon size={24} />
                </div>
                <div className="stat-content">
                  <span className="stat-val">{item.value}</span>
                  <strong className="stat-lbl">{item.label}</strong>
                  <span className="stat-desc">{item.subtext}</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
