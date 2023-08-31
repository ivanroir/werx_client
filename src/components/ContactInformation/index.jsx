import * as React from 'react';
import { Box, CardMedia, Typography } from '@mui/material';

function ContactInformation() {

    return (
        <React.Fragment>
            <Box sx={{ p: 4, border: '1px solid grey', borderRadius: '50px', mb: 1, transform: 'translate(5px, -150px)', backgroundColor: 'white'}}>
                <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <CardMedia
                        component="img"
                        sx={{ width: 151 }}
                        image="https://placehold.co/600x400"
                        alt=""
                    />
                </Box>

                <Box sx={{ mt: 2, mb: 2 }}>
                    <Typography component="div" variant="h5">
                        <Box sx={{ fontWeight: 600 }}>

                            EIN:
                        </Box>
                    </Typography>
                </Box>
                <Box sx={{ mt: 2, mb: 2 }}>
                    <Typography component="div" variant="h5">
                        <Box sx={{ fontWeight: 600 }}>

                            47-4612966
                        </Box>
                    </Typography>
                </Box>
                <Box sx={{ mt: 2, mb: 2 }}>
                    <Typography component="div" variant="h5">
                        <Box sx={{ fontWeight: 600 }}>

                            39899 Balentine Dr, Suite 200, Newarl California, 94560
                        </Box>
                    </Typography>
                </Box>
                <Box sx={{ mt: 2, mb: 2 }}>
                    <Typography component="div" variant="h5">
                        <Box sx={{ fontWeight: 600 }}>

                            support@therealbrokerage.com
                        </Box>
                    </Typography>
                </Box>
                <Box sx={{ mt: 2, mb: 2 }}>
                    <Typography component="div" variant="h5">
                        <Box sx={{ fontWeight: 600 }}>

                            +1 (909) 403-6143
                        </Box>
                    </Typography>
                </Box>
                <Box sx={{ mt: 2, mb: 2 }}>
                    <Typography component="div" variant="h5">
                        <Box sx={{ fontWeight: 600 }}>

                            +1 (713) 561-3650
                        </Box>
                    </Typography>
                </Box>
            </Box>
        </React.Fragment>

    )
}

export default ContactInformation
