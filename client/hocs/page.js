import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux'
import storeApp from 'stores'
import { composeWithDevTools } from 'redux-devtools-extension'

const page = (Page) => {
    return (
        class PageWrapper extends React.Component {
            render() {
                return (
                    <Provider store={createStore(storeApp, composeWithDevTools())}>
                        <Page />
                    </Provider>
                )
            }
        }
    )
}

export default page