import {Component} from 'react'

import './App.css'

// Replace your code here
class App extends Component {
  state = {
    text: '',
    isTrue: false,
  }

  onChangeEditableInputText = event => {
    this.setState({text: event.target.value})
  }

  onClickSaveButton = () => {
    this.setState({isTrue: true})
  }

  onClickEditButton = () => {
    this.setState({isTrue: false})
  }

  render() {
    const {text, isTrue} = this.state

    return (
      <div className="app-container">
        <div className="editable-text-input-container">
          <h1 className="heading"> Editable Text Input </h1>
          {!isTrue && (
            <div className="editable-text-input-inner-container">
              <input
                type="text"
                className="input"
                onChange={this.onChangeEditableInputText}
                value={text}
              />
              <button
                type="button"
                className="button"
                onClick={this.onClickSaveButton}
              >
                Save
              </button>
            </div>
          )}
          {isTrue && (
            <div className="editable-text-input-inner-container">
              <p className="text"> {text} </p>
              <button
                type="button"
                className="button"
                onClick={this.onClickEditButton}
              >
                Edit
              </button>
            </div>
          )}
        </div>
      </div>
    )
  }
}

export default App
