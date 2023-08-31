import { useState } from 'react'
import * as React from 'react';
import { Box, Typography } from '@mui/material';

function DashboardBox({ title, children, ...props }) {

    return (
        <React.Fragment>
            <Box sx={{ flexGrow: '3', border: '1px solid grey', height: '100%', ...props }} >
                <Box sx={{ height: 48, backgroundColor: 'gray', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <Typography component="div" variant="h3" color={'white'}>
                        {title}
                    </Typography>
                </Box>
                {children}
            </Box>
        </React.Fragment>
    )
}

export default DashboardBox
