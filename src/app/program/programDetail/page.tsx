"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

export default function Program() {
  const router = useRouter();

  return (
    <div className="mx-40 my-14">
      <div className="flex items-center ">
        <button type="button" className="mt-1" onClick={() => router.back()}>
          <FontAwesomeIcon icon={faArrowLeft} className="size-5 opacity-75" />
        </button>
        <h1 className="ml-4 my-2">Program Detail</h1>
      </div>

      <div className="flex gap-5 my-5 items-end pt-20 pb-6 text-2xl font-semibold text-white bg-blue-700 rounded-3xl max-md:flex-wrap">
        <div className="shrink-0 mt-20 bg-yellow-300 h-[46px] w-[5px] max-md:mt-10" />
        <div className="flex-auto mt-24 max-md:mt-10 max-md:max-w-full">
          Ayo Kuliah
        </div>
      </div>

      {/* <div className="px-5 grid grid-cols-3 flex-wrap"></div> */}

      <div className="flex flex-col px-5 text-xl font-medium text-black max-w-[878px]">
        <div className="w-full max-md:max-w-full">Deskripsi</div>
        <div className="mt-2 w-full text-base max-md:max-w-full">
          Ayo Kuliah adalah Program Pendampingan masuk PTN, tujuan dari program
          ini adalah untuk mengedukasi siswa/i SMA sederajat untuk mempersiapkan
          diri menuju kampus impiannya.
          <br />
          <br />
          Durasi Pendampingan: Selama 1 Tahun
          <br />
        </div>
        <div className="mt-10 w-full max-md:max-w-full">Informasi</div>
        <div className="mt-3.5 w-full text-base max-md:max-w-full">
          Harga Rp. 150.000
        </div>
        <div className="mt-10 w-full max-md:mt-10 max-md:max-w-full">Menu</div>
      </div>

      <div className="flex gap-5 justify-between px-5 text-base text-black max-md:flex-wrap">
        <div className="flex flex-col p-3.5 bg-white rounded-2xl border border-solid border-stone-300">
          <img
            loading="lazy"
            srcSet="..."
            className="self-center w-12 aspect-[1.18]"
          />
          <div className="mt-5">Passing Grade</div>
        </div>
        <div className="flex flex-col px-9 py-3 bg-white rounded-2xl border border-solid border-stone-300 max-md:px-5">
          <img
            loading="lazy"
            srcSet="..."
            className="self-center w-12 aspect-square"
          />
          <div className="mt-4">Try Out</div>
        </div>
        <div className="flex flex-col px-1.5 py-3 bg-white rounded-2xl border border-solid border-stone-300">
          <img
            loading="lazy"
            srcSet="..."
            className="self-center aspect-[1.12] w-[53px]"
          />
          <div className="mt-4">Group Konsultasi</div>
        </div>
        <div className="flex flex-col px-9 pt-px pb-4 whitespace-nowrap bg-white rounded-2xl border border-solid border-stone-300 max-md:px-5">
          <img
            loading="lazy"
            srcSet="..."
            className="self-center w-12 aspect-[0.76]"
          />
          <div className="mt-2">Materi</div>
        </div>
        <div className="flex flex-col px-5 py-3 bg-white rounded-2xl border border-solid border-stone-300">
          <img
            loading="lazy"
            srcSet="..."
            className="self-center aspect-[1.12] w-[54px]"
          />
          <div className="mt-3.5">Party Belajar</div>
        </div>
        <div className="flex flex-col px-5 py-3 bg-white rounded-2xl border border-solid border-stone-300">
          <img
            loading="lazy"
            srcSet="..."
            className="self-center aspect-[1.12] w-[54px]"
          />
          <div className="mt-3.5 text-wrap">Jadwal Pendampingan</div>
        </div>
      </div>
    </div>
  );
}
