import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
   heading: {
       marginTop: "10rem",
       textAlign: "center",
       fontSize : "1.7rem"
   }
})

function Warning(){
    const classes = useStyles();
    return (
        <Container >
            <Typography className={classes.heading}>
             Server Error!Please check user-name and password before logging in. Reload to try again
            </Typography>
        </Container>
    )
}
export default Warning;