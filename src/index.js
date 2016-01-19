import { rocket } from './../elements/rocket.pcss';

import React from 'react';
import { render } from 'react-dom';

import elements from './../elements';
import { Router, Route, Link } from 'react-router';

class Element extends React.Component {

    render() {
        return <div className={rocket}></div>
    }

}

class App extends React.Component {

    render() {
        return(
            <div>
                {elements.map(element => {
                    return <Link key={element} to={`element/${element}`}>{element}</Link>
                })}
                <div>{this.props.children}</div>
            </div>
        )
    }

}

render((
    <Router>
        <Route path="/" component={App}>
            <Route path="element/:el" component={Element} />
        </Route>
    </Router>
), document.body);