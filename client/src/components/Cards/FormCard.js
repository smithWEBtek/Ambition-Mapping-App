// Navbar

// Stepper

// Card 

    // "Question" Heading

    // Form

    import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import My12Form from '../InnerComps/My12Form';

const useStyles = makeStyles({
    root: {
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

export default function DirectionCard(props) {
    const classes = useStyles();
    

    return (
        <Card className={classes.root} variant="outlined">
            <CardContent>

                
                <Typography className={classes.title} color="textSecondary" gutterBottom>
                   Title
                </Typography>
                <Typography variant="h5" component="h2">
                 
                </Typography>
                <Typography className={classes.pos} color="textSecondary">
                    
                </Typography>
                <Typography variant="body2" component="p">
                    well meaning and kindly.
          <br />
                    {'"a benevolent smile"'}
                </Typography>
                {/* <My12Form /> */}
            </CardContent>
            <CardActions>
                <Button size="small">Learn More</Button>
            </CardActions>
            <My12Form />
        </Card>
    );
}
