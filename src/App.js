import { BrowserRouter, Route, Router, Routes, Switch } from 'react-router-dom';
import './App.css';
// import { Router, Switch, Route } from 'react-router-dom';

function App() {

  function myFunc() {
    console.log("This is function.")
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={ <Component1 additionalText="이 바보야 진짜 아니야" func={ myFunc } /> } />
        <Route path="/jiwoo" element={ <Component2  additionalText="이 바보야 진짜 아니야" func={ myFunc } /> } />
        <Route element={ <PageNotFound /> } />
      </Routes>
    </BrowserRouter>
  );
}

function Component1({additionalText, func}) {

  func()

  return (
    <div>
      <p>This is Component1 at root context path.</p>
      <p>And the additional test is: {additionalText}</p>
    </div>
  )
}

function Component2( obj ) {
  return (
    <div>
      <p>This is Component2 at "jiwoo" path.</p>
      <p>And the additional test is: { obj.additionalText }</p>
      <button onClick={ obj.func }>Click here and ook at the console.</button>
    </div>
  )

}
function PageNotFound() {
  return (
    <div>Page not found.</div>
  )

}

export default App;
