// Organization Tree Interfaces
export interface OrgMember {
  id: number;
  name: string;
  role: string;
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
    level: 0,
    imageSrc: "/images/orgTree/david.jpg",
    imageAlt: "דוד",
    gallery: ["/images/orgTree/david1.jpg", "/images/orgTree/david2.jpg"],
    parentId: null,
    children: []
  },
  {
    id: 1,
    name: "אראלה",
    role: "מייסדת המשפחה",
    level: 0,
    imageSrc: "/images/orgTree/reli.jpg",
    imageAlt: "אראלה",
    gallery: ["/images/orgTree/reli.jpg", "/images/orgTree/erela2.jpg"],
    parentId: null,
    children: [
      {
        id: 2,
        name: "אמיר",
        role: "מנכ'ל האחים המאוחדים",
        level: 2,
        imageSrc: "/images/products/amir.png",
        imageAlt: "אמיר",
        gallery: ["/images/products/amir1.png", "/images/products/amir2.png", "/images/products/amir3.png"],
        parentId: 1,
        children: [
          {
            id: 3,
            name: "מישי",
            role: "מייסדת שותפה בתחום הנשנושים",
            level: 3,
            imageSrc: "/images/products/mishi.png",
            imageAlt: "מישי",
            gallery: ["/images/products/mishi1.png", "/images/products/mishi2.png"],
            parentId: 2
          },
          {
            id: 4,
            name: "ורדה",
            role: "מנהלת האווירה הראשית",
            level: 3,
            imageSrc: "/images/products/varda.png",
            imageAlt: "ורדה",
            gallery: ["/images/products/varda1.png", "/images/products/varda2.png"],
            parentId: 2,
            children: [
              {
                id: 5,
                name: "איילת",
                role: "מנהלת הקריאייטיב הראשית",
                level: 4,
                imageSrc: "/images/orgTree/lul.jpg",
                imageAlt: "איילת",
                gallery: ["/images/orgTree/lul.jpg", "/images/products/ayelet2.png", "/images/products/ayelet3.png"],
                parentId: 4,
                children: [
                  {
                    id: 6,
                    name: "אילן",
                    role: "מהנדס הפלאים הזוטר",
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
                role: "מנהל אסטרטגיית השטויות",
                level: 4,
                imageSrc: "/images/products/shahar.png",
                imageAlt: "שחר",
                gallery: ["/images/products/shahar1.png", "/images/products/shahar2.png", "/images/products/shahar3.png"],
                parentId: 4,
                children: [
                  {
                    id: 9,
                    name: "אמה",
                    role: "מנהלת החמידות הראשית",
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
                role: "מנהל אחזקה וכושר",
                level: 4,
                imageSrc: "/images/products/tal.png",
                imageAlt: "טל",
                gallery: ["/images/products/tal1.png", "/images/products/tal2.png", "/images/products/tal3.png"],
                parentId: 4
              }
            ]
          }
        ]
      }
    ]
  }
];
