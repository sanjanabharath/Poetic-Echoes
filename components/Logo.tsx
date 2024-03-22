import React from "react";
import { Typography } from "@mui/material";

const Logo = () => {
  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "flex-start",
          padding: "20px",
        }}
      >
        <img
          src={"/poetic.svg"}
          alt={"logo"}
          style={{ width: "30px", margin: "auto 10px" }}
        />
        <Typography variant={"h5"}>Poetic Echoes</Typography>
      </div>
    </div>
  );
};

export default Logo;
