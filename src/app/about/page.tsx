"use client";
import Image from "next/image";

export default function About() {
  return (
    <div className="min-h-screen bg-white flex items-center justify-center p-8">
      {/* Outer container with two columns on larger screens */}
      <div className="max-w-5xl w-full flex flex-col md:flex-row gap-8">
        {/* Left side: Text */}
        <div className="md:w-1/2 space-y-4 self-center">
          <h1 className="text-4xl font-bold">הסיפור של אמיר</h1>
          <p className="text-lg text-gray-700 leading-relaxed">
            חוגגים יום הולדת לאמיר 70
          </p>
          <p className="text-md text-gray-600">
            סאראלה ודוד הקו פאונדר של אמיר70, הם הורים של אמיר. הם גרים
            בברצלונה, ספרד. סאראלה היא אמא נהדרת ודוד הוא אבא מדהים. הם אוהבים
            לבלות עם המשפחה והחברים שלהם. הם תמיד שמחים לעזור לאחרים ולתמוך בהם.
            הם אוהבים לטפח את הקשרים עם המשפחה והחברים שלהם. הם תמיד שמחים להיות
            חלק מהקהילה שלהם.
          </p>
        </div>

        {/* Right side: Red container with two images */}
        <div className="md:w-1/2 flex flex-col gap-6">
          {/* Red container for the first image */}
          <div className="bg-red-500 rounded-lg overflow-hidden h-60 relative">
            <Image
              src="/images/saba.jpg" // Place your first image in /public/images/
              alt="Dad's younger days"
              fill
              className="object-cover object-center"
            />
          </div>

          {/* Red container for the second image */}
          <div className="bg-blue-500 rounded-lg overflow-hidden h-60 relative">
            <Image
              src="/images/dad-later.jpg" // Place your second image in /public/images/
              alt="Dad’s more recent snapshot"
              fill
              className="object-cover object-center"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
