import { createTheme } from '@material-ui/core/styles';

const theme = createTheme({
    palette: {
        primary: {
            main : "#af28ffe6"
        },
        secondary: {
            main: "#f8fdff"
        }
    },
    typography :{
        fontFamily :  ['Indie Flower', 'cursive'].join(","),
    }
})

export default theme;