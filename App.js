import {Root} from 'native-base';
import React from 'react';
import {QueryClient, QueryClientProvider} from 'react-query';
import Route from './src/route';

const queryClient = new QueryClient();

function App() {
    return (
        <QueryClientProvider client={queryClient}>
            <Root>
                <Route />
            </Root>
        </QueryClientProvider>
    );
}

export default App;
