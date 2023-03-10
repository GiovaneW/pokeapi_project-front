import React from 'react'
import { useParams } from 'react-router-dom'

export default function Test(): React.ReactElement {
    const { id } = useParams()

    return (
        <label>ID: {id}</label>
    )
}