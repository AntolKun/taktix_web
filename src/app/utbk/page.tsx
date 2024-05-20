"use client";
import React, { useState } from "react";
import Link from "next/link";

export default function UTBK() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const closeDropdown = () => {
    setIsOpen(false);
  };

  return (
    <div className="mx-14 my-14">
      {/* <form className="max-w-lg mx-auto">
        <div className="flex">
          <div className="w-full py-6 pb-8 flex">
            <div className="relative inline-block mr-2">
              <button
                type="button"
                className="px-4 py-2 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm inline-flex items-center"
                onClick={toggleDropdown}
              >
                Pilih Kategori{" "}
                <svg
                  className="w-2.5 h-2.5 ml-2.5"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 10 6"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="m1 1 4 4 4-4"
                  />
                </svg>
              </button>

              {isOpen && (
                <div className="origin-top-right absolute right-0 mt-2 w-44 rounded-lg shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                  <ul
                    role="menu"
                    aria-orientation="vertical"
                    aria-labelledby="options-menu"
                  >
                    <li>
                      <a
                        href="#"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                        onClick={closeDropdown}
                      >
                        Option 1
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                        onClick={closeDropdown}
                      >
                        Option 2
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                        onClick={closeDropdown}
                      >
                        Option 3
                      </a>
                    </li>
                  </ul>
                </div>
              )}
            </div>

            <div className="relative inline-block">
              <label htmlFor="Search" className="sr-only">
                {" "}
                Search{" "}
              </label>

              <input
                type="text"
                id="Search"
                placeholder="Search for..."
                className="w-full rounded-md border-gray-200 py-2.5 pe-10 shadow-sm sm:text-sm"
              />

              <span className="absolute inset-y-0 end-0 grid w-10 place-content-center">
                <button
                  type="button"
                  className="text-gray-600 hover:text-gray-700"
                >
                  <span className="sr-only">Search</span>

                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    className="h-4 w-4"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                    />
                  </svg>
                </button>
              </span>
            </div>
          </div>
        </div>
      </form> */}

      <form className="max-w-lg mx-auto">
        <div className="flex">
          <div className="w-full py-6 pb-8 flex">
            <div className="relative inline-block mr-2">
              <button
                type="button"
                className="px-4 py-2 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm inline-flex items-center border border-blue-500"
                onClick={toggleDropdown}
              >
                Pilih Kategori{" "}
                <svg
                  className="w-2.5 h-2.5 ml-2.5"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 10 6"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="m1 1 4 4 4-4"
                  />
                </svg>
              </button> 

              {isOpen && (
                <div className="origin-top-right absolute right-0 mt-2 w-44 rounded-lg shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                  <ul
                    role="menu"
                    aria-orientation="vertical"
                    aria-labelledby="options-menu"
                  >
                    <li>
                      <a
                        href="#"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                        onClick={closeDropdown}
                      >
                        Option 1
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                        onClick={closeDropdown}
                      >
                        Option 2
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                        onClick={closeDropdown}
                      >
                        Option 3
                      </a>
                    </li>
                  </ul>
                </div>
              )}
            </div>

            <div className="relative inline-block">
              <label htmlFor="Search" className="sr-only">
                Search
              </label>

              <input
                type="text"
                id="Search"
                placeholder="Search for..."
                className="w-full rounded-md bg-white py-2.5 pe-10 shadow-sm sm:text-sm"
              />

              <span className="absolute inset-y-0 end-0 grid w-10 place-content-center">
                <button
                  type="button"
                  className="text-gray-600 hover:text-gray-700"
                >
                  <span className="sr-only">Search</span>
                  <i className="fas fa-search"></i> {/* Font Awesome icon */}
                </button>
              </span>
            </div>
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
