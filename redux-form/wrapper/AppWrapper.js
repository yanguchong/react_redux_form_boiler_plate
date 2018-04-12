import React from 'react';
import {render} from 'react-dom';
import App from '../App';
import AppThankYou from '../page/AppThankYou';
import AppContactUs from '../page/AppContactUs';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';

class AppWrapper extends React.Component {


    render() {
        return (
            <Router>
                <div>
                    <ul>
                        <li>
                            <Link to="/redux-form/">Home</Link>
                        </li>
                        <li>
                            <Link to="/redux-form/thank-you">Thank You</Link>
                        </li>
                        <li>
                            <Link to="/redux-form/contact-us">Contact Us</Link>
                        </li>
                    </ul>

                    <hr />

                    <Route exact path="/redux-form/" component={App} />
                    <Route path="/redux-form/thank-you" component={AppThankYou} />
                    <Route path="/redux-form/contact-us" component={AppContactUs} />
                </div>
            </Router>
        );
    }
}

export default AppWrapper;
