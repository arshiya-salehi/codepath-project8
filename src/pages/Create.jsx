import { useState } from 'react'
import CrewmateForm from '../components/CrewmateForm'
import { supabase } from '../supabaseClient'
import { useNavigate } from 'react-router-dom'

export default function Create() {
  const navigate = useNavigate()
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  async function handleCreate(data) {
    try {
      setLoading(true)
      setError('')
      
      const { error: supabaseError } = await supabase
        .from('crewmates')
        .insert([{
          name: data.name,
          speed: data.speed,
          color: data.color,
          description: data.description
        }])
      
      if (supabaseError) throw supabaseError
      
      navigate('/')
    } catch (err) {
      setError(err.message || 'Failed to create crewmate')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="container">
      <h1>Create New Crewmate</h1>
      {error && <div className="error-message">{error}</div>}
      <CrewmateForm 
        onSubmit={handleCreate} 
        disabled={loading}
      />
      {loading && <div className="loading">Creating crewmate...</div>}
    </div>
  )
}
