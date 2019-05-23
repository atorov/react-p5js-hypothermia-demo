import React from 'react'
import PropTypes from 'prop-types'

import withStyles from '@material-ui/core/styles/withStyles'

import Typography from '@material-ui/core/Typography'

function Slide2({ classes }) {
    return (
        <>
            <Typography
                variant="h1"
                gutterBottom
                color="secondary"
                className={classes.title}
            >
                Diagnosing hypothermia symptoms
            </Typography>

            <Typography
                variant="body1"
                gutterBottom
            >
                One of the scariest things about hypothermia is that&nbsp;
                <strong>
                    it is difficult to self-diagnose
                </strong>
                . The line between simply being cold and hypothermic depends on things like mental clarity. If you’re starting to lose it, you might not know it.
            </Typography>
            <Typography
                variant="body1"
                gutterBottom
            >
                Hypothermia symptoms: uncontrollable shivering, or worse, a complete lack of shivering impulse;
                drowsiness, lethargy, shallow breathing, weak pulse;
                poor coordination, stumbling, can’t do basic hand gestures;
                confusion, incoherence, slurred speech, irrational thoughts and behavior;
                change in attitude and unreasonably irritable behavior.
            </Typography>
            <Typography
                variant="body1"
                gutterBottom
            >
                Your body shivers to create warmth. Normally you can override that impulse with your willpower, but once you can’t stop it anymore, that’s your body’s way of telling you something is super wrong.
            </Typography>
        </>
    )
}

Slide2.propTypes = {
    classes: PropTypes.object.isRequired,
}

export default withStyles(() => ({
    title: {
        fontSize: '2rem',
    },
}), { withTheme: true })(Slide2)
