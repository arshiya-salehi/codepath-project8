import { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import CrewmateForm from '../components/CrewmateForm'
import { supabase } from '../supabaseClient'

export default function Update() {
  const { id } = useParams()
  const navigate = useNavigate()
  const [crewmate, setCrewmate] = useState(null)

  useEffect(() => {
    fetchCrewmate()
  }, [])

  async function fetchCrewmate() {
    const { data } = await supabase.from('crewmates').select('*').eq('id', id).single()
    setCrewmate(data)
  }

  async function handleUpdate(updated) {
    await supabase.from('crewmates').update(updated).eq('id', id)
    navigate('/')
  }

  async function handleDelete() {
    await supabase.from('crewmates').delete().eq('id', id)
    navigate('/')
  }

  return crewmate ? (
    <div className="container">
      <h1>Update Crewmate</h1>
      <CrewmateForm initialData={crewmate} onSubmit={handleUpdate} onDelete={handleDelete} />
    </div>
  ) : <p>Loading...</p>
}