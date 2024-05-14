"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

export default function Universitas() {
  const router = useRouter();

  return (
    <div className="mx-40 my-14">
      <div className="flex items-center ">
        <button type="button" className="mt-1" onClick={() => router.back()}>
          <FontAwesomeIcon icon={faArrowLeft} className="size-5 opacity-75" />
        </button>
        <h1 className="ml-4 my-2">Universitas</h1>
      </div>

      <form className="max-w-md mx-auto">
        <label
          htmlFor="default-search"
          className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
        >
          Search
        </label>
        <div className="relative">
          <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
            <svg
              className="w-4 h-4 text-gray-500 dark:text-gray-400"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 20"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
              />
            </svg>
          </div>
          <input
            type="search"
            id="default-search"
            className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Cari Universitas..."
            required
          />
          <button
            type="submit"
            className="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Search
          </button>
        </div>
      </form>

      <div className="overflow-x-auto rounded-lg border border-solid max-w-[682px] mx-auto mt-4">
        <table className="min-w-full divide-y-2 divide-black bg-white text-sm">
          <tbody className="divide-y divide-black">
            <tr>
              <td className="whitespace-nowrap px-4 py-4 font-medium">
                <Link href={"/universitas/detail_universitas"}>
                  INSTITUT TEKNOLOGI SUMATERA
                </Link>
              </td>
            </tr>
            <tr>
              <td className="whitespace-nowrap px-4 py-4 font-medium">
                <Link href={"/universitas/detail_universitas"}>INSTITUT TEKNOLOGI SUMATERA</Link>
              </td>
            </tr>
            <tr>
              <td className="whitespace-nowrap px-4 py-4 font-medium">
                <Link href={"/universitas/detail_universitas"}>INSTITUT TEKNOLOGI SUMATERA</Link>
              </td>
            </tr>
            <tr>
              <td className="whitespace-nowrap px-4 py-4 font-medium">
                <Link href={"/universitas/detail_universitas"}>INSTITUT TEKNOLOGI SUMATERA</Link>
              </td>
            </tr>
            <tr>
              <td className="whitespace-nowrap px-4 py-4 font-medium">
                <Link href={"/universitas/detail_universitas"}>
                  INSTITUT TEKNOLOGI SUMATERA
                </Link>
              </td>
            </tr>
            <tr>
              <td className="whitespace-nowrap px-4 py-4 font-medium">
                <Link href={"/universitas/detail_universitas"}>INSTITUT TEKNOLOGI SUMATERA</Link>
              </td>
            </tr>
            <tr>
              <td className="whitespace-nowrap px-4 py-4 font-medium">
                <Link href={"/universitas/detail_universitas"}>INSTITUT TEKNOLOGI SUMATERA</Link>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
