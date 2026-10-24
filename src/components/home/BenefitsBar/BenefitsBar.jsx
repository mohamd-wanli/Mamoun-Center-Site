import {
    GraduationCap,
    Users,
    BookOpen,
    Globe,
    ShieldCheck,
} from "lucide-react";
import "./BenefitsBar.css";

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
    return (
        <section className="benefits">
            <div className="container">
                <div className="benefits-bar">
                    {benefits.map(({ icon: Icon, title, text }) => (
                        <div className="benefit" key={title}>
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
