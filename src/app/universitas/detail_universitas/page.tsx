"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

export default function DetailUniversitas() {
	const router = useRouter();

	return (
    <div className="mx-40 my-14">
      <div className="flex items-center ">
        <button type="button" className="mt-1" onClick={() => router.back()}>
          <FontAwesomeIcon icon={faArrowLeft} className="size-5 opacity-75" />
        </button>
        <h1 className="ml-4 my-2">Universitas</h1>
      </div>

      <div className="overflow-x-auto rounded-lg border border-solid black max-w-[682px] mx-auto mt-4">
        <table className="min-w-full divide-y-2 divide-black bg-white text-sm">
          <tbody className="divide-y divide-black">
            <tr>
              <td className="whitespace-nowrap px-4 py-4 font-medium">
                <div className="text-base text-black">ARSITEKTUR - Sarjana</div>
                <div className="mt-1.5 text-base text-neutral-500">
                  Akreditasi:
                  <br />
                  SNBT: Kuota 30, Peminat 99
                  <br />
                  SNBP: Kuota 25, Peminat 114
                  <br />
                  Passing Grade 599
                </div>
              </td>
            </tr>
            <tr>
              <td className="whitespace-nowrap px-4 py-4 font-medium">
                <div className="text-base text-black">ARSITEKTUR - Sarjana</div>
                <div className="mt-1.5 text-base text-neutral-500">
                  Akreditasi:
                  <br />
                  SNBT: Kuota 30, Peminat 99
                  <br />
                  SNBP: Kuota 25, Peminat 114
                  <br />
                  Passing Grade 599
                </div>
              </td>
            </tr>
            <tr>
              <td className="whitespace-nowrap px-4 py-4 font-medium">
                <div className="text-base text-black">ARSITEKTUR - Sarjana</div>
                <div className="mt-1.5 text-base text-neutral-500">
                  Akreditasi:
                  <br />
                  SNBT: Kuota 30, Peminat 99
                  <br />
                  SNBP: Kuota 25, Peminat 114
                  <br />
                  Passing Grade 599
                </div>
              </td>
            </tr>
            <tr>
              <td className="whitespace-nowrap px-4 py-4 font-medium">
                <div className="text-base text-black">ARSITEKTUR - Sarjana</div>
                <div className="mt-1.5 text-base text-neutral-500">
                  Akreditasi:
                  <br />
                  SNBT: Kuota 30, Peminat 99
                  <br />
                  SNBP: Kuota 25, Peminat 114
                  <br />
                  Passing Grade 599
                </div>
              </td>
            </tr>
            <tr>
              <td className="whitespace-nowrap px-4 py-4 font-medium">
                <div className="text-base text-black">ARSITEKTUR - Sarjana</div>
                <div className="mt-1.5 text-base text-neutral-500">
                  Akreditasi:
                  <br />
                  SNBT: Kuota 30, Peminat 99
                  <br />
                  SNBP: Kuota 25, Peminat 114
                  <br />
                  Passing Grade 599
                </div>
              </td>
            </tr>
            <tr>
              <td className="whitespace-nowrap px-4 py-4 font-medium">
                <div className="text-base text-black">ARSITEKTUR - Sarjana</div>
                <div className="mt-1.5 text-base text-neutral-500">
                  Akreditasi:
                  <br />
                  SNBT: Kuota 30, Peminat 99
                  <br />
                  SNBP: Kuota 25, Peminat 114
                  <br />
                  Passing Grade 599
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* <div className="flex flex-col py-3.5 bg-white border border-solid border-neutral-500 max-w-[683px]">
        <div className="flex flex-col ml-4 max-w-full w-[187px] max-md:ml-2.5">
          <div className="text-base text-black">ARSITEKTUR - Sarjana</div>
          <div className="mt-1.5 text-base text-neutral-500">
            Akreditasi:
            <br />
            SNBT: Kuota 30, Peminat 99
            <br />
            SNBP: Kuota 25, Peminat 114
            <br />
            Passing Grade 599
          </div>
        </div>
        <div className="mt-2.5 w-full border border-solid bg-zinc-500 border-zinc-500 min-h-[1px] max-md:max-w-full" />
        <div className="flex flex-col mt-3 ml-4 max-w-full w-[187px] max-md:ml-2.5">
          <div className="text-base text-black">ARSITEKTUR - Sarjana</div>
          <div className="mt-1.5 text-base text-neutral-500">
            Akreditasi:
            <br />
            SNBT: Kuota 30, Peminat 99
            <br />
            SNBP: Kuota 25, Peminat 114
            <br />
            Passing Grade 599
          </div>
        </div>
        <div className="mt-3 w-full border border-solid bg-zinc-500 border-zinc-500 min-h-[1px] max-md:max-w-full" />
        <div className="flex flex-col mt-3 ml-4 max-w-full w-[187px] max-md:ml-2.5">
          <div className="text-base text-black">ARSITEKTUR - Sarjana</div>
          <div className="mt-1.5 text-base text-neutral-500">
            Akreditasi:
            <br />
            SNBT: Kuota 30, Peminat 99
            <br />
            SNBP: Kuota 25, Peminat 114
            <br />
            Passing Grade 599
          </div>
        </div>
        <div className="mt-3.5 w-full border border-solid bg-zinc-500 border-zinc-500 min-h-[1px] max-md:max-w-full" />
        <div className="flex flex-col mt-3.5 ml-4 max-w-full w-[187px] max-md:ml-2.5">
          <div className="text-base text-black">ARSITEKTUR - Sarjana</div>
          <div className="mt-1.5 text-base text-neutral-500">
            Akreditasi:
            <br />
            SNBT: Kuota 30, Peminat 99
            <br />
            SNBP: Kuota 25, Peminat 114
            <br />
            Passing Grade 599
          </div>
        </div>
      </div> */}
    </div>
  );
}
