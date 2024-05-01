"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { Button } from "@mui/material";
import { signIn, signOut, useSession } from "next-auth/react";

const Buttons = () => {
  const router = useRouter();
  const session = useSession();
  return (
    <div>
      {session.data?.user == null ? (
        <div>
          <Button
            onClick={async () => {
              const res = await signIn("credentials", {
                username: "",
                password: "",
                redirect: false,
              });
              console.log(res);
              router.push("/poems");
            }}
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
            <div>
              Welcome {JSON.stringify(session.data?.user.email)}{" "}
              <Button
                onClick={() => signOut()}
                variant="contained"
                style={{
                  backgroundColor: "black",
                  color: "white",
                  borderRadius: "20px",
                }}
              >
                Logout
              </Button>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Buttons;
