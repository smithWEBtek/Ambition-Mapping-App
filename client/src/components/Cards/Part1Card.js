import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import My12Form from '../InnerComps/My12Form';

const Part1Card = () => {

    const classes = useStyles();
    const [content, setContent] = useState('directions');

    function handleContentChange(contentToChangeTo) {
        setContent(contentToChangeTo)
    }

    return (
        <>
            {content === 'directions' &&

                <Paper>

                    <Grid container>

                        <Grid item xs={12}>

                            <Typography className={classes.title} color="textPrimary" gutterBottom>
                                Part 1: Via Negativa
                            </Typography>
                        </Grid>

                        <Grid item xs={6}>
                            <Typography className={classes.body}>
                                Write each sentence stem and then immediately finish the sentence. Do this for each stem 12 times. Do not worry about spelling, grammar, or repeating yourself. Do not self-censor. These are for you and nobody else. Follow your gut.
                            </Typography>

                        </Grid>

                        <Grid item xs={6}>

                        </Grid>

                        <Grid item xs={12}>
                            <Button
                                onClick={()=>handleContentChange('form')}
                            >
                                Next
                            </Button>
                        </Grid>

                    </Grid>

                </Paper >

            };

            {content === 'form' &&

                <Paper>

                    <Grid container>

                        <Grid item xs={12}>

                            <Typography className={classes.title} color="textPrimary" gutterBottom>
                                Part 1: Via Negativa
                            </Typography>
                        </Grid>

                        <Grid item xs={12} className={classes.form} alignContent="center" justify="center">
                            
                                <My12Form />
                            

                        </Grid>

                    
                        <Grid item xs={12}>
                            <Button
                                onClick={()=>handleContentChange('directions')}
                            >
                                Directions
                            </Button>
                        </Grid>

                    </Grid>

                </Paper >


            }

        </>
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

    form: {
        paddingLeft: "25px",
        paddingRight: "25px",
    }

});

export default Part1Card