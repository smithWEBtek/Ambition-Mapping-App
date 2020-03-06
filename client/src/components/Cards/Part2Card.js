import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

const Part2Card = () => {

    const classes = useStyles();
    const [content, setContent] = useState('directions');

    return (


        <Paper>

            <Grid container>

                <Grid item xs={12}>

                    <Typography className={classes.title} color="textPrimary" gutterBottom>
                        Part 2: Via Positiva
                </Typography>
                </Grid>

                <Grid item xs={6}>
                    <Typography className={classes.body}>
                        Write each sentence stem and then immediately finish the sentence. Do this for each stem 12 times. Do not worry about spelling, grammar, or repeating yourself. Do not self-censor. These are for you and nobody else. Follow your gut.
                    </Typography>

                </Grid>

                <Grid item xs={6}>

                </Grid>

            </Grid>

        </Paper >


    );
};

const useStyles = makeStyles({
    root: {
        display: "flex",
        flexGrow: 1,
        minWidth: 275,
        // paddingLeft: "10%",
        // paddingRight: "10%",
    },
    title: {

        paddingBottom: "25px",
        paddingTop: "15px",
        fontSize: 24,
        textAlign: "center",
    },

    body: {

        marginleft: "25px",
        marginRight: "15px",
        textAlign: "center",
        fontSize: 14,
        color: "textSecondary",
        paddingBottom: "12px",
    },

    pos: {
        marginBottom: 12,
    },

});

export default Part2Card