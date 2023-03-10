import React, { lazy } from 'react'
import Home from '../views/home/Home'

export const testComponent = lazy(() => import('./Test')),
    pokemonList = lazy(() => import('./pokemon/PokemonList')),
    home = <Home />