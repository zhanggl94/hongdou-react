import { Suspense } from 'react'
import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <Router>
      <Suspense fallback={<span>laoding...</span>}>

      </Suspense>
    </Router>
  )
}

export default App
