import React from 'react'
import { createBrowserRouter, RouterProvider, Routes, Route, useParams } from 'react-router-dom'
import { ErrorBoundary } from '../../components/ErrorBoundary'
import { home, pokemonList, testComponent } from '../../views'
import Home from '../../views/home/Home'
import PokemonList from '../../views/pokemon/PokemonList'
import Test from '../../views/Test'

// const router = createBrowserRouter([
//     {
//         path: '/',
//         element: home
//     },
//     {
//         path: 'test',
//         element: <Home />,
//         children: [
//             {
//                 path: ':id',
//                 element: <Home />
//             }
//         ]
//     }
// ])

export function MainRoutes(): React.ReactElement {
    return (
        <Routes>
            <Route path='/' element={home} />
            <Route path='test' element={<Home />}>
                <Route path=':id' element={<Home />} />
            </Route>
            <Route path='pokemons' element={<PokemonList />}>
                <Route path=':id' element={<Test />}>
                    <Route path='edit' element={<></>} />
                </Route>
            </Route>
            <Route path='*' element={<ErrorBoundary />} />
        </Routes>
    )
}
