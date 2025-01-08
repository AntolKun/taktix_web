// "use client";
// import React, { useState, useEffect } from "react";
// import { useRouter } from "next/navigation";
// import {jwtDecode} from "jwt-decode";
// import axios from "axios";

// export default function KerjakanSoal({ params }: { params: { id: string } }) {
//   const [name, setName] = useState("");
//   const [photoProfile, setPhotoProfile] = useState("");
//   const [questions, setQuestions] = useState<any[]>([]);
//   const [selectedOptions, setSelectedOptions] = useState<{
//     [key: number]: string;
//   }>({});
//   const router = useRouter();
//   const { id } = params;

//   useEffect(() => {
//     const token = localStorage.getItem("token");
//     if (token) {
//       try {
//         const decoded: any = jwtDecode(token);
//         const user = decoded.user;
//         setName(user.name);
//         setPhotoProfile(user.photo_profile);
//       } catch (error) {
//         console.error("Invalid token:", error);
//         setName("");
//         setPhotoProfile("");
//       }
//     }

//     if (id) {
//       axios
//         .get(`http://localhost:3500/api/soali/${id}`)
//         .then((response) => {
//           setQuestions(response.data.questions);
//         })
//         .catch((error) => {
//           console.error("Error fetching soal data:", error);
//         });
//     }
//   }, [id]);

//   const handleAnswerChange = (questionId: number, selectedOption: string) => {
//     setSelectedOptions((prevSelectedOptions) => ({
//       ...prevSelectedOptions,
//       [questionId]: selectedOption,
//     }));
//   };

//   const handleSubmitAnswers = () => {
//     const token = localStorage.getItem("token");
//     if (token) {
//       try {
//         const decoded: any = jwtDecode(token);
//         const userId = decoded.user.id;

//         const answers = Object.entries(selectedOptions).map(([key, value]) => ({
//           question_id: parseInt(key),
//           chosen: value,
//         }));

//         axios
//           .post("http://localhost:3500/api/answers", {
//             user_id: userId,
//             soal_id: id,
//             answers,
//           })
//           .then((response) => {
//             alert(`Your score: ${response.data.score}`);
//           })
//           .catch((error) => {
//             console.error("Error submitting answers:", error);
//           });
//       } catch (error) {
//         console.error("Invalid token:", error);
//       }
//     }
//   };

//   return (
//     <div className="min-h-screen bg-gray-100 flex flex-col items-center py-8">
//       {/* Header */}
//       <div className="flex items-center space-x-4 mb-8">
//         <img
//           src={photoProfile || "/default-profile.png"}
//           alt="Profile"
//           className="w-16 h-16 rounded-full"
//         />
//         <h1 className="text-2xl font-semibold text-gray-800">{name}</h1>
//       </div>

//       {/* Questions */}
//       <div className="w-full max-w-3xl bg-white shadow-md rounded-lg p-6">
//         <h2 className="text-xl font-bold text-gray-800 mb-4">Soal</h2>
//         {questions.map((question) => (
//           <div key={question.id} className="mb-6">
//             <p className="text-lg font-medium text-gray-700 mb-3">
//               {question.question}
//             </p>
//             <div className="grid grid-cols-2 gap-4">
//               {question.options.map((option: any) => (
//                 <button
//                   key={option.id}
//                   className={`border rounded-lg p-4 text-left transition ${
//                     selectedOptions[question.id] === option.label
//                       ? "border-blue-500 bg-blue-100"
//                       : "border-gray-300 bg-white"
//                   }`}
//                   onClick={() => handleAnswerChange(question.id, option.label)}
//                 >
//                   <span className="font-bold">{option.label}.</span>{" "}
//                   {option.content}
//                 </button>
//               ))}
//             </div>
//           </div>
//         ))}
//       </div>

//       {/* Submit Button */}
//       <button
//         onClick={handleSubmitAnswers}
//         className="mt-6 px-6 py-3 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-600 transition"
//       >
//         Submit Answers
//       </button>
//     </div>
//   );
// }

"use client";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { jwtDecode } from "jwt-decode";
import axios from "axios";

