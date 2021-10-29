import { Button, Grid, Box, Paper, Typography } from "@mui/material";
import React, { useState } from "react";
import "./App.css";
import MenuAppBar from "./components/AppBar";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [questions, setQuestion] = useState([
    {
      id: 1,
      question: "React is mainly used for building ___.",
      option: ["Database", "Conectivity", "User Interface", "Design Platform"],
      answer: "User Interface",
    },
    {
      id: 2,
      question: "React.js is a free and open-source front-end ...",
      option: [
        "JavaScript library",
        " Bootstrap library",
        "CSS library",
        " None of the Above",
      ],
      answer: "JavaScript library",
    },
    {
      id: 3,
      question: "React.js was Initially released in ...",
      option: [
        "May 29, 2013",
        "April 29, 2013",
        " June 29, 2013",
        " May 29, 2014",
      ],
      answer: "May 29, 2013",
    },
    {
      id: 4,
      question: " React.js had Written in ........",
      option: ["JavaScript", " Python", " Java", " Php"],
      answer: "JavaScript",
    },
    {
      id: 5,
      question: "............ is used in React.js to increase performance?",
      option: [
        "Virtual DOM",
        "Original DOM",
        " Both above",
        "Nove of the Above",
      ],
      answer: "Virtual DOM",
    },
    {
      id: 6,
      question: "What is Babel?",
      option: [
        "JavaScript transpiler",
        "JavaScript Compiler",
        "JavaScript interpreter",
        " None of the above",
      ],
      answer: "JavaScript Compiler",
    },
    {
      id: 7,
      question: "Which of the following command is used to create a react app?",
      option: [
        "install -g create-react-app",
        "npm install create-react-app",
        "npm install -g create-react-app",
        " None of the Above",
      ],
      answer: "npm install create-react-app",
    },
    {
      id: 8,
      question:
        "........... port is the default where the webpack-dev-server will run.",
      option: [" 3030", " 8080", "3306", " 3000"],
      answer: " 8080",
    },
    {
      id: 9,
      question: "A valid react component can return only ......... element.",
      option: [2, 3, 1, 4],
      answer: 1,
    },
    {
      id: 10,
      question: "A state in React.js is also known is ........",
      option: [
        "permanent storage.",
        "Internal storage of the component.",
        "External storage of the component.",
        " All of the above",
      ],
      answer: "Internal storage of the component.",
    },
  ]);
  const [questionInd, setQuestionInd] = useState(0);
  const [marks, setMarks] = useState(0);
  const [showResult, setShowResult] = useState(false);

  const CheckAnswer = (CAns, e) => {
    // disable envent fire after user click any of them options by disabled="true" just for practice
    if (CAns === e) {
      setMarks(marks + 1);
    }
    setQuestionInd(questionInd + 1);
    NextQuestion();
    console.log(marks);
  };
  const NextQuestion = () => {
    if (questions.length - 1 === questionInd) {
      setShowResult(true);
    } else {
      setQuestionInd(questionInd + 1);
    }
  };

  return (
    <div className="App">
      <MenuAppBar />
      <Grid md={12}>
        <Typography variant="h3">
          {showResult ? (
            <Box>
              <Paper className="p-5" elevation={3}>
                <Typography variant="h6">
                  Marks: {(marks / questions.length) * 100}%
                </Typography>
              </Paper>
            </Box>
          ) : (
            <Grid container="true" item md={12}>
              <Grid item md={12} className="mt-5">
                <Typography variant="h6">
                  {questions[questionInd].question}
                </Typography>
              </Grid>
              {questions[questionInd].option.map((e, i) => (
                <Grid item md={6} className="mt-5">
                  <Button
                    variant="contained"
                    onClick={() =>
                      CheckAnswer(questions[questionInd].answer, e)
                    }
                    key={i}
                  >
                    {e}
                  </Button>
                </Grid>
              ))}
              <Grid container="true" className="mt-5">
                <Grid item md={12}>
                  <Button
                    variant="outlined"
                    onClick={() => {
                      setQuestionInd(questionInd + 1);
                      NextQuestion();
                    }}
                  >
                    Next
                  </Button>
                </Grid>
              </Grid>
            </Grid>
          )}
        </Typography>
      </Grid>
    </div>
  );
}

export default App;
