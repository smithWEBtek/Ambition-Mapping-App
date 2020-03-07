import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Book from '../images/book.jpg';
import EmojiPeopleRoundedIcon from '@material-ui/icons/EmojiPeopleRounded';


export default function WelcomeCard(props) {
    const classes = useStyles();


    return (
        <Paper className={classes.root} variant="outlined">


            <Grid container spacing={4}>
                <Grid item xs={6}>
                    <EmojiPeopleRoundedIcon style={{ fontSize: 40 }} />
                    <Typography className={classes.title} color="textPrimary" gutterBottom>
                        Welcome to the Ambition Mapping App to accompany "How to Get Ahead" by Zak Slayback...
                        </Typography>
                    <Typography className={classes.body}>
                        This app assumes you’ve read chapter 1, “Focus,” of the book and is designed for you to follow along with the exercises included in that chapter.
                        </Typography>
        
                    <Typography className={classes.body}>
                        If you have not yet read the book, you can pick up a copy here. These exercises make a lot more sense in the context of the book. I would not suggest doing them without that background.
                        </Typography>
                </Grid>

                <Grid item xs={6} className={classes.body}>

                    <img src={Book} className={classes.responsiveImage}></img>

                </Grid>


            </Grid>

            {/* <CardActions>
                <Button size="small">Learn More</Button>
            </CardActions> */}

        </Paper>
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

        paddingBottom: "25px",
        fontSize: 24,
        textAlign: "left",
        marginTop: "35px"
    },

    body: {
        textAlign: "left",
        fontSize: 18,
        color: "textSecondary",
        paddingBottom: "12px",
    },

    pos: {
        marginBottom: 12,
    },

    responsiveImage: {
        position: "relative",
        maxWidth: "100%",
        display: "block",
    },

    gridCol: {}
});