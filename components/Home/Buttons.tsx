"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { Button } from "@mui/material";
import { useSession } from "next-auth/react";

const Buttons = () => {
  const route = useRouter();
  const session = useSession();
  return (
    <div>
      {session.data?.user == null ? (
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
      ) : (
        <div>
          {session.data?.user && (
            <div>Welcome {JSON.stringify(session.data?.user.email)}</div>
          )}
        </div>
      )}
    </div>
  );
};

export default Buttons;
