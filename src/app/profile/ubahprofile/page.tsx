"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

export default function UbahProfile() {
	const router = useRouter();

	return (
    <div className="mx-40 my-14">
      <div className="flex items-center ">
        <button type="button" className="mt-1" onClick={() => router.back()}>
          <FontAwesomeIcon icon={faArrowLeft} className="size-5 opacity-75" />
        </button>
        <h1 className="ml-4 my-2">Ubah Profile</h1>
      </div>

      <div className="mx-auto max-w-[500px] my-6">
        <label
          htmlFor="Nama"
          className="block text-xs font-medium text-gray-700"
        >
          {" "}
          Nama{" "}
        </label>

        <input
          type="text"
          id="Nama"
          className="mt-1 w-full rounded-md border shadow-sm sm:text-sm"
        />
      </div>

      <div className="mx-auto max-w-[500px] my-6">
        <label
          htmlFor="Username"
          className="block text-xs font-medium text-gray-700"
        >
          {" "}
          Username{" "}
        </label>

        <input
          type="text"
          id="Username"
          className="mt-1 w-full rounded-md border shadow-sm sm:text-sm"
        />
      </div>

      <div className="mx-auto max-w-[500px] my-6">
        <label
          htmlFor="Email"
          className="block text-xs font-medium text-gray-700"
        >
          {" "}
          Email{" "}
        </label>

        <input
          type="email"
          id="Email"
          className="mt-1 w-full rounded-md border shadow-sm sm:text-sm"
        />
      </div>

      <div className="mx-auto max-w-[500px] my-6">
        <label
          htmlFor="Nomorhp"
          className="block text-xs font-medium text-gray-700"
        >
          {" "}
          Nomor HP{" "}
        </label>

        <input
          type="number"
          id="Nomorhp"
          className="mt-1 w-full rounded-md border shadow-sm sm:text-sm"
        />
      </div>
    </div>
  );
}
