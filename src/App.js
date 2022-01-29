import { BrowserRouter, Route, Router, Routes, Switch } from 'react-router-dom';
import './App.css';
// import { Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={ <Component1 /> } />
        <Route path="/jiwoo" element={ <Component2 /> } />
        <Route element={ <PageNotFound /> } />
      </Routes>
    </BrowserRouter>
  );
}

function Component1() {
  return (
    <div>This is Component1 at root context path.</div>
  )
}

function Component2() {
  return (
    <div>This is Component2 at "jiwoo" path.</div>
  )

}
function PageNotFound() {
  return (
    <div>Page not found.</div>
  )

}

export default App;
