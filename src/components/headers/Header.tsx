import { AppBar, Box, Button, Container, Toolbar, Typography } from '@mui/material'
import React from 'react'
import { NavLink } from 'react-router-dom'

export function Header(): React.ReactElement {
    return (
        <Box style={{
        }}>
            <AppBar style={{
                position: 'absolute',
                backgroundColor: 'inherit',
                borderColor: 'grey',
                borderStyle: 'solid',
                borderWidth: '1px',
                borderRadius: '5px',
                marginTop: '2px',
            }}>
                <Container style={{
                    padding: 0
                }}>
                    <Toolbar style={{
                        display: 'flex',
                        flexDirection: 'row',
                        justifyContent: 'flex-start',
                        gap: '1rem'
                    }}>
                        <Typography variant='h6' style={{
                            color: 'blueviolet'
                        }}>PokéBase</Typography>
                        <NavLink to='/teste' style={{
                            textDecoration: 'none'
                        }}>
                            <Button variant='outlined' style={{

                            }} >Pokemons</Button>
                        </NavLink>
                        <NavLink to='/' style={{
                            textDecoration: 'none'
                        }}>
                            <Button variant='outlined'>Berries</Button>
                        </NavLink>
                    </Toolbar>
                </Container>
            </AppBar>
        </Box>
    )

}