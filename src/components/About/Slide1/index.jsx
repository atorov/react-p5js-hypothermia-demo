import React from 'react'
import PropTypes from 'prop-types'

import withStyles from '@material-ui/core/styles/withStyles'

import Typography from '@material-ui/core/Typography'

function Slide1({ classes }) {
    return (
        <>
            <Typography
                variant="h1"
                gutterBottom
                color="secondary"
                className={classes.title}
            >
                What is hypothermia and how do you treat it?
            </Typography>

            <Typography
                variant="body1"
                gutterBottom
            >
                Hypothermia is when your body’s core temperature drops below&nbsp;
                <strong>
                    35°C (95F)
                </strong>
                &nbsp;, which causes your vital systems to shut down. This happens when your body loses heat faster than it’s produced.
            </Typography>
            <Typography
                variant="body1"
                gutterBottom
            >
                Hypothermia is most likely at freezing temperatures, but it can happen in cool temperatures up to&nbsp;
                <strong>
                    10°C (50F)
                </strong>
                &nbsp;, especially if you get chilled from sweat, rain, or submersion in cold water.
            </Typography>
            <Typography
                variant="body1"
                gutterBottom
            >
                Hypothermia can even happen in the desert. Low nighttime temperatures take people by surprise. Wet clothing from exertion in the heat makes things worse.
            </Typography>
        </>
    )
}

Slide1.propTypes = {
    classes: PropTypes.object.isRequired,
}

export default withStyles(() => ({
    title: {
        fontSize: '2rem',
    },
}), { withTheme: true })(Slide1)
