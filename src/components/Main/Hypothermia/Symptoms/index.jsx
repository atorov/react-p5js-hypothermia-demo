import React, { useContext, useEffect } from 'react'
import PropTypes from 'prop-types'

import withStyles from '@material-ui/core/styles/withStyles'

import Checkbox from '@material-ui/core/Checkbox'
import FormControl from '@material-ui/core/FormControl'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import FormGroup from '@material-ui/core/FormGroup'
import FormLabel from '@material-ui/core/FormLabel'

import calcHypothermiaDiagnosis from '../../../../lib/calc-hypothermia-diagnosis'
import calcHypothermiaValue from '../../../../lib/calc-hypothermia-value'

import { AppDispatchContext, AppStateContext } from '../../../App/AppStateProvider'

function Symptoms({ classes }) {
    const dispatch = useContext(AppDispatchContext)
    const { hypothermiaSymptoms } = useContext(AppStateContext)

    useEffect(() => {
        const hypothermiaValue = calcHypothermiaValue(hypothermiaSymptoms)
        dispatch({
            type: ':SET_HYPOTHERMIA_VALUE:',
            payload: hypothermiaValue,
        })
        const hypothermiaDiagnosis = calcHypothermiaDiagnosis(hypothermiaValue)
        dispatch({
            type: ':SET_HYPOTHERMIA_DIAGNOSIS:',
            payload: hypothermiaDiagnosis,
        })
    }, [dispatch, hypothermiaSymptoms])

    const {
        confusion = false,
        impairedMovement = false,
        noHandGestures = false,
        poorCoordination = false,
        shivering = false,
        slurredSpeech = false,
        unconscious = false,
        weakPulse = false,
    } = hypothermiaSymptoms

    return (
        <FormControl
            component="fieldset"
            className={classes.main}
        >
            <FormLabel component="legend">
                Hypothermia Symptoms
            </FormLabel>
            <FormGroup>
                <FormControlLabel
                    control={(
                        <Checkbox
                            checked={unconscious}
                            className={classes.checkbox}
                            onChange={(_, checked) => dispatch({
                                type: ':UPDATE_HYPOTHERMIA_SYMPTOMS:',
                                payload: { unconscious: checked },
                            })}
                        />
                    )}
                    label="Unconscious"
                />
                <FormControlLabel
                    control={(
                        <Checkbox
                            checked={shivering}
                            className={classes.checkbox}
                            onChange={(_, checked) => dispatch({
                                type: ':UPDATE_HYPOTHERMIA_SYMPTOMS:',
                                payload: { shivering: checked },
                            })}
                        />
                    )}
                    label="Shivering, Uncontrollable shivering"
                />
                <FormControlLabel
                    control={(
                        <Checkbox
                            checked={noHandGestures}
                            className={classes.checkbox}
                            onChange={(_, checked) => dispatch({
                                type: ':UPDATE_HYPOTHERMIA_SYMPTOMS:',
                                payload: { noHandGestures: checked },
                            })}
                        />
                    )}
                    label="Can’t do basic hand gestures"
                />
                <FormControlLabel
                    control={(
                        <Checkbox
                            checked={impairedMovement}
                            className={classes.checkbox}
                            onChange={(_, checked) => dispatch({
                                type: ':UPDATE_HYPOTHERMIA_SYMPTOMS:',
                                payload: { impairedMovement: checked },
                            })}
                        />
                    )}
                    label="Impaired movement"
                />
                <FormControlLabel
                    control={(
                        <Checkbox
                            checked={poorCoordination}
                            className={classes.checkbox}
                            onChange={(_, checked) => dispatch({
                                type: ':UPDATE_HYPOTHERMIA_SYMPTOMS:',
                                payload: { poorCoordination: checked },
                            })}
                        />
                    )}
                    label="Poor coordination, Stumbling"
                />
                <FormControlLabel
                    control={(
                        <Checkbox
                            checked={weakPulse}
                            className={classes.checkbox}
                            onChange={(_, checked) => dispatch({
                                type: ':UPDATE_HYPOTHERMIA_SYMPTOMS:',
                                payload: { weakPulse: checked },
                            })}
                        />
                    )}
                    label="Weak pulse, Shallow breathing"
                />
                <FormControlLabel
                    control={(
                        <Checkbox
                            checked={confusion}
                            className={classes.checkbox}
                            onChange={(_, checked) => dispatch({
                                type: ':UPDATE_HYPOTHERMIA_SYMPTOMS:',
                                payload: { confusion: checked },
                            })}
                        />
                    )}
                    label="Confusion, irrational behavior"
                />
                <FormControlLabel
                    control={(
                        <Checkbox
                            checked={slurredSpeech}
                            className={classes.checkbox}
                            onChange={(_, checked) => dispatch({
                                type: ':UPDATE_HYPOTHERMIA_SYMPTOMS:',
                                payload: { slurredSpeech: checked },
                            })}
                        />
                    )}
                    label="Slurred speech"
                />
            </FormGroup>
        </FormControl>
    )
}

Symptoms.propTypes = {
    classes: PropTypes.object.isRequired,
}

export default withStyles(theme => ({
    checkbox: {
        paddingTop: 0,
        paddingBottom: 0,
    },
    main: {
        marginRight: theme.spacing.unit / 2,
        marginLeft: theme.spacing.unit / 2,
        padding: theme.spacing.unit,
        border: '1px dashed grey',
        borderRadius: theme.shape.borderRadius,
    },
}), { withTheme: true })(Symptoms)
