"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { Button } from "@mui/material";

const Buttons = () => {
  const route = useRouter();
  return (
    <div>
      <Button
        onClick={() => route.push("/signin")}
        variant="text"
        style={{ color: "black" }}
        className="mx-4"
      >
        Sign In
      </Button>
      <Button
        onClick={() => route.push("/signup")}
        variant="contained"
        style={{
          backgroundColor: "black",
          color: "white",
          borderRadius: "20px",
        }}
      >
        Get Started
      </Button>
    </div>
  );
};

export default Buttons;
