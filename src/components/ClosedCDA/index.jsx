import * as React from 'react';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import CardMedia from '@mui/material/CardMedia';
import { styled } from '@mui/material/styles';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

export default function ClosedCDA() {
    return (
        <div>
            <Stack
                direction={{ xs: 'column', sm: 'row' }}
                spacing={{ xs: 1, sm: 2, md: 4 }}
                sx={{ padding: 1 }}
            >
                <Item>
                    <CardMedia
                        component="img"
                        sx={{ width: 151 }}
                        image="https://placehold.co/600x400"
                        alt=""
                    />
                </Item>
                <Item>
                    <CardMedia
                        component="img"
                        sx={{ width: 151 }}
                        image="https://placehold.co/600x400"
                        alt=""
                    />
                </Item>
                <Item>
                    <CardMedia
                        component="img"
                        sx={{ width: 151 }}
                        image="https://placehold.co/600x400"
                        alt=""
                    />
                </Item>
                <Item>
                    <CardMedia
                        component="img"
                        sx={{ width: 151 }}
                        image="https://placehold.co/600x400"
                        alt=""
                    />
                </Item>
                <Item>
                    <CardMedia
                        component="img"
                        sx={{ width: 151 }}
                        image="https://placehold.co/600x400"
                        alt=""
                    />
                </Item>
                <Item>
                    <CardMedia
                        component="img"
                        sx={{ width: 151 }}
                        image="https://placehold.co/600x400"
                        alt=""
                    />
                </Item>
                <Item>
                    <CardMedia
                        component="img"
                        sx={{ width: 151 }}
                        image="https://placehold.co/600x400"
                        alt=""
                    />
                </Item>
            </Stack>
        </div>
    );
}