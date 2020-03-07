import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import My12Form from '../InnerComps/My12Form';
import ArrowRightIcon from '@material-ui/icons/ArrowRight';
import DoubleArrowIcon from '@material-ui/icons/DoubleArrow';
import AllQuestions from '../../data/questions.json';

const Part1Card = () => {

    const classes = useStyles();
    const [content, setContent] = useState('directions');
    const [answers, setAnswers] = useState({
        1: null, 2: null, 3: null, 4: null, 5: null, 6: null, 7: null, 8: null, 9: null, 10: null, 11: null, 12: null,
    });
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

    const questions = AllQuestions.negativa

    function handleContentChange(contentToChangeTo) {
        setContent(contentToChangeTo)
    }


    return (
        <>
            {content === 'directions' &&

                <Paper className={classes.root}>

                    <Grid container spacing={3}>

                        <Grid item xs={12} >

                            <Typography className={classes.title} color="textPrimary" gutterBottom>
                                Part 2: Via Positiva
                            </Typography>
                        </Grid>

                        <Grid item xs={12}>
                            <Typography className={classes.body}>
                                <ArrowRightIcon />Write each sentence stem and then immediately finish the sentence. <br></br>
                                <ArrowRightIcon />Do this for each stem 12 times. <br></br>
                                <ArrowRightIcon />Do not worry about spelling, grammar, or repeating yourself. <br></br>
                                <ArrowRightIcon />Do not self-censor. These are for you and nobody else. Follow your gut.
                            </Typography>

                        </Grid>

                        {/* <Grid item xs={6}>

                        </Grid> */}

                        <Grid item xs={12}>
                            <Button
                                onClick={() => handleContentChange('form')}
                                color="light"
                                variant="contained"
                                className={classes.button}
                            >
                                Start Part 2 <DoubleArrowIcon />
                            </Button>
                        </Grid>

                    </Grid>

                </Paper >

            }

            {content === 'form' &&

                <Paper>

                    <Grid container>

                        <Grid item xs={12}>

                            <Typography className={classes.title} color="textPrimary" gutterBottom>
                                Part 2: Via Positiva
                            </Typography>
                        </Grid>

                        <Grid item xs={12} className={classes.form} alignContent="center" justify="center">

                            <My12Form
                                currentQuestion={questions[currentQuestionIndex]}
                                currentQuestionIndex={currentQuestionIndex}
                                answers={answers}
                                setAnswers={setAnswers}
                                setCurrentQuestionIndex={setCurrentQuestionIndex}
                            />


                        </Grid>


                        {/* <Grid item xs={12}>
                            <Button
                                className={classes.button}
                                onClick={() => handleContentChange('directions')}
                            >
                                View Directions
                            </Button>
                        </Grid> */}

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
        paddingLeft: "8%",
        paddingRight: "8%",
    },
    title: {

        paddingBottom: "12px",
        fontSize: 24,
        textAlign: "left",
        marginTop: "35px",
        paddingLeft: "24px"
    },

    body: {

        marginleft: "25px",
        marginRight: "15px",
        textAlign: "left",
        fontSize: 18,
        color: "textSecondary",
        paddingBottom: "12px",
        paddingLeft: "12px"
    },

    pos: {
        marginBottom: 12,
    },

    form: {
        paddingLeft: "25px",
        paddingRight: "25px",
        marginRight: "25px"
    },

    button: {
        marginTop: '20px',
        marginBottom: '20px'
    }

});

export default Part1Card