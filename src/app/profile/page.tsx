"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

export default function Profile() {
	const router = useRouter();

	return (
    <div className="mx-40 my-14">
      <div className="flex items-center ">
        <button type="button" className="mt-1" onClick={() => router.back()}>
          <FontAwesomeIcon icon={faArrowLeft} className="size-5 opacity-75" />
        </button>
        <h1 className="ml-4 my-2">Profile</h1>
      </div>

      <div className="mx-auto px-20 py-7 bg-blue-700 rounded-3xl border border-solid border-neutral-500 max-w-[683px] max-md:px-5">
        <div className="flex gap-5 max-md:flex-col max-md:gap-0">
          <div className="flex flex-col w-[32%] max-md:ml-0 max-md:w-full">
            <div className="shrink-0 mx-auto rounded-full bg-zinc-300 h-[113px] w-[126px] max-md:mt-10" />
          </div>
          <div className="flex flex-col ml-5 w-[68%] max-md:ml-0 max-md:w-full">
            <div className="flex flex-col self-stretch my-auto text-white max-md:mt-10">
              <div className="text-2xl font-bold">Maura Diviarani</div>
              <div className="mt-3.5 text-xl font-medium">
                maura.120140061@gmail.com
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mx-auto mt-8 flex flex-col px-5 text-lg font-semibold text-black max-w-[619px]">
        <div className="w-full max-md:max-w-full">Menu</div>
        <div className="justify-center py-3.5 mt-1 w-full text-base bg-white border-b border-solid border-stone-300 max-md:max-w-full">
          <Link href="">
            <span>Soal Ujian Saya</span>
            <FontAwesomeIcon
              icon={faChevronRight}
              className="size-5 opacity-75 ml-96"
            />
          </Link>
        </div>
      </div>

      <div className="mx-auto mt-8 flex flex-col px-5 text-lg font-semibold text-black max-w-[619px]">
        <div className="w-full max-md:max-w-full">Profile</div>
        <div className="justify-center py-3.5 mt-1 w-full text-base bg-white border-b border-solid border-stone-300 max-md:max-w-full">
          <Link href={"/profile/ubahprofile"} className="row">
            <span>Ubah Profile</span>
            <FontAwesomeIcon
              icon={faChevronRight}
              className="size-5 opacity-75 ml-96"
            />
          </Link>
        </div>
        <div className="justify-center py-3.5 mt-1 w-full text-base bg-white border-b border-solid border-stone-300 max-md:max-w-full">
          <Link href={"/profile/ubahpassword"} className="row">
            <span>Ubah Password</span>
            <FontAwesomeIcon
              icon={faChevronRight}
              className="size-5 opacity-75 ml-96"
            />
          </Link>
        </div>
        <div className="justify-center py-3.5 mt-1 w-full text-base bg-white border-b border-solid border-stone-300 max-md:max-w-full">
          <Link href="" className="row">
            <span>Hapus Akun</span>
            <FontAwesomeIcon
              icon={faChevronRight}
              className="size-5 opacity-75 ml-96"
            />
          </Link>
        </div>
      </div>
    </div>
  );
}
