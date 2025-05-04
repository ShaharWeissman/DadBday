"use client";
import Image from "next/image";

export default function Organization() {
  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-center p-8 pt-32">
      <div className="w-full max-w-4xl bg-white rounded-3xl shadow-2xl p-8 flex flex-col items-center">
        {/* מיכל התמונה */}
        <div className="w-full h-full relative aspect-video shadow-xl rounded-3xl overflow-hidden border-4 border-blue-200">
          <Image
            src="/images/org-tree.jpg" // ודא שהתמונה קיימת ב-/public/images/org-tree.jpg
            alt="עץ החברה"
            fill
            className="object-cover object-center"
          />
        </div>
        {/* חלק הטקסט */}
        <div className="mt-8 max-w-3xl text-center">
          <h1 className="text-4xl font-bold">עץ החברה שלנו</h1>
          <p className="text-lg text-gray-700 mt-4">
            עץ החברה שלנו מייצג את הצמיחה, השורשים העמוקים והאחדות. כל עלה וכל ענף
            מספר סיפור על ההצלחה והחזון שלנו.
          </p>
        </div>
      </div>
    </div>
  );
}
