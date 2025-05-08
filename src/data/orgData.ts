// Organization Tree Interfaces
export interface OrgMember {
  id: number;
  name: string;
  role: string;
  roleEn?: string;
  level: number;
  parentId: number | null;
  children?: OrgMember[];
  imageSrc?: string;
  imageAlt?: string;
  gallery?: string[];
}

// Organization Tree Data
export const orgTreeData: OrgMember[] = [
  {
    id: 0,
    name: "דוד",
    role: "מייסד המשפחה",
    roleEn: "Founder",
    level: 0,
    imageSrc: "/images/orgTree/davidi.jpg",
    imageAlt: "דוד",
    gallery: ["/images/orgTree/davidi.jpg", "/images/orgTree/david2.jpg"],
    parentId: null,
    children: []
  },
  {
    id: 1,
    name: "אראלה",
    role: "מייסדת המשפחה",
    roleEn: "Founder",
    level: 0,
    imageSrc: "/images/orgTree/reli.jpg",
    imageAlt: "אראלה",
    gallery: ["/images/orgTree/reli.jpg", "/images/orgTree/erela2.jpg"],
    parentId: null,
    children: [
      {
        id: 2,
        name: "אמיר",
        role: "מנכ\"ל weissman בע\"מ",
        roleEn: "CEO of Wiseman Corp",
        level: 2,
        imageSrc: "/images/orgTree/amiri.jpg",
        imageAlt: "אמיר",
        gallery: ["/images/orgTree/amiri.jpg"],
        parentId: 1,
        children: [
          {
            id: 4,
            name: "ורדה",
            role: "סגנית מנכ\"ל ומנהלת האווירה הראשית",
            roleEn: "Vice CEO and Chief Vibes Officer",
            level: 3,
            imageSrc: "/images/orgTree/ima.jpg",
            imageAlt: "ורדה",
            gallery: ["/images/orgTree/ima.jpg"],
            parentId: 2,
            children: [
              {
                id: 5,
                name: "איילת",
                role: "מנהלת תפעול והעברות מגורים",
                roleEn: "Chief of Operations and Relocation",
                level: 4,
                imageSrc: "/images/orgTree/lulu.jpg",
                imageAlt: "איילת",
                gallery: ["/images/orgTree/lulu.jpg", "/images/products/ayelet2.png", "/images/products/ayelet3.png"],
                parentId: 4,
                children: [
                  {
                    id: 6,
                    name: "אילן",
                    role: "מהנדס הפלאים הזוטר",
                    roleEn: "Junior Wonder Engineer",
                    level: 5,
                    imageSrc: "/images/products/ilan.png",
                    imageAlt: "אילן",
                    gallery: ["/images/products/ilan1.png", "/images/products/ilan2.png"],
                    parentId: 5
                  },
                  {
                    id: 7,
                    name: "אלה",
                    role: "ראש מחלקת הצחוקים",
                    roleEn: "Head of Giggles",
                    level: 5,
                    imageSrc: "/images/products/ella.png",
                    imageAlt: "אלה",
                    gallery: ["/images/products/ella1.png", "/images/products/ella2.png"],
                    parentId: 5
                  }
                ]
              },
              {
                id: 8,
                name: "שחר",
                role: "מנהל טכנולוגיה ויצירתיות",
                roleEn: "Chief of Technology and Creativity",
                level: 4,
                imageSrc: "/images/orgTree/shahar.jpg",
                imageAlt: "שחר",
                gallery: ["/images/orgTree/shahar.jpg"],
                parentId: 4,
                children: [
                  {
                    id: 9,
                    name: "אמה",
                    role: "מנהלת החמידות הראשית",
                    roleEn: "Chief Cuteness Officer",
                    level: 5,
                    imageSrc: "/images/products/emma.png",
                    imageAlt: "אמה",
                    gallery: ["/images/products/emma1.png", "/images/products/emma2.png"],
                    parentId: 8
                  }
                ]
              },
              {
                id: 10,
                name: "טל",
                role: "אחראית תשומת לב",
                roleEn: "Chief of Attention",
                level: 4,
                imageSrc: "/images/orgTree/tal.jpg",
                imageAlt: "טל",
                gallery: ["/images/orgTree/tal.jpg"],
                parentId: 4
              }
            ]
          }
        ]
      },
      {
        id: 3,
        name: "מיכי",
        role: "אחראית האחים",
        roleEn: "Head of Siblings",
        level: 2,
        imageSrc: "/images/orgTree/michi.jpg",
        imageAlt: "מיכי",
        gallery: ["/images/orgTree/michi.jpg"],
        parentId: 1
      }
    ]
  }
];
