import React from "react";

import "./App.css";

import theme from "./theme";
import { ThemeProvider } from "@material-ui/core/styles";
import SignUpPage from "./pages/signUpPage/SignUpPage";
import LogInPage from "./pages/logIn/LoginPage";
import ScorePage from "./pages/ScorePage/ScorePage";
import RulesPage from "./pages/Rules/RulesPage";
import QuizesMenuPage from "./pages/QuizesPage/QuizesMenuPage";
import QuizePage from "./pages/quizePage/QuizePage";
import FrontPage from "./pages/frontPage/frontPage";
import { Routes, Route } from "react-router-dom";
import PrivateRoute from "./comman function/privateRoute";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Routes>
        <Route path="/" element={<FrontPage />} />
        <Route path="/logIn" element={<LogInPage />} />
        <Route path="/signUp" element={<SignUpPage />} />
        <PrivateRoute path="/QuizeMenu" element={<QuizesMenuPage/>}/>
        <PrivateRoute path="/QuizeRules" element={<RulesPage/>}/>
        <PrivateRoute path="/Quize" element={<QuizePage/>}/>
        <PrivateRoute path="/Score" element={<ScorePage/>}/>
     
      </Routes>
    </ThemeProvider>
  );
}

export default App;
