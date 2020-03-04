// Form

    // Input
    // Input
    // Input
    // Input
    // Input
    // Input
    // Input
    // Input
    // Input
    // Input
    // Input
    // Input

    // Button

        // Submits each input to db
        // Attaches userID
        // Attaches question ID
        // sets boolean to false

        import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';


class My12Form extends React.Component {

  state ={
    answers: ["","","", "", "","","", "", "", "", "", ""],

  }

  // update an index in state based on ID // render for loop

  onChange = (e) => {
    this.setState({[e.target.id]: e.target.value})
  }

  onSubmit = (e) => {
    e.preventDefault ();
    console.log(this.state.id);
  }

  render(){

  return (
    <div>
      <form onSubmit={this.onSubmit}> 
        <TextField
          // id={i}
          // label= {i}
          style={{ margin: 8 }}
          margin="normal"
          fullWidth="true"
          InputLabelProps={{
            shrink: true,
          }}
          variant="outlined"
          // value = {this.state.answers[i]}
          onChange = {this.onChange}
        />
      </form>

      <Button
        variant="contained"
        color="primary"
      >
        Submit
                </Button>
    </div>
  );
};}
export default My12Form;

