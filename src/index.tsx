import React from 'react'
import ReactDOM from 'react-dom/client'
import './style/index.scss'
import App from './App'
import reportWebVitals from './reportWebVitals'
import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from '@emotion/react'
import theme from './config/theme'
import { MainRoutes } from './config/routes/MainRouter'
import { routes } from './config/routes/routes'

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
)
root.render(
    <React.StrictMode>
        {/* <MainRoutes routes={routes} /> */}
        <BrowserRouter>
            <ThemeProvider theme={theme}>
                <App />
            </ThemeProvider>

        </BrowserRouter>
    </React.StrictMode>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
