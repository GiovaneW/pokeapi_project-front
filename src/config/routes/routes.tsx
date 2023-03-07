import React from 'react'
import { createBrowserRouter, RouterProvider, Routes, Route } from 'react-router-dom'
import { ErrorBoundary } from '../../components/ErrorBoundary'
import { Home } from '../../views/home/Home'

const router = createBrowserRouter([
    {
        path: '/',
        element: <Home />
    },
    {
        path: 'test',
        element: <Home />,
        children: [
            {
                path: ':id',
                element: <Home />
            }
        ]
    }
])

export function MainRoutes(): React.ReactElement {
    return (
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='test' element={<Home />}>
                <Route path=':id' element={<Home />} />
            </Route>
            <Route path='*' element={<ErrorBoundary />} />
        </Routes>
    )
}
