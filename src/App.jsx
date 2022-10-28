import './App.css'
import { Route, BrowserRouter, Switch } from 'react-router-dom'
// import About from './pages/About'
// import Payment from './pages/Payment'
import Home from './pages/Home'
// import Details from './pages/Details'
// import NotFound from './pages/404'
import { ErrorBoundary } from 'react-error-boundary'

function ErrorFallback ({ error, resetErrorBoundary }) {
  return (
    <div role='alert'>
      <p>Something went wrong:</p>
      <pre>{error.message}</pre>
      <button onClick={resetErrorBoundary}>Try again</button>
    </div>
  )
}

function App () {
  return (
    <div className='App'>
      <BrowserRouter>
        <ErrorBoundary
          FallbackComponent={ErrorFallback}
          onReset={() => {
            // reset the state of your app so the error doesn't happen again
          }}
        >
          <Switch>
            <Route path='/' component={Home} exact />
          </Switch>
        </ErrorBoundary>
      </BrowserRouter>
    </div>
  )
}

export default App
