// import Link from "next/link";

// export default function LoginPage() {
//   return (
//     <div style={{ backgroundColor: "#8aa8f4", minHeight: "100vh" }}>
//       <header className="sticky top-0">
//         <div
//           className="flex gap-5 justify-between px-11 py-3.5 font-medium text-white max-md:flex-wrap max-md:px-5"
//           style={{ backgroundColor: "#8AA8F4" }}
//         >
//           <div className="flex gap-5 items-center text-2xl">
//             <img
//               loading="lazy"
//               srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/e65299e39c2b2a80b59b1c39be7b6eb50ec4951b8157f707c49ddb3037738ec2?apiKey=19816b9fb5bc4b9987983517808491df&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/e65299e39c2b2a80b59b1c39be7b6eb50ec4951b8157f707c49ddb3037738ec2?apiKey=19816b9fb5bc4b9987983517808491df&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/e65299e39c2b2a80b59b1c39be7b6eb50ec4951b8157f707c49ddb3037738ec2?apiKey=19816b9fb5bc4b9987983517808491df&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/e65299e39c2b2a80b59b1c39be7b6eb50ec4951b8157f707c49ddb3037738ec2?apiKey=19816b9fb5bc4b9987983517808491df&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/e65299e39c2b2a80b59b1c39be7b6eb50ec4951b8157f707c49ddb3037738ec2?apiKey=19816b9fb5bc4b9987983517808491df&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/e65299e39c2b2a80b59b1c39be7b6eb50ec4951b8157f707c49ddb3037738ec2?apiKey=19816b9fb5bc4b9987983517808491df&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/e65299e39c2b2a80b59b1c39be7b6eb50ec4951b8157f707c49ddb3037738ec2?apiKey=19816b9fb5bc4b9987983517808491df&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/e65299e39c2b2a80b59b1c39be7b6eb50ec4951b8157f707c49ddb3037738ec2?apiKey=19816b9fb5bc4b9987983517808491df&"
//               className="shrink-0 self-stretch aspect-[1.11] w-[61px]"
//             />
//             <Link
//               href={""}
//               className="flex-auto self-stretch my-auto mx-4 text-lg"
//             >
//               Home
//             </Link>
//             <Link
//               href={""}
//               className="flex-auto self-stretch my-auto mx-4 text-lg"
//             >
//               About
//             </Link>
//             <Link
//               href={""}
//               className="flex-auto self-stretch my-auto mx-4 text-lg"
//             >
//               Blog
//             </Link>
//             <Link
//               href={""}
//               className="flex-auto self-stretch my-auto mx-4 text-lg"
//             >
//               Support
//             </Link>
//           </div>
//           <div className="flex gap-5 justify-between my-auto text-base">
//             <button className="justify-center px-6 py-3.5 bg-blue-500 rounded-lg max-md:px-5">
//               Download Now
//             </button>
//           </div>
//         </div>
//       </header>

//       <div className="h-[100vh] items-center flex justify-center px-5 lg:px-0">
//         <div className="max-w-screen-xl bg-white border shadow sm:rounded-lg flex justify-center flex-1">
//           <div className="flex-1 bg-blue-900 text-center hidden md:flex">
//             <div
//               className="m-12 xl:m-16 w-full bg-contain bg-center bg-no-repeat"
//               style={{
//                 backgroundImage: `url(https://www.tailwindtap.com/assets/common/marketing.svg)`,
//               }}
//             ></div>
//           </div>
//           <div className="lg:w-1/2 xl:w-5/12 p-6 sm:p-12">
//             <div className=" flex flex-col items-center">
//               <div className="text-center">
//                 <h1 className="text-2xl xl:text-4xl font-extrabold text-blue-900">
//                   Registrasi
//                 </h1>
//                 <p className="text-[12px] text-gray-500">
//                   Silahkan registrasi akun anda
//                 </p>
//               </div>
//               <div className="w-full flex-1 mt-8">
//                 <div className="mx-auto max-w-xs flex flex-col gap-4">
//                   <input
//                     className="w-full px-5 py-3 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
//                     type="text"
//                     placeholder="Nama"
//                   />
//                   <input
//                     className="w-full px-5 py-3 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
//                     type="text"
//                     placeholder="Username"
//                   />
//                   <input
//                     className="w-full px-5 py-3 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
//                     type="email"
//                     placeholder="Email"
//                   />
//                   <input
//                     className="w-full px-5 py-3 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
//                     type="tel"
//                     placeholder="Nomor Telepon"
//                   />
//                   <input
//                     className="w-full px-5 py-3 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
//                     type="password"
//                     placeholder="Password"
//                   />
//                   <input
//                     className="w-full px-5 py-3 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
//                     type="password"
//                     placeholder="Konfirmasi Password"
//                   />
//                   <button className="mt-5 tracking-wide font-semibold bg-blue-900 text-gray-100 w-full py-4 rounded-lg hover:bg-indigo-700 transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none">
//                     <svg
//                       className="w-6 h-6 -ml-2"
//                       fill="none"
//                       stroke="currentColor"
//                       stroke-width="2"
//                       strokeLinecap="round"
//                       stroke-linejoin="round"
//                     >
//                       <path d="M16 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
//                       <circle cx="8.5" cy="7" r="4" />
//                       <path d="M20 8v6M23 11h-6" />
//                     </svg>
//                     <span className="ml-3">Registrasi</span>
//                   </button>
//                   <p className="mt-6 text-xs text-gray-600 text-center">
//                     Already have an account?{" "}
//                     <a href="">
//                       <span className="text-blue-900 font-semibold">
//                         Sign in
//                       </span>
//                     </a>
//                   </p>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }
"use client"
import { useState, ChangeEvent, FormEvent } from "react";
import axios from "axios";
import Link from "next/link";

