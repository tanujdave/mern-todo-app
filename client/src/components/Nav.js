import React from 'react'
import { Link } from 'react-router-dom'


class Nav extends React.Component {
    render () {
        let path = window.location.pathname.replace('/', '');
        return (
            <div className="nav-wrapper">
                <Link className={'' === path ? 'active' : ''} to="/">All</Link>
                <Link className={'pending' === path ? 'active' : ''} to="/pending">Pending</Link>
                <Link className={'inprogress' === path ? 'active' : ''} to="/inprogress">InProgress</Link>
                <Link className={'completed' === path ? 'active' : ''} to="/completed">Completed</Link>                
            </div>
        )
    }
}

export default Nav