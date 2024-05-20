"use client"
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import { Province } from "../types";

const UbahProfile = () => {
  const [provinces, setProvinces] = useState<Province[]>([]);
  const router = useRouter();

  useEffect(() => {
    const fetchProvinces = async () => {
      try {
        const res = await axios.get(
          "https://www.emsifa.com/api-wilayah-indonesia/api/provinces.json"
        );
        setProvinces(res.data);
      } catch (error) {
        console.error("Failed to fetch provinces:", error);
      }
    };

    fetchProvinces();
  }, []);

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
          Nama
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
          Username
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
          Email
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
          Nomor HP
        </label>
        <input
          type="number"
          id="Nomorhp"
          className="mt-1 w-full rounded-md border shadow-sm sm:text-sm"
        />
      </div>

      <div className="mx-auto max-w-[500px] my-6">
        <label
          htmlFor="tanggallahir"
          className="block text-xs font-medium text-gray-700"
        >
          Tanggal Lahir
        </label>
        <input
          type="date"
          id="tanggallahir"
          className="mt-1 w-full rounded-md border shadow-sm sm:text-sm"
        />
      </div>

      <form className="mx-auto max-w-[500px] my-6">
        <label
          htmlFor="jenkel"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          Jenis Kelamin
        </label>
        <select
          id="jenkel"
          className="bg-gray-50 border text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        >
          <option selected disabled>
            Pilih Jenis Kelamin
          </option>
          <option value="P">Perempuan</option>
          <option value="L">Laki-Laki</option>
        </select>
      </form>

      <form className="mx-auto max-w-[500px] my-6">
        <label
          htmlFor="provinsi"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          Provinsi
        </label>
        <select
          id="provinsi"
          className="bg-gray-50 border text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        >
          <option selected disabled>
            Pilih Provinsi
          </option>
          {provinces.map((province) => (
            <option key={province.id} value={province.id}>
              {province.name}
            </option>
          ))}
        </select>
      </form>

      <div className="flex justify-center mt-6">
        <button className="px-16 py-3 text-lg font-semibold text-white bg-blue-700 rounded-[30px]">
          Simpan
        </button>
      </div>
    </div>
  );
};

export default UbahProfile;
