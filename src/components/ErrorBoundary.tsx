import { Box } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

export function ErrorBoundary(): React.ReactElement {
    return (
        <Box style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center'
        }}>

            <Box>
                <label style={{
                    fontSize: '5em',
                    fontWeight: 'bold',
                    color: 'red',
                    fontFamily: 'monospace'
                }}>ERRO</label>
            </Box>
            <Box>
                <label style={{
                    fontSize: '25px',
                    marginBottom: '5px'
                }}>Algo de errado não está certo.</label>
                <br />
                <label style={{
                    fontSize: '25px'
                }}>
                    <Link to={'/'}>
                        Clique aqui
                    </Link>
                    para voltar para o início.</label>
            </Box>
        </Box>
    )
}