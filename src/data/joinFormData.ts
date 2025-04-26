// Shared interfaces
export interface Field {
  id: string;
  label: string;
  type: string;
  required: boolean;
}

export interface CheckboxGroup {
  label: string;
  name: string;
  options: string[];
}

export interface Section {
  title: string;
  fields?: Field[];
  checkboxes: CheckboxGroup[];
}

// Data driven by those interfaces
export const sections: Section[] = [
  {
    title: "🧍 פרטים מזהים (הכרחיים לצורך הרמת כוסית)",
    fields: [
      { id: "firstName", label: "שם פרטי", type: "text", required: true },
      { id: "lastName", label: "שם משפחה", type: "text", required: true },
      {
        id: "age",
        label: "גיל (משוער, לפי תווי פנים)",
        type: "number",
        required: true,
      },
    ],
    checkboxes: [
      {
        label: "איך אתה מכיר את אבא?",
        name: "relation",
        options: [
          "קרוב דם",
          "קרוב נפש",
          "מרגל רוסי שהושתל בילדות",
          "מעריץ אופרה שטעה בכתובת",
        ],
      },
    ],
  },
  {
    title: "🧩 אימות זהות מתקדם",
    checkboxes: [
      {
        label: "בחר את שפת הקוד של אבא",
        name: "codeLanguage",
        options: ["C++", "Assembly", "פיתון עם קפה", "ציור בפוטושופ"],
      },
      {
        label: "מה אבא הכי אוהב לשמוע?",
        name: "favoriteSound",
        options: [
          "הביטלס",
          "מתי כספי",
          "תיאוריה מתמטית מורכבת מוסברת בקול של פלס",
          "את עצמו שר במקלחת",
        ],
      },
    ],
  },
  {
    title: "🎨 בדיקת התאמה יצירתית",
    checkboxes: [
      {
        label: "בחר את תחביבך הלא מובן",
        name: "hobby",
        options: [
          "בניית ספינות בתוך בקבוקים",
          "דקלום מחזות שייקספיר בחרוזים",
          "ציור בתוכנת Notepad",
          "הצפנת רשימות קניות",
        ],
      },
      {
        label: "מה אתה מביא לאירוע?",
        name: "eventContribution",
        options: [
          "ברכה מושקעת עם מודולציה",
          "חיקוי של האופרה של כרמן",
          "מערכון על שנות ה-80",
          "פאי שוקולד מפורמט",
        ],
      },
    ],
  },
];
