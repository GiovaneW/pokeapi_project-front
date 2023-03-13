import React from 'react'
import { createBrowserRouter, RouterProvider, NonIndexRouteObject, Routes, Route } from 'react-router-dom'
import { ErrorBoundary } from '../../components/ErrorBoundary'
import { home, pokemonList, testComponent } from '../../views'

export interface IRouteProps extends NonIndexRouteObject {
    breadcrumb?: string
    child?: Array<IRouteProps>
}

// function CustomRoutes(props: { route: IRouteProps, key: string }): Route {
//     return (
//         <Route key={props.key} path={props.route.path} element={props.route.element}>
//             {props.route.child && props.route.child.map((route, index) => {
//                 return (
//                     <CustomRoutes route={route} key={`route-${route.path}-${index}`} />
//                 )
//             })}
//         </Route>
//     )
// }

export function MainRoutes(props: { routes: Array<IRouteProps> }): React.ReactElement {
    return (
        <Routes>
            <Route path='/' element={home} />
            <Route path='test' element={home}>
                <Route path=':id' element={home} />
            </Route>
            <Route path='pokemons' element={pokemonList}>
                <Route path=':id' element={testComponent}>
                    <Route path='edit' element={<></>} />
                </Route>
            </Route>
            <Route path='*' element={<ErrorBoundary />} />
        </Routes>
    )
}