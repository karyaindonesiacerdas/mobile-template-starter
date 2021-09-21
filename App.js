import React from 'react';
import {QueryClient, QueryClientProvider} from 'react-query';
import Route from './src/route';

const queryClient = new QueryClient();

function App() {
    return (
        <QueryClientProvider client={queryClient}>
            <Route />
        </QueryClientProvider>
    );
}

export default App;