export default function KerjakanSoal({ params }: { params: { id: string } }) {
  const [name, setName] = useState("");
  const [photoProfile, setPhotoProfile] = useState("");
  const [questions, setQuestions] = useState<any[]>([]);
  const [dataSoal, setDataSoal] = useState({
    title: "",
    category_id: "",
    duration: 0,
    total_question: 0,
  });
  const [categoryName, setCategoryName] = useState({
    name: ""
  });
  const [selectedOptions, setSelectedOptions] = useState<{
    [key: number]: string;
  }>({});
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0); // New state for current question
  const router = useRouter();
  const { id } = params;

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      try {
        const decoded: any = jwtDecode(token);
        const user = decoded.user;
        setName(user.name);
        setPhotoProfile(user.photo_profile);
      } catch (error) {
        console.error("Invalid token:", error);
        setName("");
        setPhotoProfile("");
      }
    }

    if (id) {
      axios
        .get(`http://localhost:3500/api/soali/${id}`)
        .then((response) => {
          setDataSoal(response.data);
          setCategoryName(response.data.category);
          setQuestions(response.data.questions);
        }
      )
        .catch((error) => {
          console.error("Error fetching soal data:", error);
        });
    }
  }, [id]);

  const handleAnswerChange = (questionId: number, selectedOption: string) => {
    setSelectedOptions((prevSelectedOptions) => ({
      ...prevSelectedOptions,
      [questionId]: selectedOption,
    }));
  };

  const handleSubmitAnswers = () => {
    const token = localStorage.getItem("token");
    if (token) {
      try {
        const decoded: any = jwtDecode(token);
        const userId = decoded.user.id;

        const answers = Object.entries(selectedOptions).map(([key, value]) => ({
          question_id: parseInt(key),
          chosen: value,
        }));

        axios
          .post("http://localhost:3500/api/answers", {
            user_id: userId,
            soal_id: id,
            answers,
          })
          .then((response) => {
            alert(`Your score: ${response.data.score}`);
          })
          .catch((error) => {
            console.error("Error submitting answers:", error);
          });
      } catch (error) {
        console.error("Invalid token:", error);
      }
    }
  };

  const nextQuestion = () => {
    setCurrentQuestionIndex((prevIndex) =>
      Math.min(prevIndex + 1, questions.length - 1)
    );
  };

  const previousQuestion = () => {
    setCurrentQuestionIndex((prevIndex) => Math.max(prevIndex - 1, 0));
  };

  const goToQuestion = (index: number) => {
    setCurrentQuestionIndex(index);
  };

  const currentQuestion = questions[currentQuestionIndex];

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center py-8">
      {/* Header */}
      <div className="flex flex-col items-center my-8">
        <div className="w-full max-w-[1000px] rounded-[20px] p-8">
          {/* Title Section */}
          <div className="w-[872px] h-[75px] relative">
            <div className="w-[872px] h-[75px] left-0 top-0 absolute bg-indigo-300 rounded-[20px]" />
            <div className="w-[558px] h-[75px] left-0 top-0 absolute bg-blue-700 rounded-[20px]" />
            <div className="left-[28px] top-[11px] absolute text-white text-xl font-semibold">
              {dataSoal.title} {/* Title */}
            </div>
            <div className="left-[568px] top-[24px] absolute text-white text-xl font-semibold">
              {dataSoal.total_question} Soal {/* Total Question */}
            </div>
            <div className="left-[28px] top-[42px] absolute text-white text-base font-normal">
              Kategori: {categoryName.name} {/* Category ID */}
            </div>
            <div className="left-[766px] top-[23px] absolute text-white text-xl font-semibold">
              {dataSoal.duration} {/* Duration */}
            </div>
          </div>
        </div>
      </div>

      {/* Question */}
      {currentQuestion && (
        <div className="w-full max-w-3xl bg-white shadow-md rounded-lg p-6">
          <h2 className="text-xl font-bold text-gray-800 mb-4">
            Soal {currentQuestionIndex + 1}
          </h2>
          <p className="text-lg font-medium text-gray-700 mb-3">
            {currentQuestion.question}
          </p>
          <div className="grid grid-cols-2 gap-4">
            {currentQuestion.options.map((option: any) => (
              <button
                key={option.id}
                className={`border rounded-lg p-4 text-left transition ${
                  selectedOptions[currentQuestion.id] === option.label
                    ? "border-blue-500 bg-blue-100"
                    : "border-gray-300 bg-white"
                }`}
                onClick={() =>
                  handleAnswerChange(currentQuestion.id, option.label)
                }
              >
                <span className="font-bold">{option.label}.</span>{" "}
                {option.content}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Navigation and Question Numbers */}
      <div className="flex justify-between items-center w-full max-w-3xl mt-6">
        <button
          onClick={previousQuestion}
          className="px-6 py-3 bg-gray-500 text-white font-semibold rounded-lg shadow-md hover:bg-gray-600 transition"
        >
          Previous
        </button>

        {/* Display question numbers */}
        <div className="flex space-x-2">
          {questions.map((_, index) => (
            <button
              key={index}
              onClick={() => goToQuestion(index)}
              className={`px-4 py-2 border rounded-lg ${
                currentQuestionIndex === index
                  ? "bg-blue-500 text-white"
                  : "bg-white text-gray-700 border-gray-300"
              } transition`}
            >
              {index + 1}
            </button>
          ))}
        </div>

        <button
          onClick={nextQuestion}
          className="px-6 py-3 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-600 transition"
        >
          Next
        </button>
      </div>

      {/* Submit Button */}
      {currentQuestionIndex === questions.length - 1 && (
        <button
          onClick={handleSubmitAnswers}
          className="mt-6 px-6 py-3 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-600 transition"
        >
          Submit Answers
        </button>
      )}
    </div>
  );
}
