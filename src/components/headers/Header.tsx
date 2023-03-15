import { AppBar, Box, Container, Toolbar, Typography } from '@mui/material'
import React from 'react'
import { NavLink } from 'react-router-dom'
import CustomButton from '../buttons/CustomButton'

export interface IHeaderProps {
    options?: Array<{
        label: string
        to: string
    }>
}

export function Header(props: IHeaderProps): React.ReactElement {
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
                width: '80%',
                marginRight: '10%'
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
                        <NavLink to='/' style={{
                            textDecoration: 'none'
                        }} >
                            <Typography variant='h6' style={{
                                color: 'blueviolet'
                            }}>PokéBase</Typography>
                        </NavLink>

                        {props.options && props.options.map((option, index) => {
                            return (
                                <CustomButton key={'headerButton' + index} type='button' href={option.to}>
                                    {option.label}
                                </CustomButton>
                            )
                        })
                        }
                    </Toolbar>
                </Container>
            </AppBar>
        </Box >
    )

}