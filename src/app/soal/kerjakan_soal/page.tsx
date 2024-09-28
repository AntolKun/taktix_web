"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { jwtDecode } from "jwt-decode"; // Import the correct jwt-decode package
import InfoSection from "../InfoSection";
import ActionButton from "../ActionButton";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";

export default function KerjakanSoal() {
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
            <h1 className="ml-4 my-2">Mengerjakan Soal</h1>
          </div>
          <div className="flex items-center"></div>
        </div>

        {/* Main item start */}
        <div className="flex flex-col items-center my-8">
          <div className="w-full max-w-[1000px] rounded-[20px] p-8">
            {/* Title Section */}
            <div className="w-[872px] h-[75px] relative">
              <div className="w-[872px] h-[75px] left-0 top-0 absolute bg-indigo-300 rounded-[20px]" />
              <div className="w-[558px] h-[75px] left-0 top-0 absolute bg-blue-700 rounded-[20px]" />
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

        <div className="flex flex-col items-center my-8">
          <div className="w-full max-w-[1000px] rounded-[20px] p-8">
            {/* Soal Section */}
            <div className="w-full bg-white rounded-[20px] border border-neutral-500 p-6">
              <div className="text-black text-xl font-semibold mb-4">Soal</div>
              <div className="text-black text-xl font-normal">
                Hadiah liburan ke luar negeri akan diberikan oleh perusahaan X
                jika pekerjanya mendapat penilaian kinerja baik dua tahun
                berturut-turut dan dinominasikan oleh rekan kerja sekaligus
                atasannya. Pekerja Q disukai oleh rekan kerjanya dan mendapatkan
                penilaian kinerja sangat baik tahun kemarin. Berdasarkan
                informasi tersebut kesimpulannya yaitu pekerja Q berhak
                memperoleh hadiah liburan ke luar negeri dari perusahaan X.
                <br />
                <br />
                Pernyataan mana di bawah ini yang menggambarkan kualitas
                kesimpulan di atas?
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center my-8">
          <div className="w-full max-w-[1000px] rounded-[20px] p-8">
            {/* Title Section */}
            <div className="relative">
              <div className="w-[871px] h-[168px] relative">
                <div className="flex justify-between mt-4">
                  <div className="w-[419px] h-[72px] bg-white rounded-[20px] border border-neutral-500 flex items-center">
                    <div className="pl-2 flex items-center">
                      <div className="w-8 h-8 bg-zinc-100 rounded-full flex items-center justify-center">
                        <span className="text-black text-base font-semibold">
                          A
                        </span>
                      </div>
                      <div className="text-black text-xl font-normal ml-2">
                        Kesimpulan tersebut pasti benar.
                      </div>
                    </div>
                  </div>

                  <div className="w-[419px] h-[72px] bg-white rounded-[20px] border border-neutral-500 flex items-center">
                    <div className="pl-2 flex items-center">
                      <div className="w-8 h-8 bg-zinc-100 rounded-full flex items-center justify-center">
                        <span className="text-black text-base font-semibold">
                          B
                        </span>
                      </div>
                      <div className="text-black text-xl font-normal ml-2">
                        Kesimpulan tersebut pasti benar.
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex justify-between mt-4">
                  <div className="w-[419px] h-[72px] bg-white rounded-[20px] border border-neutral-500 flex items-center">
                    <div className="pl-2 flex items-center">
                      <div className="w-8 h-8 bg-zinc-100 rounded-full flex items-center justify-center">
                        <span className="text-black text-base font-semibold">
                          C
                        </span>
                      </div>
                      <div className="text-black text-xl font-normal ml-2">
                        Kesimpulan tersebut pasti benar.
                      </div>
                    </div>
                  </div>

                  <div className="w-[419px] h-[72px] bg-white rounded-[20px] border border-neutral-500 flex items-center">
                    <div className="pl-2 flex items-center">
                      <div className="w-8 h-8 bg-zinc-100 rounded-full flex items-center justify-center">
                        <span className="text-black text-base font-semibold">
                          D
                        </span>
                      </div>
                      <div className="text-black text-xl font-normal ml-2">
                        Kesimpulan tersebut pasti benar.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Sticky numbers at the bottom */}
      <div className="fixed bottom-0 left-0 w-full bg-white border-t border-neutral-500 py-4">
        <div className="flex justify-center items-center">
          {/* Left Arrow */}
          <div className="w-11 h-11 flex items-center justify-center cursor-pointer mr-8">
            <FontAwesomeIcon icon={faArrowLeft} className="size-5 opacity-75" />
          </div>

          {/* Numbers */}
          <div className="flex justify-center space-x-4">
            <div className="w-11 h-11 bg-gray-200 rounded-full flex items-center justify-center">
              <span className="text-black text-xl font-semibold">1</span>
            </div>
            <div className="w-11 h-11 bg-gray-200 rounded-full flex items-center justify-center">
              <span className="text-black text-xl font-semibold">2</span>
            </div>
            <div className="w-11 h-11 bg-gray-200 rounded-full flex items-center justify-center">
              <span className="text-black text-xl font-semibold">3</span>
            </div>
            <div className="w-11 h-11 bg-yellow-400 rounded-full flex items-center justify-center">
              <span className="text-white text-xl font-semibold">4</span>
            </div>
            <div className="w-11 h-11 bg-blue-700 rounded-full flex items-center justify-center">
              <span className="text-white text-xl font-semibold">5</span>
            </div>
            <div className="w-11 h-11 bg-gray-200 rounded-full flex items-center justify-center">
              <span className="text-black text-xl font-semibold">6</span>
            </div>
            {/* Tambah nomor lainnya sesuai kebutuhan */}
          </div>

          {/* Right Arrow */}
          <div className="w-11 h-11 flex items-center justify-center cursor-pointer ml-8">
            <FontAwesomeIcon icon={faArrowRight} className="size-5 opacity-75" />
          </div>
        </div>
      </div>
    </div>
  );
}
