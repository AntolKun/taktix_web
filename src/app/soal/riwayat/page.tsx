"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { jwtDecode } from "jwt-decode"; // Import the correct jwt-decode package
import InfoSection from "../InfoSection";
import ActionButton from "../ActionButton";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";

export default function CekJawaban() {
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
    <div>
      {/* Main content with margin */}
      <div className="mx-40 my-14">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <div className="h-6 w-2 rounded-lg bg-yellow-300"></div>
            <h1 className="ml-4 my-2">Cek Jawaban</h1>
          </div>
          <div className="flex items-center"></div>
        </div>

        {/* Main item start */}
        <div className="flex flex-col items-center my-8">
          <div className="w-full max-w-[1000px] rounded-[20px] p-8">
            {/* Title Section */}
            <div className="w-[872px] h-[75px] relative">
              <div className="w-[872px] h-[75px] left-0 top-0 absolute bg-blue-700 rounded-[20px]" />
              <div className="left-[28px] top-[11px] absolute text-white text-xl font-semibold">
                Soal Latihan November{" "}
              </div>
              <div className="left-[568px] top-[24px] absolute text-white text-xl font-semibold">
                30 Soal
              </div>
              <div className="left-[28px] top-[42px] absolute text-white text-base font-normal">
                UTBK - Bahasa Indonesia
              </div>
              <div className="left-[766px] top-[23px] absolute text-white text-xl font-semibold">
                00:00:00
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-center my-8">
          <div className="w-[500px] h-48 relative">
            <div className="w-full h-full left-0 top-0 absolute bg-white rounded-2xl border border-zinc-300" />

            {/* Waktu Section */}
            <div className="left-[28px] top-[13px] absolute text-black text-2xl font-normal">
              Waktu: 21 Desember 2023, 11:43:57
            </div>

            {/* Nilai Section */}
            <div className="left-[28px] top-[42px] absolute">
              <span className="text-black text-2xl font-normal">
                Nilai Anda:{" "}
              </span>
              <span className="text-black text-2xl font-semibold">0</span>
            </div>

            {/* Icons and Numbers Section */}
            <div className="flex absolute top-[101px] left-[50px] space-x-16">
              {/* First Icon and Number */}
              <div className="flex items-center space-x-2">
                <img src="/cancel.svg" alt="Cancel" className="w-8 h-8" />
                <span className="text-black text-2xl font-semibold">30</span>
              </div>

              {/* Second Icon and Number */}
              <div className="flex items-center space-x-2">
                <img src="/help.svg" alt="Help" className="w-8 h-8" />
                <span className="text-black text-2xl font-semibold">30</span>
              </div>

              {/* Third Icon and Number */}
              <div className="flex items-center space-x-2">
                <img src="/ok.svg" alt="Ok" className="w-8 h-8" />
                <span className="text-black text-2xl font-semibold">30</span>
              </div>
            </div>

            <div className="w-[500px] h-px left-0 top-[84px] absolute border border-zinc-300"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
