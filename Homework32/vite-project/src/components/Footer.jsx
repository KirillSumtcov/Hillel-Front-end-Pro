import { Box, Typography, Link } from "@mui/material";

function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        bgcolor: "primary.main",
        color: "white",
        p: 2,
        mt: "20px",
      }}
    >
      <Typography variant="body1">
        Email:{" "}
        <Link href="mailto:kirillsumcov14@gmail.com" color="inherit" mr={3}>
          kirillsumcov14@gmail.com
        </Link>
        Tel:{" "}
        <Link href="tel:kirillsumcov14@gmail.com" color="inherit">
          +380663318469
        </Link>
      </Typography>
    </Box>
  );
}

export default Footer;