export default function LoginPage() {
  const [formData, setFormData] = useState({
    name: "",
    username: "",
    email: "",
    phone_number: "",
    password: "",
    password_confirmation: "",
    role_id: 1001, // Default value
  });

  const [errors, setErrors] = useState({
    username: "",
    emailPhone: "",
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    setErrors({
      ...errors,
      [name]: "",
    });
  };

  const validateUsername = async () => {
    try {
      const response = await axios.post(
        "https://api-staging.taktix.co.id/register/validation/1",
        {
          name: formData.name,
          username: formData.username,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      if (response.data.error) {
        setErrors((prevErrors) => ({
          ...prevErrors,
          username: "Username sudah terpakai",
        }));
        return false;
      }
      return true;
    } catch (error) {
      console.error("Error validating username:", error);
      setErrors((prevErrors) => ({
        ...prevErrors,
        username: "Username tidak bisa tervalidasi",
      }));
      return false;
    }
  };

  const validateEmailPhone = async () => {
    try {
      const response = await axios.post(
        "https://api-staging.taktix.co.id/register/validation/2",
        {
          email: formData.email,
          phone_number: formData.phone_number,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      if (response.data.error) {
        setErrors((prevErrors) => ({
          ...prevErrors,
          emailPhone: "Email atau Nomor Telepon sudah terdaftar",
        }));
        return false;
      }
      return true;
    } catch (error) {
      console.error("Error validating email/phone:", error);
      setErrors((prevErrors) => ({
        ...prevErrors,
        emailPhone: "Email/Nomor Telepon tidak bisa tervalidasi",
      }));
      return false;
    }
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const isUsernameValid = await validateUsername();
    const isEmailPhoneValid = await validateEmailPhone();

    if (!isUsernameValid || !isEmailPhoneValid) {
      return;
    }

    try {
      const response = await axios.post(
        "https://api-staging.taktix.co.id/register",
        formData,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      console.log(response.data);
      alert("Registration successful!");
    } catch (error) {
      console.error("Error registering:", error);
      alert("Registration failed!");
    }
  };

  return (
    <div style={{ backgroundColor: "#8aa8f4", minHeight: "100vh" }}>
      <header className="sticky top-0">
        <div
          className="flex gap-5 justify-between px-11 py-3.5 font-medium text-white max-md:flex-wrap max-md:px-5"
          style={{ backgroundColor: "#8AA8F4" }}
        >
          <div className="flex gap-5 items-center text-2xl">
            <img
              loading="lazy"
              srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/e65299e39c2b2a80b59b1c39be7b6eb50ec4951b8157f707c49ddb3037738ec2?apiKey=19816b9fb5bc4b9987983517808491df&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/e65299e39c2b2a80b59b1c39be7b6eb50ec4951b8157f707c49ddb3037738ec2?apiKey=19816b9fb5bc4b9987983517808491df&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/e65299e39c2b2a80b59b1c39be7b6eb50ec4951b8157f707c49ddb3037738ec2?apiKey=19816b9fb5bc4b9987983517808491df&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/e65299e39c2b2a80b59b1c39be7b6eb50ec4951b8157f707c49ddb3037738ec2?apiKey=19816b9fb5bc4b9987983517808491df&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/e65299e39c2b2a80b59b1c39be7b6eb50ec4951b8157f707c49ddb3037738ec2?apiKey=19816b9fb5bc4b9987983517808491df&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/e65299e39c2b2a80b59b1c39be7b6eb50ec4951b8157f707c49ddb3037738ec2?apiKey=19816b9fb5bc4b9987983517808491df&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/e65299e39c2b2a80b59b1c39be7b6eb50ec4951b8157f707c49ddb3037738ec2?apiKey=19816b9fb5bc4b9987983517808491df&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/e65299e39c2b2a80b59b1c39be7b6eb50ec4951b8157f707c49ddb3037738ec2?apiKey=19816b9fb5bc4b9987983517808491df&"
              className="shrink-0 self-stretch aspect-[1.11] w-[61px]"
            />
            <Link
              href={""}
              className="flex-auto self-stretch my-auto mx-4 text-lg"
            >
              Home
            </Link>
            <Link
              href={""}
              className="flex-auto self-stretch my-auto mx-4 text-lg"
            >
              About
            </Link>
            <Link
              href={""}
              className="flex-auto self-stretch my-auto mx-4 text-lg"
            >
              Blog
            </Link>
            <Link
              href={""}
              className="flex-auto self-stretch my-auto mx-4 text-lg"
            >
              Support
            </Link>
          </div>
          <div className="flex gap-5 justify-between my-auto text-base">
            <button className="justify-center px-6 py-3.5 bg-blue-500 rounded-lg max-md:px-5">
              Download Now
            </button>
          </div>
        </div>
      </header>

      <div className="h-[100vh] items-center flex justify-center px-5 lg:px-0">
        <div className="max-w-screen-xl bg-white border shadow sm:rounded-lg flex justify-center flex-1">
          <div className="flex-1 bg-blue-900 text-center hidden md:flex">
            <div
              className="m-12 xl:m-16 w-full bg-contain bg-center bg-no-repeat"
              style={{
                backgroundImage: `url(https://www.tailwindtap.com/assets/common/marketing.svg)`,
              }}
            ></div>
          </div>
          <div className="lg:w-1/2 xl:w-5/12 p-6 sm:p-12">
            <div className=" flex flex-col items-center">
              <div className="text-center">
                <h1 className="text-2xl xl:text-4xl font-extrabold text-blue-900">
                  Registrasi
                </h1>
                <p className="text-[12px] mt-4 text-gray-500">
                  Silahkan registrasi akun anda
                </p>
              </div>
              <div className="w-full flex-1 mt-8">
                <form
                  onSubmit={handleSubmit}
                  className="mx-auto max-w-xs flex flex-col gap-4"
                >
                  <input
                    className="w-full px-5 py-3 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
                    type="text"
                    name="name"
                    placeholder="Nama"
                    value={formData.name}
                    onChange={handleChange}
                  />
                  <input
                    className="w-full px-5 py-3 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
                    type="text"
                    name="username"
                    placeholder="Username"
                    value={formData.username}
                    onChange={handleChange}
                  />
                  {errors.username && (
                    <p className="text-red-500 text-xs">{errors.username}</p>
                  )}
                  <input
                    className="w-full px-5 py-3 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={handleChange}
                  />
                  <input
                    className="w-full px-5 py-3 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
                    type="tel"
                    name="phone_number"
                    placeholder="Nomor Telepon"
                    value={formData.phone_number}
                    onChange={handleChange}
                  />
                  {errors.emailPhone && (
                    <p className="text-red-500 text-xs">{errors.emailPhone}</p>
                  )}
                  <input
                    className="w-full px-5 py-3 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
                    type="password"
                    name="password"
                    placeholder="Password"
                    value={formData.password}
                    onChange={handleChange}
                  />
                  <input
                    className="w-full px-5 py-3 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
                    type="password"
                    name="password_confirmation"
                    placeholder="Konfirmasi Password"
                    value={formData.password_confirmation}
                    onChange={handleChange}
                  />
                  <button className="mt-5 tracking-wide font-semibold bg-blue-900 text-gray-100 w-full py-4 rounded-lg hover:bg-indigo-700 transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none">
                    <svg
                      className="w-6 h-6 -ml-2"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M16 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
                      <circle cx="8.5" cy="7" r="4" />
                      <path d="M20 8v6M23 11h-6" />
                    </svg>
                    <span className="ml-3">Registrasi</span>
                  </button>
                  <p className="mt-6 text-xs text-gray-600 text-center">
                    Already have an account?{" "}
                    <Link href="/login">
                      <span className="text-blue-900 font-semibold">
                        Sign in
                      </span>
                    </Link>
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

