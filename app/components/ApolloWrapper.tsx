"use client"
import React from 'react';

import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
const client = new ApolloClient({
    uri: 'http://localhost:4000/graphql', // Replace with your GraphQL endpoint
    cache: new InMemoryCache(),
  });
interface clientOnlyProps{
    children:React.ReactNode;
}
function ApolloWrapper({children}:clientOnlyProps) {
  return (
    
    <ApolloProvider client={client}>
        {children}
    </ApolloProvider>
  )
}

export default ApolloWrapper;