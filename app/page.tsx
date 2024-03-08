import { Button, Typography } from "@mui/material";
import Main from "@/components/Main";

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
        <div>
          <Button variant="text" style={{ color: "black" }} className="mx-4">
            Sign In
          </Button>
          <Button
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
      </div>
      <Main />
    </div>
  );
}
