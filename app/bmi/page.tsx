"use client"; // จำเป็นสำหรับ useState / event handlers

import Link from "next/link";
import React, { useState } from "react";

export default function BMICalculator() {
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [bmi, setBmi] = useState(0);

  const calculateBMI = () => {
    const w = parseFloat(weight);
    const h = parseFloat(height);

    if (isNaN(w) || isNaN(h) || w <= 0 || h <= 0) {
      setBmi(0);
      return;
    }

    const hM = h / 100; // cm → m
    setBmi(Number((w / (hM * hM)).toFixed(2)));
  };

  const clearInputs = () => {
    setWeight("");
    setHeight("");
    setBmi(0);
  };

  return (
    <div
      className="flex flex-col items-center justify-start min-h-screen p-4"
      style={{
        backgroundImage: "url('/images/ex1.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="w-full flex justify-start">
        <Link href="/">
          <button className="bg-gray-300 text-gray-800 font-bold py-2 px-6 rounded-full shadow hover:bg-gray-400 transition duration-200">
            Home
          </button>
        </Link>
      </div>
      <div className="w-full max-w-md bg-white p-8 rounded-3xl shadow-2xl border mt-10 border-gray-100 transform transition-all hover:scale-105 duration-300">
        {/* Header */}
        <div className="flex items-center space-x-4 mb-6">
          <div className="p-3 bg-indigo-100 rounded-full">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-indigo-600"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="12" cy="12" r="10"></circle>
              <path d="M12 16v-4m0-4h.01"></path>
            </svg>
          </div>
          <div>
            <h1 className="text-2xl font-bold text-gray-800">BMI Calculator</h1>
            <p className="text-sm text-gray-500">คำนวณค่า BMI</p>
          </div>
        </div>

        {/* Input Fields */}
        <div className="space-y-6 mb-6">
          <div className="relative mb-6">
            <input
              type="number"
              min="0"
              step="0.1"
              value={height}
              onChange={(e) => setHeight(e.target.value)}
              placeholder="ความสูง (cm)"
              className="w-full border border-gray-300 rounded-lg px-4 py-4 text-gray-800 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>

          <div className="relative mb-6">
            <input
              type="number"
              min="0"
              step="0.1"
              value={weight}
              onChange={(e) => setWeight(e.target.value)}
              placeholder="ป้อนน้ำหนัก (กก.)"
              className="w-full border border-gray-300 rounded-lg px-4 py-4 text-gray-800 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>
        </div>

        {/* Result */}
        <div className="text-center bg-gray-50 p-4 rounded-xl mb-6 border border-dashed border-gray-200">
          <p className="text-xl text-gray-700 font-semibold">
            ค่า BMI ที่ได้: {bmi.toFixed(2)}
          </p>
        </div>

        {/* Buttons */}
        <div className="flex flex-col space-y-4">
          <button
            onClick={calculateBMI}
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
    </div>
  );
}
