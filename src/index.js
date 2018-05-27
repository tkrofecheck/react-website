import React from 'react';
import {render} from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import { ApolloClient } from 'apollo-client';
import { HttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';
import {ApolloProvider} from "react-apollo";
import './index.css';
import App from './App';

const client = new ApolloClient({
    link: new HttpLink({ uri: "https://us-west-2.api.scaphold.io/graphql/krofecheck.com"}),
    cache: new InMemoryCache()
});

const KrofecheckCom = () => (
    <ApolloProvider client={client}>
        <App/>
    </ApolloProvider>
);

render(<KrofecheckCom/>, document.getElementById('site-wrap'));
registerServiceWorker();
