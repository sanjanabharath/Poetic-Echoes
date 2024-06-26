"use client";
import React from "react";
import Image from "next/image";
import { Button, Typography } from "@mui/material";
import { signIn, useSession } from "next-auth/react";

const Main = () => {
  const session = useSession();
  return (
    <div className="flex justify-between p-16">
      <div className="m-20">
        <Typography variant="h2" component="h2">
          Turn your Soul into Verse
        </Typography>
        <p className="pt-4">Every human beings is a poet. </p>
        <p>
          Every human beings is a poet. Every innermost being can be a poet.{" "}
        </p>
        <p>
          Every human beings is a poet. Every innermost being can be a poet.
          Every feeling is a poem.{" "}
        </p>
        <Button
          variant="contained"
          className="my-6"
          style={{
            backgroundColor: "black",
            color: "white",
            borderRadius: "20px",
          }}
          onClick={() => signIn()}
        >
          Start Writing
        </Button>
      </div>
      <Image src="/main-bird.jpeg" width={600} height={600} alt="main" />
    </div>
  );
};

export default Main;
