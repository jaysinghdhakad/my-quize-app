import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { useAuthentication } from "../../context/autenticationContext";
import { useNavigate } from "react-router";
import Warning from "./warning";
const useStyles = makeStyles({
  logInBox: {
    marginTop: "10rem",
    border: "1px solid black",
    height: "50%",
    width: "30%",
    borderRadius: "20px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "20px",
  },
  heading: {
    fontSize: "2rem",
    marginBottom: "0.5rem",
  },
  subHeading: {
    fontSize: "1.5rem",
    marginBottom: "0.5rem",
  },
  button: {
    fontSize: "1.5rem",
    height: "3rem",
    padding: "5px",
    width: "6rem",
    border: "1px solid black",
    marginBottom: "0.5rem",
    marginTop: "0.5rem",
  },
  signUpButton : {
    fontSize : "1.4rem"
  }
});
function LogInBox() {
  const [warning,setWarning] = useState<boolean>(false);
  const [userName, setUserName] = useState<string>();
  const [password,setPassword] = useState<string>();
  const {logInUser} = useAuthentication();
  const navigate = useNavigate();
  const classes = useStyles();
  async function getUserLoggedIn(){
   const response = await  logInUser(userName,password);
   
   if(!response.flag){
     console.log("is this working")
     setWarning(true)
   }else{
    navigate("/QuizeMenu")
   }
   
 
  }
  return (warning ? <Warning/> :
    <Container className={classes.logInBox}>
      <Typography className={classes.heading}>LogIn</Typography>

      <Typography className={classes.subHeading}>username</Typography>
      <TextField
      onChange={(e)=>setUserName(e.target.value)}
      ></TextField>
      <Typography className={classes.subHeading}>password</Typography>
      <TextField
      onChange={(e)=>setPassword(e.target.value)}
      ></TextField>
      <Button className={classes.button}
      onClick={()=>getUserLoggedIn()}
      >Submit</Button>
      <Button 
      className={classes.signUpButton}
      onClick={()=>navigate("/signUp")}
      >Sign-Up</Button>
    </Container>
  );
}

export default LogInBox;
