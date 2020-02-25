import React from "react";

class TwitterMessage extends React.Component {
  constructor(props) {
    super();

    this.state = {
      message: "",
      totalChars: props.maxChars
    };
  }

  handleChange = (event) => {
    let messageInput = event.target.value
    let newChars = this.props.maxChars - messageInput.length
    this.setState({
      message: messageInput,
      totalChars: newChars
    })
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input 
          type="text" 
          name="message" 
          id="message" 
          onChange={event => this.handleChange(event)}
          value={this.state.message} 
        />
        <p>{this.state.totalChars} remaining characters</p>
      </div>
    );
  }
}

export default TwitterMessage;
