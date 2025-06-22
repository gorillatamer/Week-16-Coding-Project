import BuildAreaButton from "./BuildAreaButton"
import editIcon from "./assets/editicon.svg"

// Props required to display the header and trigger edit mode
type HeaderDisplayProps = {
  title: string, // Current title to display
  description: string, // Current description to display
  setTempHeader: (value: {title: string; description: string}) => void, // Pre-fill temporary state before editing
  setIsEditing: (value: boolean) => void // Toggle edit mode
}

// Component to display the header and an edit button
export default function HeaderDisplay({ title, description, setTempHeader, setIsEditing }: HeaderDisplayProps) 
{
  return (
  <>
    <div className="d-flex flex-column">
      <div className="d-flex flex-grow-1 justify-content-center">
        <h4 className="text-white">{title} </h4> {/* Display current title */}
      </div>
      <small className="text-secondary text-center">{description}</small> {/* Display current description */}
    </div>
    <BuildAreaButton
    icon={editIcon}
    onClick={() => {
        setTempHeader({ title, description}) // Pre-fill edit form with current values
        setIsEditing(true) // Switch to edit mode
      }}
    />
  </>
  )
}