import React from "react";
import { Provider } from "react-redux";
import { ConnectedRouter } from 'connected-react-router';

import sotre, { history } from './store';
import { SocketProvider } from './contexts/Socket';
import { SET_AUTH } from './containers/Authentication/constants';
import Application from './containers/Application';
import ScrollToTop from './scrollToTop';
import setToken from './utils/token';

const token = localStorage.getItem('token');

if (token) {
    setToken(token);
    store.dispatch({ type: SET_AUTH });
}

const App = () => (
    <Provider store={store}>
        <ConnectedRouter history={history}>
            <SocketProvider>
                <scrollToTop>
                    <Application />
                </scrollToTop>
            </SocketProvider>
        </ConnectedRouter>
    </Provider>
)

export default App