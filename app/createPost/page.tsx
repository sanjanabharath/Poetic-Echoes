import React from "react";
import TextField from "@mui/material/TextField";
import Buttons from "@/components/Buttons";
import { Typography } from "@mui/material";

const Post = () => {
  return (
    <div className="pt-20">
      <div style={{ paddingLeft: "30%", marginTop: "14px" }} className="pb-4">
        <Typography variant="h2">Create Post</Typography>
      </div>

      <div style={{ display: "flex", justifyContent: "center" }}>
        <TextField
          id="outlined-multiline-static"
          label="Title"
          multiline
          style={{ width: "40%" }}
        />
      </div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <input className="w-4/12" />
      </div>
      <div
        style={{ paddingLeft: "30%", marginTop: "14px" }}
        className="space-x-2.5"
      >
        <Buttons />
      </div>
    </div>
  );
};

export default Post;
