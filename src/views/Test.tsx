import React from 'react'
import { useParams } from 'react-router-dom'
export default class Test extends React.Component {
    // const { id } = useParams()

    id = window.location.pathname.split('/')[2]

    render(): React.ReactNode {
        return (
            <>
                <label>ID: {this.id}</label>
            </>
        )
    }
}