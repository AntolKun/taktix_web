"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { jwtDecode } from "jwt-decode"; // Import the correct jwt-decode package
import InfoSection from "./InfoSection";
import ActionButton from "./ActionButton";

export default function Soal() {
  const [name, setName] = useState("");
  const [photoProfile, setPhotoProfile] = useState("");

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      try {
        const decoded: any = jwtDecode(token);
        const user = decoded.user;
        setName(user.name);
        setPhotoProfile(user.photo_profile);
      } catch (error) {
        console.error("Invalid token:", error);
        setName(""); // Clear name and photoProfile in case of token error
        setPhotoProfile("");
      }
    }
  }, []);

  return (
    <div className="mx-40 my-14">
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <div className="h-6 w-2 rounded-lg bg-yellow-300"></div>
          <h1 className="ml-4 my-2">Detail Ujian</h1>
        </div>
        <div className="flex items-center"></div>
      </div>

      {/* Main item start */}
      <div className="flex flex-col items-center my-8">
        <div className="w-full max-w-[1000px] bg-blue-700 rounded-[20px] p-8">
          {/* Title Section */}
          <h2 className="text-white text-[24px] font-semibold mb-6">
            Soal Latihan November
          </h2>

          {/* Details Section */}
          <div className="grid grid-cols-3 gap-4 text-white">
            <div className="flex flex-col">
              <span className="text-[18px] font-normal">Soal</span>
              <span className="text-[18px] font-semibold">
                Kemampuan Penalaran Umum
              </span>
            </div>
            <div className="flex flex-col">
              <span className="text-[18px] font-normal">Kategori</span>
              <span className="text-[18px] font-semibold">UTBK</span>
            </div>
            <div className="flex flex-col">
              <span className="text-[18px] font-normal">Durasi</span>
              <span className="text-[18px] font-semibold">10 Menit</span>
            </div>
            <div className="flex flex-col">
              <span className="text-[18px] font-normal">Harga</span>
              <span className="text-[18px] font-semibold">Gratis</span>
            </div>
            <div className="flex flex-col">
              <span className="text-[18px] font-normal">Dikerjakan</span>
              <span className="text-[18px] font-semibold">Belum</span>
            </div>
            <div className="flex flex-col">
              <span className="text-[18px] font-normal">Jumlah Soal</span>
              <span className="text-[18px] font-semibold">5 Soal</span>
            </div>
          </div>

          {/* Button Section */}
          <div className="flex justify-center mt-10">
            <button className="w-[300px] h-[52px] bg-white text-blue-700 text-xl font-semibold rounded-[20px]">
              Dapatkan Soal
            </button>
          </div>
        </div>
      </div>

      {/* Main item finish */}
    </div>
  );
}
