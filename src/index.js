import React from 'react'
import { render } from 'react-dom'
import Ressourcemap from './ressourcemap'
import Ressource from './ressource'

new ClipboardJS('.btn')

render(
  <div>
    <Ressourcemap />

  </div>,
document.getElementById('react-container')
)
