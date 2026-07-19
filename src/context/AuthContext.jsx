import { createContext, useContext, useEffect, useState } from 'react'

const AuthContext = createContext(null)

const USERS_KEY = 'thezlstudio_users'
const SESSION_KEY = 'thezlstudio_user'

function getUsers() {
  try {
    return JSON.parse(localStorage.getItem(USERS_KEY)) || []
  } catch {
    return []
  }
}

function saveUsers(users) {
  localStorage.setItem(USERS_KEY, JSON.stringify(users))
}

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const stored = localStorage.getItem(SESSION_KEY)
    if (stored) setUser(JSON.parse(stored))
    setLoading(false)
  }, [])

  const startSession = (u) => {
    const session = { name: u.name, email: u.email, company: u.company || '', joinedAt: u.joinedAt }
    localStorage.setItem(SESSION_KEY, JSON.stringify(session))
    setUser(session)
    return session
  }

  // Throws an Error with a user-facing message on failure.
  const signup = ({ name, company, email, password }) => {
    const users = getUsers()
    const normalizedEmail = email.trim().toLowerCase()

    if (users.some((u) => u.email === normalizedEmail)) {
      throw new Error('An account with this email already exists. Try logging in instead.')
    }

    const newUser = {
      name,
      company: company || '',
      email: normalizedEmail,
      password, // NOTE: plain text, client-side only — see README for real-backend guidance
      joinedAt: new Date().toISOString(),
    }
    saveUsers([...users, newUser])
    return startSession(newUser)
  }

  // Throws an Error with a user-facing message on failure.
  const login = ({ email, password }) => {
    const users = getUsers()
    const normalizedEmail = email.trim().toLowerCase()
    const match = users.find((u) => u.email === normalizedEmail)

    if (!match) {
      throw new Error('No account found with this email. Please sign up first.')
    }
    if (match.password !== password) {
      throw new Error('Incorrect password. Please try again.')
    }
    return startSession(match)
  }

  const logout = () => {
    localStorage.removeItem(SESSION_KEY)
    setUser(null)
  }

  return (
    <AuthContext.Provider value={{ user, login, signup, logout, loading }}>
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  return useContext(AuthContext)
}
