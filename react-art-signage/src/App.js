import './App.css'
import Header from './components/header'
import Main from './components/main'
import Preview from './components/preview'
import Theme from './components/theme'
import Best from './components/best'
import Sale from './components/sale'
import Rising from './components/rising'
import Recommended from './components/recommended'

function App() {
  return (
    <div className="wrap">
      <div className="container">
        <Header></Header>
        <div className="contents">
          <Main></Main>
          <Preview></Preview>
          <Theme></Theme>
          <Best></Best>
          <Sale></Sale>
          <Rising></Rising>
          <Recommended></Recommended>
        </div>
      </div>
    </div>
  );
}

export default App