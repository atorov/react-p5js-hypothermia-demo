import React, { useContext } from 'react'
import PropTypes from 'prop-types'

import FormControl from '@material-ui/core/FormControl'
import FormLabel from '@material-ui/core/FormLabel'
import withStyles from '@material-ui/core/styles/withStyles'

import sketchThermometerSrc from '../../../../sketches/sketch-thermometer'

import { AppDispatchContext, AppStateContext } from '../../../App/AppStateProvider'
import p5Wrapper from '../../../P5Wrapper'

const P5WrapperThermometer = p5Wrapper('sketch-thermometer')

function Thermometer({ classes }) {
    const dispatch = useContext(AppDispatchContext)
    const appState = useContext(AppStateContext)
    const { bodyTemperature } = appState

    return (
        <FormControl
            component="fieldset"
            className={classes.main}
        >
            <FormLabel
                component="legend"
                className={bodyTemperature ? classes.title : ''}
            >
                {
                    bodyTemperature
                        ? `${bodyTemperature}˚C / ${Math.round(bodyTemperature * 90 / 5) / 10 + 32} F`
                        : 'Body Temperature Measurement'
                }

            </FormLabel>
            <P5WrapperThermometer
                dispatch={dispatch}
                sketch={sketchThermometerSrc}
                state={appState}
            />
        </FormControl>
    )
}

Thermometer.propTypes = {
    classes: PropTypes.object.isRequired,
}

export default withStyles(theme => ({
    main: {
        marginTop: theme.spacing.unit / 2,
        marginRight: theme.spacing.unit / 2,
        marginLeft: theme.spacing.unit / 2,
        padding: theme.spacing.unit,
        border: '1px dashed grey',
        borderRadius: theme.shape.borderRadius,
    },
    title: {
        color: theme.palette.secondary.main,
    },
}), { withTheme: true })(Thermometer)
