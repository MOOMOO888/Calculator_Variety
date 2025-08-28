"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function CarInstallmentCalculator() {
  const [name, setName] = useState("");
  const [carPrice, setCarPrice] = useState("");
  const [interestRate, setInterestRate] = useState("");
  const [downPayment, setDownPayment] = useState(15);
  const [loanTerm, setLoanTerm] = useState(24);
  const [monthlyPayment, setMonthlyPayment] = useState<number>(0);
  const [error, setError] = useState("");

  const calculateMonthlyPayment = () => {
    const price = parseFloat(carPrice);
    const interest = parseFloat(interestRate);

    if (
      isNaN(price) ||
      isNaN(interest) ||
      price <= 0 ||
      interest < 0 ||
      loanTerm <= 0
    ) {
      setError("กรุณาป้อนข้อมูลที่ถูกต้อง");
      setMonthlyPayment(0);
      return;
    }

    setError("");

    const principal = price - price * (downPayment / 100);
    const monthlyInterestRate = interest / 100 / 12;
    const n = loanTerm;

    const monthly =
      (principal * monthlyInterestRate) /
      (1 - Math.pow(1 + monthlyInterestRate, -n));

    setMonthlyPayment(monthly);
  };

  const clear = () => {
    setName("");
    setCarPrice("");
    setInterestRate("");
    setDownPayment(15);
    setLoanTerm(24);
    setMonthlyPayment(0);
    setError("");
  };

  return (
    <div
      className="flex flex-col items-center justify-start min-h-screen bg-gray-100"
      style={{
        backgroundImage: "url('/images/fast2.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="w-full flex justify-start p-4">
        <Link href="/">
          <button className="bg-white text-gray-800 font-bold py-2 px-6 rounded-full shadow hover:bg-blue-500 transition hover:text-white duration-200">
            Home
          </button>
        </Link>
      </div>

      <div className="bg-white p-8 rounded-3xl shadow-2xl w-full max-w-2xl text-center">
        <h1 className="text-2xl md:text-4xl font-bold text-gray-900 mb-2">
          Car Installment Calculator
        </h1>
        <p className="text-xl md:text-2xl font-light text-gray-600 mb-6">
          คำนวณ Car Installment
        </p>

        <div className="w-40 p-3 rounded-full flex items-center justify-center mx-auto mb-8">
          <Image
            src="/images/car.png"
            alt="Car"
            width={80}
            height={30}
            className="relative z-10 rounded-lg"
          />
        </div>

        <div className="bg-gray-50 p-6 rounded-2xl shadow-inner mb-6 text-left space-y-4">
          <div className="space-y-4">
            {/* ชื่อผู้คำนวณ */}
            <div>
              <label
                htmlFor="name"
                className="block text-gray-700 font-medium mb-2"
              >
                ชื่อผู้คำนวณ
              </label>
              <input
                type="text"
                id="name"
                placeholder="ป้อนชื่อผู้คำนวณ"
                className="w-full px-4 py-2 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-colors duration-200"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>

            {/* ราคารถ */}
            <div>
              <label
                htmlFor="carPrice"
                className="block text-gray-700 font-medium mb-2"
              >
                ราคารถ (บาท)
              </label>
              <input
                type="number"
                id="carPrice"
                placeholder="ป้อนราคารถ"
                className="w-full px-4 py-2 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-colors duration-200"
                value={carPrice}
                onChange={(e) => setCarPrice(e.target.value)}
              />
            </div>

            {/* ดอกเบี้ยต่อปี */}
            <div>
              <label
                htmlFor="interestRate"
                className="block text-gray-700 font-medium mb-2"
              >
                ดอกเบี้ยต่อปี (%)
              </label>
              <input
                type="number"
                id="interestRate"
                placeholder="ป้อนดอกเบี้ย"
                className="w-full px-4 py-2 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-colors duration-200"
                value={interestRate}
                onChange={(e) => setInterestRate(e.target.value)}
              />
            </div>
          </div>

          <div>
            <p className="text-gray-700 font-medium mb-2">เงินดาวน์ (%)</p>
            <div className="flex flex-wrap justify-start space-x-2">
              {[15, 20, 25, 30, 35].map((dp) => (
                <label key={dp} className="inline-flex items-center">
                  <input
                    type="radio"
                    name="downPayment"
                    value={dp}
                    checked={downPayment === dp}
                    onChange={() => setDownPayment(dp)}
                    className="form-radio text-indigo-600"
                  />
                  <span className="ml-2 text-gray-700">{dp}%</span>
                </label>
              ))}
            </div>
          </div>

          <div>
            <label className="text-gray-700 font-medium mb-2 block">
              จำนวนเดือนที่ผ่อน
            </label>
            <select
              value={loanTerm}
              onChange={(e) => setLoanTerm(parseInt(e.target.value))}
              className="w-full px-4 py-2 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-colors duration-200"
            >
              {[12, 24, 36, 48, 60, 72].map((month) => (
                <option key={month} value={month}>
                  {month} เดือน
                </option>
              ))}
            </select>
          </div>
        </div>

        {error && <p className="text-red-500 mb-4">{error}</p>}

        <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 mb-6">
          <button
            onClick={calculateMonthlyPayment}
            className="bg-indigo-600 text-white font-bold py-3 px-6 rounded-full shadow-lg hover:bg-indigo-700 transform hover:scale-105 transition-all duration-300 w-full"
          >
            คำนวณ
          </button>
          <button
            onClick={clear}
            className="bg-gray-300 text-gray-800 font-bold py-3 px-6 rounded-full shadow-lg hover:text-white hover:bg-red-600 transform hover:scale-105 transition-all duration-300 w-full"
          >
            ล้างข้อมูล
          </button>
        </div>

        <div className="text-2xl font-semibold text-gray-800">
          ผ่อนชำระต่อเดือน: {monthlyPayment.toFixed(2)} บาท
        </div>
      </div>

      <div className="mt-8 text-sm text-gray-500">Create @ By DTI-SAU 2099</div>
    </div>
  );
}
