import phoneImg from "../assets/images/phone.jfif";
import carImg from "../assets/images/car.jfif";
import elecmade from "../assets/images/الكهرباء الصناعية.jfif";
import repairdevice from "../assets/images/صيانة الأجهزة.jfif";
import elctron from "../assets/images/مبادئ.jfif";
import phonehs from "../assets/images/phonehs.jfif";
import plc from "../assets/images/plc.jfif";
import light from "../assets/images/light.jfif";
import auto from "../assets/images/auto.jfif";
import advmachine from "../assets/images/advmachine.jfif";
import carelec from "../assets/images/carelec.jfif";
import cool from "../assets/images/cool.jfif";
import photographyImg from "../assets/images/courses/photography.jpg";
import mensBarberingImg from "../assets/images/courses/mens-barbering.jpg";
import advancedMensBarberingImg from "../assets/images/courses/advanced-mens-barbering.jpg";
import theoreticalAccountingImg from "../assets/images/courses/theoretical-accounting.jpg";
import practicalAccountingImg from "../assets/images/courses/practical-accounting.jpg";
import graphicDesignImg from "../assets/images/courses/graphic-design.jpg";
import motionGraphicDesignImg from "../assets/images/courses/motion-graphic-design.jpg";
import womensHairStylingImg from "../assets/images/courses/womens-hair-styling.jpg";
import hairColorTechniquesImg from "../assets/images/courses/hair-color-techniques.jpg";
import professionalChignonImg from "../assets/images/courses/professional-chignon.jpg";
import comprehensiveBeautyImg from "../assets/images/courses/comprehensive-beauty.jpg";
import nailGelImg from "../assets/images/courses/nail-gel.jpg";
import skinCareImg from "../assets/images/courses/skin-care.jpg";
import specializedMakeupImg from "../assets/images/courses/specialized-makeup.jpg";
import lashExtensionsImg from "../assets/images/courses/lash-extensions.jpg";
import womensTailoringImg from "../assets/images/courses/womens-tailoring.jpg";
import eveningBridalTailoringImg from "../assets/images/courses/evening-bridal-tailoring.jpg";
import moulageImg from "../assets/images/courses/moulage.jpg";
import hauteCoutureImg from "../assets/images/courses/haute-couture.jpg";
import fashionIllustrationImg from "../assets/images/courses/fashion-illustration.jpg";
import mensTailoringImg from "../assets/images/courses/mens-tailoring.jpg";
import childrensTailoringImg from "../assets/images/courses/childrens-tailoring.jpg";
import fashionSewingImg from "../assets/images/courses/fashion-sewing.jpg";
import sewingStitchingImg from "../assets/images/courses/sewing-stitching.jpg";
import administrativeLeadershipImg from "../assets/images/courses/administrative-leadership.jpg";
import humanResourcesImg from "../assets/images/courses/human-resources.jpg";
import solarEnergySystemsImg from "../assets/images/courses/solar-energy-systems.jpg";
import surveillanceSystemsImg from "../assets/images/courses/surveillance-systems.jpg";
import autotronicsImg from "../assets/images/courses/autotronics.jpg";
import icdlImg from "../assets/images/courses/icdl.jpg";
import ccnaNetworkAdministrationImg from "../assets/images/courses/ccna-network-administration.jpg";
import htmlCssJavascriptImg from "../assets/images/courses/html-css-javascript.jpg";
import phpMysqlImg from "../assets/images/courses/php-mysql.jpg";
import laravelImg from "../assets/images/courses/laravel.jpg";
import flutterImg from "../assets/images/courses/flutter.jpg";
import cybersecurityImg from "../assets/images/courses/cybersecurity.jpg";
import windowsServerImg from "../assets/images/courses/windows-server.jpg";
import autocadImg from "../assets/images/courses/autocad.jpg";
import threeDsMaxImg from "../assets/images/courses/3ds-max.jpg";


export const courseCategories = [
  {
    id: "all",
    label: "جميع التخصصات",
  },
  {
    id: "tech",
    label: "إلكترونيات وصيانة",
  },
  {
    id: "technical",
    label: "دورات فنية",
  },
  {
    id: "automotive",
    label: "ميكانيك وكهرباء السيارات",
  },
  {
    id: "beauty",
    label: "حلاقة وتجميل وعناية",
  },
  {
    id: "computer",
    label: "كمبيوتر وتصميم ومحاسبة",
  },
  { id: "fashion", label: "خياطة وتصميم أزياء" },
  { id: "business", label: "إدارة الأعمال" },
];

