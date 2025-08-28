"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function MoneyShareCalculator() {
  const [amount, setAmount] = useState("");
  const [people, setPeople] = useState("");
  const [result, setResult] = useState("หารกัน คนละ 0.00 บาท");

  const calculate = () => {
    const amt = parseFloat(amount);
    const ppl = parseInt(people, 10);

    if (isNaN(amt) || isNaN(ppl) || ppl <= 0) {
      setResult("กรุณาป้อนจำนวนเงินและจำนวนคนที่ถูกต้อง");
      return;
    }

    const perPerson = (amt / ppl).toFixed(2);
    setResult(`หารกัน คนละ ${perPerson} บาท`);
  };

  const clearInputs = () => {
    setAmount("");
    setPeople("");
    setResult("หารกัน คนละ 0.00 บาท");
  };

  return (
    <div
      className="flex flex-col items-center justify-start min-h-screen"
      style={{
        backgroundImage: "url('/images/Monney2.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="w-full flex justify-start p-4">
        <Link href="/">
          <button className="bg-gray-300 text-gray-800 font-bold py-2 px-6 rounded-full shadow hover:bg-gray-400 transition duration-200">
            Home
          </button>
        </Link>
      </div>
      <div className="w-full max-w-md">
        <div className="bg-white p-8 rounded-3xl shadow-2xl border mt-10 border-gray-100 transform transition-all hover:scale-105 duration-300">
          {/* Header */}
          <div className="flex items-center space-x-4 mb-6">
            <div className="p-3 bg-indigo-100 rounded-full">
              {/* ตัวอย่าง icon */}
              <Image
                src="/images/money.png"
                alt="Money Share"
                width={80}
                height={30}
                className="relative z-10 rounded-lg"
              />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-gray-800">
                Money Share Calculator
              </h1>
              <p className="text-sm text-gray-500">คำนวณเงินที่ต้องหาร</p>
            </div>
          </div>

          {/* Inputs */}
          <div className="space-y-6 mb-6">
            <div className="relative">
              <input
                type="number"
                id="amount"
                placeholder="ป้อนจำนวนเงิน"
                className="w-full text-gray-800 border border-gray-300 rounded-lg px-3 py-2 focus:ring-4 focus:ring-indigo-300 focus:border-indigo-600 transition duration-200"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
              />
            </div>

            <div className="relative">
              <input
                type="number"
                id="people"
                placeholder="ป้อนจำนวนคน"
                className="w-full text-gray-800 border border-gray-300 rounded-lg px-3 py-2 focus:ring-4 focus:ring-indigo-300 focus:border-indigo-600 transition duration-200"
                value={people}
                onChange={(e) => setPeople(e.target.value)}
              />
            </div>
          </div>

          {/* Result */}
          <div className="text-center bg-gray-50 p-4 rounded-xl mb-6 border border-dashed border-gray-200">
            <p className="text-xl text-gray-700 font-semibold">{result}</p>
          </div>

          {/* Buttons */}
          <div className="flex flex-col space-y-4">
            <button
              onClick={calculate}
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
    </div>
  );
}
