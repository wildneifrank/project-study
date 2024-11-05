import { createStyles, makeStyles } from "@mui/styles";
import { Theme } from "@mui/material";

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    home: {
      width: "100%",
      height: "98vh",
      display: "flex",
      flexDirection: "column",
      gap: "32px",
      justifyContent: "center",
      alignItems: "center",
      overflow: "hidden",
      boxSizing: "border-box",
    },
    title: {
      fontSize: "64px",
      fontWeight: "bold",
    },
    cardsList: {
      width: "100%",
      height: "auto",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      gap: "32px",
    },
    search: {
      width: "50%",
      display: "flex",
      flexDirection: "row",
      gap: "32px",
    },
    button: {
      flex: 1,
      padding: "10px 20px",
      fontSize: "16px",
      fontWeight: "bold",
      "&:hover": {
        backgroundColor: "black",
        color: "white",
      },
      borderRadius: "8px",
      transition: "transform 0.7s ease-in-out",
    },
    sendButton: {
      "&:hover": {
        backgroundColor: "black",
      },
    },
    textField: {
      width: "80%",
      "& label": {
        color: "black",
      },
      "& label.Mui-focused": {
        color: "black",
      },
      "& .MuiInput-underline:after": {
        borderBottomColor: "black",
      },
      "& .MuiOutlinedInput-root": {
        "& fieldset": {
          borderColor: "black", // Default border color
        },
        "&:hover fieldset": {
          borderColor: "black", // Hover border color
        },
        "&.Mui-focused fieldset": {
          borderColor: "black", // Focus border color
        },
      },
    },
  })
);
