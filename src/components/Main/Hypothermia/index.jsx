import React from 'react'
import PropTypes from 'prop-types'

import withStyles from '@material-ui/core/styles/withStyles'

import Diagnosis from './Diagnosis'
import Symptoms from './Symptoms'
import Thermometer from './Thermometer'

function Hypothermia({ classes }) {
    return (
        <div className={classes.main}>
            <Symptoms />
            <Diagnosis />
            <Thermometer />
        </div>
    )
}

Hypothermia.propTypes = {
    classes: PropTypes.object.isRequired,
}

export default withStyles(() => ({
    main: {
        boxSizing: 'border-box',
        display: 'flex',
        flexDirection: 'column',
        width: 480,
    },
}), { withTheme: true })(Hypothermia)
