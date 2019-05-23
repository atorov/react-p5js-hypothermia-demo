import React, { useContext } from 'react'
import PropTypes from 'prop-types'

import withStyles from '@material-ui/core/styles/withStyles'

import FormControl from '@material-ui/core/FormControl'
import FormLabel from '@material-ui/core/FormLabel'

import sketchDiagnosisSrc from '../../../../sketches/sketch-diagnosis'

import p5Wrapper from '../../../P5Wrapper'

import { AppDispatchContext, AppStateContext } from '../../../App/AppStateProvider'

const P5WrapperDiagnosis = p5Wrapper('sketch-diagnosis')

function Diagnosis({ classes }) {
    const dispatch = useContext(AppDispatchContext)
    const appState = useContext(AppStateContext)
    const {
        hypothermiaDiagnosis,
        hypothermiaValue,
    } = appState

    return (
        <FormControl
            component="fieldset"
            className={classes.main}
        >
            <FormLabel
                component="legend"
                className={hypothermiaValue ? classes.title : ''}
            >
                {hypothermiaDiagnosis}
            </FormLabel>
            <P5WrapperDiagnosis
                dispatch={dispatch}
                sketch={sketchDiagnosisSrc}
                state={appState}
            />
        </FormControl>
    )
}

Diagnosis.propTypes = {
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
}), { withTheme: true })(Diagnosis)
