import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {BrowserRouter} from 'react-router-dom';
import UIkit from 'uikit';
import Icons from 'uikit/dist/js/uikit-icons';
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons';
import ScrollToTop from './components/common/ScrollToTop';
import 'uikit/dist/css/uikit.min.css';


// loads the Icon plugin
UIkit.use(Icons);

//adding brand logos to library
library.add(fab);

const WithRouter = () => (
    <BrowserRouter>
        <ScrollToTop>
            <App />
        </ScrollToTop>
    </BrowserRouter>
);

ReactDOM.render(<WithRouter />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
