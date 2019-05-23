import React from 'react'
import PropTypes from 'prop-types'

import withStyles from '@material-ui/core/styles/withStyles'

import Typography from '@material-ui/core/Typography'

function Slide4({ classes }) {
    return (
        <>
            <Typography
                variant="subtitle1"
                color="secondary"
            >
                ... and last but not least
            </Typography>
            <Typography
                variant="h1"
                gutterBottom
                color="secondary"
                className={classes.title}
            >
                How to signal for help in winter
            </Typography>

            <Typography
                variant="body1"
                gutterBottom
            >
                The best methods are the same year round: fires, flares, or things like large branches spelling out V or X in an open clearing.
            </Typography>
            <img
                src="/img/need-beer.jpg"
                alt="help, I need some beer"
                className={classes.image}
            />
            <Typography
                variant="body1"
                gutterBottom
            >
                Snow can be useful, but isn’t as preferable.
                You can try stomping out a message in the snow.
                Try to get down to dark earth and/or fill it with debris so the letters have a higher contrast against the snow.
                Or create snow mounds against darker color earth.
            </Typography>
        </>
    )
}

Slide4.propTypes = {
    classes: PropTypes.object.isRequired,
}

export default withStyles(() => ({
    image: {
        width: 480,
    },
    title: {
        fontSize: '2rem',
    },
}), { withTheme: true })(Slide4)
