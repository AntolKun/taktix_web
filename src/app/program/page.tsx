"use client";
import React from "react";
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
        <h1 className="ml-4 my-2">Program</h1>
      </div>

      <div className="px-5 grid grid-cols-3 flex-wrap">
        {/* Balok biru dengan gambar SVG Ticket */}
        <a
          href={"/program/programDetail"}
          className="block rounded-lg p-4 shadow-sm shadow-indigo-100 mt-5 mr-5"
        >
          <div className="h-48 rounded-md bg-indigo-600 flex justify-center items-center">
            <img
              src="/Ticket.svg"
              alt="Ticket"
              className="w-16 h-16 object-contain"
            />
          </div>

          <div className="mt-2">
            <dl>
              <div>
                <p className="font-medium">Tryout Nasional UTBK 2024</p>
              </div>
              <div>
                <p className="text-sm text-gray-500">Gratis</p>
              </div>
            </dl>
          </div>
        </a>

        {/* Balok yang sama dapat disalin sesuai kebutuhan */}
        <a
          href=""
          className="block rounded-lg p-4 shadow-sm shadow-indigo-100 mt-5 mr-5"
        >
          <div className="h-48 rounded-md bg-indigo-600 flex justify-center items-center">
            <img
              src="/Ticket.svg"
              alt="Ticket"
              className="w-16 h-16 object-contain"
            />
          </div>

          <div className="mt-2">
            <dl>
              <div>
                <p className="font-medium">Tryout Nasional UTBK 2024</p>
              </div>
              <div>
                <p className="text-sm text-gray-500">Gratis</p>
              </div>
            </dl>
          </div>
        </a>

        {/* Ulangi untuk balok lainnya */}
        <a
          href=""
          className="block rounded-lg p-4 shadow-sm shadow-indigo-100 mt-5 mr-5"
        >
          <div className="h-48 rounded-md bg-indigo-600 flex justify-center items-center">
            <img
              src="/Ticket.svg"
              alt="Ticket"
              className="w-16 h-16 object-contain"
            />
          </div>

          <div className="mt-2">
            <dl>
              <div>
                <p className="font-medium">Tryout Nasional UTBK 2024</p>
              </div>
              <div>
                <p className="text-sm text-gray-500">Gratis</p>
              </div>
            </dl>
          </div>
        </a>
      </div>
    </div>
  );
}
