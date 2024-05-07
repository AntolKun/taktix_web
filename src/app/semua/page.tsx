"use client";
import React, { useState } from "react";
import Link from "next/link";

export default function SemuaSoal() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="mx-14 my-14">
      <form className="max-w-lg mx-auto">
        <div className="flex">
          <label
            htmlFor="search-dropdown"
            className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
          >
            Your Email
          </label>
          <button
            id="dropdown-button"
            className="flex-shrink-0 z-10 inline-flex items-center py-2.5 px-4 text-sm font-medium text-center text-gray-900 bg-gray-100 border border-gray-300 rounded-lg focus:ring-4 focus:outline-none focus:ring-gray-100"
            onClick={() => {
              const dropdown = document.getElementById("dropdown");
              dropdown!.classList.toggle("hidden");
            }}
            type="button"
          >
            All categories{" "}
            <svg
              className="w-2.5 h-2.5 ms-2.5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 10 6"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m1 1 4 4 4-4"
              />
            </svg>
          </button>
          <div
            id="dropdown"
            className="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700"
          >
            <ul
              className="py-2 text-sm text-gray-700 dark:text-gray-200"
              aria-labelledby="dropdown-button"
            >
              <li>
                <button
                  type="button"
                  className="inline-flex w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                >
                  Mockups
                </button>
              </li>
              <li>
                <button
                  type="button"
                  className="inline-flex w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                >
                  Templates
                </button>
              </li>
              <li>
                <button
                  type="button"
                  className="inline-flex w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                >
                  Design
                </button>
              </li>
              <li>
                <button
                  type="button"
                  className="inline-flex w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                >
                  Logos
                </button>
              </li>
            </ul>
          </div>

          <div className="relative w-full">
            <input
              type="search"
              id="search-dropdown"
              className="block p-2.5 w-full z-20 text-sm text-gray-900 bg-gray-50 rounded-lg border-2 border-gray-300 focus:ring-blue-500 focus:border-blue-500"
              placeholder="Search Mockups, Logos, Design Templates..."
              required
            />
            <button
              type="submit"
              className="absolute top-0 right-0 p-2.5 text-sm font-medium h-full text-white bg-blue-700 rounded-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300"
            >
              <svg
                className="w-4 h-4"
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
              <span className="sr-only">Search</span>
            </button>
          </div>
        </div>
      </form>

      <div className="flex items-center">
        <div className="h-6 w-2 rounded-lg bg-yellow-300"></div>
        <h1 className="ml-4 my-2">Soal Latihan Ujian</h1>
      </div>

      {/* Main item start */}
      <div className="grid grid-cols-4 flex-wrap gap-4 items-start text-xs font-medium text-black max-md:flex-wrap mt-4">
        <div className="flex flex-col flex-1 px-5 py-3 bg-white rounded-3xl border border-solid border-zinc-500">
          <div className="flex gap-2.5 text-base whitespace-nowrap">
            <div className="flex items-center">
              <div className="h-6 w-2 rounded-lg bg-yellow-300"></div>
              <h1 className="ml-2 my-2">Soal Literasi Bahasa Indonesia</h1>
            </div>
          </div>
          <div className="self-start mt-1.5 ml-3 text-neutral-500 max-md:ml-2.5">
            UTBK - Kemampuan Penalaran Umum
          </div>
          <div className="flex gap-5 justify-between mt-1">
            <div className="gap-0 my-auto text-neutral-400">
              25 Soal 25 Menit
            </div>
            <Link
              href={""}
              className="justify-center self-end px-3.5 py-2 mt-2.5 bg-green-400 text-white rounded"
            >
              Gratis
            </Link>
          </div>
        </div>

        <div className="flex flex-col flex-1 px-5 py-3 bg-white rounded-3xl border border-solid border-zinc-500">
          <div className="flex gap-2.5 text-base whitespace-nowrap">
            <div className="flex items-center">
              <div className="h-6 w-2 rounded-lg bg-yellow-300"></div>
              <h1 className="ml-2 my-2">Soal Literasi Bahasa Indonesia</h1>
            </div>
          </div>
          <div className="self-start mt-1.5 ml-3 text-neutral-500 max-md:ml-2.5">
            UTBK - Kemampuan Penalaran Umum
          </div>
          <div className="flex gap-5 justify-between mt-1">
            <div className="gap-0 my-auto text-neutral-400">
              25 Soal 25 Menit
            </div>
            <Link
              href={""}
              className="justify-center self-end px-3.5 py-2 mt-2.5 bg-green-400 text-white rounded"
            >
              Gratis
            </Link>
          </div>
        </div>

        <div className="flex flex-col flex-1 px-5 py-3 bg-white rounded-3xl border border-solid border-zinc-500">
          <div className="flex gap-2.5 text-base whitespace-nowrap">
            <div className="flex items-center">
              <div className="h-6 w-2 rounded-lg bg-yellow-300"></div>
              <h1 className="ml-2 my-2">Soal Literasi Bahasa Indonesia</h1>
            </div>
          </div>
          <div className="self-start mt-1.5 ml-3 text-neutral-500 max-md:ml-2.5">
            UTBK - Kemampuan Penalaran Umum
          </div>
          <div className="flex gap-5 justify-between mt-1">
            <div className="gap-0 my-auto text-neutral-400">
              25 Soal 25 Menit
            </div>
            <Link
              href={""}
              className="justify-center self-end px-3.5 py-2 mt-2.5 bg-green-400 text-white rounded"
            >
              Gratis
            </Link>
          </div>
        </div>

        <div className="flex flex-col flex-1 px-5 py-3 bg-white rounded-3xl border border-solid border-zinc-500">
          <div className="flex gap-2.5 text-base whitespace-nowrap">
            <div className="flex items-center">
              <div className="h-6 w-2 rounded-lg bg-yellow-300"></div>
              <h1 className="ml-2 my-2">Soal Literasi Bahasa Indonesia</h1>
            </div>
          </div>
          <div className="self-start mt-1.5 ml-3 text-neutral-500 max-md:ml-2.5">
            UTBK - Kemampuan Penalaran Umum
          </div>
          <div className="flex gap-5 justify-between mt-1">
            <div className="gap-0 my-auto text-neutral-400">
              25 Soal 25 Menit
            </div>
            <Link
              href={""}
              className="justify-center self-end px-3.5 py-2 mt-2.5 bg-green-400 text-white rounded"
            >
              Gratis
            </Link>
          </div>
        </div>

        <div className="flex flex-col flex-1 px-5 py-3 bg-white rounded-3xl border border-solid border-zinc-500">
          <div className="flex gap-2.5 text-base whitespace-nowrap">
            <div className="flex items-center">
              <div className="h-6 w-2 rounded-lg bg-yellow-300"></div>
              <h1 className="ml-2 my-2">Soal Literasi Bahasa Indonesia</h1>
            </div>
          </div>
          <div className="self-start mt-1.5 ml-3 text-neutral-500 max-md:ml-2.5">
            UTBK - Kemampuan Penalaran Umum
          </div>
          <div className="flex gap-5 justify-between mt-1">
            <div className="gap-0 my-auto text-neutral-400">
              25 Soal 25 Menit
            </div>
            <Link
              href={""}
              className="justify-center self-end px-3.5 py-2 mt-2.5 bg-green-400 text-white rounded"
            >
              Gratis
            </Link>
          </div>
        </div>

        <div className="flex flex-col flex-1 px-5 py-3 bg-white rounded-3xl border border-solid border-zinc-500">
          <div className="flex gap-2.5 text-base whitespace-nowrap">
            <div className="flex items-center">
              <div className="h-6 w-2 rounded-lg bg-yellow-300"></div>
              <h1 className="ml-2 my-2">Soal Literasi Bahasa Indonesia</h1>
            </div>
          </div>
          <div className="self-start mt-1.5 ml-3 text-neutral-500 max-md:ml-2.5">
            UTBK - Kemampuan Penalaran Umum
          </div>
          <div className="flex gap-5 justify-between mt-1">
            <div className="gap-0 my-auto text-neutral-400">
              25 Soal 25 Menit
            </div>
            <Link
              href={""}
              className="justify-center self-end px-3.5 py-2 mt-2.5 bg-green-400 text-white rounded"
            >
              Gratis
            </Link>
          </div>
        </div>

        <div className="flex flex-col flex-1 px-5 py-3 bg-white rounded-3xl border border-solid border-zinc-500">
          <div className="flex gap-2.5 text-base whitespace-nowrap">
            <div className="flex items-center">
              <div className="h-6 w-2 rounded-lg bg-yellow-300"></div>
              <h1 className="ml-2 my-2">Soal Literasi Bahasa Indonesia</h1>
            </div>
          </div>
          <div className="self-start mt-1.5 ml-3 text-neutral-500 max-md:ml-2.5">
            UTBK - Kemampuan Penalaran Umum
          </div>
          <div className="flex gap-5 justify-between mt-1">
            <div className="gap-0 my-auto text-neutral-400">
              25 Soal 25 Menit
            </div>
            <Link
              href={""}
              className="justify-center self-end px-3.5 py-2 mt-2.5 bg-green-400 text-white rounded"
            >
              Gratis
            </Link>
          </div>
        </div>
      </div>
      {/* Main item finish */}

      <div className="mt-10">
        <div className="flex items-center">
          <div className="h-6 w-2 rounded-lg bg-yellow-300"></div>
          <h1 className="ml-4 my-2">Soal Terbaru</h1>
        </div>

        {/* Main item start */}
        <div className="grid grid-cols-4 flex-wrap gap-4 items-start text-xs font-medium text-black max-md:flex-wrap mt-4">
          <div className="flex flex-col flex-1 px-5 py-3 bg-white rounded-3xl border border-solid border-zinc-500">
            <div className="flex gap-2.5 text-base whitespace-nowrap">
              <div className="flex items-center">
                <div className="h-6 w-2 rounded-lg bg-yellow-300"></div>
                <h1 className="ml-2 my-2">Soal Literasi Bahasa Indonesia</h1>
              </div>
            </div>
            <div className="self-start mt-1.5 ml-3 text-neutral-500 max-md:ml-2.5">
              UTBK - Kemampuan Penalaran Umum
            </div>
            <div className="flex gap-5 justify-between mt-1">
              <div className="gap-0 my-auto text-neutral-400">
                25 Soal 25 Menit
              </div>
              <Link
                href={""}
                className="justify-center self-end px-3.5 py-2 mt-2.5 bg-green-400 text-white rounded"
              >
                Gratis
              </Link>
            </div>
          </div>

          <div className="flex flex-col flex-1 px-5 py-3 bg-white rounded-3xl border border-solid border-zinc-500">
            <div className="flex gap-2.5 text-base whitespace-nowrap">
              <div className="flex items-center">
                <div className="h-6 w-2 rounded-lg bg-yellow-300"></div>
                <h1 className="ml-2 my-2">Soal Literasi Bahasa Indonesia</h1>
              </div>
            </div>
            <div className="self-start mt-1.5 ml-3 text-neutral-500 max-md:ml-2.5">
              UTBK - Kemampuan Penalaran Umum
            </div>
            <div className="flex gap-5 justify-between mt-1">
              <div className="gap-0 my-auto text-neutral-400">
                25 Soal 25 Menit
              </div>
              <Link
                href={""}
                className="justify-center self-end px-3.5 py-2 mt-2.5 bg-green-400 text-white rounded"
              >
                Gratis
              </Link>
            </div>
          </div>

          <div className="flex flex-col flex-1 px-5 py-3 bg-white rounded-3xl border border-solid border-zinc-500">
            <div className="flex gap-2.5 text-base whitespace-nowrap">
              <div className="flex items-center">
                <div className="h-6 w-2 rounded-lg bg-yellow-300"></div>
                <h1 className="ml-2 my-2">Soal Literasi Bahasa Indonesia</h1>
              </div>
            </div>
            <div className="self-start mt-1.5 ml-3 text-neutral-500 max-md:ml-2.5">
              UTBK - Kemampuan Penalaran Umum
            </div>
            <div className="flex gap-5 justify-between mt-1">
              <div className="gap-0 my-auto text-neutral-400">
                25 Soal 25 Menit
              </div>
              <Link
                href={""}
                className="justify-center self-end px-3.5 py-2 mt-2.5 bg-green-400 text-white rounded"
              >
                Gratis
              </Link>
            </div>
          </div>

          <div className="flex flex-col flex-1 px-5 py-3 bg-white rounded-3xl border border-solid border-zinc-500">
            <div className="flex gap-2.5 text-base whitespace-nowrap">
              <div className="flex items-center">
                <div className="h-6 w-2 rounded-lg bg-yellow-300"></div>
                <h1 className="ml-2 my-2">Soal Literasi Bahasa Indonesia</h1>
              </div>
            </div>
            <div className="self-start mt-1.5 ml-3 text-neutral-500 max-md:ml-2.5">
              UTBK - Kemampuan Penalaran Umum
            </div>
            <div className="flex gap-5 justify-between mt-1">
              <div className="gap-0 my-auto text-neutral-400">
                25 Soal 25 Menit
              </div>
              <Link
                href={""}
                className="justify-center self-end px-3.5 py-2 mt-2.5 bg-green-400 text-white rounded"
              >
                Gratis
              </Link>
            </div>
          </div>

          <div className="flex flex-col flex-1 px-5 py-3 bg-white rounded-3xl border border-solid border-zinc-500">
            <div className="flex gap-2.5 text-base whitespace-nowrap">
              <div className="flex items-center">
                <div className="h-6 w-2 rounded-lg bg-yellow-300"></div>
                <h1 className="ml-2 my-2">Soal Literasi Bahasa Indonesia</h1>
              </div>
            </div>
            <div className="self-start mt-1.5 ml-3 text-neutral-500 max-md:ml-2.5">
              UTBK - Kemampuan Penalaran Umum
            </div>
            <div className="flex gap-5 justify-between mt-1">
              <div className="gap-0 my-auto text-neutral-400">
                25 Soal 25 Menit
              </div>
              <Link
                href={""}
                className="justify-center self-end px-3.5 py-2 mt-2.5 bg-green-400 text-white rounded"
              >
                Gratis
              </Link>
            </div>
          </div>

          <div className="flex flex-col flex-1 px-5 py-3 bg-white rounded-3xl border border-solid border-zinc-500">
            <div className="flex gap-2.5 text-base whitespace-nowrap">
              <div className="flex items-center">
                <div className="h-6 w-2 rounded-lg bg-yellow-300"></div>
                <h1 className="ml-2 my-2">Soal Literasi Bahasa Indonesia</h1>
              </div>
            </div>
            <div className="self-start mt-1.5 ml-3 text-neutral-500 max-md:ml-2.5">
              UTBK - Kemampuan Penalaran Umum
            </div>
            <div className="flex gap-5 justify-between mt-1">
              <div className="gap-0 my-auto text-neutral-400">
                25 Soal 25 Menit
              </div>
              <Link
                href={""}
                className="justify-center self-end px-3.5 py-2 mt-2.5 bg-green-400 text-white rounded"
              >
                Gratis
              </Link>
            </div>
          </div>

          <div className="flex flex-col flex-1 px-5 py-3 bg-white rounded-3xl border border-solid border-zinc-500">
            <div className="flex gap-2.5 text-base whitespace-nowrap">
              <div className="flex items-center">
                <div className="h-6 w-2 rounded-lg bg-yellow-300"></div>
                <h1 className="ml-2 my-2">Soal Literasi Bahasa Indonesia</h1>
              </div>
            </div>
            <div className="self-start mt-1.5 ml-3 text-neutral-500 max-md:ml-2.5">
              UTBK - Kemampuan Penalaran Umum
            </div>
            <div className="flex gap-5 justify-between mt-1">
              <div className="gap-0 my-auto text-neutral-400">
                25 Soal 25 Menit
              </div>
              <Link
                href={""}
                className="justify-center self-end px-3.5 py-2 mt-2.5 bg-green-400 text-white rounded"
              >
                Gratis
              </Link>
            </div>
          </div>

          <div className="flex flex-col flex-1 px-5 py-3 bg-white rounded-3xl border border-solid border-zinc-500">
            <div className="flex gap-2.5 text-base whitespace-nowrap">
              <div className="flex items-center">
                <div className="h-6 w-2 rounded-lg bg-yellow-300"></div>
                <h1 className="ml-2 my-2">Soal Literasi Bahasa Indonesia</h1>
              </div>
            </div>
            <div className="self-start mt-1.5 ml-3 text-neutral-500 max-md:ml-2.5">
              UTBK - Kemampuan Penalaran Umum
            </div>
            <div className="flex gap-5 justify-between mt-1">
              <div className="gap-0 my-auto text-neutral-400">
                25 Soal 25 Menit
              </div>
              <Link
                href={""}
                className="justify-center self-end px-3.5 py-2 mt-2.5 bg-green-400 text-white rounded"
              >
                Gratis
              </Link>
            </div>
          </div>

          <div className="flex flex-col flex-1 px-5 py-3 bg-white rounded-3xl border border-solid border-zinc-500">
            <div className="flex gap-2.5 text-base whitespace-nowrap">
              <div className="flex items-center">
                <div className="h-6 w-2 rounded-lg bg-yellow-300"></div>
                <h1 className="ml-2 my-2">Soal Literasi Bahasa Indonesia</h1>
              </div>
            </div>
            <div className="self-start mt-1.5 ml-3 text-neutral-500 max-md:ml-2.5">
              UTBK - Kemampuan Penalaran Umum
            </div>
            <div className="flex gap-5 justify-between mt-1">
              <div className="gap-0 my-auto text-neutral-400">
                25 Soal 25 Menit
              </div>
              <Link
                href={""}
                className="justify-center self-end px-3.5 py-2 mt-2.5 bg-green-400 text-white rounded"
              >
                Gratis
              </Link>
            </div>
          </div>

          <div className="flex flex-col flex-1 px-5 py-3 bg-white rounded-3xl border border-solid border-zinc-500">
            <div className="flex gap-2.5 text-base whitespace-nowrap">
              <div className="flex items-center">
                <div className="h-6 w-2 rounded-lg bg-yellow-300"></div>
                <h1 className="ml-2 my-2">Soal Literasi Bahasa Indonesia</h1>
              </div>
            </div>
            <div className="self-start mt-1.5 ml-3 text-neutral-500 max-md:ml-2.5">
              UTBK - Kemampuan Penalaran Umum
            </div>
            <div className="flex gap-5 justify-between mt-1">
              <div className="gap-0 my-auto text-neutral-400">
                25 Soal 25 Menit
              </div>
              <Link
                href={""}
                className="justify-center self-end px-3.5 py-2 mt-2.5 bg-green-400 text-white rounded"
              >
                Gratis
              </Link>
            </div>
          </div>

          <div className="flex flex-col flex-1 px-5 py-3 bg-white rounded-3xl border border-solid border-zinc-500">
            <div className="flex gap-2.5 text-base whitespace-nowrap">
              <div className="flex items-center">
                <div className="h-6 w-2 rounded-lg bg-yellow-300"></div>
                <h1 className="ml-2 my-2">Soal Literasi Bahasa Indonesia</h1>
              </div>
            </div>
            <div className="self-start mt-1.5 ml-3 text-neutral-500 max-md:ml-2.5">
              UTBK - Kemampuan Penalaran Umum
            </div>
            <div className="flex gap-5 justify-between mt-1">
              <div className="gap-0 my-auto text-neutral-400">
                25 Soal 25 Menit
              </div>
              <Link
                href={""}
                className="justify-center self-end px-3.5 py-2 mt-2.5 bg-green-400 text-white rounded"
              >
                Gratis
              </Link>
            </div>
          </div>

          <div className="flex flex-col flex-1 px-5 py-3 bg-white rounded-3xl border border-solid border-zinc-500">
            <div className="flex gap-2.5 text-base whitespace-nowrap">
              <div className="flex items-center">
                <div className="h-6 w-2 rounded-lg bg-yellow-300"></div>
                <h1 className="ml-2 my-2">Soal Literasi Bahasa Indonesia</h1>
              </div>
            </div>
            <div className="self-start mt-1.5 ml-3 text-neutral-500 max-md:ml-2.5">
              UTBK - Kemampuan Penalaran Umum
            </div>
            <div className="flex gap-5 justify-between mt-1">
              <div className="gap-0 my-auto text-neutral-400">
                25 Soal 25 Menit
              </div>
              <Link
                href={""}
                className="justify-center self-end px-3.5 py-2 mt-2.5 bg-green-400 text-white rounded"
              >
                Gratis
              </Link>
            </div>
          </div>

          <div className="flex flex-col flex-1 px-5 py-3 bg-white rounded-3xl border border-solid border-zinc-500">
            <div className="flex gap-2.5 text-base whitespace-nowrap">
              <div className="flex items-center">
                <div className="h-6 w-2 rounded-lg bg-yellow-300"></div>
                <h1 className="ml-2 my-2">Soal Literasi Bahasa Indonesia</h1>
              </div>
            </div>
            <div className="self-start mt-1.5 ml-3 text-neutral-500 max-md:ml-2.5">
              UTBK - Kemampuan Penalaran Umum
            </div>
            <div className="flex gap-5 justify-between mt-1">
              <div className="gap-0 my-auto text-neutral-400">
                25 Soal 25 Menit
              </div>
              <Link
                href={""}
                className="justify-center self-end px-3.5 py-2 mt-2.5 bg-green-400 text-white rounded"
              >
                Gratis
              </Link>
            </div>
          </div>

          <div className="flex flex-col flex-1 px-5 py-3 bg-white rounded-3xl border border-solid border-zinc-500">
            <div className="flex gap-2.5 text-base whitespace-nowrap">
              <div className="flex items-center">
                <div className="h-6 w-2 rounded-lg bg-yellow-300"></div>
                <h1 className="ml-2 my-2">Soal Literasi Bahasa Indonesia</h1>
              </div>
            </div>
            <div className="self-start mt-1.5 ml-3 text-neutral-500 max-md:ml-2.5">
              UTBK - Kemampuan Penalaran Umum
            </div>
            <div className="flex gap-5 justify-between mt-1">
              <div className="gap-0 my-auto text-neutral-400">
                25 Soal 25 Menit
              </div>
              <Link
                href={""}
                className="justify-center self-end px-3.5 py-2 mt-2.5 bg-green-400 text-white rounded"
              >
                Gratis
              </Link>
            </div>
          </div>

          <div className="flex flex-col flex-1 px-5 py-3 bg-white rounded-3xl border border-solid border-zinc-500">
            <div className="flex gap-2.5 text-base whitespace-nowrap">
              <div className="flex items-center">
                <div className="h-6 w-2 rounded-lg bg-yellow-300"></div>
                <h1 className="ml-2 my-2">Soal Literasi Bahasa Indonesia</h1>
              </div>
            </div>
            <div className="self-start mt-1.5 ml-3 text-neutral-500 max-md:ml-2.5">
              UTBK - Kemampuan Penalaran Umum
            </div>
            <div className="flex gap-5 justify-between mt-1">
              <div className="gap-0 my-auto text-neutral-400">
                25 Soal 25 Menit
              </div>
              <Link
                href={""}
                className="justify-center self-end px-3.5 py-2 mt-2.5 bg-green-400 text-white rounded"
              >
                Gratis
              </Link>
            </div>
          </div>

          <div className="flex flex-col flex-1 px-5 py-3 bg-white rounded-3xl border border-solid border-zinc-500">
            <div className="flex gap-2.5 text-base whitespace-nowrap">
              <div className="flex items-center">
                <div className="h-6 w-2 rounded-lg bg-yellow-300"></div>
                <h1 className="ml-2 my-2">Soal Literasi Bahasa Indonesia</h1>
              </div>
            </div>
            <div className="self-start mt-1.5 ml-3 text-neutral-500 max-md:ml-2.5">
              UTBK - Kemampuan Penalaran Umum
            </div>
            <div className="flex gap-5 justify-between mt-1">
              <div className="gap-0 my-auto text-neutral-400">
                25 Soal 25 Menit
              </div>
              <Link
                href={""}
                className="justify-center self-end px-3.5 py-2 mt-2.5 bg-green-400 text-white rounded"
              >
                Gratis
              </Link>
            </div>
          </div>

          <div className="flex flex-col flex-1 px-5 py-3 bg-white rounded-3xl border border-solid border-zinc-500">
            <div className="flex gap-2.5 text-base whitespace-nowrap">
              <div className="flex items-center">
                <div className="h-6 w-2 rounded-lg bg-yellow-300"></div>
                <h1 className="ml-2 my-2">Soal Literasi Bahasa Indonesia</h1>
              </div>
            </div>
            <div className="self-start mt-1.5 ml-3 text-neutral-500 max-md:ml-2.5">
              UTBK - Kemampuan Penalaran Umum
            </div>
            <div className="flex gap-5 justify-between mt-1">
              <div className="gap-0 my-auto text-neutral-400">
                25 Soal 25 Menit
              </div>
              <Link
                href={""}
                className="justify-center self-end px-3.5 py-2 mt-2.5 bg-green-400 text-white rounded"
              >
                Gratis
              </Link>
            </div>
          </div>
        </div>
        {/* Main item finish */}
      </div>
    </div>
  );
}
