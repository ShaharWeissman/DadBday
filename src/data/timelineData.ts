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
    description: "גרסה 0.1 של אבא הושקה בהצלחה: הרבה קסם, אפס שיניים, ומנגנון בכי אוטומטי. מוצר ראשוני עם פוטנציאל ענק ושיער קופצני במיוחד.",
    cards: [
      { image: "/images/timeline/60/baby1.jpg", text: "התשובות לא ברורות, המכנסיים קצרים – ופתאום יש תינוק בבית! שנות ה-60 התחילו ברעש (של בכי)." },
      { image: "/images/timeline/60/baby2.jpg", text: "העולם משתנה, אבל אצלנו בחיתולים הכול רגוע (יחסית)." },
      { image: "/images/timeline/60/kid1.jpg", text: "בוא החוצה ותראה השמש זורחת, הצמחים גדלים והציפורים מצייצות" },
      { image: "/images/timeline/60/kid2.jpg", text: "ילד טוב ואחראי שלא מסתבך ולא שובר איברים" },
      { image: "/images/timeline/1/fight.jpg", text: "" },
      { image: "/images/timeline/1/60fam.jpg", text: "" },
      { image: "/images/timeline/70/teen2.jpg", text: "כשעוד היינו סטארט־אפ משפחתי בשלבי בטא: אבא שלו – הפאונדר, הוא והאחות – MVP ראשוניים עם פוטנציאל ענק." },
      { image: "/images/timeline/1/60sea.jpg", text: "Before Wi-Fi: אב־טיפוס של סטארט־אפים ישראלים – חוף, שמש, ודמיון בלי הגבלה." }
    ]
  },
  {
    title: "פיתוח ומחקר",
    titleEn: "Development & Research",
    yearRange: "1970s-1980s",
    description: `פיתוח ומחקר- לא עברו הרבה שנים, וכבר הפך למהנדס מכונות מתחיל,
תעשייה אווירית ופרויקטים מהצד, כסף נאגר מצד לצד.
יום אחד הגיעה התובנה, במספרים ומתמטיקה נמצאת האהבה
ועם תואר שני במתמטיקה שימושית הכיר את ורדה אישתו העכשווית.
בדרך נס התאהבו כה מהר, וציק צק דאגו להתחתן.
אגרו כספים חיפשו מקומות, ואת ביתם הקימו במכבים! לא פחות…
אחרי כמה שנים הגיעו לחישוב די מדהים, ולמשוואה הוסיפו את איילת לחיים.
בין היתר בין עבודות נע, עד שלבסוף הקים סטרטאפ לא רע.`,
    cards: [
      { image: "/images/timeline/2/70dadmichi.jpg", text: "תספורת קיפוד, טייפ דאבל קסט, והרבה חלומות צבעוניים בלב." },
      { image: "/images/timeline/2/army1.jpg", text: ""  },
      { image: "/images/timeline/2/80ima1.jpg", text: ""  },
      { image: "/images/timeline/2/70armydad.jpg", text: "חוג תיאטרון, טיול שנתי, ופתאום כבר לא ילד – כמעט. כמעט!" },
      { image: "/images/timeline/80/presentor.jpeg", text: "רוקסטאר בעולם המחשבים של שנת 1988, נבחרת לדגמן לקמפיין של טרה סיס – כולל בגדי ים אופנתיים!" },
      { image: "/images/timeline/2/aba-ima.jpg", text: "העסקה הכי טובה שנסגרה אי פעם — מיזוג מושלם עם ורדה בע\"מ. בלי חוזה עו\"ד, רק מבט אחד ונשיקה. מאז ועד היום — שותפות עם תשואה רגשית שלא מפסיקה להניב." },
      { image: "/images/timeline/2/mil.jpg", text: "גם אתם הקוצים — אני השושנה. אתם החיילים — ואני המפקדדדד! (אבל רק אם מישהו שוכח להביא קפה)." },
    ]
  },
  {
    title: "מיזוגים והרחבת הארגון",
    titleEn: "Mergers & Scaling",
    yearRange: "1990s-2000s",
    description: "המשפחה מתרחבת, הקריירה ממריאה, והחלומות מתקרבים ל־Launch. הילדים נולדים בזה אחר זה, והבית מתמלא חיים – וצחוקים. במקביל, אמיר כבר לא רק בונה – הוא מייסד, מייעץ לחברות הייטק, ממציא פטנטים, ומטיס לוויינים לחלל (ברצינות!). החברה האישית בשיא, הדלתות נפתחות, ונשקלת גם האפשרות לעבור לעמק הסיליקון. אבל בינתיים – נשארים במכבים, עם משפחה שגדלה, קריירה שפורחת, ומקרר שתמיד יש בו עוגה."  ,
    cards: [
      { image: "/images/timeline/3/80big.jpg", text: "מודם צורח, מחשב נדלק, ואנחנו מחוברים. או לפחות מנסים. משפחה מתרחבת, החיים מתגלגלים." },
      { image: "/images/timeline/3/80big2.jpg", text: "שינה זה כוח – במיוחד כשנגמרו הכוחות. פגישה חשובה עם הכרית, בהשתתפות סגנית המנכ״ל לצרחות וקסם." },
      { image: "/images/timeline/3/90actor.jpg", text: "שחקן מלידה" },
      { image: "/images/timeline/3/90actor2.jpg", text: "" },
      { image: "/images/timeline/3/90yayo.jpg", text: "טיסות לחו\"ל, מצגות למשקיעים, ואינספור חידודים. ובין לבין – קריירת משחק מזהירה בערוצים המקומיים. כוכב עולה בגיל שבו אחרים רק מתחילים לנוח." }, 
      { image: "/images/timeline/3/90fam2.jpg", text: "מסיבת גג עם דחקות משפחתיות, והכרזה חגיגית: 'כל המלאכים באים'." },
      { image: "/images/timeline/3/90lulu.jpg", text: "עם לולו, גרסת הבטא" }
    ]
  },
  {
    title: "התרחבות בינלאומית",
    titleEn: "Global Expansion",
    yearRange: "2010-Present",
    description: "זה השלב שבו הדור הבא עולה לבמה: הנכדים אמה, אלה, אילן – ועוד כוכבים בדרך – מבהירים שהחזון חי ובועט. הילדים מפיצים את המותג בחו\"ל עם קריירות נוצצות, לימודים מתקדמים, וחיוך ישראלי בכל שדה תעופה. ואבא? אבא מביט מהמרפסת, מוקף אהבה, עם תחושת סיפוק של יזם שבנה משהו שנשאר.",
    cards: [
      { image: "/images/timeline/4/25usa.jpg", text: "Roadshow בניו־ג'רזי: בדרך לעסקת מיזוג אסטרטגית עם בן דודו מהסניף האמריקאי. כשהסטארטאפ שלך הוא 'משפחה בע״ם' — גם מפגש עם בן דוד זה onboarding." },
      { image: "/images/timeline/4/25ilan.jpg", text: ""  },
      { image: "/images/timeline/4/25ilan2.jpg", text: "בפגישת צהריים עסקית"  },
      { image: "/images/timeline/4/25ell.jpg", text: "happy hour של יום חמישי"  },
      { image: "/images/timeline/4/25sin.jpg", text: ""  },
      { image: "/images/timeline/4/25sin2.jpg", text: ""  },
      { image: "/images/timeline/4/25fool.jpg", text: "לא שוכחים גם להנות עם head of fun" },
      { image: "/images/timeline/4/25pesel.jpg", text: "אמיר מנהל פגישה חשובה עם ההנהלה. שיחות אסטרטגיות, חזון לעתיד, והוא בעיקר מדבר... אבל סוף סוף — כולם מקשיבים." },
      { image: "/images/timeline/4/25usa2.jpg", text: "היום: אפליקציה, אהבה, ו־70 שנה של השראה. לא צריך פילטר, יש אבא." },
      { image: "/images/timeline/4/25sing.jpg", text:"שלב הסקיילינג לאסיה: בודקים אופציות, מבלים עם ההנהלה" },
      { image: "/images/timeline/4/emm.jpg", text: "אבא יושב עם אמה על הספה ומספר לה על בנבנטו צ'ליני – הפסל, הלוחם, והאופה בדימוס. היא מקשיבה מהופנטת, והוא גאה: סוף סוףoni שמעריכה פוסטים היסטוריים פנים מול פנים." }
    ]
  }
];

export default timelineData;
 