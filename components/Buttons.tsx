"use client";
import React from "react";
import Button from "@mui/material/Button";
import { useRouter } from "next/navigation";
import { createTheme } from "@mui/material";

const Buttons = () => {
  const route = useRouter();
  const { palette } = createTheme();
  const { augmentColor } = palette;
  const createColor = (mainColor: string) =>
    augmentColor({ color: { main: mainColor } });
  const theme = createTheme({
    palette: {
      //@ts-ignore
      dark: createColor("#0000"),
    },
  });
  return (
    <div>
      <Button
        variant="contained"
        style={{ background: "black" }}
        className="mr-3 "
      >
        Post
      </Button>
      <Button
        variant="outlined"
        style={{ borderColor: "black", color: "black" }}
        onClick={() => route.push("/blogs")}
      >
        Back
      </Button>
    </div>
  );
};

export default Buttons;
