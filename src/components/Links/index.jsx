import React from 'react'

import Icon from '@material-ui/core/Icon'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import Divider from '@material-ui/core/Divider'

export default function Links() {
    return (
        <List component="nav">
            <Divider />
            <ListItem
                button
                component="a"
                href="http://www.montana.edu/earthsciences/facstaff/birkeland.html"
                target="_blank"
            >
                <ListItemIcon>
                    <Icon
                        className="fa fa-university"
                        color="action"
                    />
                </ListItemIcon>
                <ListItemText
                    primary="Karl Birkeland - Montana State University"
                    secondary="http://www.montana.edu/earthsciences/facstaff/birkeland.html"
                />
            </ListItem>

            <Divider />
            <ListItem
                button
                component="a"
                href="http://umanitoba.ca/faculties/kinrec/about/giesbrecht.html"
                target="_blank"
            >
                <ListItemIcon>
                    <Icon
                        className="fa fa-university"
                        color="action"
                    />
                </ListItemIcon>
                <ListItemText
                    primary="Gordon Giesbrecht - University of Manitoba"
                    secondary="http://umanitoba.ca/faculties/kinrec/about/giesbrecht.html"
                />
            </ListItem>

            <Divider />
            <ListItem
                button
                component="a"
                href="https://www.alaska.edu/risksafety/download/RemoteTravelSafetyGuide.pdf"
                target="_blank"
            >
                <ListItemIcon>
                    <Icon
                        className="fa fa-file-pdf"
                        color="action"
                    />
                </ListItemIcon>
                <ListItemText
                    primary="University of Alaska - Remote Travel Safety Guide"
                    secondary="https://www.alaska.edu/risksafety/download/RemoteTravelSafetyGuide.pdf"
                />
            </ListItem>

            <Divider />
            <ListItem
                button
                component="a"
                href="https://www.bartonhealth.org/tahoe/search.aspx?search=hypothermia"
                target="_blank"
            >
                <ListItemIcon>
                    <Icon
                        className="fas fa-file-medical-alt"
                        color="action"
                    />
                </ListItemIcon>
                <ListItemText
                    primary="Barton Health"
                    secondary="https://www.bartonhealth.org/tahoe/search.aspx?search=hypothermia"
                />
            </ListItem>

            <Divider />
            <ListItem
                button
                component="a"
                href="http://www.seagrant.umn.edu/coastal_communities/hypothermia"
                target="_blank"
            >
                <ListItemIcon>
                    <Icon
                        className="fa fa-link"
                        color="action"
                    />
                </ListItemIcon>
                <ListItemText
                    primary="Hypothermia - Minnesota Sea Grant"
                    secondary="http://www.seagrant.umn.edu/coastal_communities/hypothermia"
                />
            </ListItem>

            <Divider />
            <ListItem
                button
                component="a"
                href="https://archive.org/details/Fm21-76SurvivalManual"
                target="_blank"
            >
                <ListItemIcon>
                    <Icon
                        className="fa fa-book"
                        color="action"
                    />
                </ListItemIcon>
                <ListItemText
                    primary="US Army Survival Guide (FM 21-76)"
                    secondary="https://archive.org/details/Fm21-76SurvivalManual"
                />
            </ListItem>

            <Divider />
            <ListItem
                button
                component="a"
                href="https://greatlakes.coastguard.dodlive.mil/2013/04/hypothermia-kills-these-tips-can-save-your-life/"
                target="_blank"
            >
                <ListItemIcon>
                    <Icon
                        className="fa fa-link"
                        color="action"
                    />
                </ListItemIcon>
                <ListItemText
                    primary="Hypothermia kills: These tips can save your life (US Coast Guard – 9th District. Apr 2013)"
                    secondary="https://greatlakes.coastguard.dodlive.mil/2013/04/hypothermia-kills-these-tips-can-save-your-life/"
                />
            </ListItem>

            <Divider />
            <ListItem
                button
                component="a"
                href="https://theprepared.com/emergencies/guides/survive-cold-weather-winter-scenarios/"
                target="_blank"
            >
                <ListItemIcon>
                    <Icon
                        className="fa fa-link"
                        color="action"
                    />
                </ListItemIcon>
                <ListItemText
                    primary="How to survive winter emergencies"
                    secondary="https://theprepared.com/emergencies/guides/survive-cold-weather-winter-scenarios/"
                />
            </ListItem>

            <Divider />
            <ListItem
                button
                component="a"
                href="https://en.wikipedia.org/wiki/Hypothermia"
                target="_blank"
            >
                <ListItemIcon>
                    <Icon
                        className="fab fa-wikipedia-w"
                        color="action"
                    />
                </ListItemIcon>
                <ListItemText
                    primary="Hypothermia (Wikipedia)"
                    secondary="https://en.wikipedia.org/wiki/Hypothermia"
                />
            </ListItem>

            <Divider />
            <ListItem
                button
                component="a"
                href="https://en.wikipedia.org/wiki/Frostbite"
                target="_blank"
            >
                <ListItemIcon>
                    <Icon
                        className="fab fa-wikipedia-w"
                        color="action"
                    />
                </ListItemIcon>
                <ListItemText
                    primary="Frostbite (Wikipedia)"
                    secondary="https://en.wikipedia.org/wiki/Frostbite"
                />
            </ListItem>
        </List>
    )
}
