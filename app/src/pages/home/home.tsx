import { Box, Button, TextField } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import React, { useState } from "react";
import { useStyles } from "./home.styles";
import { cardData } from "mock/data";
import Card from "components/card/card";

const Home: React.FC = () => {
  const classes = useStyles();
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  return (
    <Box className={classes.home}>
      <Box className={classes.title}>Where are we going this reveillon?</Box>
      <Box className={classes.search}>
        <TextField
          className={classes.textField}
          id={"outlined-search"}
          label={"Write a new option"}
          type={"search"}
          autoComplete={"off"}
        />
        <Button
          className={classes.button}
          variant={"outlined"}
          color={"primary"}
        >
          Submit
        </Button>
      </Box>

      <Box className={classes.cardsList}>
        {cardData.map((card, index) => (
          <Card
            isSelected={selectedOption === index}
            content={card.content}
            title={card.title}
            key={index}
            onClick={() => {
              setSelectedOption(index);
            }}
          />
        ))}
      </Box>
      <Button
        className={classes.sendButton}
        variant={"contained"}
        endIcon={<SendIcon />}
      >
        Send Vote
      </Button>
    </Box>
  );
};

export default Home;
