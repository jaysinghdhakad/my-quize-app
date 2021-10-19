import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import Button from "@material-ui/core/Button";
import clxs from "clsx";
import { useState } from "react";
import { useScore, ScoreType } from "../../context/scoreContext";
import quize from "../../quize";
import { Question } from "../../quize";
import quizeBoxStyle from "./quizeBoxStyleObject";
import { useNavigate } from "react-router";

const useStyles = makeStyles(quizeBoxStyle);
function QuizeBox() {
  const classes = useStyles();
  const navigate = useNavigate();
  const { state, dispatch } = useScore();
  const [question, setQuestion] = useState<Question>(
    state.quize.questions[state.questionNumber - 1]
  );

  const [style1, setStyle1] = useState([classes.Option]);
  const [style2, setStyle2] = useState([classes.Option]);
  const [style3, setStyle3] = useState([classes.Option]);
  const [style4, setStyle4] = useState([classes.Option]);

  function getTheRightOption() {
    if (state.quize.questions[state.questionNumber - 1].options[0].isRight) {
      setStyle1([classes.Option, classes.rightOption]);
    } else {
      setStyle1([classes.Option, classes.wrongOption]);
    }
    if (state.quize.questions[state.questionNumber - 1].options[1].isRight) {
      setStyle2([classes.Option, classes.rightOption]);
    } else {
      setStyle2([classes.Option, classes.wrongOption]);
    }
    if (state.quize.questions[state.questionNumber - 1].options[2].isRight) {
      setStyle3([classes.Option, classes.rightOption]);
    } else {
      setStyle3([classes.Option, classes.wrongOption]);
    }
    if (state.quize.questions[state.questionNumber - 1].options[3].isRight) {
      setStyle4([classes.Option, classes.rightOption]);
    } else {
      setStyle4([classes.Option, classes.wrongOption]);
    }
  }
  function ScoreEvaluation(option: number) {
    if (
      state.quize.questions[state.questionNumber - 1].options[option].isRight
    ) {
      dispatch({ type: "RIGHT-ANSWER", payload: question.points });
    } else {
      dispatch({ type: "WRONG-ANSWER", payload: question.negativePoints });
    }
    console.log(
      quize.questions[state.questionNumber],
      "this is the next question"
    );
    if (state.questionNumber === 10) {
      navigate("/Score");
    }
    setTimeout(() => {
      dispatch({ type: "NEXT-QUESTION" });
      setQuestion(state.quize.questions[state.questionNumber - 1]);
      setStyle1([classes.Option]);
      setStyle2([classes.Option]);
      setStyle3([classes.Option]);
      setStyle4([classes.Option]);
    }, 1000);
  }
  function nextQuestion() {
    if (state.questionNumber < 10) {
      dispatch({ type: "NEXT-QUESTION" });
      setQuestion(state.quize.questions[state.questionNumber - 1]);
    } else {
      navigate("/Score");
    }
  }
  console.log(state.questionNumber, "this is question  number");
  console.log("this is the question", question);
  return (
    <Container className={classes.quizeBox}>
      <Typography className={classes.question}>
        {state.quize.questions[state.questionNumber - 1]?.question}
      </Typography>
      <List className={classes.OptionList}>
        <Typography
          onClick={() => {
            getTheRightOption();
            ScoreEvaluation(0);
          }}
          className={clxs(style1)}
        >
          {state.quize.questions[state.questionNumber - 1]?.options[0].option}{" "}
        </Typography>
        <Typography
          onClick={() => {
            getTheRightOption();
            ScoreEvaluation(1);
          }}
          className={clxs(style2)}
        >
          {state.quize.questions[state.questionNumber - 1]?.options[1].option}{" "}
        </Typography>
        <Typography
          onClick={() => {
            getTheRightOption();
            ScoreEvaluation(2);
          }}
          className={clxs(style3)}
        >
          {state.quize.questions[state.questionNumber - 1]?.options[2].option}
        </Typography>
        <Typography
          onClick={() => {
            getTheRightOption();
            ScoreEvaluation(3);
          }}
          className={clxs(style4)}
        >
          {state.quize.questions[state.questionNumber - 1]?.options[3].option}
        </Typography>
      </List>
      <Button
        onClick={() => nextQuestion()}
        variant="contained"
        color="secondary"
        className={classes.button}
      >
        Next
      </Button>
    </Container>
  );
}

export default QuizeBox;
