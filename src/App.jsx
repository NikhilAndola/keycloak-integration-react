import * as React from 'react'
import './App.css'
import useAuth from './hooks/useAuth'
import Protected from './components/protected';
import Public from './components/public';

function App() {

  const isLogin = useAuth();

  return isLogin ? <Protected/> : <Public/>
}

export default App
