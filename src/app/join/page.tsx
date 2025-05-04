"use client";

import { useState, useEffect } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { sections, Field, CheckboxGroup as CG } from "@/data/joinFormData";

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
    <main className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto w-full max-w-xl mt-16 bg-white p-8 shadow-lg rounded-lg">
        <h2 className="text-center text-3xl font-extrabold text-gray-900">
          🧠 טופס כניסה מאובטח לחגיגות יום הולדת 70
        </h2>
        <p className="mt-2 text-center text-sm text-gray-600">
          (מאושר על ידי מערכת ההצפנה הלאומית של אבא)
        </p>

        <form onSubmit={handleSubmit(onSubmit)} className="mt-10 space-y-8">
          {sections.map((section) => (
            <section key={section.title} className="space-y-6">
              <h3 className="text-xl font-semibold text-gray-800">
                {section.title}
              </h3>

              {/* text fields */}
              {section.fields && (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
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
                <fieldset key={group.name} className="space-y-4">
                  <legend className="text-sm font-medium text-gray-700">
                    {group.label}
                  </legend>
                  <div className="mt-4 space-y-2">
                    {group.options.map((opt) => (
                      <label key={opt} className="flex items-center space-x-2">
                        <input
                          type="checkbox"
                          value={opt}
                          {...register(group.name as keyof FormValues)}
                          className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
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
          <div className="space-y-4">
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
              rows={4}
              {...register("message")}
              className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
            />
          </div>

          <button
            type="submit"
            disabled={formState.isSubmitting}
            className="w-full py-4 bg-blue-600 text-white rounded-full shadow hover:bg-blue-700 transition">
            ✅ [ שלח את הטופס | כניסה למערכת מאושרת 🎉 ]
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
