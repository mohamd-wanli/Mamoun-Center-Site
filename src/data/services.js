import trainingImg1 from "../assets/images/training-center.png";
import trainingImg2 from "../assets/images/training-center2.png";
import aboutStoryImg from "../assets/images/aboutStory.jfif";
import ctaImg from "../assets/images/cta.jfif";
import about4Img from "../assets/images/about4.jfif";
import phoneImg from "../assets/images/phone.jfif";

export const coreServices = [
  {
    id: "custom-programs",
    icon: "Sliders",
    tag: "برامج مخصصة",
    themeColor: "#d7a637", // Gold / Amber
    image: trainingImg2,
    title: "تصميم البرامج التدريبية حسب الطلب",
    subtitle: "Custom Training Programs",
    description: "نقدم خدمة تصميم وتفصيل حقائب تدريبية وبرامج تخصصية مرنة وموجهة خصيصاً للشركات أو الأفراد بما يلائم طبيعة عملهم وأهدافهم المهنية الدقيقة.",
    features: [
      "تحديد وتحليل الاحتياجات التدريبية الفعلية",
      "إعداد مناهج وحقائب مخصصة للكوادر",
      "مرونة كاملة في المواعيد والمكان (حضوري أو بمقر الشركة)",
      "تقارير تقييمية مفصلة لأداء كل متدرب",
    ],
  },
  {
    id: "hands-on-training",
    icon: "Wrench",
    tag: "تطبيق واقعي 100%",
    themeColor: "#2563eb", // Royal Blue
    image: trainingImg1,
    title: "تدريب عملي تطبيقي ومختبرات متقدمة",
    subtitle: "Hands-on Practical Training",
    description: "المركز مجهز بالكامل بأحدث الورش والمعدات والمختبرات الاحترافية اللازمة لتنفيذ البرامج التدريبية المختلفة ومحاكاة بيئة العمل الميدانية الفعلية.",
    features: [
      "معامل ومختبرات صيانة وتقنية متطورة",
      "ورش تجميل وخياطة مجهزة بمعدات مهنية",
      "تدريب يدوي مباشر بإشراف كبار الخبراء",
      "توفير مستلزمات وأدوات التدريب داخل المركز",
    ],
  },
  {
    id: "accredited-certificates",
    icon: "Award",
    tag: "معترف بها دولياً",
    themeColor: "#16a34a", // Emerald Green
    image: about4Img,
    title: "شهادات مهنية وحرفية معتمدة دولياً",
    subtitle: "Accredited Certifications",
    description: "يحصل المتدرب على شهادة مصدقة وموثقة من الجهات الرسمية المعنية تثبت كفاءته وتمنحه الأولوية والمصداقية العالية في التوظيف داخل وخارج القطر.",
    features: [
      "شهادات مصدقة وقابلة للتصديق الخارجي",
      "إثبات خبرة مهنية يوثق الساعات التدريبية",
      "معترف بها لدى سوق العمل والجهات التوظيفية",
      "إمكانية إصدار وثائق رسمية باللغتين العربية والإنجليزية",
    ],
  },
  {
    id: "training-content",
    icon: "FileText",
    tag: "محتوى حصري ومحدث",
    themeColor: "#0891b2", // Cyan / Teal
    image: phoneImg,
    title: "محتوى تدريبي متكامل وحقائب احترافية",
    subtitle: "Comprehensive Training Modules",
    description: "ملف تدريبي شامل وموثق يوضع بين يدي كل متدرب، يشمل الدروس العملية، الملاحظات الهندسية والفنية، المخططات، والنماذج التطبيقية الدقيقة.",
    features: [
      "حقائب تدريبية مطورة وفق أحدث المعايير",
      "مخططات ومراجع هندسية وفنية دقيقة",
      "وصول دائم للمواد الإثرائية والتحديثات",
      "نماذج ومشاريع واقعية جاهزة للتطبيق الفوري",
    ],
  },
  {
    id: "free-consulting",
    icon: "Headphones",
    tag: "استشارة مجانية",
    themeColor: "#e11d48", // Crimson Rose
    image: ctaImg,
    title: "استشارات ما قبل التسجيل والتوجيه المهني",
    subtitle: "Pre-Enrollment Career Guidance",
    description: "نوفر جلسات استشارية فردية مجانية مع نخبة من خبرائنا لمساعدتك على تحديد شغفك واختيار الدورة الأكثر ملاءمة لأهدافك وخبراتك وسوق العمل.",
    features: [
      "تقييم مستوى المهارات السابقة مجاناً",
      "تحديد المسار المهني الأنسب لاحتياجاتك",
      "شرح مجالات وفرص العمل لكل تخصص",
      "خطة زمنية مدروسة ومخصصة لمسارك التدريبي",
    ],
  },
  {
    id: "corporate-training",
    icon: "Building2",
    tag: "حلول الشركات",
    themeColor: "#7c3aed", // Violet / Purple
    image: aboutStoryImg,
    title: "تدريب وتطوير الشركات والمؤسسات",
    subtitle: "Corporate Training Solutions",
    description: "حلول تطويرية وتدريبية متكاملة للشركات والمنظمات تهدف إلى رفع إنتاجية فرق العمل، صقل كفاءات الموظفين، ومواكبة المعايير المؤسسية الحديثة.",
    features: [
      "برامج موجهة لبناء مهارات فرق العمل",
      "خطط تدريب جماعية بأسعار وتسهيلات تفضيلية",
      "تنفيذ التدريب في مقر المركز أو موقع المؤسسة",
      "متابعة دورية وقياس الأثر التدريبي بعد انتهاء البرنامج",
    ],
  },
];

