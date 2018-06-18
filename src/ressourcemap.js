import React from 'react'
import { render } from 'react-dom'
import Ressource from './ressource'
import text from './frameworks.json'

class Ressourcemap extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      entries: {}
    }
    this.getElement = this.getElement.bind(this)
  }

  componentWillMount() {
    this.state.entries = text
  }

  getElement(key, i) {
      return <Ressource title={key} link={this.state.entries[key]} />

  }

  render() {
    return(
      <div>
        <h1>This is the list of ressources</h1>
        <ul>
          {Object.keys(this.state.entries).map(this.getElement)}
        </ul>
      </div>
    )
  }

}

export default Ressourcemap
