import React from "react";
import { Button } from "@mui/material";
import EditNoteIcon from "@mui/icons-material/EditNote";
import Search from "@/components/Search";
import Logo from "@/components/Logo";
const Blogs = () => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <div style={{ display: "flex", alignItems: "center" }}>
        <Logo />
        <Search />
      </div>
      <div>
        <Button variant="contained" startIcon={<EditNoteIcon />}>
          Send
        </Button>
      </div>
    </div>
  );
};

export default Blogs;
