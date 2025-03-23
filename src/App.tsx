import { useRef, useState } from 'react'
import './App.css'
import auburn_logo from './assets/auburn.png'

function App() {
  // State to track what's typed in the input box
  const [query, setQuery] = useState('')

  // Stores all the messages sent (currently by the user)
  const [messages, setMessages] = useState([])

  // Controls whether to show the logo (true initially, false after first message)
  const [showLogo, setShowLogo] = useState(true)

  // Reference to the <textarea> so we can control its height dynamically
  const textareaRef = useRef(null)

  // Called when user types into the <textarea>
  const handleInputChange = (e) => {
    setQuery(e.target.value)

    // Auto-expand the height of the textarea as user types
    const textarea = textareaRef.current
    textarea.style.height = '60px' // reset first
    textarea.style.height = textarea.scrollHeight + 'px' // grow as needed
  }

  // Called when user clicks Send or presses Enter
  const handleSend = () => {
    if (query.trim() === '') return // don't send empty messages

    // Add current message to the chat history
    setMessages([...messages, query])

    // Clear input box
    setQuery('')
    setShowLogo(false) // Hide the logo after first message

    // Reset the textarea height
    textareaRef.current.style.height = '60px'

  }

  // Handle keyboard input: Send on Enter (but allow Shift+Enter for new lines)
  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      handleSend()
    }
  }

  return (
    <div className="app-wrapper">
      {/* Logo shown only before first message is sent */}
      {showLogo && <img src={auburn_logo} alt="Logo Image" className="logo-img" />}
      {showLogo && <p className="logo">ESOL AI Chatbot</p>}

      {/* Main scrollable chat area */}
      <div className="chat-container">
        <div className="message-list">
          {messages.map((msg, idx) => (
            <div key={idx} className="message-item">
              {msg}
            </div>
          ))}
        </div>
      </div>

      {/* Input area: text box + send button */}
      <div className={`input-bar ${showLogo ? 'centered-input' : ''}`}>
        <textarea
          ref={textareaRef}
          value={query}
          onChange={handleInputChange}
          onKeyDown={handleKeyDown}
          placeholder="Type your topic"
          className="query-box"
        />
        <button onClick={handleSend} className="send-button">
          Send
        </button>
      </div>
    </div>
  )
}

export default App
