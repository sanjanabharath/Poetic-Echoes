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
        <textarea
          placeholder="Write a title of the poem"
          className="h-[50px] w-5/12 bg-transparent border border-slate-400 rounded p-3 mb-4"
        />
      </div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <textarea
          placeholder="Write a Poem"
          className="h-[400px] w-5/12 bg-transparent border border-slate-400 rounded p-4"
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
