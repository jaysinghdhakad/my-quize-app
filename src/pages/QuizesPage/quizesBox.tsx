import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core/styles";
import CardMedia from "@material-ui/core/CardMedia";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import quizesBoxStyle from "./quizesBoxStyleObject";
import { useEffect, useState } from "react";
import getThequizeFromServer from "../../comman function/getTheQuizes";
import { useAuthentication } from "../../context/autenticationContext";
import { useScore } from "../../context/scoreContext";
import { useNavigate } from "react-router";
const useStyles = makeStyles(quizesBoxStyle);

function QuizesBox() {
  const { Token } = useAuthentication();
  const navigate = useNavigate();
  const { state: scoreState, dispatch: scoreDispatch } = useScore();

  console.log("this is the token at the quize menu", { Token });
  useEffect(() => {
    (async () => {
      const response = await getThequizeFromServer(Token);
      console.log({ response }, "this is the response from the server ");
      scoreDispatch({ type: "SET-QUIZES-DATA", payload: response });
    })();
  }, []);

  const classes = useStyles();
  function selectQuize(quize: any) {
    console.log({ quize }, "this is the quize selected at the page ");
    scoreDispatch({ type: "SELECT-QUIZE", payload: quize });
    navigate("/QuizeRules");
  }
  return (
    <Container className={classes.quizeBox}>
      <Typography className={classes.quizeHeading}>
        Choose among the following quizes
      </Typography>
      <Container className={classes.quizeMenu}>
        {scoreState.quizes.map((quize) => {
          return (
            <Card
              onClick={() => selectQuize(quize)}
              className={classes.quizeCard}
            >
              <CardMedia
                image={quize.quizeImage}
                className={classes.Image}
              ></CardMedia>
              <CardContent className={classes.quizeTitle}>
                {quize.quizeName}
              </CardContent>
            </Card>
          );
        })}
      </Container>
    </Container>
  );
}
export default QuizesBox;
