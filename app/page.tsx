import React from "react";
import Image from "next/image";

export default function Page() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4">
      <div className="bg-white p-8 rounded-3xl shadow-2xl w-full max-w-6xl text-center">
        <div className="mb-10">
          <div className="flex justify-center mb-4">
            <Image
              src="/images/calcu.png"
              alt="Logo"
              width={180}
              height={160}
              className="rounded-2xl  object-contain"
            />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-2 tracking-tight">
            Calculator Variety
          </h1>
          <p className="text-xl md:text-2xl font-light text-gray-600">
            เครื่องคำนวณ By DTI-SAU
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <a
            href="/moneyshare"
            className="group block transform hover:scale-105 transition-transform duration-300"
          >
            <div className="bg-indigo-600 text-white rounded-2xl p-6 shadow-lg h-full flex flex-col items-center justify-center relative overflow-hidden">
              <Image
                src="/images/money.png"
                alt="Money Share"
                width={80}
                height={80}
                className="mb-4 relative z-10 rounded-lg"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-700 to-purple-600 opacity-80 group-hover:opacity-100 transition-opacity duration-300"></div>
              <i className="fas fa-hand-holding-usd text-5xl mb-4 relative z-10"></i>
              <h2 className="text-2xl font-semibold mb-1 relative z-10">
                Money Share
              </h2>
              <p className="text-sm opacity-90 relative z-10">
                คำนวณแบ่งจ่ายเงิน
              </p>
            </div>
          </a>

          <a
            href="/bmi"
            className="group block transform hover:scale-105 transition-transform duration-300"
          >
            <div className="bg-teal-500 text-white rounded-2xl p-6 shadow-lg h-full flex flex-col items-center justify-center relative overflow-hidden">
              <Image
                src="/images/bmi.png"
                alt="Money Share"
                width={80}
                height={80}
                className="mb-4 relative z-10 rounded-lg"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-teal-600 to-cyan-500 opacity-80 group-hover:opacity-100 transition-opacity duration-300"></div>
              <i className="fas fa-weight-hanging text-5xl mb-4 relative z-10"></i>
              <h2 className="text-2xl font-semibold mb-1 relative z-10">BMI</h2>
              <p className="text-sm opacity-90 relative z-10">
                คำนวณดัชนีมวลกาย
              </p>
            </div>
          </a>

          <a
            href="/bmr"
            className="group block transform hover:scale-105 transition-transform duration-300"
          >
            <div className="bg-red-500 text-white rounded-2xl p-6 shadow-lg h-full flex flex-col items-center justify-center relative overflow-hidden">
              <Image
                src="/images/bmr.png"
                alt="Money Share"
                width={80}
                height={80}
                className="mb-4 relative z-10 rounded-lg"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-red-600 to-orange-500 opacity-80 group-hover:opacity-100 transition-opacity duration-300"></div>
              <i className="fas fa-heartbeat text-5xl mb-4 relative z-10"></i>
              <h2 className="text-2xl font-semibold mb-1 relative z-10">BMR</h2>
              <p className="text-sm opacity-90 relative z-10">
                คำนวณการเผาผลาญพลังงาน
              </p>
            </div>
          </a>

          <a
            href="/carinstallment"
            className="group block transform hover:scale-105 transition-transform duration-300"
          >
            <div className="bg-gray-700 text-white rounded-2xl p-6 shadow-lg h-full flex flex-col items-center justify-center relative overflow-hidden">
              <Image
                src="/images/car.png"
                alt="Money Share"
                width={80}
                height={80}
                className="mb-4 relative z-10 rounded-lg"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-gray-800 to-gray-600 opacity-80 group-hover:opacity-100 transition-opacity duration-300"></div>
              <i className="fas fa-car text-5xl mb-4 relative z-10"></i>
              <h2 className="text-2xl font-semibold mb-1 relative z-10">
                Car Installment
              </h2>
              <p className="text-sm opacity-90 relative z-10">
                คำนวณค่างวดรถยนต์
              </p>
            </div>
          </a>
        </div>
      </div>

      <footer className="mt-4 text-center text-sm font-bold text-gray-600">
        Create @ By DTI-SAU 2099
      </footer>
    </div>
  );
}
