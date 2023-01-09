import { Link } from "react-router-dom";
import { ErrorBoundary as Boundary } from "react-error-boundary";
import { Box, Typography, Link as MUILink, Button } from "@mui/material";

const FallbackComponent = ({ error, resetErrorBoundary }) => {
  return (
    <Box
      sx={{
        p: 3,
        height: "90vh",
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
        justifyContent: "center",
      }}
    >
      <Typography variant="h5">Looks like something went wrong!</Typography>
      <Box component="pre">{error.message}</Box>
      <Typography variant="body2">
        We track these errors automatically, but if the problem persists feel
        free to <span className={"cursor-pointer"}>contact us</span>. In the
        meantime, try refreshing.
      </Typography>
      <Typography variant="body2" sx={{ my: 1 }}>
        If the problem persists, reach us on{" "}
        <MUILink href="mailto:support@mycoolshop.com">
          mailto:support@mycoolshop.com
        </MUILink>
      </Typography>
      <Button onClick={resetErrorBoundary}>Try again</Button>
      <Box sx={{ my: 1 }}>OR</Box>
      <Typography variant="body2" sx={{ my: 1 }}>
        Go Back to{" "}
        <MUILink component={Link} to="/">
          Home Page
        </MUILink>
      </Typography>
    </Box>
  );
};

const ErrorBoundary = ({ children }) => {
  return <Boundary FallbackComponent={FallbackComponent}>{children}</Boundary>;
};

export default ErrorBoundary;
