import { createStyles, makeStyles } from "@mui/styles";
import { Theme } from "@mui/material";

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    card: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      width: "300px",
      padding: "20px",
      backgroundColor: theme.palette.background.paper,
      boxShadow: theme.shadows[3],
      borderRadius: "8px",
      transition: "transform 0.7s ease-in-out",
      "&:hover": {
        transform: "scale(1.05)",
      },
      cursor: "pointer",
    },
    cardSelected: {
      scale: "1.05",
      border: "2px solid black",
      "&:hover": {
        transform: "none",
      },
    },
    title: {
      fontSize: "1.2rem",
      fontWeight: "bold",
      marginBottom: "10px",
    },
    content: {
      fontSize: "1rem",
      color: theme.palette.text.secondary,
      textAlign: "center",
    },
    button: {
      marginTop: "15px",
      backgroundColor: theme.palette.primary.main,
      color: theme.palette.primary.contrastText,
      padding: "10px 20px",
      borderRadius: "5px",
      textTransform: "uppercase",
      "&:hover": {
        backgroundColor: theme.palette.primary.dark,
      },
    },
  })
);
