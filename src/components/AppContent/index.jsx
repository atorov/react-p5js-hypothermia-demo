import React, { useState } from 'react'
import PropTypes from 'prop-types'

import withStyles from '@material-ui/core/styles/withStyles'
import amber from '@material-ui/core/colors/amber'

import IconButton from '@material-ui/core/IconButton'
import Divider from '@material-ui/core/Divider'
import Icon from '@material-ui/core/Icon'
import Paper from '@material-ui/core/Paper'
import Snackbar from '@material-ui/core/Snackbar'
import SnackbarContent from '@material-ui/core/SnackbarContent'
import Tab from '@material-ui/core/Tab'
import Tabs from '@material-ui/core/Tabs'
import Typography from '@material-ui/core/Typography'

import CloseIcon from '@material-ui/icons/Close'
import InfoIcon from '@material-ui/icons/Info'
import WarningIcon from '@material-ui/icons/Warning'

import About from '../About'
import Links from '../Links'
import Main from '../Main'

const TAB_ABOUT = 0
const TAB_MAIN = 1
const TAB_LINKS = 2

function AppContent({ classes }) {
    const [isSnackbarOpen, setSnackbarOpen] = useState(true)
    const [tab, setTab] = useState(TAB_ABOUT)

    return (
        <>
            <div className="app-content">
                <Paper className={classes.paper}>
                    <Tabs
                        value={tab}
                        onChange={(_, value) => setTab(value)}
                        variant="fullWidth"
                        textColor="primary"
                        indicatorColor="primary"
                    >
                        <Tab
                            icon={<InfoIcon />}
                            label="Useful Information"
                        />
                        <Tab
                            icon={<Icon className="fa fa-snowflake" />}
                            label="Diagnosing Hypothermia"
                        />
                        <Tab
                            icon={<Icon className="fa fa-link" />}
                            label="External Links"
                        />
                    </Tabs>

                    {tab === TAB_ABOUT && <About handleGetStarted={() => setTab(TAB_MAIN)} />}
                    {tab === TAB_MAIN && <Main />}
                    {tab === TAB_LINKS && <Links />}

                    <Divider />
                    <div className={classes.appInfo}>
                        <Typography variant="overline">
                            {APP_NAME}
                            ,&nbsp;
                            {APP_VERSION.replace(/"/g, '')}
                        </Typography>
                    </div>
                </Paper>
            </div>

            <Snackbar
                anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'center',
                }}
                open={isSnackbarOpen}
                onClose={() => setSnackbarOpen(false)}
            >
                <SnackbarContent
                    aria-describedby="client-snackbar"
                    message={(
                        <span
                            id="client-snackbar"
                            className={classes.snackBarMessageWrapper}
                        >
                            <WarningIcon className={classes.snackbarLeftIcon} />
                            This is a demo application. DO NOT use it in real situations!
                        </span>
                    )}
                    action={(
                        <IconButton
                            aria-label="Close snackbar"
                            color="inherit"
                            className={classes.close}
                            onClick={() => setSnackbarOpen(false)}
                        >
                            <CloseIcon className={classes.snackbarRightIcon} />
                        </IconButton>
                    )}
                    className={classes.snackbar}
                />
            </Snackbar>
        </>
    )
}

AppContent.propTypes = {
    classes: PropTypes.object.isRequired,
}

export default withStyles(theme => ({
    appInfo: {
        textAlign: 'center',
    },
    paper: {
        marginTop: theme.spacing.unit * 2,
        marginBottom: theme.spacing.unit * 2,
    },
    snackbar: {
        backgroundColor: amber[700],
    },
    snackbarLeftIcon: {
        fontSize: 20,
        opacity: 0.9,
        marginRight: theme.spacing.unit,
    },
    snackBarMessageWrapper: {
        display: 'flex',
        alignItems: 'center',
    },
    snackbarRightIcon: {
        fontSize: 20,
        opacity: 0.9,
    },
}), { withTheme: true })(AppContent)
