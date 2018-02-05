import React from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux'
import storeApp from 'stores'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'

const page = (Page) => {
    return (
        class PageWrapper extends React.Component {
            render() {
                return (
                    <Provider store={createStore(storeApp, composeWithDevTools(applyMiddleware(thunk)))}>
                        <Page />
                    </Provider>
                )
            }
        }
    )
}

export default page