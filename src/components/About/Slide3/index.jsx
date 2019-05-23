import React from 'react'
import PropTypes from 'prop-types'

import withStyles from '@material-ui/core/styles/withStyles'

import Typography from '@material-ui/core/Typography'

function Slide3({ classes }) {
    return (
        <>
            <Typography
                variant="h1"
                gutterBottom
                color="secondary"
                className={classes.title}
            >
                What is frostbite?
            </Typography>

            <Typography
                variant="body1"
                gutterBottom
            >
                Where hypothermia is about your internal temperature dropping,&nbsp;
                <strong>
                    frostbite is more about your external cells
                </strong>
                .
            </Typography>
            <Typography
                variant="body1"
                gutterBottom
            >
                Frostbite occurs when skin or body tissue is damaged from freezing. Ice crystals form in and around cells, and if it gets bad enough, those parts of your body will die and might need to be amputated.
            </Typography>
            <Typography
                variant="body1"
                gutterBottom
            >
                That’s why frostbite is most likely to happen in body parts that are furthest away from your heart, like your fingers, toes, cheeks, ears, and nose.
                The further from your heart, the less internal warmth those cells get from pumped blood. Partly due to distance, and partly because your body will protect its core organs but constricting blood vessels further away.
            </Typography>
        </>
    )
}

Slide3.propTypes = {
    classes: PropTypes.object.isRequired,
}

export default withStyles(() => ({
    title: {
        fontSize: '2rem',
    },
}), { withTheme: true })(Slide3)
