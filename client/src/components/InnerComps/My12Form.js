
// Submits each input to db
// Attaches userID
// Attaches question ID
// sets boolean to false

import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import SaveTwoToneIcon from '@material-ui/icons/SaveTwoTone';



const My12Form = (props) => {

  const classes = useStyles();

  const questions = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]

  // update an index in state based on ID // render for loop

  const onChange = (e) => {
    props.setAnswers({
      ...props.answers,
      [e.target.name]: e.target.value
    })
  }

  const onSubmit = (e) => {
    e.preventDefault();
    // api to backend
    // props.answers is being saved
    props.setCurrentQuestionIndex(props.currentQuestionIndex + 1)
  }



  return (

    <div>
      <form>
        {questions.map((index) =>

          <TextField
            style={{ margin: 8 }}
            margin="dense"
            fullWidth="true"
            width="75%"
            name={index}
            label={props.currentQuestion}
            size="small"
            value={props.answers[index]}
            onChange={onChange}
          />
        )};
          <Button
          className={classes.button}
          onClick={onSubmit}
          variant="contained"
          color="light"
        >
          Save Sentences {" "} <SaveTwoToneIcon />
        </Button>

      </form>


    </div>
  )
};

const useStyles = makeStyles({

  button: {
    marginTop: "24px",
    marginBottom: "24px"
}

});

export default My12Form;

