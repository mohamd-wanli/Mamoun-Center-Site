import { MapPin, Phone, Mail, User, LogIn } from "lucide-react";
import { Link } from "react-router-dom";
import "./TopBar.css";

export default function TopBar() {
    return (
        <div className="topbar">
            <div className="container topbar-inner">
                <div className="topbar-info">
                    <span className="topbar-item">
                        <MapPin size={13} />
                        <span>دمشق - جسر فكتوريا</span>
                    </span>
                    <a className="topbar-item" href="tel:+963111234567" dir="ltr">
                        <Phone size={13} />
                        <span>+963 11 123 4567</span>
                    </a>
                    <a className="topbar-item" href="mailto:info@mamouncoc.com">
                        <Mail size={13} />
                        <span>info@mamouncom.com</span>
                    </a>
                </div>
                <div className="topbar-actions">
                    <Link to="/student-work" className="topbar-item">
                        <User size={13} />
                        <span>بوابة المتدرب</span>
                    </Link>
                    <Link to="/contact" className="topbar-item">
                        <LogIn size={13} />
                        <span>تسجيل الدخول</span>
                    </Link>
                </div>
            </div>
        </div>
    );
}
