import { Button, Typography } from "@mui/material";
import Main from "@/components/Main";
import Buttons from "@/components/Home/Buttons";

export default function Home() {
  return (
    <div>
      <div
        style={{ display: "flex", justifyContent: "space-between" }}
        className="border-b-[1px] border-black px-20 py-4"
      >
        <Typography variant="h4" component="h2">
          Poetic Echoes
        </Typography>
        <Buttons />
      </div>
      <Main />
    </div>
  );
}
