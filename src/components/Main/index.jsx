import React, {
    useContext,
    useEffect,
    useRef,
} from 'react'
import PropTypes from 'prop-types'

import withStyles from '@material-ui/core/styles/withStyles'

import Typography from '@material-ui/core/Typography'

import SampleWorker from '../../workers/sample.worker'
import sketchHeatmapSrc from '../../sketches/sketch-heatmap'
import sketchFrostbiteRiskSrc from '../../sketches/sketch-frostbite-risk'

import { AppDispatchContext, AppStateContext } from '../App/AppStateProvider'
import p5Wrapper from '../P5Wrapper'

import Hypothermia from './Hypothermia'

const P5WrapperFrostbiteRisk = p5Wrapper('sketch-frostbite-risk')
const P5WrapperHeatmap = p5Wrapper('sketch-heatmap')

function Main({ classes }) {
    const sampleWorker = useRef(null)

    const dispatch = useContext(AppDispatchContext)
    const appState = useContext(AppStateContext)

    const {
        analytics: {
            // frostbiteRisk = 0,
            // diagnosisFPS = 0,
            heatmapFPS = 0,
            // thermometerFPS = 0,
        } = {},
        sampleWorker: {
            sourceData,
        },
    } = appState

    useEffect(() => {
        sampleWorker.current = new SampleWorker()
        sampleWorker.current.addEventListener(
            'message',
            (res) => {
                const resultData = (res && res.data && res.data.length) ? res.data : []
                dispatch({
                    type: ':SET_SAMPLE_WORKER_RESULT_DATA:',
                    payload: resultData,
                })
            },
        )
        return () => {
            sampleWorker.current.terminate()
            sampleWorker.current = undefined
        }
    }, [dispatch])

    useEffect(() => {
        sampleWorker.current.postMessage(sourceData)
    }, [sourceData])

    return (
        <div className={classes.main}>
            <div>
                <P5WrapperHeatmap
                    dispatch={dispatch}
                    sketch={sketchHeatmapSrc}
                    state={appState}
                />
                <Typography
                    align="center"
                    variant="subtitle2"
                    color="textSecondary"
                >
                    Body Heatmap (
                    {Math.round(heatmapFPS)}
                    fps)
                </Typography>
            </div>
            <Hypothermia />
            <div>
                <P5WrapperFrostbiteRisk
                    dispatch={dispatch}
                    sketch={sketchFrostbiteRiskSrc}
                    state={appState}
                />
                <Typography
                    align="center"
                    variant="subtitle2"
                    color="textSecondary"
                >
                    Frostbite Risk
                </Typography>
            </div>
        </div>
    )
}

Main.propTypes = {
    classes: PropTypes.object.isRequired,
}

export default withStyles(theme => ({
    main: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        margin: theme.spacing.unit,
    },
}), { withTheme: true })(Main)
