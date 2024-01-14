"use client";

// import { useState } from "react";

// const AddWineTest = () => {
//   const [wineName, setWineName] = useState("Pinot Noir");
//   const [wineYear, setWineYear] = useState("2016");
//   const [wineType, setWineType] = useState("Red");
//   const [wineVarietal, setWineVarietal] = useState("Shiraz");
//   const [wineRating, setWineRating] = useState("");
//   const [wineConsumed, setWineConsumed] = useState<boolean>(true);
//   const [wineDateConsumed, setWineDateConsumed] = useState("22 May 2023");

//   const handleWine = async () => {
//     try {
//       const response = await fetch("http://localhost:3000/api/add-wine", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({
//           wineName,
//           wineYear,
//           wineType,
//           wineVarietal,
//           wineRating,
//           wineConsumed,
//           wineDateConsumed,
//         }),
//       });

//       if (response.ok) {
//         const data = await response.json();
//         console.log("Wine added successfully:", data);
//       } else {
//         console.log("Failed to add wine:", response.statusText);
//       }
//     } catch (error) {
//       console.error("Error adding wine:", error);
//     }
//   };

//   return (
//     <div className=" w-full h-screen bg-black flex justify-center items-center px-24 py-10">
//       {/* <form
//         action=""
//         className="flex flex-col w-11/12 lg:w-6/12 h-5/6 bg-neutral-700/40 rounded-md"
//       >
//         <input type="text" />
//       </form> */}
//       <button
//         onClick={handleWine}
//         className=" w-fit px-4 py-2 text-black bg-white rounded-md text-2xl"
//       >
//         Submit Wine
//       </button>
//     </div>
//   );
// };

// export default AddWineTest;

// import { useState } from "react";

// const AddWineTest = () => {
//   const [wineName, setWineName] = useState("Pinot Noir");
//   // Parse wineYear to an integer
//   const [wineYear, setWineYear] = useState(2016);
//   const [wineType, setWineType] = useState("Red");
//   const [wineVarietal, setWineVarietal] = useState("Shiraz");
//   const [wineRating, setWineRating] = useState("");
//   // Set wineConsumed directly as a boolean
//   const [wineConsumed, setWineConsumed] = useState(true);
//   const [wineDateConsumed, setWineDateConsumed] = useState("22 May 2023");

//   const handleWine = async () => {
//     try {
//       // Convert wineYear to string for consistent data types
//       const response = await fetch("http://localhost:3000/api/add-wine", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({
//           wineName,
//           wineYear: wineYear.toString(),
//           wineType,
//           wineVarietal,
//           wineRating,
//           wineConsumed,
//           wineDateConsumed,
//         }),
//       });

//       if (response.ok) {
//         const data = await response.json();
//         console.log("Wine added successfully:", data);
//       } else {
//         console.log("Failed to add wine:", response.statusText);
//       }
//     } catch (error) {
//       console.error("Error adding wine:", error);
//     }
//   };

//   return (
//     <div className=" w-full h-screen bg-black flex justify-center items-center px-24 py-10">
//       <button
//         onClick={handleWine}
//         className=" w-fit px-4 py-2 text-black bg-white rounded-md text-2xl"
//       >
//         Submit Wine
//       </button>
//     </div>
//   );
// };

// export default AddWineTest;

import { useState } from "react";

const AddWineTest = () => {
  const [wineName, setWineName] = useState("Cabernet Sauvignon");
  const [wineYear, setWineYear] = useState(2019);
  const [wineType, setWineType] = useState("Red");
  const [wineVarietal, setWineVarietal] = useState("Cabernet Sauvignon");
  const [wineRating, setWineRating] = useState("4.5"); //I NEED A 1 TO 5 FLOAT NUMBER HERE ===> CHECK!!
  const [wineConsumed, setWineConsumed] = useState(true);
  const [wineDateConsumed, setWineDateConsumed] = useState("2023-05-22");

  const handleWine = async () => {
    try {
      const response = await fetch("http://localhost:3000/api/add-wine", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          wineName,
          wineYear: wineYear.toString(),
          wineType,
          wineVarietal,
          wineRating,
          wineConsumed,
          wineDateConsumed,
        }),
      });

      if (response.ok) {
        const data = await response.json();
        console.log("Wine added successfully:", data);
      } else {
        console.log("Failed to add wine:", response.statusText);
      }
    } catch (error) {
      console.error("Error adding wine:", error);
    }
  };

  return (
    <div className=" w-full h-screen bg-black flex justify-center items-center px-24 py-10">
      <button
        onClick={handleWine}
        className=" w-fit px-4 py-2 text-black bg-white rounded-md text-2xl"
      >
        Submit Wine
      </button>
    </div>
  );
};

export default AddWineTest;
