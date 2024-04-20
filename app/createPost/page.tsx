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
        <input
          className="w-4/12 bg-transparent border border-slate-400 rounded"
          placeholder="Write Your Title"
        />
      </div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <input
          className="w-5/12 bg-transparent border border-slate-400 h-[400px] rounded"
          placeholder="Write Your Poem"
        />
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
