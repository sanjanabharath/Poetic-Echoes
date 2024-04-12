import React from "react";
import { Button, Avatar } from "@mui/material";
import EditNoteIcon from "@mui/icons-material/EditNote";
import Search from "@/components/Search";
import Logo from "@/components/Logo";
import { IoIosNotifications } from "react-icons/io";
import Posts from "@/components/Posts";
const Blogs = () => {
  return (
    <div>
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
        <div style={{ display: "flex", margin: "30px" }}>
          <Button
            variant="contained"
            startIcon={<EditNoteIcon />}
            style={{ backgroundColor: "black", color: "white" }}
          >
            Send
          </Button>
          <IoIosNotifications
            size={30}
            color="black"
            style={{ margin: " auto 16px " }}
          />
          <Avatar src="/avatar.jpg" />
        </div>
      </div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <Posts />
      </div>
    </div>
  );
};

export default Blogs;
