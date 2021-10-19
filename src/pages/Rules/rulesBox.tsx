import Container from "@material-ui/core/Container";
import clxs from "clsx";

import React from "react";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import { useState } from "react";
import Typography from "@material-ui/core/Typography";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import { useNavigate } from "react-router";
const useStyles = makeStyles({
  RuleBox: {
    marginTop: "8rem",
    width: "60%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  listItem: {
    fontSize: "1.5rem",
  },
  button: {
    display: "block",
    width: "6rem",
    borderRadius: "8px",
    border: "1px solid black",
  },

  heading: {
    fontWeight: "bold",
    fontSize: "2rem",
  },
});
function RulesBox() {
  const classes = useStyles();
  const navigate = useNavigate();
  return (
    <Container className={classes.RuleBox}>
      <Typography className={classes.heading}>
        The following are the rules for the quize
      </Typography>
      <List>
        <ListItem>
          <ListItemIcon>
            <ArrowForwardIosIcon />
          </ListItemIcon>
          <ListItemText>
            <Typography className={classes.listItem}>
              Every question caries 10 points for a right answer and -5 for
              wrong answer.
            </Typography>
          </ListItemText>
        </ListItem>
        <ListItem>
          <ListItemIcon>
            <ArrowForwardIosIcon />
          </ListItemIcon>
          <ListItemText>
            <Typography className={classes.listItem}>
              Every question has to be answered in 10 second else else it will be skipped 
            </Typography>
          </ListItemText>
        </ListItem>
        <ListItem>
          <ListItemIcon>
            <ArrowForwardIosIcon />
          </ListItemIcon>
          <ListItemText>
            <Typography className={classes.listItem}>
              Maximum a score that can be scored on this quize is 100.
            </Typography>
          </ListItemText>
        </ListItem>
        <ListItem>
          <ListItemIcon>
            <ArrowForwardIosIcon />
          </ListItemIcon>
          <ListItemText>
            <Typography className={classes.listItem}>
              skipping a question will not deduct any points 
            </Typography>
          </ListItemText>
        </ListItem>
        {/* <ListItem>
          <ListItemIcon>
            <ArrowForwardIosIcon />
          </ListItemIcon>
          <ListItemText>
            <Typography className={classes.listItem}>
              Every question caries 10 points for a right answer and -5 for
              wrong answer.
            </Typography>
          </ListItemText>
        </ListItem> */}
      </List>
      <Button onClick={() => navigate("/Quize")} className={classes.button}>
        Start
      </Button>
    </Container>
  );
}

export default RulesBox;