export const clientCategories = [
  { id: "all", label: "جميع الشركاء والجهات" },
  { id: "intl", label: "منظمات وهيئات دولية" },
  { id: "national", label: "مؤسسات وشركات وطنية" },
  { id: "regional", label: "جهات وزارية وإقليمية" },
];

export const partnersData = [
  // International Organizations
  { name: "منظمة الهلال الأحمر السوري", category: "intl", tag: "منظمة إنسانية دولية" },
  { name: "المجلس الدنماركي للاجئين (DRC)", category: "intl", tag: "منظمة دولية" },
  { name: "المجلس النرويجي للاجئين (NRC)", category: "intl", tag: "منظمة دولية" },
  { name: "بطريركية الروم الأرثوذكس", category: "intl", tag: "مؤسسة أهلية وتنموية" },
  { name: "راهبات دير الراعي الصالح", category: "intl", tag: "منظمة تنموية" },

  // National Enterprises & Institutions
  { name: "مؤسسة الطيران العربية السورية", category: "national", tag: "قطاع حكومي" },
  { name: "المؤسسة العامة للاتصالات", category: "national", tag: "قطاع الاتصالات" },
  { name: "المؤسسة العربية للإعلان", category: "national", tag: "قطاع الإعلام والإعلان" },
  { name: "مجموعة حمشو الدولية", category: "national", tag: "مجموعة صناعية وتجارية" },
  { name: "شركة الحافظ للصناعات الإلكترونية", category: "national", tag: "قطاع الصناعة والإلكترونيات" },
  { name: "الشركة السورية الكورية", category: "national", tag: "شركة مشتركة" },
  { name: "مؤسسة الخط الحديدي الحجازي", category: "national", tag: "قطاع النقل والخدمات" },
  { name: "مجموعة ماس الاقتصادية", category: "national", tag: "قطاع الاستثمار والأعمال" },

  // Regional & Arab Partners
  { name: "وزارة المالية - الـسـودان", category: "regional", tag: "قطاع حكومي" },
  { name: "ديوان الضرائب - الـسـودان", category: "regional", tag: "مؤسسة مالية" },
  { name: "الأمانة العامة لديوان الزكاة - الـسـودان", category: "regional", tag: "هيئة حكومية" },
  { name: "المركز الوطني لتدريب الشباب - الـسـودان", category: "regional", tag: "تنمية وتدريب" },
  { name: "مركز دراسات المرأة - الـسـودان", category: "regional", tag: "أبحاث وتطوير" },
  { name: "مشاريع استقرار الشباب - الـسـودان", category: "regional", tag: "مبادرات شبابية" },
  { name: "رابطة المرأة العاملة - الـسـودان", category: "regional", tag: "تطوير مهني" },
  { name: "الدار الاستشارية اليمنية - اليـمـن", category: "regional", tag: "استشارات وتطوير" },
  { name: "وكالة تنمية المنشآت الصغيرة - اليـمـن", category: "regional", tag: "ريادة الأعمال" },
  { name: "مركز المحور للتدريب والتطوير - عُـمـان", category: "regional", tag: "مركز تدريبي" },
  { name: "مركز الأعمال الأوروبي للتدريب - عُـمـان", category: "regional", tag: "استشارات دولية" },
];

export const branchesData = [
  {
    id: "victoria",
    name: "فرع فكتوريا (التدريب التقني)",
    location: "دمشق - فكتوريا - خلف وزارة السياحة",
    specialty: "متخصص في برامج صيانة الأجهزة والتقنيات الحديثة والتدريب الإلكتروني المتطور.",
    image: trainingImg1,
    phones: ["0112212226", "0112245987", "0931682500"],
    hours: "من السبت إلى الخميس: 9:00 ص – 8:00 م",
    isPrimary: true,
  },
  {
    id: "halbouni",
    name: "فرع الحلبوني (التدريب الفني والحرفي)",
    location: "دمشق - الحلبوني - مقابل جامع الحلبوني",
    specialty: "متخصص في برامج تصميم الأزياء، الخياطة الراقية، والحلاقة والتجميل الشامل.",
    image: trainingImg2,
    phones: ["0112242499", "0112251366", "0966382224"],
    hours: "من السبت إلى الخميس: 9:00 ص – 8:00 م",
    isPrimary: false,
  },
];
