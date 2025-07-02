import { useState, type ChangeEvent } from "react"
import HeaderForm from "./HeaderForm.tsx"
import HeaderDisplay from "./HeaderDisplay.tsx"


// A self-contained component that handles the app's editable header
export default function HeaderEditor () {
  // Main display title for the app header
  const [title, setTitle] = useState("Card List Title")

  // Description shown beneath the title
  const [description, setDescription] = useState("Card list description goes here!")

  // Temporary state used while editing the form (preserves cancel option)
  const [tempHeader, setTempHeader] = useState({
    title,
    description
  })

  //Controls whether the form is visible or not
  const [isEditing, setIsEditing] = useState(false)

  //Called as the user types in the input
  //Updates only the temporary editing state
  const handleTempChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target
    setTempHeader(prev => ({ ...prev, [name]: value }))
  }

  //Commits the temporary values and exits edit mode
  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault()
    setTitle(tempHeader.title)
    setDescription(tempHeader.description)
    handleClose()
  }

  //Save edits and exit edit mode
  const handleClose = () => setIsEditing(false)

  return (
    <div className="d-flex justify-content-center px-3 pt-3">
        {isEditing ? (
          <HeaderForm
            tempHeader={tempHeader} // Pass current draft values
            handleTempChange={handleTempChange} // Handle input changes
            handleSubmit={handleSubmit} // Submit form
            handleClose={handleClose} // Cancel edit
          />
        ) : (
          <HeaderDisplay
            title={title} // Displayed title
            description={description} // Displayed description
            setTempHeader={setTempHeader} // Pre-fill form before editing
            setIsEditing={setIsEditing} // Toggle edit mode
          />
        )}
      </div>
  )
}