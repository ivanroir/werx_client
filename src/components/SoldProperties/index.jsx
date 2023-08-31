import * as React from 'react';
import Box from '@mui/material/Box';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import { FixedSizeList } from 'react-window';
import CardMedia from '@mui/material/CardMedia';
import ListItemIcon from '@mui/material/ListItemIcon';

function renderRow(props) {
    const { index, style } = props;

    return (
        <ListItem style={style} key={index} component="div" disablePadding>
            <ListItemButton>
                <ListItemIcon>
                    <ListItemText primary={`${index + 1}`} sx={{ textAlign: 'center' }} />
                </ListItemIcon>
                <CardMedia
                    component="img"
                    sx={{ width: 64 }}
                    image="https://placehold.co/600x400"
                    alt="Live from space album cover"
                />
            </ListItemButton>
        </ListItem>

    );
}

export default function VirtualizedList() {
    return (
        <React.Fragment>
            <Box sx={{ width: '100%', height: 400, bgcolor: 'background.paper' }} >
                <FixedSizeList
                    height={400}
                    itemSize={46}
                    itemCount={6}
                    overscanCount={5}
                >
                    {renderRow}
                </FixedSizeList>
            </Box>
        </React.Fragment>
    );
}