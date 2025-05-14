// Define TimelineItem interface locally

export interface TimelineEra {
  title: string;
  titleEn: string;
  description: string;
  yearRange: string;
  cards: TimelineItem[];
}

interface TimelineItem {
  image: string;
  text: string;
}

const timelineData: TimelineEra[] = [
  {
    title: "הקמה",
    titleEn: "Bootstrapping",
    yearRange: "1950s-1960s",
    description: "גרסה 0.1 של אבא הושקה בהצלחה: הרבה קסם, אפס שיניים, ומנגנון בכי אוטומטי. מוצר ראשוני עם פוטנציאל ענק ושיער פלאפי במיוחד.",
    cards: [
      { image: "/images/timeline/60/baby1.jpg", text: "התשובות לא ברורות, המכנסיים קצרים – ופתאום יש תינוק בבית! שנות ה-60 התחילו ברעש (של בכי)." },
      { image: "/images/timeline/60/baby2.jpg", text: "העולם משתנה, אבל אצלנו בחיתולים הכול רגוע (יחסית)." },
      { image: "/images/timeline/60/kid1.jpg", text: "בוא החוצה ותראה השמש זורחת, הצמחים גדלים והציפורים מצייצות" },
      { image: "/images/timeline/60/kid2.jpg", text: "ילד טוב ואחראי שלא מסתבך ולא שובר איברים" },
      { image: "/images/timeline/1/fight.jpg", text: "ג'ינסים מתרחבים, שיער ארוך, והכרזה ראשונה על עצמאות: 'אני הולך ברגל לבית ספר'." },
      { image: "/images/timeline/70/teen2.jpg", text: "ילדות ישראלית עם אופניים בלי קסדה ועם חלום להיות נהג אוטובוס או אסטרונאוט." }
    ]
  },
  {
    title: "פיתוח ומחקר",
    titleEn: "Development & Research",
    yearRange: "1970s-1980s",
    description: "שלב ה-R&D: ניסויים אינטנסיביים במוזיקה, תיאטרון, ומחשבים. כל שבוע עדכון גרסה רגשי – לפעמים עם באגים, לפעמים עם ביצועים משופרים.",
    cards: [
      { image: "/images/timeline/80/teen3.jpg", text: "תספורת קיפוד, טייפ דאבל קסט, והרבה חלומות צבעוניים בלב." },
      { image: "/images/timeline/80/teen4.jpg", text: "חוג תיאטרון, טיול שנתי, ופתאום כבר לא ילד – כמעט. כמעט!" },
      { image: "/images/timeline/80/presentor.jpeg", text: "רוקסטאר בעולם המחשבים של שנת 1988, נבחרת לדגמן לקמפיין של טרה סיס – כולל בגדי ים אופנתיים!" },
      { image: "/images/timeline/2/aba-ima.jpg", text: "העסקה הכי טובה שנסגרה אי פעם — מיזוג מושלם עם ורדה בע\"מ. בלי חוזה עו\"ד, רק מבט אחד ונשיקה. מאז ועד היום — שותפות עם תשואה רגשית שלא מפסיקה להניב." },
      { image: "/images/timeline/2/mil.jpg", text: "גם אתם הקוצים — אני השושנה. אתם החיילים — ואני המפקדדדד! (אבל רק אם מישהו שוכח להביא קפה)." },
    ]
  },
  {
    title: "מיזוגים והרחבת הארגון",
    titleEn: "Mergers & Scaling",
    yearRange: "1990s-2000s",
    description: "שלב שבו המשפחה מתרחבת, הקריירות צומחות, והילדים מתחילים להמריא – חלקם ללימודים וקריירות בינלאומיות. הנכדים מצטרפים לפעילות – עם חוכמה, הומור והרבה רעש. ואבא? אבא צוחק, מייעץ, ומתפנה לחידודים אסטרטגיים.",
    cards: [
      { image: "/images/timeline/90/earlyweb.jpg", text: "מודם צורח, מחשב נדלק, ואנחנו מחוברים. או לפחות מנסים. המשפחה מתרחבת, החיים מתגלגלים." },
      { image: "/images/timeline/90/familyfun.jpg", text: "המילניום מתקרב, ואנחנו עדיין נאמנים לדיסקמן ולדף קשר. שמח, מוזר, ומקסים." },
      { image: "/images/timeline/2000/family.jpg", text: "הייטק פורח, מנגלים הופכים למדע מדויק, והמשפחה הופכת לסטארטאפ הכי יציב בעיר." },
      { image: "/images/timeline/2000/event.jpg", text: "אירועים משפחתיים מרגשים, ברכות עם פואנטה, ואבא תמיד באמצע התמונה." },
      { image: "/images/timeline/2010/vacation.jpg", text: "טיסות לחו\"ל, מצגות למשקיעים, ואינספור חידודים. החיים בגרסת פיץ'." },
      { image: "/images/timeline/2010/laugh.jpg", text: "מסיבת גג עם דחקות משפחתיות, והכרזה חגיגית: 'כל המלאכים באים'." }
    ]
  },
  {
    title: "התרחבות בינלאומית",
    titleEn: "Global Expansion",
    yearRange: "2010-Present",
    description: "זה השלב שבו הדור הבא עולה לבמה: הנכדים אמה, אלה, אילן – ועוד כוכבים בדרך – מבהירים שהחזון חי ובועט. הילדים מפיצים את המותג בחו\"ל עם קריירות נוצצות, לימודים מתקדמים, וחיוך ישראלי בכל שדה תעופה. ואבא? אבא מביט מהמרפסת, מוקף אהבה, עם תחושת סיפוק של יזם שבנה משהו שנשאר.",
    cards: [
      { image: "/images/timeline/2020/grandkids.jpg", text: "נכדים רצים בסלון, Zoom עם קפה, והלב מתמלא בכל רגע." },
      { image: "/images/timeline/2020/today.jpg", text: "היום: אפליקציה, אהבה, ו־70 שנה של השראה. לא צריך פילטר, יש אבא." },
      { image: "/images/timeline/4/emm.jpg", text: "אבא יושב עם אמה על הספה ומספר לה על בנבנטו צ'ליני – הפסל, הלוחם, והאופה בדימוס. היא מקשיבה מהופנטת, והוא גאה: סוף סוף מישהי שמעריכה פוסטים היסטוריים פנים מול פנים." }
    ]
  }
];

export default timelineData;
 