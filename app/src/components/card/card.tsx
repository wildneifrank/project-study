import React from "react";
import { useStyles } from "./card.styles";
import { Box } from "@mui/material";
import clsx from "clsx";

interface CardProps {
  title: string;
  content: string;
  isSelected: boolean;
  onClick?: () => void;
}

const Card: React.FC<CardProps> = (props) => {
  const classes = useStyles();

  return (
    <Box
      className={clsx(classes.card, {
        [classes.cardSelected]: props.isSelected,
      })}
      onClick={props.onClick}
    >
      <Box className={classes.title}>{props.title}</Box>
      <Box className={classes.content}>{props.content}</Box>
    </Box>
  );
};

export default Card;
