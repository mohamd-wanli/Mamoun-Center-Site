import {
    GraduationCap,
    Users,
    BookOpen,
    Globe,
    ShieldCheck,
} from "lucide-react";
import "./BenefitsBar.css";
import useScrollReveal from "../../../hooks/useScrollReveal";

const benefits = [
    {
        icon: GraduationCap,
        title: "تدريب شامل",
        text: "تنمية المهارات المهنية والشخصية معاً",
    },
    {
        icon: Users,
        title: "مدربون خبراء",
        text: "نخبة من المدربين ذوي الخبرة العملية",
    },
    {
        icon: BookOpen,
        title: "تعلّم تطبيقي",
        text: "مناهج حديثة وتدريب عملي مباشر",
    },
    {
        icon: Globe,
        title: "معايير عالمية",
        text: "برامج معتمدة تواكب أحدث المعايير الدولية",
    },
    {
        icon: ShieldCheck,
        title: "بيئة داعمة",
        text: "مجتمع آمن يشجع على الإبداع والتميز",
    },
];

export default function BenefitsBar() {
    const [ref, isVisible] = useScrollReveal({ threshold: 0.2 });

    return (
        <section className="benefits" ref={ref}>
            <div className="container">
                <div className={`benefits-bar ${isVisible ? "benefits-bar--visible" : ""}`}>
                    {benefits.map(({ icon: Icon, title, text }, i) => (
                        <div
                            className="benefit"
                            key={title}
                            style={{ transitionDelay: `${i * 100}ms` }}
                        >
                            <span className="benefit-icon">
                                <Icon size={24} strokeWidth={1.7} />
                            </span>
                            <div className="benefit-text">
                                <h3>{title}</h3>
                                <p>{text}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
