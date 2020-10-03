import React from 'react'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import ImageIcon from '@material-ui/icons/Image';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';

import { useListItemStyles } from './style';


export function ListItems() {
    const classes = useListItemStyles()

    return (
        <List className={classes.root}>
            <ListItem button>
                <ListItemAvatar>
                    <Avatar>
                        <ImageIcon />
                    </Avatar>
                </ListItemAvatar>
                <ListItemText primary="Photos" secondary="Jan 9, 2014" />
                <ChevronRightIcon />
            </ListItem>
        </List>
    )
}
