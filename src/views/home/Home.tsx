import React from 'react'
// import { useParams } from 'react-router-dom'

export default class Home extends React.Component {

    constructor() {
        super({})
    }

    render(): React.ReactNode {
        return (
            <div style={{ backgroundColor: 'inherit' }}>
                <label>
                    Welcome bitches!
                </label>
            </div>
        )
    }
}