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

      <div className="px-5 grid grid-cols-3 flex-wrap"></div>
    </div>
  );
}
