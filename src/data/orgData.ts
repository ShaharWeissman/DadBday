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
    id: 1,
    name: "אמיר",
    role: "מנכ'ל האחים המאוחדים",
    level: 1,
    imageSrc: "/images/products/amir.png",
    imageAlt: "אמיר",
    gallery: ["/images/products/amir1.png", "/images/products/amir2.png", "/images/products/amir3.png"],
    parentId: null,
    children: [
      {
        id: 2,
        name: "מישי",
        role: "מייסדת שותפה בתחום הנשנושים",
        level: 2,
        imageSrc: "/images/products/mishi.png",
        imageAlt: "מישי",
        gallery: ["/images/products/mishi1.png", "/images/products/mishi2.png"],
        parentId: 1
      },
      {
        id: 3,
        name: "ורדה",
        role: "מנהלת האווירה הראשית",
        level: 2,
        imageSrc: "/images/products/varda.png",
        imageAlt: "ורדה",
        gallery: ["/images/products/varda1.png", "/images/products/varda2.png"],
        parentId: 1,
        children: [
          {
            id: 4,
            name: "איילת",
            role: "מנהלת הקריאייטיב הראשית",
            level: 3,
            imageSrc: "/images/orgTree/lul.jpg",
            imageAlt: "איילת",
            gallery: ["/images/orgTree/lul.jpg", "/images/products/ayelet2.png", "/images/products/ayelet3.png"],
            parentId: 3,
            children: [
              {
                id: 7,
                name: "אילן",
                role: "מהנדס הפלאים הזוטר",
                level: 4,
                imageSrc: "/images/products/ilan.png",
                imageAlt: "אילן",
                gallery: ["/images/products/ilan1.png", "/images/products/ilan2.png"],
                parentId: 4
              },
              {
                id: 8,
                name: "אלה",
                role: "ראש מחלקת הצחוקים",
                level: 4,
                imageSrc: "/images/products/ella.png",
                imageAlt: "אלה",
                gallery: ["/images/products/ella1.png", "/images/products/ella2.png"],
                parentId: 4
              }
            ]
          },
          {
            id: 5,
            name: "שחר",
            role: "מנהל אסטרטגיית השטויות",
            level: 3,
            imageSrc: "/images/products/shahar.png",
            imageAlt: "שחר",
            gallery: ["/images/products/shahar1.png", "/images/products/shahar2.png", "/images/products/shahar3.png"],
            parentId: 3,
            children: [
              {
                id: 9,
                name: "אמה",
                role: "מנהלת החמידות הראשית",
                level: 4,
                imageSrc: "/images/products/emma.png",
                imageAlt: "אמה",
                gallery: ["/images/products/emma1.png", "/images/products/emma2.png"],
                parentId: 5
              }
            ]
          },
          {
            id: 6,
            name: "טל",
            role: "מנהל אחזקה וכושר",
            level: 3,
            imageSrc: "/images/products/tal.png",
            imageAlt: "טל",
            gallery: ["/images/products/tal1.png", "/images/products/tal2.png", "/images/products/tal3.png"],
            parentId: 3
          }
        ]
      }
    ]
  }
];
