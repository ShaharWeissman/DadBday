import { TimelineItem } from "@/types/TimelineItem";

export interface TimelineEra {
  yearRange: string;
  title: string;
  description: string;
  cards: TimelineItem[];
}

const timelineData: TimelineEra[] = [
  {
    yearRange: "1960s",
    title: "השנים היפות, השנים הראשונות",
    description: "ילדות ישראלית, חיתולים רכים, וצליל בכי בלתי נשכח.",
    cards: [
      {
        image: "/images/timeline/60/baby1.jpg",
        text: "התשובות לא ברורות, המכנסיים קצרים – ופתאום יש תינוק בבית! שנות ה-60 התחילו ברעש (של בכי).",
      },
      {
        image: "/images/timeline/60/baby2.jpg",
        text: "העולם משתנה, אבל אצלנו בחיתולים הכול רגוע (יחסית).",
      },
      {
        image: "/images/timeline/60/kid1.jpg",
        text: "יסקרן אוהב להסתגר בחדר ולקרוא ספרים",
      },
      {
        image: "/images/timeline/60/kid2.jpg",
        text: "ילד טוב ואחראי שלא מסתבך ולא שובר איברים",
      },
    ],
  },
  {
    yearRange: "1970s",
    title: "בית ספר, חברים, ו-alone בפיתה",
    description: "הולכים לבד לבית הספר וחוזרים עם סיפורים לכל החיים.",
    cards: [
      {
        image: "/images/timeline/70/teen1.jpg",
        text: "ג'ינסים מתרחבים, שיער ארוך, והכרזה ראשונה על עצמאות: 'אני הולך ברגל לבית ספר'.",
      },
      {
        image: "/images/timeline/70/teen2.jpg",
        text: "ילדות ישראלית עם אופניים בלי קסדה ועם חלום להיות נהג אוטובוס או אסטרונאוט.",
      },
    ],
  },
  {
    yearRange: "1980s",
    title: "הקצב גובר והחלומות גדלים",
    description: "תקליטים מסתובבים, מחשבים מצפצפים, והראש בעננים.",
    cards: [
      {
        image: "/images/timeline/80/teen3.jpg",
        text: "תספורת קיפוד, טייפ דאבל קסט, והרבה חלומות צבעוניים בלב.",
      },
      {
        image: "/images/timeline/80/teen4.jpg",
        text: "חוג תיאטרון, טיול שנתי, ופתאום כבר לא ילד – כמעט. כמעט!",
      },
      {
        image: "/images/timeline/80/presentor.png",
        text: "רוקסטאר בעולם המחשבים של שנת 1988 נבחרת לדגמן לקמפיין של טרה סיס שכלל גם תמונות פרופיל ותמונות עם בגדי ים אופנתיים!",
      },
    ],
  },
  {
    yearRange: "1990s",
    title: "מתבגרים עם אינטרנט בדייל-אפ",
    description: "המודם צורח, דיסקמן על הכתף – ואנחנו מחוברים לעתיד.",
    cards: [
      {
        image: "/images/timeline/90/earlyweb.jpg",
        text: "מודם צורח, מחשב נדלק, ואנחנו מחוברים. או לפחות מנסים. המשפחה מתרחבת, החיים מתגלגלים.",
      },
      {
        image: "/images/timeline/90/familyfun.jpg",
        text: "המילניום מתקרב, ואנחנו עדיין נאמנים לדיסקמן ולדף קשר. שמח, מוזר, ומקסים.",
      },
    ],
  },
  {
    yearRange: "2000s",
    title: "בגרות, משפחה, וביסוס הקריירה",
    description: "עובדים, מגדלים ילדים, ושולטים במנגל עם דיוק מדעי.",
    cards: [
      {
        image: "/images/timeline/2000/family.jpg",
        text: "הייטק פורח, מנגלים הופכים למדע מדויק, והמשפחה הופכת לסטארטאפ הכי יציב בעיר.",
      },
      {
        image: "/images/timeline/2000/event.jpg",
        text: "אירועים משפחתיים מרגשים, ברכות עם פואנטה, ואבא תמיד באמצע התמונה.",
      },
    ],
  },
  {
    yearRange: "2010s",
    title: "סטארטאפים, טיסות, בדיחות אבא",
    description: "חולקים מצגות, קמים להייטק – ונופלים מצחוק עם דחקות אבא.",
    cards: [
      {
        image: "/images/timeline/2010/vacation.jpg",
        text: "טיסות לחו\"ל, מצגות למשקיעים, ואינספור חידודים. החיים בגרסת פיץ'.",
      },
      {
        image: "/images/timeline/2010/laugh.jpg",
        text: "מסיבת גג עם דחקות משפחתיות, והכרזה חגיגית: 'כל המלאכים באים'.",
      },
    ],
  },
  {
    yearRange: "2020s",
    title: "משפחה, נכדים, וזיכרון בענן",
    description: "היום: אפליקציה, אהבה, ונכדים עם טכנולוגיה ביד.",
    cards: [
      {
        image: "/images/timeline/2020/grandkids.jpg",
        text: "נכדים רצים בסלון, Zoom עם קפה, והלב מתמלא בכל רגע.",
      },
      {
        image: "/images/timeline/2020/today.jpg",
        text: "היום: אפליקציה, אהבה, ו־70 שנה של השראה. לא צריך פילטר, יש אבא.",
      },
    ],
  },
];

export default timelineData;
