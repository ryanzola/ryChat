import { useState } from "react"
import axios from "axios"

const projectID = "babc9827-1b6f-4014-8c91-e244c4770ea5"

const LoginForm = ({props}) => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault();

    const authObject = {
      'Project-ID': projectID,
      'User-Name': username,
      'User-Secret': password
    }

    try {
      await axios.get('https://api.chatengine.io/chats', { headers: authObject })
      localStorage.setItem('username', username)
      localStorage.setItem('password', password)

      window.location.reload()
      setError('')
    } catch(e) {
      setError('Credentials incorrect')
    }
  }

  return (
    <div className="wrapper">
      <div className="form">
        <h1 className="title">Chat Application</h1>
        <form onSubmit={handleSubmit}>
          <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} className="input" placeholder="Username" required/>
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className="input" placeholder="Password" required/>
          <div align="center">
            <button className="button">
              <span>Start Chatting</span>
            </button>
          </div>
        </form>
        <h2>{ error }</h2>
      </div>
    </div>
  )
}

export default LoginForm