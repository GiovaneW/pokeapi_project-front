import React from 'react'
// import { useParams } from 'react-router-dom'

export default class Home extends React.Component {

    render(): React.ReactNode {
        return (
            <div style={{ backgroundColor: 'inherit' }}>
                <label>
                    <p>
                        <a>
                            Welcome, this is a home component with nothing into there!
                            <br />
                            Calm down man, it`s a only test project, staystrong and keep continuing development.
                        </a>
                    </p>
                    <p>
                        <a>
                            Success is comming!!
                        </a>
                    </p>

                </label>
            </div>
        )
    }
}