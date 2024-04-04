import {Component} from 'react'
import './index.css'
class LightDarkMode extends Component {
  state = {isDarkMode: true}
  onChangeMode = () => {
    this.setState(prevState => ({
      isDarkMode: !prevState.isDarkMode,
    }))
  }
  render() {
    const {isDarkMode} = this.state
    const containerMode = isDarkMode
      ? 'dark-mode-container'
      : 'light-mode-container'
    const buttonText = isDarkMode ? 'Dark Mode' : 'Light Mode'
    const headingColor = isDarkMode ? 'heading-light' : 'heading-dark'
    return (
      <div className={containerMode}>
        <h1 className={headingColor}>Click To change Mode</h1>
        <button className="button" onClick={this.onChangeMode}>
          {buttonText}
        </button>
      </div>
    )
  }
}

export default LightDarkMode
