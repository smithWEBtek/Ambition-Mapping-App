// Image

// Description

// Links

// Start Button

//Navbar

//Stepper

//Card

// Title

// Directions

// Next Button

import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import GridItem from '@material-ui/core/Grid';


export default function WelcomeCard(props) {
    const classes = useStyles();


    return (
        <Card className={classes.root} variant="outlined">

            <CardContent>
                <Typography className={classes.title} color="textPrimary" gutterBottom>
                    <p></p>Welcome to the Ambition Mapping App<br></br> to accompany "How to Get Ahead" by Zak Slayback
                        </Typography>
                <Typography className={classes.body}>
                    This workbook assumes you’ve read chapter 1, “Focus,” of the book and is designed for you to follow along with the exercises included in that chapter.
                        </Typography>
                <Typography className={classes.body}>
                    As such, this workbook does not include background or explanations of the exercises. You also do not need to use this workbook if you prefer just to do the exercises in the book on your own notebook or word processor.
                        </Typography>
                <Typography className={classes.body}>
                    If you have not yet read the book, you can pick up a copy here. These exercises make a lot more sense in the context of the book. I would not suggest doing them without that background.
                        </Typography>
                <Typography className={classes.body}>
                    If you would like to use Ambition Mapping in your school,  organization, or corporation, please email me here.
                        </Typography>

                <Typography className={classes.body}>
                    If you enjoy sentence completion exercises, I recommend checking out Nathaniel Branden’s works. You can learn more about his works at NathanielBranden.com.
                        </Typography>



                <Typography className={classes.body}>
                    testing
                        </Typography>



            </CardContent>
            {/* <CardActions>
                <Button size="small">Learn More</Button>
            </CardActions> */}

        </Card>
    );
}

const useStyles = makeStyles({
    root: {
        display: "flex",
        flexGrow: 1,
        minWidth: 275,
        paddingLeft: "10%",
        paddingRight: "10%",
    },
    title: {

        paddingBottom: "25px",
        fontSize: 24,
    },

    body: {
        textAlign: "left",
        fontSize: 14,
        color: "textSecondary",
        paddingBottom: "12px",
    },

    pos: {
        marginBottom: 12,
    },
});