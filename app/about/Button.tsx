"use client";

import { useState } from "react";

const Button = () => {
  const [isPrimary, setPrimary] = useState(true);

  const handleClick = async () => {
    setPrimary((prev) => !prev);
    console.log("api routes are not supported when using static export");
    // api routes are not supported when using static export
    /*     const result = await fetch("/api/products", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ id: 1, name: "LabView" }),
    });

    console.log(await result.json()); */
  };

  return (
    <button
      onClick={handleClick}
      style={{ backgroundColor: isPrimary ? "green" : "aliceblue" }}
    >
      Trigger a POST request
    </button>
  );
};

export default Button;
