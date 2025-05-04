// interfaces
export interface OrganizationItem {
    id: number;
    title: string;
    description: string;
    imageSrc: string;
    imageAlt: string;
    gallery: string[];
  }
  
  // data
  export const organization: OrganizationItem[] = [
    {
      id: 2,
      title: "טל",
      description:
        "המוצר האייקוני של טל: חדשנות פוגשת סטייל. תמיד צעד אחד קדימה, תמיד מעורר השראה.",
      imageSrc: "/images/products/tal.png",
      imageAlt: "טל",
      gallery: [
        "/images/products/tal1.png",
        "/images/products/tal2.png",
        "/images/products/tal3.png",
      ],
    },
    {
      id: 3,
      title: "ורדה",
      description: "הכוח השקט שמאחורי הקלעים – דואגת, תומכת, ותמיד עם חיוך גדול וחיבוק חם.",
      imageSrc: "/images/products/varda.png",
      imageAlt: "ורדה",
      gallery: [
        "/images/products/varda1.png",
        "/images/products/varda2.png"
      ]
    },
    {
      id: 4,
      title: "איילת",
      description:
        "הקולקציה של איילת: אלגנטיות, יצירתיות ונגיעה של קסם. לאלה שרוצים מהחיים קצת יותר.",
      imageSrc: "/images/products/ayelet.png",
      imageAlt: "איילת",
      gallery: [
        "/images/products/ayelet1.png",
        "/images/products/ayelet2.png",
        "/images/products/ayelet3.png",
      ],
    },
    {
      id: 5,
      title: "שחר",
      description:
        "הבחירות של שחר: חכם, חד ותמיד בסטייל. הבחירה לאנשים עם ראש פתוח ולב טוב.",
      imageSrc: "/images/products/shahar.png",
      imageAlt: "שחר",
      gallery: [
        "/images/products/shahar1.png",
        "/images/products/shahar2.png",
        "/images/products/shahar3.png",
      ],
    },
  ];