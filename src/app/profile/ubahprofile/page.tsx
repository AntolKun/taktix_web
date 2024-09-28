"use client";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import Swal from "sweetalert2";

interface Province {
  id: string;
  name: string;
}


const UbahProfile = () => {
  const [provinces, setProvinces] = useState<Province[]>([]);
  const [formData, setFormData] = useState({
    name: "",
    username: "",
    email: "",
    phone_number: "",
    gender: 1,
    photo_profile: "",
    school: "",
    province_id: "",
  });

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

    // Fetch user profile data
    const fetchUserProfile = async () => {
      const token = localStorage.getItem("token");
      try {
        const res = await axios.get(
          "https://api-staging.taktix.co.id/profile",
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        setFormData(res.data); // Set the formData with user's current data
      } catch (error) {
        console.error("Failed to fetch user profile:", error);
      }
    };

    fetchProvinces();
    fetchUserProfile();
  }, []);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const token = localStorage.getItem("token");

    try {
      await axios.put(
        "https://api-staging.taktix.co.id/profile/edit",
        formData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      // Show success SweetAlert
      Swal.fire({
        title: "Sukses!",
        text: "Profile berhasil diperbarui.",
        icon: "success",
        confirmButtonText: "OK",
      }).then(() => {
        router.back(); // Go back after successful update
      });
    } catch (error) {
      if (axios.isAxiosError(error) && error.response) {
        const errorResponse = error.response.data;
        let errorMessage = "Terjadi kesalahan saat memperbarui profile.";

        // Check if the error is a validation error and errorStacks exist
        if (
          errorResponse.message === "Validation error" &&
          errorResponse.errorStacks
        ) {
          const messages = errorResponse.errorStacks
            .map((err: any) => err.msg) // Extract 'msg' from each errorStack
            .join(", ");
          errorMessage = messages; // Combine messages from errorStacks
        }

        Swal.fire({
          title: "Gagal!",
          text: errorMessage,
          icon: "error",
          confirmButtonText: "OK",
        });
      } else {
        console.error("Failed to update profile:", error);
        Swal.fire({
          title: "Gagal!",
          text: "Terjadi kesalahan saat memperbarui profile.",
          icon: "error",
          confirmButtonText: "OK",
        });
      }
    }
  };

  return (
    <div className="mx-40 my-14">
      <div className="flex items-center ">
        <button type="button" className="mt-1" onClick={() => router.back()}>
          <FontAwesomeIcon icon={faArrowLeft} className="size-5 opacity-75" />
        </button>
        <h1 className="ml-4 my-2">Ubah Profile</h1>
      </div>

      <form onSubmit={handleSubmit} className="mx-auto max-w-[500px]">
        <div className="my-6">
          <label
            htmlFor="name"
            className="block text-xs font-medium text-gray-700"
          >
            Nama
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="mt-1 w-full rounded-md border shadow-sm sm:text-sm"
            required
          />
        </div>

        <div className="my-6">
          <label
            htmlFor="username"
            className="block text-xs font-medium text-gray-700"
          >
            Username
          </label>
          <input
            type="text"
            id="username"
            name="username"
            value={formData.username}
            onChange={handleChange}
            className="mt-1 w-full rounded-md border shadow-sm sm:text-sm"
            required
          />
        </div>

        <div className="my-6">
          <label
            htmlFor="email"
            className="block text-xs font-medium text-gray-700"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="mt-1 w-full rounded-md border shadow-sm sm:text-sm"
            required
          />
        </div>

        <div className="my-6">
          <label
            htmlFor="phone_number"
            className="block text-xs font-medium text-gray-700"
          >
            Nomor HP
          </label>
          <input
            type="tel"
            id="phone_number"
            name="phone_number"
            value={formData.phone_number}
            onChange={handleChange}
            className="mt-1 w-full rounded-md border shadow-sm sm:text-sm"
            required
          />
        </div>

        <div className="my-6">
          <label
            htmlFor="gender"
            className="block mb-2 text-sm font-medium text-gray-900"
          >
            Jenis Kelamin
          </label>
          <select
            id="gender"
            name="gender"
            value={formData.gender}
            onChange={handleChange}
            className="bg-gray-50 border text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
          >
            <option value={1}>Perempuan</option>
            <option value={2}>Laki-Laki</option>
          </select>
        </div>

        <div className="my-6">
          <label
            htmlFor="photo_profile"
            className="block text-xs font-medium text-gray-700"
          >
            URL Foto Profil
          </label>
          <input
            type="text"
            id="photo_profile"
            name="photo_profile"
            value={formData.photo_profile}
            onChange={handleChange}
            className="mt-1 w-full rounded-md border shadow-sm sm:text-sm"
          />
        </div>

        <div className="my-6">
          <label
            htmlFor="school"
            className="block text-xs font-medium text-gray-700"
          >
            Sekolah
          </label>
          <input
            type="text"
            id="school"
            name="school"
            value={formData.school}
            onChange={handleChange}
            className="mt-1 w-full rounded-md border shadow-sm sm:text-sm"
          />
        </div>

        <div className="my-6">
          <label
            htmlFor="provinsi"
            className="block mb-2 text-sm font-medium text-gray-900"
          >
            Provinsi
          </label>
          <select
            id="provinsi"
            name="province_id"
            value={formData.province_id}
            onChange={handleChange}
            className="bg-gray-50 border text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            required
          >
            <option value="" disabled>
              Pilih Provinsi
            </option>
            {provinces.map((province) => (
              <option key={province.id} value={province.id}>
                {province.name}
              </option>
            ))}
          </select>
        </div>

        <div className="flex justify-center mt-6">
          <button
            type="submit"
            className="px-16 py-3 text-lg font-semibold text-white bg-blue-700 rounded-[30px]"
          >
            Simpan
          </button>
        </div>
      </form>
    </div>
  );
};

export default UbahProfile;
