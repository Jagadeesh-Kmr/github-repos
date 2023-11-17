import {Component} from 'react'

import './App.css'

import GithubPopularRepos from './components/GithubPopularRepos'
import BtnContext from './context/BtnContext'

class App extends Component {
  state = {
    btnColor: false,
  }

  toggleBtn = () => {
    this.setState(prevState => ({
      btnColor: !prevState.btnColor,
    }))
  }

  render() {
    const {btnColor} = this.state
    return (
      <BtnContext.Provider
        value={{
          btnColor,
          toggleBtn: this.toggleBtn,
        }}
      >
        <GithubPopularRepos />
      </BtnContext.Provider>
    )
  }
}

export default App
