import logo from './logo.svg';
import './App.css';
import Profile from './Profile'
import Demo from './Demo'
import Class from './Class'
import Practice from './Practice'
import UseState from './UseState'
import Effect from './Effect'
import Parent from './Parent'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {/* <p>
          Edit <code>src/App.js</code> and save to reload.
        </p> */}
        {/* <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
     <Profile/>
     <Practice />
     <UseState/>
     <Effect/>
     <Demo text="hello props" />
     <Class text={{name:"peter"}}  data="profile data" />
     <Parent/>

      </header>
     
    </div>
  );
}

export default App;
