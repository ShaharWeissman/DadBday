"use client";

import { useState, useEffect } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { sections, Field, CheckboxGroup as CG } from "@/data/joinFormData";

type FloatingText = {
  id: number;
  x: number;
  y: number;
  scale: number;
  rotation: number;
  delay: number;
};

type FormValues = {
  firstName: string;
  lastName: string;
  age: number;
  relation: string[];
  codeLanguage: string[];
  favoriteSound: string[];
  hobby: string[];
  eventContribution: string[];
  message: string;
};

const fatherSentences = [
  "ALL ANGELES COMES.",
  "בפורום ? תתפלאי",
  "אוקלאונה גולג",
  "אוסס ידה חטבילי ג'ונקלילי סירומני או מז'נה או מז'נה ?.",
  "יום אחד היה לילה!",
  "נשאלת השאלהההההה - אין כניסה",
  "אמריקה, אמריקה, אמריקה",
  "מה קיציס עשה לההההההההההה ?",
];

function Modal({
  sentence,
  onClose,
}: {
  sentence: string;
  onClose: () => void;
}) {
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);
  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm"
      onClick={onClose}>
      <div
        className={`
          bg-white rounded-xl shadow-2xl p-6 max-w-md mx-4
          transform transition duration-500
          ${mounted ? "opacity-100 scale-100" : "opacity-0 scale-75"}
          animate-bounce
        `}
        onClick={(e) => e.stopPropagation()}>
        <p className="text-gray-800 text-center text-lg">{sentence}</p>
        <button
          onClick={onClose}
          className="mt-6 w-full py-3 bg-blue-600 text-white rounded-full shadow hover:bg-blue-700 transition">
          Close
        </button>
      </div>
    </div>
  );
}

export default function Join() {
  const [modalSentence, setModalSentence] = useState<string | null>(null);
  const [floatingTexts, setFloatingTexts] = useState<FloatingText[]>();

  useEffect(() => {
    // Create 8 floating texts with random positions
    const texts = Array.from({ length: 8 }, (_, i) => ({
      id: i,
      x: Math.random() * 80 + 10, // 10-90%
      y: Math.random() * 80 + 10, // 10-90%
      scale: Math.random() * 0.5 + 0.5, // 0.5-1
      rotation: Math.random() * 30 - 15, // -15 to 15 degrees
      delay: Math.random() * 12 // 0-12s delay
    }));
    setFloatingTexts(texts);
  }, []);
  
  const { register, handleSubmit, formState } = useForm<FormValues>({
    defaultValues: {
      relation: [],
      codeLanguage: [],
      favoriteSound: [],
      hobby: [],
      eventContribution: [],
      message: "",
    },
  });

  const onSubmit: SubmitHandler<FormValues> = () => {
    const idx = Math.floor(Math.random() * fatherSentences.length);
    setModalSentence(fatherSentences[idx]);
  };

  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 py-24 px-4 sm:px-6 lg:px-8 font-heebo relative overflow-hidden">
      {/* Floating Background Texts */}
      {floatingTexts?.map((text) => (
        <div
          key={text.id}
          className="absolute pointer-events-none select-none animate-float-random"
          style={{
            left: `${text.x}%`,
            top: `${text.y}%`,
            transform: `scale(${text.scale}) rotate(${text.rotation}deg)`,
            opacity: 0.07,
            zIndex: 0,
            ['--scale' as string]: text.scale,
            ['--rotation' as string]: `${text.rotation}deg`,
            ['--delay' as string]: text.delay,
          }}>
          <p className="text-4xl md:text-6xl font-black text-blue-600 whitespace-nowrap">
            הצטרפו למשפחה
          </p>
        </div>
      ))}
      
      {/* Header */}
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-800 mb-4 relative inline-block">
            <span className="relative z-10">הצטרפו למשפחה</span>
            <div className="absolute -bottom-2 left-0 right-0 h-3 bg-blue-400/30 -skew-y-1 z-0"></div>
          </h1>
          <p className="text-md md:text-xl text-gray-600 max-w-3xl mx-auto">
            טופס הצטרפות לארגון המשפחתי שלנו
          </p>
        </div>
      </div>
      
      <div className="mx-auto w-full max-w-5xl bg-white/90 p-4 shadow-xl rounded-2xl border-2 border-blue-200 backdrop-blur-sm">
        <div className="text-center space-y-1 mb-4">
          <h2 className="text-3xl font-extrabold text-gray-900">
            🧠 טופס כניסה מאובטח לחגיגות יום הולדת 70
          </h2>
          <p className="text-sm text-gray-600">
            (מאושר על ידי מערכת ההצפנה הלאומית של אבא)
          </p>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="mt-4 space-y-3">
          {sections.map((section) => (
            <section key={section.title} className="space-y-3">
              <h3 className="text-xl font-semibold text-gray-800">
                {section.title}
              </h3>

              {/* text fields */}
              {section.fields && (
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  {section.fields.map((f: Field) => (
                    <div key={f.id}>
                      <label
                        htmlFor={f.id}
                        className="block text-sm font-medium text-gray-700">
                        {f.label}
                      </label>
                      <input
                        id={f.id}
                        type={f.type}
                        {...register(f.id as keyof FormValues, {
                          required: f.required,
                          valueAsNumber: f.type === "number",
                        })}
                        className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                      />
                    </div>
                  ))}
                </div>
              )}

              {/* checkbox groups */}
              {section.checkboxes.map((group: CG) => (
                <fieldset key={group.name} className="space-y-2">
                  <legend className="text-sm font-medium text-gray-700">
                    {group.label}
                  </legend>
                  <div className="mt-2 grid grid-cols-2 sm:grid-cols-4 gap-x-6 gap-y-1">
                    {group.options.map((opt) => (
                      <label key={opt} className="flex items-center space-x-2 text-sm">
                        <input
                          type="checkbox"
                          value={opt}
                          {...register(group.name as keyof FormValues)}
                          className="h-3.5 w-3.5 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                        />
                        <span className="text-gray-700">{opt}</span>
                      </label>
                    ))}
                  </div>
                </fieldset>
              ))}
            </section>
          ))}

          {/* free-text */}
          <div className="space-y-2">
            <h3 className="text-xl font-semibold text-gray-800">
              💌 מילות אהבה או קוד
            </h3>
            <label
              htmlFor="message"
              className="block text-sm font-medium text-gray-700">
              כתוב ברכה קצרה לאבא:
            </label>
            <textarea
              id="message"
              rows={3}
              {...register("message")}
              className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
            />
          </div>

          <button
            type="submit"
            disabled={formState.isSubmitting}
            className="w-full py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-full shadow-lg hover:from-blue-700 hover:to-indigo-700 transition duration-300 mt-4">
            ✅ [ שלח את הטופס | כניסה למערכת מאושרת 🎉 ]
          </button>
        </form>
      </div>

      {modalSentence && (
        <Modal
          sentence={modalSentence}
          onClose={() => setModalSentence(null)}
        />
      )}
    </main>
  );
}
