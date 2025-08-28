"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function BMRCalculator() {
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("male");
  const [result, setResult] = useState<number>(0);
  const [error, setError] = useState("");

  const calculateBMR = () => {
    const w = parseFloat(weight);
    const h = parseFloat(height);
    const a = parseInt(age, 10);

    if (isNaN(w) || isNaN(h) || isNaN(a) || w <= 0 || h <= 0 || a <= 0) {
      setError("กรุณาป้อนข้อมูลให้ถูกต้องและครบถ้วน");
      setResult(0);
      return;
    }

    setError("");

    let bmr;
    if (gender === "male") {
      bmr = 66 + 13.7 * w + 5 * h - 6.8 * a;
    } else {
      bmr = 655 + 9.6 * w + 1.8 * h - 4.7 * a;
    }

    setResult(bmr);
  };

  const clearInputs = () => {
    setWeight("");
    setHeight("");
    setAge("");
    setGender("male");
    setResult(0);
    setError("");
  };

  const InputField = ({
    label,
    value,
    setValue,
    type = "number",
    step,
  }: {
    label: string;
    value: string;
    setValue: (val: string) => void;
    type?: string;
    step?: string;
  }) => (
    <div className="relative">
      <input
        type={type}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder=" "
        step={step}
        min="0"
        className="peer w-full border border-slate-300 rounded-lg bg-transparent px-4 pt-5 pb-2 text-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
        required
      />
      <label
        className="absolute left-4 top-2.5 text-gray-400 text-sm transition-all 
        peer-placeholder-shown:top-5 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-sm
        peer-focus:top-1.5 peer-focus:text-xs peer-focus:text-indigo-600"
      >
        {label}
      </label>
    </div>
  );

  return (
    <main
      className="flex flex-col items-center justify-center min-h-screen p-4 bg-slate-100"
      style={{
        backgroundImage: "url('/images/bbmr2.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="w-full flex justify-start  p-4">
        <Link href="/">
          <button className="bg-gray-300 text-gray-800 font-bold py-2 px-6 rounded-full shadow hover:bg-gray-400 transition duration-200">
            Home
          </button>
        </Link>
      </div>
      <div className="w-full max-w-md bg-white p-8 rounded-3xl shadow-2xl border border-gray-100 transform transition-all hover:scale-105 duration-300">
        {/* Header */}
        <div className="flex items-center space-x-4 mb-6">
          <div className="p-3 bg-indigo-100 rounded-full">
            {/* ตัวอย่าง icon */}
            <Image
              src="/images/bmr.png"
              alt="Money Share"
              width={80}
              height={30}
              className="relative z-10 rounded-lg"
            />
          </div>
          <div>
            <h1 className="text-2xl font-bold text-gray-800">BMR Calculator</h1>
            <p className="text-sm text-gray-500">คำนวณค่า BMR</p>
          </div>
        </div>

        <div className="space-y-4 mb-6">
          {/* Weight */}
          <div className="relative">
            <input
              type="number"
              placeholder="ป้อนน้ำหนัก (กิโลกรัม)"
              className="w-full text-gray-800 border border-gray-300 rounded-lg px-3 py-2 focus:ring-4 focus:ring-indigo-300 focus:border-indigo-600 transition duration-200"
              value={weight}
              onChange={(e) => setWeight(e.target.value)}
              min="0"
              step="0.1"
            />
          </div>

          {/* Height */}
          <div className="relative">
            <input
              type="number"
              placeholder="ป้อนความสูง (เซนติเมตร)"
              className="w-full text-gray-800 border border-gray-300 rounded-lg px-3 py-2 focus:ring-4 focus:ring-indigo-300 focus:border-indigo-600 transition duration-200"
              value={height}
              onChange={(e) => setHeight(e.target.value)}
              min="0"
              step="0.1"
            />
          </div>

          {/* Age */}
          <div className="relative">
            <input
              type="number"
              placeholder="ป้อนอายุ (ปี)"
              className="w-full text-gray-800 border border-gray-300 rounded-lg px-3 py-2 focus:ring-4 focus:ring-indigo-300 focus:border-indigo-600 transition duration-200"
              value={age}
              onChange={(e) => setAge(e.target.value)}
              min="0"
            />
          </div>
        </div>

        {/* Gender */}
        <div className="mb-6">
          <p className="text-gray-700 font-medium mb-2">ป้อนเพศ :</p>
          <div className="flex space-x-4">
            <label className="flex items-center space-x-2 text-gray-700 cursor-pointer">
              <input
                type="radio"
                name="gender"
                value="male"
                checked={gender === "male"}
                onChange={(e) => setGender(e.target.value)}
                className="form-radio text-indigo-600 focus:ring-indigo-500"
              />
              <span>ชาย</span>
            </label>
            <label className="flex items-center space-x-2 text-gray-700 cursor-pointer">
              <input
                type="radio"
                name="gender"
                value="female"
                checked={gender === "female"}
                onChange={(e) => setGender(e.target.value)}
                className="form-radio text-indigo-600 focus:ring-indigo-500"
              />
              <span>หญิง</span>
            </label>
          </div>
        </div>

        {/* Result */}
        <div className="text-center bg-gray-50 p-4 rounded-xl mb-6 border border-dashed border-gray-200">
          {error ? (
            <p className="text-red-500">{error}</p>
          ) : (
            <p className="text-xl text-gray-700 font-semibold">
              ค่า BMR ที่ได้: {result.toFixed(2)} kcal
            </p>
          )}
        </div>

        {/* Buttons */}
        <div className="flex flex-col space-y-4">
          <button
            onClick={calculateBMR}
            className="w-full bg-indigo-600 text-white font-semibold py-3 px-6 rounded-lg shadow-lg hover:bg-indigo-700 transition duration-200 transform hover:scale-105"
          >
            คำนวณ
          </button>
          <button
            onClick={clearInputs}
            className="w-full bg-gray-200 text-gray-700 font-semibold py-3 px-6 rounded-lg hover:bg-gray-300 transition duration-200 transform hover:scale-105"
          >
            ล้างข้อมูล
          </button>
        </div>
      </div>

      {/* Footer */}
      <div className="mt-8 text-center text-gray-500 text-sm">
        &copy; Create @ By DTI-SAU 2099
      </div>
    </main>
  );
}
