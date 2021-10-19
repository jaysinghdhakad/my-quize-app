import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import { useScore } from "../../context/scoreContext";
import { useNavigate } from "react-router";
const useStyles = makeStyles({
  scoreBox: {
    marginTop: "10rem",
    display: "flex",
    justifyContent: "space-between",
    flexDirection: "column",
    alignItems: "center",
  },
  message: {
    fontSize: "4rem",
  },
  score: {
    fontSize: "4rem",
  },
  button: {
    width: "15rem",
    border: "1px solid black",

    fontSize: "2rem",
    padding: "5px",
  },
});
function ScoreBox() {
  const classes = useStyles();
  const { state } = useScore();
  const navigate = useNavigate();
  return (
    <Container className={classes.scoreBox}>
      <Typography className={classes.message}>
        Player name Your score for {state.quize.quizeName} is
      </Typography>
      <Typography className={classes.score}> {state.score} </Typography>
      <Button 
      onClick={()=> navigate("/QuizeMenu")}
      className={classes.button}>Go-back</Button>
    </Container>
  );
}
export default ScoreBox;
