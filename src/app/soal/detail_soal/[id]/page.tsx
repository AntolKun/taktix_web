// SoalDetail.tsx
"use client"
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation"; // To navigate dynamically
import { jwtDecode } from "jwt-decode";
import axios from "axios";

export default function SoalDetail({ params }: { params: { id: string } }) {
  const [name, setName] = useState("");
  const [photoProfile, setPhotoProfile] = useState("");
  const [exam, setExam] = useState<any>(null);
  const { id } = params; // Extracting soalId from the URL
  const router = useRouter(); // Hook for navigating

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (token) {
      try {
        const decoded: any = jwtDecode(token);
        const user = decoded.user;
        setName(user.name);
        setPhotoProfile(user.photo_profile);

        fetchExamDetail(token);
      } catch (error) {
        console.error("Invalid token:", error);
        setName("");
        setPhotoProfile("");
      }
    }
  }, [id]);

  const fetchExamDetail = async (token: string) => {
    try {
      const response = await fetch(
        `http://localhost:3500/api/soal/${id}`, // Correct URL with dynamic ID
        {
          method: "GET",
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        }
      );

      if (!response.ok) {
        throw new Error("Failed to fetch exam details");
      }

      const data = await response.json();
      setExam(data);
    } catch (error) {
      console.error("Error fetching exam:", error);
    }
  };

  // Navigate to the Kerjakan Soal page with the correct soalId
  const handleStartExam = () => {
    router.push(`/soal/kerjakan_soal/${id}`); // Redirect to Kerjakan Soal page
  };

  if (!exam) {
    return <div>Loading...</div>;
  }

  return (
    <div className="mx-40 my-14">
      {/* Details Section */}
      <div className="flex flex-col items-center my-8">
        <div className="w-full max-w-[1000px] bg-blue-700 rounded-[20px] p-8">
          {/* Title Section */}
          <h2 className="text-white text-[24px] font-semibold mb-6">
            {exam.title}
          </h2>

          {/* Details Section */}
          <div className="grid grid-cols-3 gap-4 text-white">
            {/* Display exam details like category, total questions, etc. */}
            <div className="flex flex-col">
              <span className="text-[18px] font-normal">Kategori</span>
              <span className="text-[18px] font-semibold">
                {exam.category?.name || "N/A"}
              </span>
            </div>
            {/* Other exam details */}
          </div>

          {/* Button Section */}
          <div className="flex justify-center mt-10 space-x-6">
            <button
              className="w-[240px] h-[52px] bg-white text-blue-700 text-xl font-semibold rounded-[20px]"
              onClick={handleStartExam}
            >
              Kerjakan Soal
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