export const programs = [
  {
    id: 6,
    slug: "basic-electronics",
    categoryId: "tech",
    categoryLabel: "إلكترونيات وصيانة",
    department: "قسم الإلكترونيات",
    badge: "أساسي",
    title: "الإلكترونيات الأساسية (مبادئ الإلكترون)",
    subtitle: "Basic Electronics",
    description:
      "دورة تأسيسية للتعرف على العناصر الإلكترونية وأدوات القياس واللحام، وفحص المكونات وتنفيذ دارات إلكترونية عملية.",
    linkText: "استكشف الدورة",
    path: "/courses/basic-electronics",
    image: elctron,
    rating: null,
    reviewsCount: null,
    duration: "30 ساعة تدريبية",
    hours: "30 ساعة تدريبية",
    sessions: "غير محدد",
    level: "أساسي",
    certificate: "غير محددة",
    practicalPercentage: "غير محددة",
    totalHours: 30,
    totalSessions: null,
    highlights: [
      "أساسيات الإلكترونيات والقياس",
      "اللحام وفحص العناصر",
      "عناصر الدارات ومصادر التغذية",
      "التحكم والدارات التطبيقية",
    ],
    syllabus: [
      {
        unit: "المحور الأول",
        title: "أساسيات الإلكترونيات والقياس",
        topics: [
          "أدوات العمل ووحدات القياس",
          "المقاومات وأنواعها وقراءة العناصر وطرق توصيلها",
        ],
      },
      {
        unit: "المحور الثاني",
        title: "اللحام وفحص العناصر",
        topics: [
          "اللحام بالكاوي العادي وكاوي الهواء وفك وتركيب عناصر SMD",
          "أجهزة القياس التماثلية والرقمية والمخططات على الحاسب",
        ],
      },
      {
        unit: "المحور الثالث",
        title: "عناصر الدارات ومصادر التغذية",
        topics: [
          "البطاريات والملفات والمحولات والمكثفات",
          "أنصاف النواقل والترانزستورات BJT وMOSFET ومنظمات الجهد",
        ],
      },
      {
        unit: "المحور الرابع",
        title: "التحكم والدارات التطبيقية",
        topics: [
          "دارات الشحن والفصل الآلي والإنذار",
          "الثايريستور والدياك والترياك والدارات المتكاملة ومكبر العمليات والفوتوكابلر",
          "اختبار عملي على مخطط دارة إلكترونية",
        ],
      },
    ],
    careerOpportunities: [
      "مساعد فني إلكترونيات",
      "التمهيد للتخصص في صيانة الأجهزة الإلكترونية",
    ],
  },

  {
    id: 9,
    slug: "charger-cooker-inverter-repair",
    categoryId: "tech",
    categoryLabel: "إلكترونيات وصيانة",
    department: "قسم الإلكترونيات",
    badge: "دورة مكثفة",
    title: "صيانة الشاحن والطباخ والإنفرتر",
    subtitle: "Charger, Induction Cooker & Inverter Repair",
    description:
      "دورة مكثفة لدراسة شواحن البطاريات والطباخ التحريضي ومبدلات الطاقة وطرق فحص أعطالها وإصلاحها.",
    linkText: "استكشف الدورة",
    path: "/courses/charger-cooker-inverter-repair",
    image: repairdevice,
    rating: null,
    reviewsCount: null,
    duration: "38 ساعة تدريبية",
    hours: "38 ساعة تدريبية",
    sessions: "25 جلسة تدريبية",
    level: "غير محدد",
    certificate: "غير محددة",
    practicalPercentage: "غير محددة",
    totalHours: 38,
    totalSessions: 25,
    highlights: [
      "شواحن البطاريات",
      "الطباخ التحريضي",
      "مبدلات الطاقة Inverters",
      "تشخيص الأعطال والصيانة",
    ],
    syllabus: [
      {
        unit: "المحور الأول",
        title: "شواحن البطاريات",
        topics: [
          "أنواع الشواحن ومواصفاتها ومبدأ العمل",
          "المخططات الصندوقية والتفصيلية وتشخيص الأعطال",
        ],
      },
      {
        unit: "المحور الثاني",
        title: "الطباخ التحريضي",
        topics: [
          "مبدأ العمل والمخطط الصندوقي والتفصيلي",
          "الأعطال الشائعة للطباخ التحريضي",
        ],
      },
      {
        unit: "المحور الثالث",
        title: "مبدلات الطاقة Inverters",
        topics: [
          "أنواع المبدلات ومواصفاتها وأشكال إشارة الخرج",
          "طريقة العمل والاستخدام وقراءة المخططات",
        ],
      },
      {
        unit: "المحور الرابع",
        title: "تشخيص الأعطال والصيانة",
        topics: [
          "متابعة أعطال الشواحن ومبدلات الطاقة وإصلاحها",
          "ربط الأعطال بالمخططات ودراسة أعطال الطباخ",
        ],
      },
    ],
    careerOpportunities: [
      "فني صيانة شواحن ومبدلات طاقة",
      "فني صيانة أجهزة إلكترونية",
    ],
  },

  {
    id: 13,
    slug: "plc-programming",
    categoryId: "tech",
    categoryLabel: "إلكترونيات وصيانة",
    department: "قسم الإلكترونيات",
    badge: "دورة تدريبية",
    title: "التحكم المنطقي المبرمج (PLC)",
    subtitle: "Programmable Logic Controllers (PLC)",
    description:
      "تدريب على أجهزة التحكم المنطقي المبرمج وبرمجة Ladder وتوصيل التوسعات وشاشات اللمس وتطبيقات التحكم الصناعي.",
    linkText: "استكشف الدورة",
    path: "/courses/plc-programming",
    image: plc,
    rating: null,
    reviewsCount: null,
    duration: "72 ساعة تدريبية",
    hours: "72 ساعة تدريبية",
    sessions: "غير محدد",
    level: "غير محدد",
    certificate: "غير محددة",
    practicalPercentage: "غير محددة",
    totalHours: 72,
    totalSessions: null,
    highlights: [
      "أساسيات PLC والبرمجة",
      "البرمجة المتقدمة والتوسعات",
      "تطبيقات أجهزة Delta وLS",
      "واجهات التشغيل HMI",
      "التطبيقات العملية للتحكم",
    ],
    syllabus: [
      {
        unit: "المحور الأول",
        title: "أساسيات PLC والبرمجة",
        topics: [
          "أنواع الأجهزة ومكوناتها ومميزاتها",
          "Smart Relay وLOGO وZELIO وبرمجة Ladder والمحاكاة",
        ],
      },
      {
        unit: "المحور الثاني",
        title: "البرمجة المتقدمة والتوسعات",
        topics: [
          "خريطة الذاكرة والمرمز والتوسعات الرقمية والتمثيلية",
          "العمليات الحسابية والمداخل والمخارج التمثيلية",
        ],
      },
      {
        unit: "المحور الثالث",
        title: "تطبيقات أجهزة Delta وLS",
        topics: [
          "DVP-SX PLC وتوسعات Delta ومتحكم الحرارة DTC1000",
          "أجهزة Master-K PLC من LS وتوسعاتها",
        ],
      },
      {
        unit: "المحور الرابع",
        title: "واجهات التشغيل HMI",
        topics: [
          "شاشات DOP-B وربطها مع PLC",
          "برمجة الأزرار والمؤشرات والرسائل والإنذارات والرسوم ونقل البرامج",
        ],
      },
      {
        unit: "المحور الخامس",
        title: "التطبيقات العملية للتحكم",
        topics: [
          "استخدام الشاشة وPLC للتحكم بالمحركات Servo",
          "تطبيقات التحكم بمبدلات الطاقة Inverter",
        ],
      },
    ],
    careerOpportunities: [
      "مساعد فني تحكم صناعي",
      "فني أنظمة PLC وواجهات التشغيل",
    ],
  },
  {
    id: 4,
    slug: "phone-maintenance",
    categoryId: "tech",
    categoryLabel: "إلكترونيات وصيانة",
    department: "قسم الإلكترونيات",
    badge: "هاردوير وسوفتوير",
    title: "صيانة الهواتف الخلوية (هاردوير وسوفتوير)",
    subtitle: "Mobile Phone Hardware & Software Repair",
    description:
      "برنامج يجمع صيانة المكونات الإلكترونية للهواتف وتشخيص أعطالها مع صيانة البرمجيات والنسخ الاحتياطي والتعامل مع أجهزة ومعالجات متعددة.",
    linkText: "استكشف الدورة",
    path: "/courses/phone-maintenance",
    image: phonehs,
    rating: null,
    reviewsCount: null,
    duration: "63 ساعة تدريبية",
    hours: "63 ساعة تدريبية",
    sessions: "غير محدد",
    level: "غير محدد",
    certificate: "غير محددة",
    practicalPercentage: "غير محددة",
    totalHours: 63,
    totalSessions: null,
    highlights: [
      "بنية الهواتف وأدوات الفحص",
      "صيانة الشاشات ودارات الشحن والاتصال",
      "الصيانة الإلكترونية الدقيقة",
      "أساسيات السوفتوير وأدوات الصيانة",
      "صيانة برمجيات الهواتف والمعالجات",
    ],
    syllabus: [
      {
        unit: "المحور الأول",
        title: "بنية الهواتف وأدوات الفحص",
        topics: [
          "فك وتركيب الهواتف والتعرف على المعالجات والذواكر وأنواع الشاشات",
          "استخدام الأفوميتر ووحدة التغذية وقراءة المخططات",
        ],
      },
      {
        unit: "المحور الثاني",
        title: "صيانة الشاشات ودارات الشحن والاتصال",
        topics: [
          "فحص وتبديل جاكة الشحن وإصلاح مسار الشحن",
          "تشخيص أعطال الشبكة والواي فاي وفحص العناصر وتبديلها",
        ],
      },
      {
        unit: "المحور الثالث",
        title: "الصيانة الإلكترونية الدقيقة",
        topics: [
          "فك وتبديل الدوائر المتكاملة IC وبلورات الشاشات",
          "استخدام المخططات الصندوقية والتفصيلية ومكبس البلورات",
        ],
      },
      {
        unit: "المحور الرابع",
        title: "أساسيات السوفتوير وأدوات الصيانة",
        topics: [
          "النسخ الاحتياطي باستخدام Smart Switch وأوضاع التشغيل والاستعادة وبرنامج Odin 3",
          "الرومات والبوكسات والروت والتعامل مع الحسابات وكلمات المرور للأجهزة المصرح بصيانتها",
        ],
      },
      {
        unit: "المحور الخامس",
        title: "صيانة برمجيات الهواتف والمعالجات",
        topics: [
          "صيانة برمجيات أجهزة iPhone وHuawei وSony",
          "التعامل مع برمجيات معالجات Qualcomm وMediaTek",
        ],
      },
    ],
    careerOpportunities: [
      "فني صيانة هواتف خلوية (هاردوير وسوفتوير)",
      "فني دعم وصيانة أجهزة محمولة",
    ],
  },
  {
    id: 15,
    slug: "advanced-phone-repair",
    categoryId: "tech",
    categoryLabel: "إلكترونيات وصيانة",
    department: "قسم الإلكترونيات",
    badge: "متقدم",
    title: "صيانة الهواتف الخلوية المتقدمة",
    subtitle: "Advanced Mobile Phone Repair",
    description:
      "تدريب متقدم على صيانة بوردات الهواتف والدوائر المتكاملة المحمية وإصلاح التوصيلات وبلورات الشاشات.",
    linkText: "استكشف الدورة",
    path: "/courses/advanced-phone-repair",
    image: phoneImg,
    rating: null,
    reviewsCount: null,
    duration: "27 ساعة تدريبية",
    hours: "27 ساعة تدريبية",
    sessions: "غير محدد",
    level: "متقدم",
    certificate: "غير محددة",
    practicalPercentage: "غير محددة",
    totalHours: 27,
    totalSessions: null,
    highlights: [
      "صيانة الدوائر المتكاملة",
      "إصلاح التوصيلات الدقيقة",
      "قراءة المخططات وتشخيص البورد",
      "صيانة بلورات الشاشات",
    ],
    syllabus: [
      {
        unit: "المحور الأول",
        title: "صيانة الدوائر المتكاملة",
        topics: [
          "فك وتركيب الدوائر المتكاملة IC",
          "فك وتركيب الدوائر المتكاملة المحمية",
        ],
      },
      {
        unit: "المحور الثاني",
        title: "إصلاح التوصيلات الدقيقة",
        topics: [
          "تسحيب الأسلاك داخل البورد",
          "تعويض أطراف الدوائر المتكاملة بالجنابر",
        ],
      },
      {
        unit: "المحور الثالث",
        title: "قراءة المخططات وتشخيص البورد",
        topics: ["مخططات الجوالات", "استخدام المخططات لفحص البوردات"],
      },
      {
        unit: "المحور الرابع",
        title: "صيانة بلورات الشاشات",
        topics: ["فك وتركيب بلورات الجوالات", "استخدام مكبس البلورات"],
      },
    ],
    careerOpportunities: [
      "فني صيانة هواتف متقدمة",
      "فني صيانة بوردات ودوائر متكاملة",
    ],
  },
  {
    id: 16,
    slug: "electrical-wiring",
    categoryId: "technical",
    categoryLabel: "دورات فنية",
    department: "قسم الدورات الفنية",
    badge: "دورة تدريبية",
    title: "الإنارة العامة والتمديدات الكهربائية",
    subtitle: "Electrical Wiring & Lighting",
    description:
      "دورة تطبيقية في أساسيات الكهرباء وتمديد دارات الإنارة والحماية والتوزيع والتحكم والربط بين مصادر التغذية.",
    linkText: "استكشف الدورة",
    path: "/courses/electrical-wiring",
    image: light,
    rating: null,
    reviewsCount: null,
    duration: "60 ساعة تدريبية",
    hours: "60 ساعة تدريبية",
    sessions: "غير محدد",
    level: "غير محدد",
    certificate: "غير محددة",
    practicalPercentage: "غير محددة",
    totalHours: 60,
    totalSessions: null,
    highlights: [
      "أساسيات الكهرباء والسلامة",
      "التمديدات ودارات الإنارة",
      "المكونات والمخططات الكهربائية",
      "دارات التحكم والخدمات",
      "ربط مصادر التغذية والقياس",
    ],
    syllabus: [
      {
        unit: "المحور الأول",
        title: "أساسيات الكهرباء والسلامة",
        topics: [
          "السلامة المهنية والوقاية من الحريق وأخطار الكهرباء",
          "التيار AC وDC والتأريض وقانون أوم والشبكات الأحادية والثلاثية",
        ],
      },
      {
        unit: "المحور الثاني",
        title: "التمديدات ودارات الإنارة",
        topics: [
          "التابلو وعلب التوزيع والمجاري والمفاتيح والبريز",
          "دارات المصابيح بالتسلسل والتفرع والتحكم من عدة أماكن",
        ],
      },
      {
        unit: "المحور الثالث",
        title: "المكونات والمخططات الكهربائية",
        topics: [
          "أنواع المصابيح والقواطع وحساب أطوال الأسلاك",
          "مصباح الفلوريسنت والمحول والتقويم وإنارة الأدراج",
        ],
      },
      {
        unit: "المحور الرابع",
        title: "دارات التحكم والخدمات",
        topics: [
          "الأجراس والتلفون والخلية الضوئية وحساس الحركة",
          "الكونتاكتور والريليه والتايمر وضواغط التشغيل والإيقاف",
        ],
      },
      {
        unit: "المحور الخامس",
        title: "ربط مصادر التغذية والقياس",
        topics: [
          "دارات ATS لربط المولدة بالشبكة",
          "دارة الفواشة الكهربائية وعداد القدرة الأحادي",
        ],
      },
    ],
    careerOpportunities: [
      "مساعد فني تمديدات كهربائية",
      "فني صيانة إنارة وتحكم كهربائي",
    ],
  },
  {
    id: 17,
    slug: "industrial-automation",
    categoryId: "technical",
    categoryLabel: "دورات فنية",
    department: "قسم الدورات الفنية",
    badge: "دورة تدريبية",
    title: "التحكم الآلي والكهرباء الصناعية",
    subtitle: "Industrial Electrical Control",
    description:
      "تدريب على مكونات التحكم الكهربائي وحماية المحركات وتنفيذ دارات تشغيلها والتحكم بها وربط مصادر التغذية.",
    linkText: "استكشف الدورة",
    path: "/courses/industrial-automation",
    image: elecmade,
    rating: null,
    reviewsCount: null,
    duration: "60 ساعة تدريبية",
    hours: "60 ساعة تدريبية",
    sessions: "غير محدد",
    level: "غير محدد",
    certificate: "غير محددة",
    practicalPercentage: "غير محددة",
    totalHours: 60,
    totalSessions: null,
    highlights: [
      "السلامة والمحركات الكهربائية",
      "مكونات التحكم والحماية",
      "دارات التشغيل والإيقاف",
      "التحكم المتقدم بالمحركات",
      "التحويل بين مصادر التغذية",
    ],
    syllabus: [
      {
        unit: "المحور الأول",
        title: "السلامة والمحركات الكهربائية",
        topics: [
          "التأريض والحماية من الصواعق والعدد اليدوية والبنسة أمبير",
          "الشبكات والقواطع والمحركات الأحادية والثلاثية",
        ],
      },
      {
        unit: "المحور الثاني",
        title: "مكونات التحكم والحماية",
        topics: [
          "الكونتاكتور والريليه والأوفرلود وقواطع حماية المحرك والطور",
          "المؤقتات والحساسات والضواغط ومصابيح الإشارة",
        ],
      },
      {
        unit: "المحور الثالث",
        title: "دارات التشغيل والإيقاف",
        topics: [
          "قراءة المخططات ودارات التحكم",
          "التشغيل بضواغط متعددة وعكس الحركة وقاطع نهاية الشوط",
        ],
      },
      {
        unit: "المحور الرابع",
        title: "التحكم المتقدم بالمحركات",
        topics: [
          "التتابع والتأخير الزمني وتشغيل محركين",
          "النجمي والمثلثي ومحركات داهلندر بسرعتين",
        ],
      },
      {
        unit: "المحور الخامس",
        title: "التحويل بين مصادر التغذية",
        topics: [
          "دارات ATS لربط المولدة بالشبكة",
          "دارة ATS للشبكة ومولدة الحارة ومولدة المنزل",
        ],
      },
    ],
    careerOpportunities: [
      "فني تحكم كهربائي صناعي",
      "فني صيانة لوحات التحكم والمحركات",
    ],
  },
  {
    id: 18,
    slug: "air-conditioning",
    categoryId: "technical",
    categoryLabel: "دورات فنية",
    department: "قسم الدورات الفنية",
    badge: "دورة تدريبية",
    title: "التكييف والتبريد",
    subtitle: "Air Conditioning & Refrigeration",
    description:
      "برنامج يجمع تركيب وصيانة المكيفات والبرادات، وفحص الدارات الكهربائية والمحركات والحساسات، وتشخيص الأعطال وعمليات التفريغ والشحن.",
    linkText: "استكشف الدورة",
    path: "/courses/air-conditioning",
    image: cool,
    rating: null,
    reviewsCount: null,
    duration: "54 ساعة تدريبية",
    hours: "54 ساعة تدريبية",
    sessions: "غير محدد",
    level: "غير محدد",
    certificate: "غير محددة",
    practicalPercentage: "غير محددة",
    totalHours: 54,
    totalSessions: null,
    highlights: [
      "أساسيات التكييف والتبريد ومكونات الأجهزة",
      "الدارات الكهربائية وأنظمة التحكم",
      "تركيب المكيفات وصيانة البرادات",
      "عمليات التفريغ والشحن",
      "القياسات وتشخيص الأعطال وإصلاحها",
    ],
    syllabus: [
      {
        unit: "المحور الأول",
        title: "أساسيات التكييف والتبريد ومكونات الأجهزة",
        topics: [
          "مكونات المكيف النافذي والمكيف من قطعتين",
          "أنواع الفريونات وحركة الغاز ومكونات البراد والمحرك وتحديد استطاعته",
        ],
      },
      {
        unit: "المحور الثاني",
        title: "الدارات الكهربائية وأنظمة التحكم",
        topics: [
          "توصيل دارات المكيف والبراد والكونتاكتور وفحص المراوح",
          "الريموت كونترول والصمام العاكس والريليه والأوفرلود والترموستات والتايمر والحساسات",
        ],
      },
      {
        unit: "المحور الثالث",
        title: "تركيب المكيفات وصيانة البرادات",
        topics: [
          "تركيب المكيف من قطعتين وتوصيل دارات التشغيل الساخن والبارد",
          "لحام المواسير والمبادل الحراري وصيانة محركات البرادات وتغيير الزيت",
        ],
      },
      {
        unit: "المحور الرابع",
        title: "عمليات التفريغ والشحن",
        topics: [
          "تفريغ وشحن المكيفات والبرادات",
          "استخدام أدوات قياس الضغط وفحص ضغط المحرك",
        ],
      },
      {
        unit: "المحور الخامس",
        title: "القياسات وتشخيص الأعطال وإصلاحها",
        topics: [
          "قياس الأمبير والفولت والمقاومة وفحص المحركات",
          "تشخيص أعطال المكيفات والبرادات والحساسات والدوائر الإلكترونية",
        ],
      },
    ],
    careerOpportunities: [
      "فني تركيب وصيانة مكيفات",
      "فني صيانة برادات وأنظمة تبريد",
    ],
  },

  {
    id: 5,
    slug: "auto-mechanics",
    categoryId: "automotive",
    categoryLabel: "ميكانيك وكهرباء السيارات",
    department: "قسم الدورات الفنية",
    badge: "دورة تدريبية",
    title: "ميكانيك السيارات",
    subtitle: "Automotive Mechanics",
    description:
      "تدريب على محركات البنزين والمازوت وأجزائها ودارات الوقود والتزييت والتبريد والاشتعال، وصيانة الفرامل ونقل الحركة مع تطبيقات عملية.",
    linkText: "استكشف الدورة",
    path: "/courses/auto-mechanics",
    image: carImg,
    rating: null,
    reviewsCount: null,
    duration: "38 ساعة تدريبية",
    hours: "38 ساعة تدريبية",
    sessions: "غير محدد",
    level: "غير محدد",
    certificate: "غير محددة",
    practicalPercentage: "غير محددة",
    totalHours: 38,
    totalSessions: null,
    highlights: [
      "محركات البنزين والمازوت",
      "دارات التزييت والتبريد",
      "دارات الوقود والاشتعال والحقن",
      "الفرامل ونقل الحركة",
      "التطبيق العملي وتشخيص الأعطال",
    ],
    syllabus: [
      {
        unit: "المحور الأول",
        title: "محركات البنزين والمازوت",
        topics: [
          "الأجزاء الثابتة والمتحركة ومبدأ العمل وعيار الصبابات",
          "فك وتركيب الكولاس والبيستون والكرنك والميل الكامتري وفحص الضغط والشد العياري",
        ],
      },
      {
        unit: "المحور الثاني",
        title: "دارات التزييت والتبريد",
        topics: [
          "تجميع المحرك وتنظيف مجاري الزيت وفحص ضغط الزيت والمضخة",
          "مكونات التبريد وأسباب ارتفاع الحرارة وصيانتها",
        ],
      },
      {
        unit: "المحور الثالث",
        title: "دارات الوقود والاشتعال والحقن",
        topics: [
          "الكاربريتور والبخاخات ودارات الحقن في محركات المازوت",
          "الاشتعال العادي والإلكتروني والاختبارات العملية",
        ],
      },
      {
        unit: "المحور الرابع",
        title: "الفرامل ونقل الحركة",
        topics: [
          "الفرامل الهيدروليكية والسيرفو والديسك والطنبور",
          "الدبرياج وعلبة السرعة والكرونة وأعطالها",
        ],
      },
      {
        unit: "المحور الخامس",
        title: "التطبيق العملي وتشخيص الأعطال",
        topics: [
          "فحص محرك بنزين حديث وأعطال الاشتعال والوقود واللوحة الإلكترونية",
          "تدريب كل طالب على الفك والتركيب والعيار",
        ],
      },
    ],
    careerOpportunities: [
      "مساعد فني ميكانيك سيارات",
      "فني صيانة محركات وأنظمة نقل الحركة",
    ],
  },
  {
    id: 21,
    slug: "auto-electrical",
    categoryId: "automotive",
    categoryLabel: "ميكانيك وكهرباء السيارات",
    department: "قسم الدورات الفنية",
    badge: "دورة تدريبية",
    title: "كهرباء السيارات",
    subtitle: "Automotive Electrical Systems",
    description:
      "دورة في الأنظمة الكهربائية للسيارات والإنارة والاشتعال والبطاريات والدينمو والمرش، مع تطبيقات تشخيص وإصلاح الأعطال.",
    linkText: "استكشف الدورة",
    path: "/courses/auto-electrical",
    image: carelec,
    rating: null,
    reviewsCount: null,
    duration: "38 ساعة تدريبية",
    hours: "38 ساعة تدريبية",
    sessions: "غير محدد",
    level: "غير محدد",
    certificate: "غير محددة",
    practicalPercentage: "غير محددة",
    totalHours: 38,
    totalSessions: null,
    highlights: [
      "أساسيات كهرباء السيارات",
      "البطارية والاشتعال والتحكم",
      "الإنارة وملحقات السيارة",
      "الدينمو ونظام بدء التشغيل",
    ],
    syllabus: [
      {
        unit: "المحور الأول",
        title: "أساسيات كهرباء السيارات",
        topics: [
          "التيار AC وDC وأجهزة القياس وأنظمة 12 و24 فولت",
          "التابلو ومؤشراته والفيوزات ومفتاح الكونتاك",
        ],
      },
      {
        unit: "المحور الثاني",
        title: "البطارية والاشتعال والتحكم",
        topics: [
          "البطارية وطرق شحنها ودارات الاشتعال القديمة والحديثة",
          "الريليه ومضخة البنزين والمروحة الكهربائية وحساس الحرارة",
        ],
      },
      {
        unit: "المحور الثالث",
        title: "الإنارة وملحقات السيارة",
        topics: [
          "أنوار الرجوع والفرامل والأنوار الرئيسية والغمازات",
          "دارات الزمور والمساحات وبخاخ الماء",
        ],
      },
      {
        unit: "المحور الرابع",
        title: "الدينمو ونظام بدء التشغيل",
        topics: [
          "أجزاء الدينمو وفحصه وبلاتين الدينمو الإلكتروني والكهرومغناطيسي",
          "فك وتركيب المرش واختبار أوتوماتيك المرش وتشخيص الأعطال",
        ],
      },
    ],
    careerOpportunities: [
      "فني كهرباء سيارات",
      "فني صيانة أنظمة الشحن وبدء التشغيل",
    ],
  },
  {
    id: 22,
    slug: "advanced-auto-mechanics",
    categoryId: "automotive",
    categoryLabel: "ميكانيك وكهرباء السيارات",
    department: "قسم الدورات الفنية",
    badge: "متقدم",
    title: "ميكانيك السيارات المتقدم",
    subtitle: "Advanced Automotive Mechanics & Diagnostics",
    description:
      "دورة متقدمة للتعرف على الحساسات والمشغلات واستخدام برامج وأجهزة فحص السيارات وقراءة أكواد الأعطال.",
    linkText: "استكشف الدورة",
    path: "/courses/advanced-auto-mechanics",
    image: advmachine,
    rating: null,
    reviewsCount: null,
    duration: "27 ساعة تدريبية",
    hours: "27 ساعة تدريبية",
    sessions: "غير محدد",
    level: "متقدم",
    certificate: "غير محددة",
    practicalPercentage: "غير محددة",
    totalHours: 27,
    totalSessions: null,
    highlights: [
      "الحساسات والمشغلات",
      "المراجع الفنية وأجهزة الفحص",
      "طرق تشخيص الأعطال",
      "التطبيق العملي على فحص السيارات",
    ],
    syllabus: [
      {
        unit: "المحور الأول",
        title: "الحساسات والمشغلات",
        topics: ["دراسة الحساسات Sensors", "دراسة المشغلات Actuators"],
      },
      {
        unit: "المحور الثاني",
        title: "المراجع الفنية وأجهزة الفحص",
        topics: ["استخدام برنامج Auto Data", "أنواع أجهزة Auto Scanner"],
      },
      {
        unit: "المحور الثالث",
        title: "طرق تشخيص الأعطال",
        topics: [
          "طرق فحص السيارات ما قبل عام 1995",
          "أكواد الأعطال ومكان الفحص",
        ],
      },
      {
        unit: "المحور الرابع",
        title: "التطبيق العملي على فحص السيارات",
        topics: [
          "استخدام جهاز Auto Scanner",
          "تطبيق فحص السيارات باستخدام أجهزة التشخيص",
        ],
      },
    ],
    careerOpportunities: [
      "فني تشخيص أعطال السيارات",
      "فني فحص إلكتروني للسيارات",
    ],
  },
  {
    id: 23,
    slug: "photography",
    categoryId: "technical",
    categoryLabel: "دورات فنية",
    department: "قسم الدورات الفنية",
    badge: "دورة تدريبية",
    title: "التصوير الضوئي",
    subtitle: "Photography",
    description:
      "دورة في استخدام العدسات والكاميرات الرقمية والإضاءة والخلفيات، والتصوير الداخلي والخارجي وتجهيز الصور للطباعة.",
    linkText: "استكشف الدورة",
    path: "/courses/photography",
    image: photographyImg,
    rating: null,
    reviewsCount: null,
    duration: "30 ساعة تدريبية",
    hours: "30 ساعة تدريبية",
    sessions: "غير محدد",
    level: "غير محدد",
    certificate: "غير محددة",
    practicalPercentage: "غير محددة",
    totalHours: 30,
    totalSessions: null,
    highlights: [
      "الكاميرات والعدسات",
      "الإضاءة والخلفيات",
      "التصوير العملي",
      "معالجة الصور وتجهيزها",
    ],
    syllabus: [
      {
        unit: "المحور الأول",
        title: "الكاميرات والعدسات",
        topics: ["التعرف على العدسات", "دراسة تفصيلية للكاميرات الرقمية"],
      },
      {
        unit: "المحور الثاني",
        title: "الإضاءة والخلفيات",
        topics: ["دراسة الخلفيات والمناظر", "توزيع الضوء"],
      },
      {
        unit: "المحور الثالث",
        title: "التصوير العملي",
        topics: ["التصوير الداخلي", "جولة تصوير خارجي"],
      },
      {
        unit: "المحور الرابع",
        title: "معالجة الصور وتجهيزها",
        topics: [
          "استخدام الحاسب بما يتناسب مع التصوير",
          "تحضير الصورة للطباعة",
        ],
      },
    ],
    careerOpportunities: ["مساعد مصور ضوئي", "مصور للصور الداخلية والخارجية"],
  },
  {
    id: 3,
    slug: "mens-barbering",
    categoryId: "beauty",
    categoryLabel: "حلاقة وتجميل وعناية",
    department: "قسم الحلاقة الرجالية",
    badge: "أساسي",
    title: "الحلاقة الرجالية الأساسية",
    subtitle: "Basic Men’s Barbering",
    description:
      "دورة تأسيسية في قص الشعر واستخدام آلة الحلاقة والموس وتحديد الذقن والتصفيف، مع جلسات عمل موزعة خلال الدورة.",
    linkText: "استكشف الدورة",
    path: "/courses/mens-barbering",
    image: mensBarberingImg,
    rating: null,
    reviewsCount: null,
    duration: "54 ساعة تدريبية",
    hours: "54 ساعة تدريبية",
    sessions: "36 جلسة تدريبية",
    level: "أساسي",
    certificate: "غير محددة",
    practicalPercentage: "غير محددة",
    totalHours: 54,
    totalSessions: 36,
    highlights: [
      "أساسيات قص الشعر",
      "استخدام آلة الحلاقة",
      "حلاقة الذقن والعناية بالمظهر",
      "التصفيف والتطبيق العملي",
    ],
    syllabus: [
      {
        unit: "المحور الأول",
        title: "أساسيات قص الشعر",
        topics: ["طرق قص الشعر مع التدريب", "شرح قصات الشعر والموديلات"],
      },
      {
        unit: "المحور الثاني",
        title: "استخدام آلة الحلاقة",
        topics: [
          "التدريب على استخدام آلة الحلاقة في الجلسة الأولى",
          "متابعة التطبيق في الجلسة الثانية",
        ],
      },
      {
        unit: "المحور الثالث",
        title: "حلاقة الذقن والعناية بالمظهر",
        topics: [
          "استخدام الموس وطرق حلاقة وتحديد الذقن",
          "استخدام الشمع والخيط",
        ],
      },
      {
        unit: "المحور الرابع",
        title: "التصفيف والتطبيق العملي",
        topics: [
          "السيشوار والتدريب العملي",
          "جلسات العمل والامتحان النهائي وتحديد المستوى",
        ],
      },
    ],
    careerOpportunities: [
      "مساعد حلاق رجالي",
      "العمل في صالونات الحلاقة الرجالية",
    ],
  },
  {
    id: 24,
    slug: "advanced-mens-barbering",
    categoryId: "beauty",
    categoryLabel: "حلاقة وتجميل وعناية",
    department: "قسم الحلاقة الرجالية",
    badge: "متقدم",
    title: "الحلاقة الرجالية المتقدمة",
    subtitle: "Advanced Men’s Barbering",
    description:
      "دورة متقدمة في القصات الحديثة والصبغة والميش والتسبيل وحمام الزيت وتنظيف البشرة، مع تطبيق عملي.",
    linkText: "استكشف الدورة",
    path: "/courses/advanced-mens-barbering",
    image: advancedMensBarberingImg,
    rating: null,
    reviewsCount: null,
    duration: "36 ساعة تدريبية",
    hours: "36 ساعة تدريبية",
    sessions: "24 جلسة تدريبية",
    level: "متقدم",
    certificate: "غير محددة",
    practicalPercentage: "غير محددة",
    totalHours: 36,
    totalSessions: 24,
    highlights: [
      "قصات الشعر الحديثة",
      "صبغات الشعر والميش",
      "العناية بالشعر",
      "العناية بالبشرة",
    ],
    syllabus: [
      {
        unit: "المحور الأول",
        title: "قصات الشعر الحديثة",
        topics: [
          "التدريب على القصات الحديثة",
          "تطبيق مهارات القص في المستوى المتقدم",
        ],
      },
      {
        unit: "المحور الثاني",
        title: "صبغات الشعر والميش",
        topics: ["الصبغة والميش", "تطبيق عملي على الصبغة والميش"],
      },
      {
        unit: "المحور الثالث",
        title: "العناية بالشعر",
        topics: ["التسبيل", "حمام الزيت"],
      },
      {
        unit: "المحور الرابع",
        title: "العناية بالبشرة",
        topics: ["تنظيف البشرة", "تطبيق مهارات العناية بالمظهر"],
      },
    ],
    careerOpportunities: ["حلاق رجالي", "مصفف شعر رجالي"],
  },
  {
    id: 25,
    slug: "theoretical-accounting",
    categoryId: "computer",
    categoryLabel: "كمبيوتر وتصميم ومحاسبة",
    department: "قسم الكمبيوتر",
    badge: "دورة تدريبية",
    title: "المحاسبة النظرية",
    subtitle: "Theoretical Accounting",
    description:
      "دورة في المبادئ المحاسبية وتسجيل العمليات المالية والتجارية والتسويات والجرد والحسابات الختامية.",
    linkText: "استكشف الدورة",
    path: "/courses/theoretical-accounting",
    image: theoreticalAccountingImg,
    rating: null,
    reviewsCount: null,
    duration: "30 ساعة تدريبية",
    hours: "30 ساعة تدريبية",
    sessions: "غير محدد",
    level: "غير محدد",
    certificate: "غير محددة",
    practicalPercentage: "غير محددة",
    totalHours: 30,
    totalSessions: null,
    highlights: [
      "مبادئ المحاسبة والقيود",
      "المعاملات المالية والتجارية",
      "التسويات والمراجعة",
      "الحسابات الختامية وتطبيقات الشركات",
    ],
    syllabus: [
      {
        unit: "المحور الأول",
        title: "مبادئ المحاسبة والقيود",
        topics: [
          "تعريف المحاسبة وفروعها وأهدافها والمصطلحات المحاسبية",
          "مستندات وثبوتيات القيد والقيود المحاسبية للعمليات المالية والتجارية",
        ],
      },
      {
        unit: "المحور الثاني",
        title: "المعاملات المالية والتجارية",
        topics: [
          "الخصم وأنواعه والأوراق التجارية",
          "اهتلاكات الموجودات الثابتة والمقدمات والمستحقات",
        ],
      },
      {
        unit: "المحور الثالث",
        title: "التسويات والمراجعة",
        topics: [
          "التسويات الجردية وميزان المراجعة",
          "الأخطاء وطرق تصحيحها وأنواع الجرد",
        ],
      },
      {
        unit: "المحور الرابع",
        title: "الحسابات الختامية وتطبيقات الشركات",
        topics: [
          "الحسابات الختامية",
          "المعالجة المحاسبية في شركات الأشخاص والامتحان النهائي",
        ],
      },
    ],
    careerOpportunities: ["مساعد محاسب", "التمهيد للتخصص في المحاسبة العملية"],
  },
  {
    id: 26,
    slug: "practical-accounting",
    categoryId: "computer",
    categoryLabel: "كمبيوتر وتصميم ومحاسبة",
    department: "قسم الكمبيوتر",
    badge: "دورة تدريبية",
    title: "المحاسبة العملية",
    subtitle: "Practical Computerized Accounting",
    description:
      "دورة تطبيقية على برامج المحاسبة تشمل تأسيس الحسابات وإدارة الفواتير والمستودعات واستخراج التقارير والحسابات الختامية.",
    linkText: "استكشف الدورة",
    path: "/courses/practical-accounting",
    image: practicalAccountingImg,
    rating: null,
    reviewsCount: null,
    duration: "27 ساعة تدريبية",
    hours: "27 ساعة تدريبية",
    sessions: "غير محدد",
    level: "غير محدد",
    certificate: "غير محددة",
    practicalPercentage: "غير محددة",
    totalHours: 27,
    totalSessions: null,
    highlights: [
      "إعداد البرامج وتأسيس الشركة",
      "العمليات التجارية والمستودعات",
      "التقارير والتسويات",
      "الحسابات الختامية والتطبيق العملي",
    ],
    syllabus: [
      {
        unit: "المحور الأول",
        title: "إعداد البرامج وتأسيس الشركة",
        topics: [
          "التعريف ببرامج المحاسبة وتنصيبها",
          "دليل الحسابات والمواد والمستودعات وإدخال بيانات التأسيس",
        ],
      },
      {
        unit: "المحور الثاني",
        title: "العمليات التجارية والمستودعات",
        topics: [
          "فواتير المشتريات والمبيعات والعمليات المتعلقة بالبضاعة",
          "معالجة الأوراق التجارية",
        ],
      },
      {
        unit: "المحور الثالث",
        title: "التقارير والتسويات",
        topics: [
          "التقارير المحاسبية والمستودعية وكشوفات الزبائن والموردين",
          "إثبات التسويات الجردية والاهتلاكات والمقدمات والمستحقات",
        ],
      },
      {
        unit: "المحور الرابع",
        title: "الحسابات الختامية والتطبيق العملي",
        topics: [
          "إعداد الحسابات الختامية",
          "تقنيات البرامج وتطبيق الأنماط المحاسبية والامتحان النهائي",
        ],
      },
    ],
    careerOpportunities: ["مساعد محاسب", "موظف إدخال بيانات محاسبية ومستودعية"],
  },
  {
    id: 27,
    slug: "graphic-design",
    categoryId: "computer",
    categoryLabel: "كمبيوتر وتصميم ومحاسبة",
    department: "قسم الكمبيوتر",
    badge: "دورة تدريبية",
    title: "التصميم الغرافيكي",
    subtitle: "Graphic Design",
    description:
      "دورة في التصميم باستخدام Adobe Photoshop CC 2021 وAdobe Illustrator، من أدوات التصميم وتعديل الصور إلى الشعارات والمشاريع التطبيقية.",
    linkText: "استكشف الدورة",
    path: "/courses/graphic-design",
    image: graphicDesignImg,
    rating: null,
    reviewsCount: null,
    duration: "غير محددة",
    hours: "غير محدد",
    sessions: "غير محدد",
    level: "غير محدد",
    certificate: "غير محددة",
    practicalPercentage: "غير محددة",
    totalHours: null,
    totalSessions: null,
    highlights: [
      "أساسيات Adobe Photoshop",
      "مشاريع التصميم باستخدام Photoshop",
      "أساسيات Adobe Illustrator والرسم المتجهي",
      "الهوية البصرية والتصميم الإعلاني",
      "التصميم المتقدم ومشروع التخرج",
    ],
    syllabus: [
      {
        unit: "المحور الأول",
        title: "أساسيات Adobe Photoshop",
        topics: [
          "واجهة البرنامج واختصارات لوحة المفاتيح والطبقات",
          "الأدوات وخياراتها والألوان والفلاتر والتحديد المتقدم",
        ],
      },
      {
        unit: "المحور الثاني",
        title: "مشاريع التصميم باستخدام Photoshop",
        topics: [
          "تصميم Poster وCart Visit وBrochure وFlyer وغلاف CD",
          "التعامل مع المجسمات ضمن فوتوشوب",
        ],
      },
      {
        unit: "المحور الثالث",
        title: "أساسيات Adobe Illustrator والرسم المتجهي",
        topics: [
          "واجهة البرنامج والأدوات ورسم الأشكال وصناعة الفراشي والكاليغراف",
          "دمج الأشكال والألوان والتصدير",
        ],
      },
      {
        unit: "المحور الرابع",
        title: "الهوية البصرية والتصميم الإعلاني",
        topics: [
          "تصميم الإنفوغرافيك والشعارات والإعلانات التجارية",
          "تصميم شعار بحروف ثلاثية الأبعاد",
        ],
      },
      {
        unit: "المحور الخامس",
        title: "التصميم المتقدم ومشروع التخرج",
        topics: [
          "الرسم المنظوري والتصميم ثلاثي الأبعاد والزخرفة",
          "مشروع التخرج",
        ],
      },
    ],
    careerOpportunities: ["مصمم غرافيك مبتدئ", "مصمم مواد إعلانية وبصرية"],
  },
  {
    id: 28,
    slug: "motion-graphic-design",
    categoryId: "computer",
    categoryLabel: "كمبيوتر وتصميم ومحاسبة",
    department: "قسم الكمبيوتر",
    badge: "دورة تدريبية",
    title: "التصميم الإعلاني المتحرك",
    subtitle: "Motion Graphic Design",
    description:
      "دورة في المونتاج والتصميم المتحرك باستخدام Adobe Premiere (15 ساعة) وAdobe After Effects (20 ساعة)، تشمل التحريك والمؤثرات البصرية والإخراج.",
    linkText: "استكشف الدورة",
    path: "/courses/motion-graphic-design",
    image: motionGraphicDesignImg,
    rating: null,
    reviewsCount: null,
    duration: "35 ساعة تدريبية",
    hours: "35 ساعة تدريبية",
    sessions: "غير محدد",
    level: "غير محدد",
    certificate: "غير محددة",
    practicalPercentage: "غير محددة",
    totalHours: 35,
    totalSessions: null,
    highlights: [
      "أساسيات المونتاج",
      "المونتاج المتقدم والإخراج",
      "أساسيات التحريك",
      "التحكم بالعناصر والحركة",
      "المؤثرات البصرية المتقدمة",
    ],
    syllabus: [
      {
        unit: "المحور الأول",
        title: "أساسيات المونتاج – Adobe Premiere",
        topics: [
          "واجهة البرنامج وبداية المشروع وإضافة اللوغو والتحكم بالمحتوى",
          "الانتقالات والمؤثرات وAdjustment Layer ومعالجة اهتزاز الكاميرا",
        ],
      },
      {
        unit: "المحور الثاني",
        title: "المونتاج المتقدم والإخراج – Adobe Premiere",
        topics: [
          "الكرومـا والتحريك وMasking وتعديل الألوان وسرعة الفيديو",
          "Proxy Files وتصدير الفيديو والمقدمات المتحركة وتأثير الفيلم القديم",
        ],
      },
      {
        unit: "المحور الثالث",
        title: "أساسيات التحريك – Adobe After Effects",
        topics: [
          "الواجهة والطبقات وKey Frame والكتابة العربية والإنجليزية",
          "التأثيرات والتصدير وMasking وAlpha Matte",
        ],
      },
      {
        unit: "المحور الرابع",
        title: "التحكم بالعناصر والحركة – Adobe After Effects",
        topics: [
          "Adjustment Layers وParenting وExpressions وNull Object",
          "Motion Track وتتبع الحركة ثلاثي الأبعاد",
        ],
      },
      {
        unit: "المحور الخامس",
        title: "المؤثرات البصرية المتقدمة",
        topics: [
          "تتبع الحركة لإضافة عناصر إلى المشهد",
          "فصل الشخص باستخدام Rotoscoping",
        ],
      },
    ],
    careerOpportunities: ["مصمم موشن غرافيك مبتدئ", "محرر فيديو ومونتير"],
    softwareHours: {
      "Adobe Premiere": 15,
      "Adobe After Effects": 20,
    },
  },
  {
    id: 1,
    slug: "womens-hair-styling",
    categoryId: "beauty",
    categoryLabel: "حلاقة وتجميل وعناية",
    department: "قسم الحلاقة والتجميل",
    badge: "شامل",
    title: "أكاديمية الحلاقة النسائية الشاملة",
    subtitle: "Comprehensive Women’s Hairdressing",
    description:
      "تدريب على العناية بالشعر وقصه وتصفيفه، وتقنيات الصبغة والميش والشنيونات.",
    linkText: "استكشف الدورة",
    path: "/courses/womens-hair-styling",
    image: womensHairStylingImg,
    rating: null,
    reviewsCount: null,
    duration: "74 ساعة تدريبية",
    hours: "74 ساعة تدريبية",
    sessions: "غير محدد",
    level: "شامل",
    certificate: "غير محددة",
    practicalPercentage: "غير محددة",
    totalHours: 74,
    totalSessions: null,
    highlights: [
      "أساسيات المهنة والعناية بالشعر",
      "قص الشعر وتصفيفه",
      "تلوين الشعر والميش",
      "تنسيق التسريحات والشنيونات",
    ],
    syllabus: [
      {
        unit: "المحور الأول",
        title: "أساسيات المهنة والعناية بالشعر",
        topics: [
          "إتيكيت المهنة والتعامل مع الزبونة",
          "حمام الكريم ومساج الرأس",
        ],
      },
      {
        unit: "المحور الثاني",
        title: "قص الشعر وتصفيفه",
        topics: ["قصات الشعر الطويل والقصير", "التدريب على السيشوار"],
      },
      {
        unit: "المحور الثالث",
        title: "تلوين الشعر والميش",
        topics: [
          "دائرة الألوان وقراءة الكتالوج وسلم التفتيح والتغميق",
          "صبغة الجذور ومزج الألوان والميش وسحب اللون والأومبريه",
        ],
      },
      {
        unit: "المحور الرابع",
        title: "تنسيق التسريحات والشنيونات",
        topics: [
          "أساسيات تنسيق التسريحة وتطبيق التسريحات",
          "شنيونات الشعر الطويل والقصير",
        ],
      },
    ],
    careerOpportunities: [
      "مصففة شعر نسائية",
      "العمل في صالونات الحلاقة النسائية",
    ],
  },
  {
    id: 29,
    slug: "hair-color-techniques",
    categoryId: "beauty",
    categoryLabel: "حلاقة وتجميل وعناية",
    department: "قسم الحلاقة والتجميل",
    badge: "دورة تدريبية",
    title: "تكنيك الألوان",
    subtitle: "Hair Coloring Techniques",
    description:
      "دورة متخصصة في تلوين الشعر ومزج الصبغات وتطبيق تقنيات الميش والأومبريه والكونتور.",
    linkText: "استكشف الدورة",
    path: "/courses/hair-color-techniques",
    image: hairColorTechniquesImg,
    rating: null,
    reviewsCount: null,
    duration: "42 ساعة تدريبية",
    hours: "42 ساعة تدريبية",
    sessions: "غير محدد",
    level: "غير محدد",
    certificate: "غير محددة",
    practicalPercentage: "غير محددة",
    totalHours: 42,
    totalSessions: null,
    highlights: [
      "أساسيات نظرية الألوان",
      "الصبغات ومزج الألوان",
      "الميش وسحب اللون",
      "تقنيات الألوان المتقدمة",
    ],
    syllabus: [
      {
        unit: "المحور الأول",
        title: "أساسيات نظرية الألوان",
        topics: ["دائرة الألوان وقراءة الكتالوج", "سلم التفتيح والتغميق"],
      },
      {
        unit: "المحور الثاني",
        title: "الصبغات ومزج الألوان",
        topics: ["صبغة الجذور", "مزج الألوان"],
      },
      {
        unit: "المحور الثالث",
        title: "الميش وسحب اللون",
        topics: ["الميش بأنواعه", "سحب اللون"],
      },
      {
        unit: "المحور الرابع",
        title: "تقنيات الألوان المتقدمة",
        topics: ["الأومبريه", "كونتور الشعر"],
      },
    ],
    careerOpportunities: ["فنية تلوين شعر", "العمل في صالونات التجميل"],
  },
  {
    id: 30,
    slug: "professional-chignon",
    categoryId: "beauty",
    categoryLabel: "حلاقة وتجميل وعناية",
    department: "قسم الحلاقة والتجميل",
    badge: "دورة تدريبية",
    title: "الشنيون الاحترافي",
    subtitle: "Professional Chignon Styling",
    description:
      "تدريب متخصص على قواعد الشنيون وتسريحات العرائس والشنيونات ثلاثية الأبعاد.",
    linkText: "استكشف الدورة",
    path: "/courses/professional-chignon",
    image: professionalChignonImg,
    rating: null,
    reviewsCount: null,
    duration: "32 ساعة تدريبية",
    hours: "32 ساعة تدريبية",
    sessions: "غير محدد",
    level: "غير محدد",
    certificate: "غير محددة",
    practicalPercentage: "غير محددة",
    totalHours: 32,
    totalSessions: null,
    highlights: [
      "قواعد الشنيون الأساسية",
      "شنيون العروس",
      "الشنيونات ثلاثية الأبعاد",
    ],
    syllabus: [
      {
        unit: "المحور الأول",
        title: "قواعد الشنيون الأساسية",
        topics: ["قواعد بناء الشنيون وتنسيقه"],
      },
      {
        unit: "المحور الثاني",
        title: "شنيون العروس",
        topics: ["تطبيق شنيونات العرائس"],
      },
      {
        unit: "المحور الثالث",
        title: "الشنيونات ثلاثية الأبعاد",
        topics: ["تطبيق شنيونات 3D"],
      },
    ],
    careerOpportunities: [
      "مصففة تسريحات المناسبات",
      "العمل في صالونات العرائس",
    ],
  },
  {
    id: 31,
    slug: "comprehensive-beauty",
    categoryId: "beauty",
    categoryLabel: "حلاقة وتجميل وعناية",
    department: "قسم الحلاقة والتجميل",
    badge: "شامل",
    title: "أكاديمية التجميل الشاملة",
    subtitle: "Comprehensive Beauty Academy",
    description:
      "برنامج يجمع العناية بالزبائن والبشرة والأظافر وتقنيات المكياج الأساسي والمتقدم.",
    linkText: "استكشف الدورة",
    path: "/courses/comprehensive-beauty",
    image: comprehensiveBeautyImg,
    rating: null,
    reviewsCount: null,
    duration: "82 ساعة تدريبية",
    hours: "82 ساعة تدريبية",
    sessions: "غير محدد",
    level: "شامل",
    certificate: "غير محددة",
    practicalPercentage: "غير محددة",
    totalHours: 82,
    totalSessions: null,
    highlights: [
      "إتيكيت المهنة وإزالة الشعر",
      "العناية بالأظافر",
      "العناية بالبشرة",
      "المكياج الأساسي والمتقدم",
      "تقنيات المكياج المتخصصة",
    ],
    syllabus: [
      {
        unit: "المحور الأول",
        title: "إتيكيت المهنة وإزالة الشعر",
        topics: ["التعامل مع الزبائن", "استخدام الحفافة للجسم والحاجب والواكس"],
      },
      {
        unit: "المحور الثاني",
        title: "العناية بالأظافر",
        topics: ["المانيكير والباديكير", "تصاميم الأظافر"],
      },
      {
        unit: "المحور الثالث",
        title: "العناية بالبشرة",
        topics: [
          "أنواع البشرة والمواد ومشاكل البشرة والعناية السطحية بها",
          "تنظيف البشرة الكلاسيكي والناتوراج",
        ],
      },
      {
        unit: "المحور الرابع",
        title: "المكياج الأساسي والمتقدم",
        topics: ["مكياج نهاري وسهرة خفيف", "سموكي وميني سموكي وأوروبي لبناني"],
      },
      {
        unit: "المحور الخامس",
        title: "تقنيات المكياج المتخصصة",
        topics: ["سوفت لايت وخليجي", "كت كريس وكونتور"],
      },
    ],
    careerOpportunities: [
      "العمل في مراكز التجميل",
      "فنية مكياج وعناية تجميلية",
    ],
  },
  {
    id: 32,
    slug: "nail-gel",
    categoryId: "beauty",
    categoryLabel: "حلاقة وتجميل وعناية",
    department: "قسم الحلاقة والتجميل",
    badge: "دورة تدريبية",
    title: "جل الأظافر",
    subtitle: "Nail Gel Techniques",
    description:
      "تدريب على العناية بالأظافر وتصميمها وتركيب الجل وإزالته وتقنيات الأكريليك والفايبر.",
    linkText: "استكشف الدورة",
    path: "/courses/nail-gel",
    image: nailGelImg,
    rating: null,
    reviewsCount: null,
    duration: "22 ساعة تدريبية",
    hours: "22 ساعة تدريبية",
    sessions: "غير محدد",
    level: "غير محدد",
    certificate: "غير محددة",
    practicalPercentage: "غير محددة",
    totalHours: 22,
    totalSessions: null,
    highlights: [
      "تهيئة الأظافر والعناية بها",
      "تصاميم الأظافر",
      "تركيب الجل وإزالته",
      "تقنيات الأكريليك والفايبر",
    ],
    syllabus: [
      {
        unit: "المحور الأول",
        title: "تهيئة الأظافر والعناية بها",
        topics: ["العناية باللحمية", "المانيكير والباديكير"],
      },
      {
        unit: "المحور الثاني",
        title: "تصاميم الأظافر",
        topics: ["تطبيق ديزاينات الأظافر"],
      },
      {
        unit: "المحور الثالث",
        title: "تركيب الجل وإزالته",
        topics: ["طرق تركيب الجل", "طرق إزالة الجل"],
      },
      {
        unit: "المحور الرابع",
        title: "تقنيات الأكريليك والفايبر",
        topics: ["صب الأكريليك", "الفايبر"],
      },
    ],
    careerOpportunities: ["فنية أظافر", "العمل في صالونات التجميل"],
  },
  {
    id: 33,
    slug: "skin-care",
    categoryId: "beauty",
    categoryLabel: "حلاقة وتجميل وعناية",
    department: "قسم الحلاقة والتجميل",
    badge: "دورة تدريبية",
    title: "العناية بالبشرة",
    subtitle: "Skin Care",
    description:
      "التعرف على أنواع البشرة والمواد المستخدمة ومشاكلها وطرق العناية السطحية وجلسات التنظيف.",
    linkText: "استكشف الدورة",
    path: "/courses/skin-care",
    image: skinCareImg,
    rating: null,
    reviewsCount: null,
    duration: "22 ساعة تدريبية",
    hours: "22 ساعة تدريبية",
    sessions: "غير محدد",
    level: "غير محدد",
    certificate: "غير محددة",
    practicalPercentage: "غير محددة",
    totalHours: 22,
    totalSessions: null,
    highlights: [
      "أنواع البشرة والمواد",
      "مشاكل البشرة والعناية السطحية",
      "جلسات تنظيف البشرة",
      "تقنيات العناية بالأجهزة",
    ],
    syllabus: [
      {
        unit: "المحور الأول",
        title: "أنواع البشرة والمواد",
        topics: ["تمييز أنواع البشرة", "قائمة المواد المستخدمة"],
      },
      {
        unit: "المحور الثاني",
        title: "مشاكل البشرة والعناية السطحية",
        topics: [
          "التعرف على مشاكل البشرة",
          "طرق العناية السطحية المذكورة في المنهاج",
        ],
      },
      {
        unit: "المحور الثالث",
        title: "جلسات تنظيف البشرة",
        topics: ["التنظيف الكلاسيكي والناتوراج"],
      },
      {
        unit: "المحور الرابع",
        title: "تقنيات العناية بالأجهزة",
        topics: ["جلسة هيدرافيشل", "شرح الديرمابن وفوائده"],
      },
    ],
    careerOpportunities: [
      "العمل في مجال العناية التجميلية بالبشرة",
      "مساعدة فنية في مركز تجميل، ضمن الصلاحيات المهنية",
    ],
  },
  {
    id: 34,
    slug: "specialized-makeup",
    categoryId: "beauty",
    categoryLabel: "حلاقة وتجميل وعناية",
    department: "قسم الحلاقة والتجميل",
    badge: "دورة تدريبية",
    title: "المكياج التخصصي",
    subtitle: "Specialized Makeup",
    description:
      "تدريب على المكياج النهاري والمسائي والموديلات المتقدمة وتجهيز العروس.",
    linkText: "استكشف الدورة",
    path: "/courses/specialized-makeup",
    image: specializedMakeupImg,
    rating: null,
    reviewsCount: null,
    duration: "48 ساعة تدريبية",
    hours: "48 ساعة تدريبية",
    sessions: "غير محدد",
    level: "غير محدد",
    certificate: "غير محددة",
    practicalPercentage: "غير محددة",
    totalHours: 48,
    totalSessions: null,
    highlights: [
      "مصطلحات المكياج والأساسيات",
      "تقنيات مكياج العيون",
      "أنماط المكياج المتقدم",
      "تحديد الوجه وتجهيز العروس",
    ],
    syllabus: [
      {
        unit: "المحور الأول",
        title: "مصطلحات المكياج والأساسيات",
        topics: ["مصطلحات المهنة", "مكياج نهاري وسهرة خفيف"],
      },
      {
        unit: "المحور الثاني",
        title: "تقنيات مكياج العيون",
        topics: ["سموكي وميني سموكي", "كت كريس"],
      },
      {
        unit: "المحور الثالث",
        title: "أنماط المكياج المتقدم",
        topics: ["أوروبي لبناني وسوفت لايت", "مكياج خليجي"],
      },
      {
        unit: "المحور الرابع",
        title: "تحديد الوجه وتجهيز العروس",
        topics: ["كونتور", "تجهيز عروس احترافي"],
      },
    ],
    careerOpportunities: ["فنية مكياج", "العمل في تجهيز العرائس والمناسبات"],
  },
  {
    id: 35,
    slug: "lash-extensions",
    categoryId: "beauty",
    categoryLabel: "حلاقة وتجميل وعناية",
    department: "قسم الحلاقة والتجميل",
    badge: "دورة تدريبية",
    title: "الرموش الدائمة",
    subtitle: "Lash and Brow Styling",
    description:
      "تدريب على قلب الرموش ولامينيشن الحواجب وتقنيات تركيب الرموش والحواجب.",
    linkText: "استكشف الدورة",
    path: "/courses/lash-extensions",
    image: lashExtensionsImg,
    rating: null,
    reviewsCount: null,
    duration: "12 ساعة تدريبية",
    hours: "12 ساعة تدريبية",
    sessions: "غير محدد",
    level: "غير محدد",
    certificate: "غير محددة",
    practicalPercentage: "غير محددة",
    totalHours: 12,
    totalSessions: null,
    highlights: [
      "قلب الرموش",
      "لامينيشن الحواجب",
      "تركيب الرموش",
      "تركيب الحواجب",
    ],
    syllabus: [
      {
        unit: "المحور الأول",
        title: "قلب الرموش",
        topics: ["تقنية قلب الرموش"],
      },
      {
        unit: "المحور الثاني",
        title: "لامينيشن الحواجب",
        topics: ["تطبيق لامينيشن الحواجب"],
      },
      {
        unit: "المحور الثالث",
        title: "تركيب الرموش",
        topics: ["إكستشن الرموش"],
      },
      {
        unit: "المحور الرابع",
        title: "تركيب الحواجب",
        topics: ["إكستشن الحواجب"],
      },
    ],
    careerOpportunities: ["فنية رموش وحواجب", "العمل في صالونات التجميل"],
  },
  {
    id: 36,
    slug: "womens-tailoring",
    categoryId: "fashion",
    categoryLabel: "خياطة وتصميم أزياء",
    department: "قسم الخياطة وتصميم الأزياء",
    badge: "دورة تدريبية",
    title: "خياطة سيبورات نسائية",
    subtitle: "Women’s Tailoring",
    description:
      "تدريب على أخذ القياسات ورسم القوالب وتنفيذ التنانير والقمصان والبناطيل والفساتين النسائية.",
    linkText: "استكشف الدورة",
    path: "/courses/womens-tailoring",
    image: womensTailoringImg,
    rating: null,
    reviewsCount: null,
    duration: "76 ساعة تدريبية",
    hours: "76 ساعة تدريبية",
    sessions: "غير محدد",
    level: "غير محدد",
    certificate: "غير محددة",
    practicalPercentage: "غير محددة",
    totalHours: 76,
    totalSessions: null,
    highlights: [
      "القياسات والقوالب الأساسية",
      "التنانير وتطوير الموديلات",
      "القمصان والبناطيل",
      "الفساتين والبلوزات",
      "تطوير التصاميم وتنفيذها",
    ],
    syllabus: [
      {
        unit: "المحور الأول",
        title: "القياسات والقوالب الأساسية",
        topics: ["أخذ قياسات الجسم", "سحب ستاندر المقاسات الجاهزة"],
      },
      {
        unit: "المحور الثاني",
        title: "التنانير وتطوير الموديلات",
        topics: [
          "قوالب التنورة الضيقة والمكسمة والموسعة",
          "تنزيل الموديلات على القالب الأساسي وتنفيذها",
        ],
      },
      {
        unit: "المحور الثالث",
        title: "القمصان والبناطيل",
        topics: [
          "قالب القميص الكلاسيكي والأكمام والقبّات",
          "قالب البنطال المكسّم وقصه وخياطته",
        ],
      },
      {
        unit: "المحور الرابع",
        title: "الفساتين والبلوزات",
        topics: [
          "قالب المكسّم للفساتين والبلوزات",
          "تصريف بنس الصدر وتطبيق القصات",
        ],
      },
      {
        unit: "المحور الخامس",
        title: "تطوير التصاميم وتنفيذها",
        topics: [
          "موديلات الفساتين والزم والكسرات والكلوش",
          "تطبيق عملي على الماكينة",
        ],
      },
    ],
    careerOpportunities: ["خياطة الملابس النسائية", "العمل في مشاغل التفصيل"],
  },
  {
    id: 37,
    slug: "evening-bridal-tailoring",
    categoryId: "fashion",
    categoryLabel: "خياطة وتصميم أزياء",
    department: "قسم الخياطة وتصميم الأزياء",
    badge: "دورة تدريبية",
    title: "خياطة سهرة وعرايسي",
    subtitle: "Evening and Bridal Dressmaking",
    description:
      "تدريب على قوالب التنانير والفساتين والأكمام والقبّات وموديلات ملابس السهرة والأعراس.",
    linkText: "استكشف الدورة",
    path: "/courses/evening-bridal-tailoring",
    image: eveningBridalTailoringImg,
    rating: null,
    reviewsCount: null,
    duration: "66 ساعة تدريبية",
    hours: "66 ساعة تدريبية",
    sessions: "غير محدد",
    level: "غير محدد",
    certificate: "غير محددة",
    practicalPercentage: "غير محددة",
    totalHours: 66,
    totalSessions: null,
    highlights: [
      "قوالب التنانير",
      "الأكمام والقبّات",
      "موديلات الفساتين",
      "فساتين السهرة والشاحط",
      "ضبط القوام والتعديلات",
    ],
    syllabus: [
      {
        unit: "المحور الأول",
        title: "قوالب التنانير",
        topics: [
          "تنفيذ موديلات التنورة على الورق والقماش",
          "قوالب الكسرات والزم والكلوش",
        ],
      },
      {
        unit: "المحور الثاني",
        title: "الأكمام والقبّات",
        topics: [
          "قوالب موديلات الأكمام والريكلان",
          "القبّات البحرية والعريضة والملكية",
        ],
      },
      {
        unit: "المحور الثالث",
        title: "موديلات الفساتين",
        topics: ["موديلات الدلع والزم والكسرات", "فساتين الكت مع كم وبدون كم"],
      },
      {
        unit: "المحور الرابع",
        title: "فساتين السهرة والشاحط",
        topics: ["فساتين السهرة النافش والبليق", "الشاحط بأنواعه وموديلاته"],
      },
      {
        unit: "المحور الخامس",
        title: "ضبط القوام والتعديلات",
        topics: [
          "تحجيم الصدر وتطبيق موديلات السوتيان على الفستان",
          "علاج القبّات والحالات الشاذة",
        ],
      },
    ],
    careerOpportunities: [
      "خياطة فساتين السهرة والأعراس",
      "العمل في مشاغل الأزياء",
    ],
  },
  {
    id: 38,
    slug: "moulage",
    categoryId: "fashion",
    categoryLabel: "خياطة وتصميم أزياء",
    department: "قسم الخياطة وتصميم الأزياء",
    badge: "دورة تدريبية",
    title: "المولاج",
    subtitle: "Fashion Draping (Moulage)",
    description:
      "تدريب على تشكيل القماش وبناء وتنفيذ موديلات متنوعة مباشرة على المانيكان.",
    linkText: "استكشف الدورة",
    path: "/courses/moulage",
    image: moulageImg,
    rating: null,
    reviewsCount: null,
    duration: "68 ساعة تدريبية",
    hours: "68 ساعة تدريبية",
    sessions: "غير محدد",
    level: "غير محدد",
    certificate: "غير محددة",
    practicalPercentage: "غير محددة",
    totalHours: 68,
    totalSessions: null,
    highlights: [
      "تجهيز المانيكان والقالب",
      "القصات والتشكيل على المانيكان",
      "تقنيات الدرابيه",
      "ابتكار الموديلات وتعديل القياسات",
    ],
    syllabus: [
      {
        unit: "المحور الأول",
        title: "تجهيز المانيكان والقالب",
        topics: [
          "وضع شرائط الساتان على المانيكان",
          "تنفيذ القالب المكسّم لفستان السهرة مع التطبيب",
        ],
      },
      {
        unit: "المحور الثاني",
        title: "القصات والتشكيل على المانيكان",
        topics: ["موديلات بعدة قصات", "كسرات الصدر وكوب الصدر مع التنورة"],
      },
      {
        unit: "المحور الثالث",
        title: "تقنيات الدرابيه",
        topics: [
          "درابيه منتظمة وعشوائية",
          "درابيه سرايب وموديلات الدلع مع القصات المتداخلة",
        ],
      },
      {
        unit: "المحور الرابع",
        title: "ابتكار الموديلات وتعديل القياسات",
        topics: [
          "تنفيذ موديلات بعدة قصات وأفكار",
          "تكبير المانيكان بعدة قياسات",
        ],
      },
    ],
    careerOpportunities: [
      "مساعدة مصممة أزياء",
      "العمل في مشاغل تصميم الفساتين",
    ],
  },
  {
    id: 39,
    slug: "haute-couture",
    categoryId: "fashion",
    categoryLabel: "خياطة وتصميم أزياء",
    department: "قسم الخياطة وتصميم الأزياء",
    badge: "دورة تدريبية",
    title: "خياطة هوت كوتور",
    subtitle: "Haute Couture Sewing",
    description:
      "تطبيق موديلات الهوت كوتور على القماش والمانيكان باستخدام القصات المتداخلة والكسرات والزخارف.",
    linkText: "استكشف الدورة",
    path: "/courses/haute-couture",
    image: hauteCoutureImg,
    rating: null,
    reviewsCount: null,
    duration: "68 ساعة تدريبية",
    hours: "68 ساعة تدريبية",
    sessions: "غير محدد",
    level: "غير محدد",
    certificate: "غير محددة",
    practicalPercentage: "غير محددة",
    totalHours: 68,
    totalSessions: null,
    highlights: [
      "تشكيل الصدر والتفاصيل",
      "القصات والتشكيل الهندسي",
      "تقنيات الهوت كوتور",
      "تطوير الموديلات والتنانير",
    ],
    syllabus: [
      {
        unit: "المحور الأول",
        title: "تشكيل الصدر والتفاصيل",
        topics: [
          "موديلات الوردة على الصدر",
          "الكسرات المتداخلة والوردة بأوراق",
        ],
      },
      {
        unit: "المحور الثاني",
        title: "القصات والتشكيل الهندسي",
        topics: [
          "القصات المتداخلة وموديل الشمس",
          "موديل القلب وقصات الزكزاك والزوايا",
        ],
      },
      {
        unit: "المحور الثالث",
        title: "تقنيات الهوت كوتور",
        topics: ["الزم على الصدر", "موديل حراشف السمكة والقبّات الفنية"],
      },
      {
        unit: "المحور الرابع",
        title: "تطوير الموديلات والتنانير",
        topics: ["موديل إلغاء خياطة الجنب", "موديل تنورة البواري"],
      },
    ],
    careerOpportunities: [
      "خياطة أزياء هوت كوتور",
      "العمل في مشاغل الأزياء الراقية",
    ],
  },
  {
    id: 40,
    slug: "fashion-illustration",
    categoryId: "fashion",
    categoryLabel: "خياطة وتصميم أزياء",
    department: "قسم الخياطة وتصميم الأزياء",
    badge: "دورة تدريبية",
    title: "الرسم والابتكار",
    subtitle: "Fashion Illustration and Creative Design",
    description:
      "تدريب على الرسم والألوان وخامات الأقمشة ورسم المانيكان وتصميم الموديلات المستوحاة من الطبيعة.",
    linkText: "استكشف الدورة",
    path: "/courses/fashion-illustration",
    image: fashionIllustrationImg,
    rating: null,
    reviewsCount: null,
    duration: "68 ساعة تدريبية",
    hours: "68 ساعة تدريبية",
    sessions: "غير محدد",
    level: "غير محدد",
    certificate: "غير محددة",
    practicalPercentage: "غير محددة",
    totalHours: 68,
    totalSessions: null,
    highlights: [
      "أساسيات الرسم والألوان",
      "رسم المانيكان وخامات الأقمشة",
      "رسم الملابس والموديلات",
      "الابتكار واستلهام الأفكار",
    ],
    syllabus: [
      {
        unit: "المحور الأول",
        title: "أساسيات الرسم والألوان",
        topics: [
          "التعرف على المواد المستخدمة",
          "تدريبات الرسم ودرجات الألوان ومزجها",
        ],
      },
      {
        unit: "المحور الثاني",
        title: "رسم المانيكان وخامات الأقمشة",
        topics: [
          "رسم العارضة وتحريكها",
          "خامات الأقمشة وتطبيقها على الموديلات",
        ],
      },
      {
        unit: "المحور الثالث",
        title: "رسم الملابس والموديلات",
        topics: ["رسم البدلة البيضاء", "رسم الكسرات والزم والكلوش"],
      },
      {
        unit: "المحور الرابع",
        title: "الابتكار واستلهام الأفكار",
        topics: ["استيحاء الموديل من الطبيعة"],
      },
    ],
    careerOpportunities: ["مساعدة مصمم أزياء", "رسم وتطوير أفكار الأزياء"],
  },
  {
    id: 41,
    slug: "mens-tailoring",
    categoryId: "fashion",
    categoryLabel: "خياطة وتصميم أزياء",
    department: "قسم الخياطة وتصميم الأزياء",
    badge: "دورة تدريبية",
    title: "خياطة الرجالي",
    subtitle: "Men’s Tailoring",
    description:
      "تدريب على القياسات والقوالب وتنفيذ القمصان والبناطيل والسترات والملابس الرجالية.",
    linkText: "استكشف الدورة",
    path: "/courses/mens-tailoring",
    image: mensTailoringImg,
    rating: null,
    reviewsCount: null,
    duration: "68 ساعة تدريبية",
    hours: "68 ساعة تدريبية",
    sessions: "غير محدد",
    level: "غير محدد",
    certificate: "غير محددة",
    practicalPercentage: "غير محددة",
    totalHours: 68,
    totalSessions: null,
    highlights: [
      "القياسات والقوالب",
      "القمصان والبناطيل",
      "السترات والملابس التقليدية",
      "الملابس المتنوعة والطقم الرسمي",
    ],
    syllabus: [
      {
        unit: "المحور الأول",
        title: "القياسات والقوالب",
        topics: ["أخذ مقاسات الجسم", "سحب ستاندر المقاسات الجاهزة"],
      },
      {
        unit: "المحور الثاني",
        title: "القمصان والبناطيل",
        topics: [
          "تنفيذ القميص العريض والمكسّم وقصاته",
          "تنفيذ البنطال العريض والمكسّم وقصاته",
        ],
      },
      {
        unit: "المحور الثالث",
        title: "السترات والملابس التقليدية",
        topics: ["قالب السترة وموديلاتها", "قالب الكلابية الكويتية والسعودية"],
      },
      {
        unit: "المحور الرابع",
        title: "الملابس المتنوعة والطقم الرسمي",
        topics: [
          "قالب البيرمودة والتي شرت",
          "قوالب الطقم الرسمي والتطبيق العملي على الماكينة",
        ],
      },
    ],
    careerOpportunities: ["خياط ملابس رجالية", "العمل في مشاغل التفصيل"],
  },
  {
    id: 42,
    slug: "childrens-tailoring",
    categoryId: "fashion",
    categoryLabel: "خياطة وتصميم أزياء",
    department: "قسم الخياطة وتصميم الأزياء",
    badge: "دورة تدريبية",
    title: "خياطة ولادي",
    subtitle: "Children’s Clothing Tailoring",
    description:
      "تدريب على أخذ القياسات وبناء قوالب الملابس الولادية وتنفيذها على الماكينة.",
    linkText: "استكشف الدورة",
    path: "/courses/childrens-tailoring",
    image: childrensTailoringImg,
    rating: null,
    reviewsCount: null,
    duration: "68 ساعة تدريبية",
    hours: "68 ساعة تدريبية",
    sessions: "غير محدد",
    level: "غير محدد",
    certificate: "غير محددة",
    practicalPercentage: "غير محددة",
    totalHours: 68,
    totalSessions: null,
    highlights: [
      "القياسات والقوالب",
      "قوالب التنانير والموديلات",
      "القمصان والبناطيل",
      "الفساتين والبلوزات والملحقات",
    ],
    syllabus: [
      {
        unit: "المحور الأول",
        title: "القياسات والقوالب",
        topics: ["أخذ قياسات الجسم", "سحب ستاندر المقاسات الجاهزة"],
      },
      {
        unit: "المحور الثاني",
        title: "قوالب التنانير والموديلات",
        topics: [
          "التنورة الضيقة والمكسمة والموسعة",
          "تنزيل الموديلات على القالب وتنفيذ القصات",
        ],
      },
      {
        unit: "المحور الثالث",
        title: "القمصان والبناطيل",
        topics: [
          "قالب القميص الكلاسيكي والأكمام والقبّات",
          "قالب البنطال المكسّم وقصه وخياطته",
        ],
      },
      {
        unit: "المحور الرابع",
        title: "الفساتين والبلوزات والملحقات",
        topics: [
          "قوالب المكسّم وموديلات الفساتين والزم والكسرات",
          "طريقة عمل الطواقي والبربتوز",
        ],
      },
    ],
    careerOpportunities: ["خياطة ملابس الأطفال", "العمل في مشاغل الألبسة"],
  },
  {
    id: 2,
    slug: "fashion-sewing",
    categoryId: "fashion",
    categoryLabel: "خياطة وتصميم أزياء",
    department: "قسم الخياطة وتصميم الأزياء",
    badge: "شامل",
    title: "تصميم أزياء شاملة",
    subtitle: "Comprehensive Fashion Design",
    description:
      "برنامج يجمع قوالب السيبورات النسائية وموديلات السهرة وقوالب الملابس الرجالية مع التنفيذ والتطبيق.",
    linkText: "استكشف الدورة",
    path: "/courses/fashion-sewing",
    image: fashionSewingImg,
    rating: null,
    reviewsCount: null,
    duration: "120 ساعة تدريبية",
    hours: "120 ساعة تدريبية",
    sessions: "غير محدد",
    level: "شامل",
    certificate: "غير محددة",
    practicalPercentage: "غير محددة",
    totalHours: 120,
    totalSessions: null,
    highlights: [
      "قوالب السيبورات النسائية",
      "تصميم موديلات السهرة",
      "تنفيذ موديلات السهرة",
      "قوالب الرجالي والتطبيق",
    ],
    syllabus: [
      {
        unit: "المحور الأول",
        title: "قوالب السيبورات النسائية",
        topics: ["قالب السيبورات النسائي كامل"],
      },
      {
        unit: "المحور الثاني",
        title: "تصميم موديلات السهرة",
        topics: ["موديلات السهرة"],
      },
      {
        unit: "المحور الثالث",
        title: "تنفيذ موديلات السهرة",
        topics: ["التطبيق والتنفيذ العملي لموديلات السهرة"],
      },
      {
        unit: "المحور الرابع",
        title: "قوالب الرجالي والتطبيق",
        topics: ["قوالب الرجالي", "التنفيذ والتطبيق"],
      },
    ],
    careerOpportunities: [
      "العمل في مجال تصميم الأزياء",
      "العمل في مشاغل الخياطة والتفصيل",
    ],
  },
  {
    id: 43,
    slug: "sewing-stitching",
    categoryId: "fashion",
    categoryLabel: "خياطة وتصميم أزياء",
    department: "قسم الخياطة وتصميم الأزياء",
    badge: "دورة تدريبية",
    title: "خياطة – درزة وحبكة",
    subtitle: "Sewing and Overlocking",
    description:
      "تدريب على استخدام ماكينة الخياطة والدرزة والحبكة وتركيب تفاصيل الملابس الأساسية.",
    linkText: "استكشف الدورة",
    path: "/courses/sewing-stitching",
    image: sewingStitchingImg,
    rating: null,
    reviewsCount: null,
    duration: "30 ساعة تدريبية",
    hours: "30 ساعة تدريبية",
    sessions: "غير محدد",
    level: "غير محدد",
    certificate: "غير محددة",
    practicalPercentage: "غير محددة",
    totalHours: 30,
    totalSessions: null,
    highlights: [
      "الماكينة والدرزة والحبكة",
      "السحابات والكمرات",
      "الجيوب والأكمام والقبّات",
      "تشطيب الملابس",
    ],
    syllabus: [
      {
        unit: "المحور الأول",
        title: "الماكينة والدرزة والحبكة",
        topics: [
          "التعرف على الماكينة واستخدامها",
          "التدريب على الدرزة والحبكة",
        ],
      },
      {
        unit: "المحور الثاني",
        title: "السحابات والكمرات",
        topics: ["أنواع السحابات", "أنواع الكمرات"],
      },
      {
        unit: "المحور الثالث",
        title: "الجيوب والأكمام والقبّات",
        topics: ["أنواع الجيوب مع الموديلات", "تركيب الكم والقبّة"],
      },
      {
        unit: "المحور الرابع",
        title: "تشطيب الملابس",
        topics: ["فتحة البولو بأنواعها"],
      },
    ],
    careerOpportunities: ["مساعدة خياط", "العمل في مشاغل الألبسة"],
  },
  {
    id: 44,
    slug: "administrative-leadership",
    categoryId: "business",
    categoryLabel: "إدارة الأعمال",
    department: "إدارة الأعمال",
    badge: "دورة تدريبية",
    title: "إدارة الأعمال – القيادة الإدارية",
    subtitle: "Administrative Leadership",
    description:
      "دورة في وظائف الإدارة والقيادة والتحفيز وخدمة الزبائن والتسويق والتطور المهني.",
    linkText: "استكشف الدورة",
    path: "/courses/administrative-leadership",
    image: administrativeLeadershipImg,
    rating: null,
    reviewsCount: null,
    duration: "46 ساعة تدريبية",
    hours: "46 ساعة تدريبية",
    sessions: "غير محدد",
    level: "غير محدد",
    certificate: "غير محددة",
    practicalPercentage: "غير محددة",
    totalHours: 46,
    totalSessions: null,
    highlights: [
      "أساسيات الإدارة ووظائفها",
      "القيادة والتدريب والتحفيز",
      "خدمة الزبائن",
      "التسويق والتسويق الإلكتروني",
      "التطور المهني والتقييم",
    ],
    syllabus: [
      {
        unit: "المحور الأول",
        title: "أساسيات الإدارة ووظائفها",
        topics: [
          "مفهوم الإدارة والمنظمة والأقسام الإدارية ومهام المدير",
          "التخطيط والتنظيم والقيادة والرقابة وصنع القرار",
        ],
      },
      {
        unit: "المحور الثاني",
        title: "القيادة والتدريب والتحفيز",
        topics: [
          "مهارات المدير لأول مرة وCoaching مع تطبيق عملي",
          "أنواع القيادة والموظفين والتحفيز",
        ],
      },
      {
        unit: "المحور الثالث",
        title: "خدمة الزبائن",
        topics: [
          "مفهوم خدمة الزبائن والمهارات المطلوبة",
          "أنواع الزبائن وكيفية التعامل معهم عملياً",
        ],
      },
      {
        unit: "المحور الرابع",
        title: "التسويق والتسويق الإلكتروني",
        topics: [
          "مفهوم التسويق والفرق بين البيع والتسويق والخطة التسويقية",
          "التسويق الإلكتروني وكتابة المحتوى الإعلاني",
        ],
      },
      {
        unit: "المحور الخامس",
        title: "التطور المهني والتقييم",
        topics: [
          "كتابة السيرة الذاتية والتطور المهني",
          "مقابلات العمل وتقييم الأداء",
        ],
      },
    ],
    careerOpportunities: [
      "مساعد إداري",
      "العمل في خدمة العملاء أو دعم فرق التسويق",
    ],
  },
  {
    id: 45,
    slug: "human-resources",
    categoryId: "business",
    categoryLabel: "إدارة الأعمال",
    department: "إدارة الأعمال",
    badge: "دورة تدريبية",
    title: "إدارة الأعمال – الموارد البشرية",
    subtitle: "Human Resources Management",
    description:
      "دورة في تخطيط الموارد البشرية والاستقطاب والتعيين وتطوير الموظفين وتقييم أدائهم وإدارتهم.",
    linkText: "استكشف الدورة",
    path: "/courses/human-resources",
    image: humanResourcesImg,
    rating: null,
    reviewsCount: null,
    duration: "36 ساعة تدريبية",
    hours: "36 ساعة تدريبية",
    sessions: "غير محدد",
    level: "غير محدد",
    certificate: "غير محددة",
    practicalPercentage: "غير محددة",
    totalHours: 36,
    totalSessions: null,
    highlights: [
      "أساسيات الموارد البشرية والتخطيط",
      "الاستقطاب والاختيار والتعيين",
      "التدريب والتطوير وتقييم الأداء",
      "الرواتب والتحفيز والانضباط",
      "إنهاء العلاقة الوظيفية والتقييم",
    ],
    syllabus: [
      {
        unit: "المحور الأول",
        title: "أساسيات الموارد البشرية والتخطيط",
        topics: [
          "مفاهيم الإدارة والموارد البشرية وأهميتها",
          "تخطيط الموارد البشرية والتحليل والتوصيف الوظيفي",
        ],
      },
      {
        unit: "المحور الثاني",
        title: "الاستقطاب والاختيار والتعيين",
        topics: [
          "استقطاب الموظفين والتعامل مع السير الذاتية",
          "مقابلات العمل والاختيار والتعيين نظرياً وعملياً",
        ],
      },
      {
        unit: "المحور الثالث",
        title: "التدريب والتطوير وتقييم الأداء",
        topics: ["تدريب وتطوير الموارد البشرية وأثره", "تقييم أداء الموظفين"],
      },
      {
        unit: "المحور الرابع",
        title: "الرواتب والتحفيز والانضباط",
        topics: [
          "أنظمة الرواتب والأجور والتعويضات والتحفيز",
          "نظام الانضباط والقوانين",
        ],
      },
      {
        unit: "المحور الخامس",
        title: "إنهاء العلاقة الوظيفية والتقييم",
        topics: ["مقابلات الإقالة والفصل والاستقالة", "تقييم أداء المتدربين"],
      },
    ],
    careerOpportunities: ["مساعد موارد بشرية", "مساعد توظيف وشؤون موظفين"],
  },
  // محاور مقترحة للدورات الجديدة تُراجع مع المركز.
  {
    id: 46,
    slug: "solar-energy-systems",
    categoryId: "technical",
    categoryLabel: "دورات فنية",
    department: "قسم الدورات الفنية",
    badge: "دورة تدريبية",
    title: "أنظمة الطاقة الشمسية",
    subtitle: "Solar Energy Systems",
    description: "دورة في مكونات أنظمة الطاقة الشمسية وحساب الأحمال واختيار الألواح والبطاريات والإنفرترات، مع تطبيقات على التوصيل والفحص والصيانة.",
    linkText: "استكشف الدورة",
    path: "/courses/solar-energy-systems",
    image: solarEnergySystemsImg,
    rating: null,
    reviewsCount: null,
    duration: "غير محددة",
    hours: "غير محدد",
    sessions: "غير محدد",
    level: "غير محدد",
    certificate: "غير محددة",
    practicalPercentage: "غير محددة",
    totalHours: null,
    totalSessions: null,
    highlights: [
      "أساسيات الطاقة الشمسية",
      "حساب الأحمال واختيار المكونات",
      "التوصيل والتركيب",
      "الفحص والصيانة"
    ],
    syllabus: [
      {
        unit: "المحور الأول",
        title: "أساسيات الطاقة الشمسية",
        topics: [
          "مبدأ عمل الخلايا الكهروضوئية وأنواع الألواح",
          "مكونات الأنظمة المستقلة والمتصلة بالشبكة والأنظمة الهجينة"
        ]
      },
      {
        unit: "المحور الثاني",
        title: "حساب الأحمال واختيار المكونات",
        topics: [
          "تقدير الاستهلاك الكهربائي وتحديد استطاعة النظام",
          "اختيار البطاريات والإنفرتر ومنظم الشحن وفق متطلبات الأحمال"
        ]
      },
      {
        unit: "المحور الثالث",
        title: "التوصيل والتركيب",
        topics: [
          "توصيل الألواح والبطاريات وقراءة مخططات النظام",
          "قواعد السلامة والحماية الكهربائية والتأريض"
        ]
      },
      {
        unit: "المحور الرابع",
        title: "الفحص والصيانة",
        topics: [
          "قياس أداء النظام وتشخيص الأعطال الشائعة",
          "إعداد خطة صيانة دورية وتطبيق عملي على نظام تدريبي"
        ]
      }
    ],
    careerOpportunities: [
      "مساعد فني تركيب أنظمة الطاقة الشمسية",
      "مساعد فني صيانة أنظمة الطاقة الشمسية"
    ]
  },
  {
    id: 47,
    slug: "surveillance-systems",
    categoryId: "tech",
    categoryLabel: "إلكترونيات وصيانة",
    department: "قسم الإلكترونيات",
    badge: "دورة تدريبية",
    title: "أنظمة المراقبة",
    subtitle: "CCTV & IP Surveillance Systems",
    description: "دورة في تركيب كاميرات المراقبة وأنظمة التسجيل وضبط الشبكات والعرض عن بُعد، مع التدريب على التمديدات وتشخيص الأعطال وحماية الوصول.",
    linkText: "استكشف الدورة",
    path: "/courses/surveillance-systems",
    image: surveillanceSystemsImg,
    rating: null,
    reviewsCount: null,
    duration: "غير محددة",
    hours: "غير محدد",
    sessions: "غير محدد",
    level: "غير محدد",
    certificate: "غير محددة",
    practicalPercentage: "غير محددة",
    totalHours: null,
    totalSessions: null,
    highlights: [
      "الكاميرات وأجهزة التسجيل",
      "التركيب والتمديدات",
      "إعداد النظام والشبكة",
      "الحماية والصيانة"
    ],
    syllabus: [
      {
        unit: "المحور الأول",
        title: "الكاميرات وأجهزة التسجيل",
        topics: [
          "التعرف على كاميرات المراقبة التناظرية وكاميرات IP",
          "اختيار أجهزة DVR وNVR والتخزين بحسب متطلبات الموقع"
        ]
      },
      {
        unit: "المحور الثاني",
        title: "التركيب والتمديدات",
        topics: [
          "تحديد مواقع الكاميرات ومجالات الرؤية",
          "تمديد الكابلات وتوصيل التغذية والتعرف على تقنية PoE"
        ]
      },
      {
        unit: "المحور الثالث",
        title: "إعداد النظام والشبكة",
        topics: [
          "ضبط العناوين وإعداد التسجيل والتنبيهات",
          "تهيئة المشاهدة عن بُعد وإدارة المستخدمين والصلاحيات"
        ]
      },
      {
        unit: "المحور الرابع",
        title: "الحماية والصيانة",
        topics: [
          "حماية الحسابات وتحديث الأجهزة وحفظ التسجيلات",
          "تشخيص أعطال الصورة والاتصال والتخزين"
        ]
      }
    ],
    careerOpportunities: [
      "مساعد فني تركيب كاميرات المراقبة",
      "مساعد فني صيانة أنظمة المراقبة"
    ]
  },
  {
    id: 48,
    slug: "autotronics",
    categoryId: "automotive",
    categoryLabel: "ميكانيك وكهرباء السيارات",
    department: "قسم الدورات الفنية",
    badge: "دورة تدريبية",
    title: "تقنيات السيارات الحديثة (الأوتوترونك)",
    subtitle: "Modern Automotive Technology & Autotronics",
    description: "دورة في الأنظمة الإلكترونية للسيارات الحديثة، تشمل وحدات التحكم والحساسات والمشغلات وشبكات الاتصال، واستخدام أجهزة التشخيص لفحص الأعطال.",
    linkText: "استكشف الدورة",
    path: "/courses/autotronics",
    image: autotronicsImg,
    rating: null,
    reviewsCount: null,
    duration: "غير محددة",
    hours: "غير محدد",
    sessions: "غير محدد",
    level: "غير محدد",
    certificate: "غير محددة",
    practicalPercentage: "غير محددة",
    totalHours: null,
    totalSessions: null,
    highlights: [
      "التحكم الإلكتروني في السيارات",
      "أنظمة المحرك والسلامة",
      "التشخيص وشبكات الاتصال",
      "تطبيقات الفحص العملي"
    ],
    syllabus: [
      {
        unit: "المحور الأول",
        title: "التحكم الإلكتروني في السيارات",
        topics: [
          "التعرف على وحدات التحكم ECU وقراءة المخططات الكهربائية",
          "دراسة الحساسات والمشغلات وطرق فحص إشاراتها"
        ]
      },
      {
        unit: "المحور الثاني",
        title: "أنظمة المحرك والسلامة",
        topics: [
          "مبادئ التحكم الإلكتروني بالحقن والإشعال",
          "التعرف على أنظمة ABS وESP والوسائد الهوائية وقواعد التعامل الآمن معها"
        ]
      },
      {
        unit: "المحور الثالث",
        title: "التشخيص وشبكات الاتصال",
        topics: [
          "استخدام أجهزة OBD-II وقراءة أكواد الأعطال والبيانات الحية",
          "مبادئ شبكات CAN وتتبع مشكلات الاتصال بين وحدات التحكم"
        ]
      },
      {
        unit: "المحور الرابع",
        title: "تطبيقات الفحص العملي",
        topics: [
          "إعداد خطوات تشخيص الأعطال الكهربائية والإلكترونية",
          "توثيق نتائج الفحص والتحقق من أداء النظام بعد الصيانة"
        ]
      }
    ],
    careerOpportunities: [
      "مساعد فني تشخيص إلكتروني للسيارات",
      "مساعد فني كهرباء وأنظمة سيارات حديثة"
    ]
  },
  {
    id: 49,
    slug: "icdl",
    categoryId: "computer",
    categoryLabel: "كمبيوتر وتصميم ومحاسبة",
    department: "قسم الكمبيوتر",
    badge: "دورة تدريبية",
    title: "مهارات الحاسوب (ICDL)",
    subtitle: "ICDL Computer & Office Skills",
    description: "دورة لتطوير مهارات استخدام الحاسوب وإدارة الملفات والإنترنت والبريد الإلكتروني، وإعداد المستندات والجداول الإلكترونية والعروض التقديمية.",
    linkText: "استكشف الدورة",
    path: "/courses/icdl",
    image: icdlImg,
    rating: null,
    reviewsCount: null,
    duration: "غير محددة",
    hours: "غير محدد",
    sessions: "غير محدد",
    level: "غير محدد",
    certificate: "غير محددة",
    practicalPercentage: "غير محددة",
    totalHours: null,
    totalSessions: null,
    highlights: [
      "أساسيات الحاسوب وإدارة الملفات",
      "الإنترنت والتواصل الرقمي",
      "معالجة النصوص والعروض التقديمية",
      "الجداول الإلكترونية"
    ],
    syllabus: [
      {
        unit: "المحور الأول",
        title: "أساسيات الحاسوب وإدارة الملفات",
        topics: [
          "التعرف على مكونات الحاسوب ونظام التشغيل",
          "إدارة الملفات والمجلدات والتخزين والنسخ الاحتياطي"
        ]
      },
      {
        unit: "المحور الثاني",
        title: "الإنترنت والتواصل الرقمي",
        topics: [
          "البحث عبر الإنترنت واستخدام البريد الإلكتروني",
          "حماية الحسابات والخصوصية والتعامل الآمن مع الملفات والروابط"
        ]
      },
      {
        unit: "المحور الثالث",
        title: "معالجة النصوص والعروض التقديمية",
        topics: [
          "إنشاء مستندات Word وتنسيقها وإعدادها للطباعة",
          "تصميم عروض PowerPoint وإضافة العناصر المرئية وتنظيم الشرائح"
        ]
      },
      {
        unit: "المحور الرابع",
        title: "الجداول الإلكترونية",
        topics: [
          "إدخال البيانات وتنسيقها واستخدام الصيغ والدوال في Excel",
          "فرز البيانات وتصفيتها وإنشاء المخططات وتجهيز التقارير"
        ]
      }
    ],
    careerOpportunities: [
      "موظف إدخال بيانات",
      "مساعد إداري يستخدم التطبيقات المكتبية"
    ]
  },
  {
    id: 50,
    slug: "ccna-network-administration",
    categoryId: "computer",
    categoryLabel: "كمبيوتر وتصميم ومحاسبة",
    department: "قسم الكمبيوتر",
    badge: "دورة تدريبية",
    title: "إدارة الشبكات (CCNA)",
    subtitle: "CCNA Network Administration",
    description: "دورة في أساسيات شبكات الحاسوب وعناوين IP وإعداد المبدلات والموجهات، مع تطبيقات على التوجيه وخدمات الشبكة والحماية واستكشاف الأعطال.",
    linkText: "استكشف الدورة",
    path: "/courses/ccna-network-administration",
    image: ccnaNetworkAdministrationImg,
    rating: null,
    reviewsCount: null,
    duration: "غير محددة",
    hours: "غير محدد",
    sessions: "غير محدد",
    level: "غير محدد",
    certificate: "غير محددة",
    practicalPercentage: "غير محددة",
    totalHours: null,
    totalSessions: null,
    highlights: [
      "أساسيات الشبكات وعناوين IP",
      "إعداد المبدلات والشبكات المحلية",
      "التوجيه وخدمات الشبكة",
      "الأمان واستكشاف الأعطال"
    ],
    syllabus: [
      {
        unit: "المحور الأول",
        title: "أساسيات الشبكات وعناوين IP",
        topics: [
          "نماذج OSI وTCP/IP وأجهزة الشبكات ووسائط الاتصال",
          "عنونة IPv4 وIPv6 وتقسيم الشبكات إلى شبكات فرعية"
        ]
      },
      {
        unit: "المحور الثاني",
        title: "إعداد المبدلات والشبكات المحلية",
        topics: [
          "إعداد المبدلات وإنشاء VLAN وربطها",
          "مبادئ STP وتجميع الروابط والتعرف على الشبكات اللاسلكية"
        ]
      },
      {
        unit: "المحور الثالث",
        title: "التوجيه وخدمات الشبكة",
        topics: [
          "التوجيه الثابت وأساسيات OSPF",
          "خدمات DHCP وDNS وNAT ومزامنة الوقت"
        ]
      },
      {
        unit: "المحور الرابع",
        title: "الأمان واستكشاف الأعطال",
        topics: [
          "قوائم التحكم بالوصول وتأمين إدارة أجهزة الشبكة",
          "تطبيقات على المحاكاة وتشخيص الاتصال ومقدمة في أتمتة الشبكات"
        ]
      }
    ],
    careerOpportunities: [
      "فني دعم شبكات مبتدئ",
      "مساعد مسؤول شبكات"
    ]
  },
  {
    id: 51,
    slug: "html-css-javascript",
    categoryId: "computer",
    categoryLabel: "كمبيوتر وتصميم ومحاسبة",
    department: "قسم الكمبيوتر",
    badge: "دورة تدريبية",
    title: "تطوير واجهات الويب (HTML - CSS - JS)",
    subtitle: "HTML, CSS & JavaScript Web Development",
    description: "دورة لبناء صفحات ويب متجاوبة وتفاعلية باستخدام HTML وCSS وJavaScript، من تنظيم المحتوى وتنسيقه إلى التعامل مع الأحداث والبيانات وتنفيذ مشروع موقع.",
    linkText: "استكشف الدورة",
    path: "/courses/html-css-javascript",
    image: htmlCssJavascriptImg,
    rating: null,
    reviewsCount: null,
    duration: "غير محددة",
    hours: "غير محدد",
    sessions: "غير محدد",
    level: "غير محدد",
    certificate: "غير محددة",
    practicalPercentage: "غير محددة",
    totalHours: null,
    totalSessions: null,
    highlights: [
      "بناء الصفحات باستخدام HTML",
      "تنسيق الواجهات باستخدام CSS",
      "أساسيات JavaScript والتفاعل",
      "مشروع ويب تطبيقي"
    ],
    syllabus: [
      {
        unit: "المحور الأول",
        title: "بناء الصفحات باستخدام HTML",
        topics: [
          "العناصر الدلالية وتنظيم العناوين والنصوص والروابط والصور",
          "إنشاء النماذج والجداول ومبادئ إتاحة المحتوى"
        ]
      },
      {
        unit: "المحور الثاني",
        title: "تنسيق الواجهات باستخدام CSS",
        topics: [
          "المحددات والألوان والخطوط ونموذج الصندوق",
          "تخطيط الصفحات باستخدام Flexbox وGrid والتصميم المتجاوب"
        ]
      },
      {
        unit: "المحور الثالث",
        title: "أساسيات JavaScript والتفاعل",
        topics: [
          "المتغيرات والدوال والشروط والحلقات والمصفوفات",
          "التعامل مع DOM والأحداث والتحقق من إدخال النماذج"
        ]
      },
      {
        unit: "المحور الرابع",
        title: "مشروع ويب تطبيقي",
        topics: [
          "جلب البيانات باستخدام Fetch والتعامل مع الأخطاء",
          "بناء موقع متجاوب واختباره ونشره"
        ]
      }
    ],
    careerOpportunities: [
      "مطور واجهات ويب مبتدئ",
      "منفذ صفحات ومواقع ويب"
    ]
  },
  {
    id: 52,
    slug: "php-mysql",
    categoryId: "computer",
    categoryLabel: "كمبيوتر وتصميم ومحاسبة",
    department: "قسم الكمبيوتر",
    badge: "دورة تدريبية",
    title: "برمجة الويب وقواعد البيانات (PHP - MySQL)",
    subtitle: "PHP & MySQL Web Development",
    description: "دورة في تطوير مواقع الويب الديناميكية باستخدام PHP وقواعد بيانات MySQL، تشمل معالجة النماذج وإدارة البيانات والجلسات وبناء تطبيق عملي.",
    linkText: "استكشف الدورة",
    path: "/courses/php-mysql",
    image: phpMysqlImg,
    rating: null,
    reviewsCount: null,
    duration: "غير محددة",
    hours: "غير محدد",
    sessions: "غير محدد",
    level: "غير محدد",
    certificate: "غير محددة",
    practicalPercentage: "غير محددة",
    totalHours: null,
    totalSessions: null,
    highlights: [
      "أساسيات PHP",
      "قواعد بيانات MySQL",
      "ربط التطبيق بقاعدة البيانات",
      "الأمان والمشروع التطبيقي"
    ],
    syllabus: [
      {
        unit: "المحور الأول",
        title: "أساسيات PHP",
        topics: [
          "إعداد بيئة التطوير والمتغيرات والأنواع والدوال",
          "الشروط والحلقات والمصفوفات وتنظيم ملفات المشروع"
        ]
      },
      {
        unit: "المحور الثاني",
        title: "قواعد بيانات MySQL",
        topics: [
          "تصميم الجداول والمفاتيح والعلاقات بين البيانات",
          "كتابة استعلامات SQL والإضافة والتعديل والحذف والربط بين الجداول"
        ]
      },
      {
        unit: "المحور الثالث",
        title: "ربط التطبيق بقاعدة البيانات",
        topics: [
          "استخدام PDO والاستعلامات المُعلَّمة لمعالجة البيانات",
          "التعامل مع النماذج والجلسات والتحقق من صحة المدخلات"
        ]
      },
      {
        unit: "المحور الرابع",
        title: "الأمان والمشروع التطبيقي",
        topics: [
          "تجزئة كلمات المرور وإدارة صلاحيات المستخدمين",
          "بناء تطبيق لإدارة البيانات واختبار الأخطاء الشائعة"
        ]
      }
    ],
    careerOpportunities: [
      "مطور PHP مبتدئ",
      "مساعد مطور تطبيقات ويب وقواعد بيانات"
    ]
  },
  {
    id: 53,
    slug: "laravel",
    categoryId: "computer",
    categoryLabel: "كمبيوتر وتصميم ومحاسبة",
    department: "قسم الكمبيوتر",
    badge: "دورة تدريبية",
    title: "تطوير تطبيقات الويب باستخدام Laravel",
    subtitle: "Laravel Web Application Development",
    description: "دورة لتطوير تطبيقات ويب باستخدام Laravel، تشمل تنظيم المشروع وفق MVC وإدارة قواعد البيانات والمصادقة والصلاحيات وبناء واجهات API.",
    linkText: "استكشف الدورة",
    path: "/courses/laravel",
    image: laravelImg,
    rating: null,
    reviewsCount: null,
    duration: "غير محددة",
    hours: "غير محدد",
    sessions: "غير محدد",
    level: "غير محدد",
    certificate: "غير محددة",
    practicalPercentage: "غير محددة",
    totalHours: null,
    totalSessions: null,
    highlights: [
      "بيئة Laravel وبنية المشروع",
      "قواعد البيانات وEloquent",
      "الواجهات والمستخدمون",
      "واجهات API والمشروع التطبيقي"
    ],
    syllabus: [
      {
        unit: "المحور الأول",
        title: "بيئة Laravel وبنية المشروع",
        topics: [
          "إعداد المشروع باستخدام Composer والتعرف على أدوات Artisan",
          "مفهوم MVC وتنظيم المسارات وControllers وMiddleware"
        ]
      },
      {
        unit: "المحور الثاني",
        title: "قواعد البيانات وEloquent",
        topics: [
          "إنشاء Migrations وSeeders وتنظيم نماذج البيانات",
          "إدارة العلاقات والاستعلامات باستخدام Eloquent"
        ]
      },
      {
        unit: "المحور الثالث",
        title: "الواجهات والمستخدمون",
        topics: [
          "بناء القوالب باستخدام Blade ومعالجة النماذج والتحقق من البيانات",
          "إدارة تسجيل الدخول وسياسات الوصول والصلاحيات"
        ]
      },
      {
        unit: "المحور الرابع",
        title: "واجهات API والمشروع التطبيقي",
        topics: [
          "إنشاء واجهات REST وتنظيم الاستجابات ومعالجة الأخطاء",
          "اختبار تطبيق متكامل وتهيئة الإعدادات للنشر"
        ]
      }
    ],
    careerOpportunities: [
      "مطور Laravel مبتدئ",
      "مساعد مطور تطبيقات ويب"
    ]
  },
  {
    id: 54,
    slug: "flutter",
    categoryId: "computer",
    categoryLabel: "كمبيوتر وتصميم ومحاسبة",
    department: "قسم الكمبيوتر",
    badge: "دورة تدريبية",
    title: "تطوير تطبيقات الموبايل باستخدام Flutter",
    subtitle: "Flutter Mobile App Development",
    description: "دورة لبناء تطبيقات موبايل باستخدام Flutter ولغة Dart، تشمل تصميم الواجهات والتنقل وإدارة الحالة وربط البيانات واختبار التطبيق.",
    linkText: "استكشف الدورة",
    path: "/courses/flutter",
    image: flutterImg,
    rating: null,
    reviewsCount: null,
    duration: "غير محددة",
    hours: "غير محدد",
    sessions: "غير محدد",
    level: "غير محدد",
    certificate: "غير محددة",
    practicalPercentage: "غير محددة",
    totalHours: null,
    totalSessions: null,
    highlights: [
      "أساسيات Dart وبيئة التطوير",
      "تصميم الواجهات والتنقل",
      "إدارة الحالة والبيانات",
      "مشروع تطبيق موبايل"
    ],
    syllabus: [
      {
        unit: "المحور الأول",
        title: "أساسيات Dart وبيئة التطوير",
        topics: [
          "إعداد Flutter والمحاكي وتشغيل المشروع",
          "المتغيرات والدوال والكائنات والعمليات غير المتزامنة في Dart"
        ]
      },
      {
        unit: "المحور الثاني",
        title: "تصميم الواجهات والتنقل",
        topics: [
          "استخدام Widgets وتنظيم التخطيطات المتجاوبة",
          "التنقل بين الشاشات ومعالجة النماذج وإدخال المستخدم"
        ]
      },
      {
        unit: "المحور الثالث",
        title: "إدارة الحالة والبيانات",
        topics: [
          "مبادئ إدارة الحالة وتحديث الواجهات",
          "استهلاك واجهات API والتخزين المحلي ومعالجة حالات التحميل والأخطاء"
        ]
      },
      {
        unit: "المحور الرابع",
        title: "مشروع تطبيق موبايل",
        topics: [
          "بناء تطبيق متعدد الشاشات وربط وظائفه",
          "اختبار التطبيق وتحسين عرضه وتجهيز نسخة للتوزيع"
        ]
      }
    ],
    careerOpportunities: [
      "مطور Flutter مبتدئ",
      "مساعد مطور تطبيقات موبايل"
    ]
  },
  {
    id: 55,
    slug: "cybersecurity",
    categoryId: "computer",
    categoryLabel: "كمبيوتر وتصميم ومحاسبة",
    department: "قسم الكمبيوتر",
    badge: "دورة تدريبية",
    title: "الأمن السيبراني",
    subtitle: "Cybersecurity Fundamentals",
    description: "دورة تأسيسية في حماية الأنظمة والشبكات والبيانات، تشمل فهم التهديدات وإدارة الوصول وتأمين الأجهزة ومراقبة الأحداث والاستجابة للحوادث ضمن بيئة تدريبية.",
    linkText: "استكشف الدورة",
    path: "/courses/cybersecurity",
    image: cybersecurityImg,
    rating: null,
    reviewsCount: null,
    duration: "غير محددة",
    hours: "غير محدد",
    sessions: "غير محدد",
    level: "غير محدد",
    certificate: "غير محددة",
    practicalPercentage: "غير محددة",
    totalHours: null,
    totalSessions: null,
    highlights: [
      "مفاهيم الأمن السيبراني",
      "حماية الأنظمة والحسابات",
      "أمن الشبكات والمراقبة",
      "تقييم الحماية والاستجابة"
    ],
    syllabus: [
      {
        unit: "المحور الأول",
        title: "مفاهيم الأمن السيبراني",
        topics: [
          "سرية المعلومات وسلامتها وتوافرها وإدارة المخاطر",
          "التعرف على التصيد والبرمجيات الخبيثة وأساليب الوقاية"
        ]
      },
      {
        unit: "المحور الثاني",
        title: "حماية الأنظمة والحسابات",
        topics: [
          "إدارة الصلاحيات والمصادقة متعددة العوامل",
          "تحديث الأنظمة وتأمين الإعدادات والنسخ الاحتياطي"
        ]
      },
      {
        unit: "المحور الثالث",
        title: "أمن الشبكات والمراقبة",
        topics: [
          "مبادئ الجدران النارية وتقسيم الشبكات وحماية الاتصال",
          "قراءة السجلات ومراقبة الأحداث والتعرف على مؤشرات الحوادث"
        ]
      },
      {
        unit: "المحور الرابع",
        title: "تقييم الحماية والاستجابة",
        topics: [
          "تقييم الثغرات في مختبر مصرح به وتحديد أولويات المعالجة",
          "إعداد خطة استجابة للحوادث وتوثيق النتائج والاستعادة"
        ]
      }
    ],
    careerOpportunities: [
      "مساعد دعم أمن معلومات",
      "التمهيد للتخصص في تحليل أمن الأنظمة والشبكات"
    ]
  },
  {
    id: 56,
    slug: "windows-server",
    categoryId: "computer",
    categoryLabel: "كمبيوتر وتصميم ومحاسبة",
    department: "قسم الكمبيوتر",
    badge: "دورة تدريبية",
    title: "إدارة الخوادم باستخدام Windows Server",
    subtitle: "Windows Server Administration",
    description: "دورة في إعداد وإدارة خوادم Windows Server، تشمل خدمات الدليل والمستخدمين وسياسات المجموعة وخدمات الشبكة ومشاركة الملفات والنسخ الاحتياطي.",
    linkText: "استكشف الدورة",
    path: "/courses/windows-server",
    image: windowsServerImg,
    rating: null,
    reviewsCount: null,
    duration: "غير محددة",
    hours: "غير محدد",
    sessions: "غير محدد",
    level: "غير محدد",
    certificate: "غير محددة",
    practicalPercentage: "غير محددة",
    totalHours: null,
    totalSessions: null,
    highlights: [
      "إعداد الخادم وإدارته",
      "خدمات الدليل والمستخدمون",
      "سياسات المجموعة وخدمات الشبكة",
      "الملفات والحماية والاستعادة"
    ],
    syllabus: [
      {
        unit: "المحور الأول",
        title: "إعداد الخادم وإدارته",
        topics: [
          "تثبيت Windows Server وضبط الإعدادات الأساسية",
          "إدارة الأدوار والميزات ومقدمة في PowerShell"
        ]
      },
      {
        unit: "المحور الثاني",
        title: "خدمات الدليل والمستخدمون",
        topics: [
          "إعداد Active Directory Domain Services وتنظيم الوحدات",
          "إدارة المستخدمين والمجموعات وضم الأجهزة إلى النطاق"
        ]
      },
      {
        unit: "المحور الثالث",
        title: "سياسات المجموعة وخدمات الشبكة",
        topics: [
          "تطبيق Group Policy وإدارة إعدادات الأجهزة والمستخدمين",
          "إعداد خدمات DNS وDHCP وتشخيص مشكلات الاتصال"
        ]
      },
      {
        unit: "المحور الرابع",
        title: "الملفات والحماية والاستعادة",
        topics: [
          "إدارة مشاركات الملفات وصلاحيات NTFS",
          "مراقبة الخادم وتحديثه وتنفيذ النسخ الاحتياطي والاستعادة"
        ]
      }
    ],
    careerOpportunities: [
      "مساعد مسؤول أنظمة Windows",
      "فني دعم خوادم وشبكات مبتدئ"
    ]
  },
  {
    id: 57,
    slug: "autocad",
    categoryId: "computer",
    categoryLabel: "كمبيوتر وتصميم ومحاسبة",
    department: "قسم الكمبيوتر",
    badge: "دورة تدريبية",
    title: "الرسم الهندسي باستخدام AutoCAD",
    subtitle: "AutoCAD Technical Drafting",
    description: "دورة في إعداد الرسومات والمخططات الهندسية باستخدام AutoCAD، تشمل أوامر الرسم والتعديل والطبقات والأبعاد والبلوكات وإخراج اللوحات للطباعة.",
    linkText: "استكشف الدورة",
    path: "/courses/autocad",
    image: autocadImg,
    rating: null,
    reviewsCount: null,
    duration: "غير محددة",
    hours: "غير محدد",
    sessions: "غير محدد",
    level: "غير محدد",
    certificate: "غير محددة",
    practicalPercentage: "غير محددة",
    totalHours: null,
    totalSessions: null,
    highlights: [
      "بيئة AutoCAD وأساسيات الرسم",
      "تحرير الرسومات وتنظيمها",
      "الأبعاد والبلوكات والمراجع",
      "إخراج المخططات"
    ],
    syllabus: [
      {
        unit: "المحور الأول",
        title: "بيئة AutoCAD وأساسيات الرسم",
        topics: [
          "التعرف على الواجهة وضبط الوحدات والإحداثيات",
          "رسم الخطوط والأشكال واستخدام أدوات الدقة والالتقاط"
        ]
      },
      {
        unit: "المحور الثاني",
        title: "تحرير الرسومات وتنظيمها",
        topics: [
          "أوامر التعديل والنسخ والإزاحة والقص",
          "إدارة الطبقات وخصائص العناصر وأنماط الخطوط"
        ]
      },
      {
        unit: "المحور الثالث",
        title: "الأبعاد والبلوكات والمراجع",
        topics: [
          "إضافة الأبعاد والنصوص والتهشير وضبط أنماطها",
          "إنشاء البلوكات واستخدام المراجع الخارجية"
        ]
      },
      {
        unit: "المحور الرابع",
        title: "إخراج المخططات",
        topics: [
          "إعداد Layouts ومقاييس الرسم وإعدادات الطباعة",
          "تنفيذ مخطط تطبيقي وتصديره إلى PDF"
        ]
      }
    ],
    careerOpportunities: [
      "رسام مخططات باستخدام AutoCAD",
      "مساعد إعداد رسومات هندسية"
    ]
  },
  {
    id: 58,
    slug: "3ds-max",
    categoryId: "computer",
    categoryLabel: "كمبيوتر وتصميم ومحاسبة",
    department: "قسم الكمبيوتر",
    badge: "دورة تدريبية",
    title: "التصميم ثلاثي الأبعاد باستخدام 3ds Max",
    subtitle: "3ds Max Modeling & Visualization",
    description: "دورة في النمذجة والإظهار ثلاثي الأبعاد باستخدام 3ds Max، تشمل بناء المجسمات وإعداد الخامات والإضاءة والكاميرات وإنتاج مشهد نهائي.",
    linkText: "استكشف الدورة",
    path: "/courses/3ds-max",
    image: threeDsMaxImg,
    rating: null,
    reviewsCount: null,
    duration: "غير محددة",
    hours: "غير محدد",
    sessions: "غير محدد",
    level: "غير محدد",
    certificate: "غير محددة",
    practicalPercentage: "غير محددة",
    totalHours: null,
    totalSessions: null,
    highlights: [
      "بيئة العمل وبناء المجسمات",
      "تقنيات النمذجة",
      "الخامات والإضاءة والكاميرات",
      "الإظهار والمشروع النهائي"
    ],
    syllabus: [
      {
        unit: "المحور الأول",
        title: "بيئة العمل وبناء المجسمات",
        topics: [
          "إعداد المشهد والوحدات والتنقل داخل المساقط",
          "إنشاء المجسمات الأساسية والتحويلات وتنظيم العناصر"
        ]
      },
      {
        unit: "المحور الثاني",
        title: "تقنيات النمذجة",
        topics: [
          "تحرير المجسمات باستخدام Editable Poly وأدوات التعديل",
          "استخدام Splines وModifiers لبناء عناصر المشهد"
        ]
      },
      {
        unit: "المحور الثالث",
        title: "الخامات والإضاءة والكاميرات",
        topics: [
          "إعداد الخامات والإكساء وضبط إحداثيات UV",
          "توزيع الإضاءة وتحديد الكاميرات وتكوين اللقطة"
        ]
      },
      {
        unit: "المحور الرابع",
        title: "الإظهار والمشروع النهائي",
        topics: [
          "ضبط إعدادات الرندر وجودة الصورة",
          "تنفيذ مشهد داخلي أو منتج وإخراج صور نهائية"
        ]
      }
    ],
    careerOpportunities: [
      "مصمم مجسمات ثلاثية الأبعاد مبتدئ",
      "مساعد إظهار معماري وتصميم داخلي"
    ]
  },
];
