import { type ChangeEvent } from "react"
import BuildAreaButton from "./BuildAreaButton.tsx"
import saveIcon from "./assets/saveicon.svg"
import cancelIcon from "./assets/cancelicon.svg"

//Props passed into HeaderForm to control form behavior
type HeaderFormProps = {
  tempHeader: {
      title: string
      description: string
  }
  handleTempChange: (event: ChangeEvent<HTMLInputElement>) => void // Updates tempHeader as user types
  handleSubmit: (event: React.FormEvent) => void // Saves form values
  handleClose: () => void // Cancels edit mode
}

export default function HeaderForm({
  tempHeader,
  handleTempChange,
  handleSubmit,
  handleClose,
} : HeaderFormProps) 

{
  return (
  <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="title" // This matches tempHeader.title
              className="form-control my-2"
              value={tempHeader.title}
              onChange={handleTempChange} // Updates description as user types
            >
            </input>
            <input
              type="text"
              name="description" // This matches tempHeader.description
              className="form-control my-2"
              value={tempHeader.description}
              onChange={handleTempChange}
            />
            <BuildAreaButton 
              icon={saveIcon} 
              type="submit" //Submits the form and allows submit with "Enter"
            />
            <BuildAreaButton
              icon={cancelIcon}
              onClick={handleClose} // Cancels and closes the form
            />
          </form>
  )
}