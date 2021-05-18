import React from 'react'
import { QueryClientProvider, QueryClient } from 'react-query'
import MainNavigator from 'navigators/MainNavigator'

const queryClient = new QueryClient()

const App: React.FC = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <MainNavigator />
    </QueryClientProvider>
  )
}

export default App
