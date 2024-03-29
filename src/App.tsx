import { Container } from '@mui/material'
import React from 'react'
import { Outlet } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { Header } from './components/headers/Header'
import { MainRoutes } from './config/routes/MainRouter'
import { routes } from './config/routes/routes'

export default class App extends React.Component {
    render() {
        return (
            <Container >
                <Header options={[
                    {
                        label: 'Pokemons',
                        to: '/pokemons'
                    },
                    {
                        label: 'Berries',
                        to: '/berries'
                    }
                ]} />
                <Container style={{
                    backgroundColor: '#f9f9f9',
                    padding: '1%',
                    marginTop: '80px'
                }}>
                    <MainRoutes routes={routes} />
                    <Outlet />
                    <ToastContainer />
                </Container >
            </Container >
        )
    }
}
