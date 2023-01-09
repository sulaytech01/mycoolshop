import { Button } from "@mui/material";
import { Link as MUILink } from "@mui/material";
import { Link } from "react-router-dom";

const NotFound = () => (
  <div style={{ background: "#fff" }}>
    <div
      style={{
        margin: "auto",
        display: "flex",
        flexFlow: "column",
        gap: "16px",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "wrap",
        height: "100vh",
      }}
    >
      <span
        style={{
          color: "#7C5FDA",
          fontStyle: "italic",
          fontWeight: "bold",
          fontSize: "60px",
        }}
      >
        404
      </span>
      <h1>Oops, This Page Could Not Be Found.</h1>
      <p style={{ textAlign: "center" }}>
        The page you are looking for might have been removed had its <br />
        <span>name changed or is temporarily unavailable</span>
      </p>
      <MUILink component={Link} to="/">
        <Button
          style={{
            backgroundColor: "#7C5FDA",
            fontWeight: "bold",
            fontSize: "14px",
          }}
          variant="contained"
        >
          Back
        </Button>
      </MUILink>
    </div>
  </div>
);

export default NotFound;
