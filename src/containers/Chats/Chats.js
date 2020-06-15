import React, { Component } from 'react';
import './Chats.css';

const Chat = ({ message }) => {
  const { text, is_user_msg } = message;
  return (
    <span className={`Chat ${is_user_msg ? 'is-user-msg' : ''}`}>{text}</span>
  )
}

class Chats extends Component {
  constructor(props) {
    super(props);
    // React.createRef is used to interact with the DOM in a React application.
    // https://blog.logrocket.com/how-to-use-react-createref-ea014ad09dba/
    this.chatsRef = React.createRef();
  }

  componentDidMount() {
    this.scrollToBottom();
  }

  componentDidUpdate () {
    this.scrollToBottom();
  }

  scrollToBottom = () => {
    // scrollheight => the entire height of the element
    // scrollTop => number of pixels the content of a <div> element is scrolled vertically
    this.chatsRef.current.scrollTop = this.chatsRef.current.scrollHeight;
  }

  render() {
    return (
      <div className='Chats' ref={this.chatsRef}>
        {
          this.props.messages.map(msg => (
            <Chat message={msg} key={msg.number}/>
          ))
        }
      </div>
    )
  }
}

export default Chats;
