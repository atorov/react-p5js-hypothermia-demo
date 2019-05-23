import React, { useState } from 'react'
import PropTypes from 'prop-types'

import withStyles from '@material-ui/core/styles/withStyles'

import Button from '@material-ui/core/Button'

import KeyboardArrowLeftIcon from '@material-ui/icons/KeyboardArrowLeft'
import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight'

import Slide1 from './Slide1'
import Slide2 from './Slide2'
import Slide3 from './Slide3'
import Slide4 from './Slide4'

const SLIDES_NUMBER_MIN = 1
const SLIDES_NUMBER_MAX = 4

function About({ classes, handleGetStarted }) {
    const [slide, setSlide] = useState(1)

    return (
        <div className={classes.main}>
            {slide === 1 && <Slide1 />}
            {slide === 2 && <Slide2 />}
            {slide === 3 && <Slide3 />}
            {slide === 4 && <Slide4 />}

            <div className={classes.slideNavigation}>
                {slide > SLIDES_NUMBER_MIN && (
                    <Button
                        className={classes.slideNavigationButton}
                        onClick={() => setSlide(slide - 1)}
                    >
                        <KeyboardArrowLeftIcon />
                        Previous
                    </Button>
                )}
                {slide < SLIDES_NUMBER_MAX && (
                    <Button
                        variant="outlined"
                        color="primary"
                        className={classes.slideNavigationButton}
                        onClick={() => setSlide(slide + 1)}
                    >
                        Next
                        <KeyboardArrowRightIcon />
                    </Button>
                )}
                {slide === SLIDES_NUMBER_MAX && (
                    <Button
                        variant="contained"
                        color="primary"
                        className={classes.slideNavigationButton}
                        onClick={handleGetStarted}
                    >
                        Get Started
                    </Button>
                )}
            </div>
        </div>
    )
}

About.propTypes = {
    classes: PropTypes.object.isRequired,

    handleGetStarted: PropTypes.func.isRequired,
}

export default withStyles(theme => ({
    main: {
        margin: theme.spacing.unit * 4,
    },
    slideNavigation: {
        marginTop: theme.spacing.unit * 4,
        textAlign: 'center',
    },
    slideNavigationButton: {
        margin: `0 ${theme.spacing.unit}px`,
    },
}), { withTheme: true })(About)
