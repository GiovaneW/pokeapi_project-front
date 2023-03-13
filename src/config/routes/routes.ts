import { home, pokemonList, testComponent } from '../../views'
import { IRouteProps } from './MainRouter'

export const routes: Array<IRouteProps> = [
    {
        path: '/',
        element: home
    },
    {
        path: 'test',
        element: testComponent,
        children: [
            {
                path: ':id',
                element: testComponent
            }
        ]
    },
    {
        path: 'pokemon',
        element: pokemonList,
        children: [
            {
                path: ':id',
                element: pokemonList,
                children: [
                    {
                        path: 'edit',
                        element: pokemonList
                    },
                    {
                        path: 'delete',
                        element: pokemonList,
                    }
                ]
            },
            {
                path: 'create',
                element: pokemonList
            }
        ]
    }
]
