import { Box, Container } from '@mui/material'
import React from 'react'
import { Outlet } from 'react-router-dom'
import { Header } from './components/headers/Header'
import { MainRoutes } from './config/routes/routes'

export default function App(): React.ReactElement {
    return (
        <Container style={{
            position: 'relative'
        }}>
            <Header />
            <Container style={{
                padding: '1%',
                paddingTop: '70px',
                position: 'relative'
            }}>
                <MainRoutes />
                <Outlet />
            </Container >
        </Container >
    )
}
