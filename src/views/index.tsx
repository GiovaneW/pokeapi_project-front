import React, { lazy, Suspense } from 'react'

const Home = lazy(() => import('./home/Home')),
    Test = lazy(() => import('./Test')),
    PokemonList = lazy(() => import('./pokemon/PokemonList')),
    PokemonForm = lazy(() => import('./pokemon/PokemonForm'))

export const
    home = <Suspense ><Home /></Suspense>,
    testComponent = <Suspense ><Test /></Suspense>,
    pokemonList = <Suspense ><PokemonList /></Suspense>,
    pokemonForm = <Suspense ><PokemonForm /></Suspense>
