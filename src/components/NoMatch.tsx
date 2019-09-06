import React from 'react'
import {Link} from 'react-router-dom'

export default function NoMatch () {
    return (
        <div>
            <h1>link does not exist</h1>
            <Link to = {'/home'}>click to go back to Home page</Link> 
        </div>
    )
}