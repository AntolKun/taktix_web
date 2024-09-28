"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { jwtDecode } from "jwt-decode"; // Import the correct jwt-decode package
import InfoSection from "../InfoSection";
import ActionButton from "../ActionButton";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faKey, faStar } from "@fortawesome/free-solid-svg-icons";

export default function Rating() {
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
            <div className="h-6 w-2 rounded-lg bg-grey-300"></div>
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

        <div className="flex justify-center items-center h-screen">
          <div className="w-[600px] h-[600px] relative">
            {/* Card background */}
            <div className="w-full h-full left-0 top-0 absolute bg-white rounded-2xl border border-zinc-300" />

            {/* Middle white box */}
            <div className="w-[500px] h-40 left-[50px] top-[150px] absolute bg-white rounded-2xl border border-zinc-300" />

            {/* Blue button at the bottom */}
            <div className="w-[500px] h-14 left-[50px] top-[350px] absolute bg-blue-700 rounded-3xl flex items-center justify-center">
              <span className="text-white text-2xl font-semibold">Kirim</span>
            </div>

            {/* Star SVG Icons */}
            <div className="flex justify-between absolute left-[50px] top-[50px] w-[500px]">
              <svg
                className="w-20 h-20"
                xmlns="http://www.w3.org/2000/svg"
                fill="grey"
                viewBox="0 0 24 24"
                stroke="none"
              >
                <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
              </svg>
              <svg
                className="w-20 h-20"
                xmlns="http://www.w3.org/2000/svg"
                fill="grey"
                viewBox="0 0 24 24"
                stroke="none"
              >
                <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
              </svg>
              <svg
                className="w-20 h-20"
                xmlns="http://www.w3.org/2000/svg"
                fill="grey"
                viewBox="0 0 24 24"
                stroke="none"
              >
                <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
              </svg>
              <svg
                className="w-20 h-20"
                xmlns="http://www.w3.org/2000/svg"
                fill="grey"
                viewBox="0 0 24 24"
                stroke="none"
              >
                <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
              </svg>
              <svg
                className="w-20 h-20"
                xmlns="http://www.w3.org/2000/svg"
                fill="grey"
                viewBox="0 0 24 24"
                stroke="none"
              >
                <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
              </svg>
            </div>

            {/* Placeholder for feedback */}
            <textarea
              className="w-[500px] h-40 left-[50px] top-[150px] absolute bg-white rounded-2xl border border-zinc-300 resize-none"
              placeholder="Beri Saran..."
            ></textarea>
          </div>
        </div>
      </div>
    </div>
  );
}
