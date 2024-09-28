"use client";
import React from "react";
import { useRouter } from "next/navigation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

export default function Agenda() {
  const router = useRouter();

  return (
    <div>
      <div className="mx-40 my-14">
        <div className="flex items-center ">
          <button type="button" className="mt-1" onClick={() => router.back()}>
            <FontAwesomeIcon icon={faArrowLeft} className="size-5 opacity-75" />
          </button>
          <h1 className="ml-4 my-2">Agenda</h1>
        </div>

        <div className="text-left mt-4">
          <h2 className="text-xl font-semibold">Tryout UTBK 1</h2>
          <p className="text-lg">16-17 September 2023</p>
          <p className="font-semibold">
            Latihan soal UTBK dengan full sistem dengan materi meliputi:
          </p>
          <ul className="list-disc ml-5 mt-3">
            <li>
              <span className="font-semibold">Penalaran Umum</span> (30 soal
              waktu 30 menit)
            </li>
            <li>
              <span className="font-semibold">Penalaran Umum</span> (30 soal
              waktu 30 menit)
            </li>
            <li>
              <span className="font-semibold">Penalaran Umum</span> (30 soal
              waktu 30 menit)
            </li>
            <li>
              <span className="font-semibold">Penalaran Umum</span> (30 soal
              waktu 30 menit)
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
