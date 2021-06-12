import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
// import div from '@material-ui/core/div';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Book from '../images/book.jpg';
import EmojiPeopleRoundedIcon from '@material-ui/icons/EmojiPeopleRounded';
import TextField from '@material-ui/core/TextField';
import DoubleArrowIcon from '@material-ui/icons/DoubleArrow';

const onSubmit = (e) => {
  e.preventDefault();
}

export default function WelcomeCard(props) {
  const classes = useStyles();

  return (
    <div>
      <EmojiPeopleRoundedIcon style={{ fontSize: 40 }} />
      <div className={classes.title} color="textPrimary">
        Welcome to the Ambition Mapping App to accompany "How to Get Ahead" by Zak Slayback...
      </div>
      <div className={classes.body}>
        This app assumes you’ve read chapter 1, “Focus,” of the book and is designed for you to follow along with the exercises included in that chapter.
      </div>

      <div className={classes.body}>
        If you have not yet read the book, you can pick up a copy here. These exercises make a lot more sense in the context of the book. I would not suggest doing them without that background.
      </div>
      <form >
        <TextField
          style={{ margin: 8 }}
          margin="normal"
          fullWidth
          label="Input your name to begin Ambition Map..."
          variant="outlined"
          className={classes.input}
        // value={this.state.answers[i]}
        // onChange={}
        />
      </form>
      <Paper className={classes.root} elevation={24}>
        <Grid container spacing={4}>
          <Grid item xs={6}>
            <Button
              onSubmit={onSubmit}
              variant="contained"
              // color="light"
              className={classes.button}
            >
              Start <DoubleArrowIcon />
            </Button>
          </Grid>
          <Grid item xs={6} className={classes.body}>
            <img src={Book} className={classes.responsiveImage}></img>
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
}

const useStyles = makeStyles({
  root: {
    display: "flex",
    flexGrow: 1,
    minWidth: 275,
    paddingLeft: "8%",
    // paddingRight: "5%",
    paddingTop: "5%",
    paddingBottom: "5%"
  },
  title: {

    paddingBottom: "12px",
    fontSize: 24,
    textAlign: "left",
    marginTop: "35px",
    paddingLeft: "12px"
  },

  body: {
    textAlign: "left",
    fontSize: 18,
    color: "textSecondary",
    paddingBottom: "12px",
    paddingLeft: "12px"
  },

  pos: {
    marginBottom: 12,
  },

  responsiveImage: {
    position: "relative",
    maxWidth: "100%",
    display: "block",
  },

  input: {

  },

  button: {
    marginTop: "8px"
  }
});