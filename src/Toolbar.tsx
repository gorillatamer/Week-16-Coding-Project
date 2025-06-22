import ToolbarButton from './ToolbarButton.tsx'
import sideboardIcon from './assets/sideboardicon.svg'
import addIcon from './assets/addicon.svg'
import { Button, Modal } from "react-bootstrap"
import { useState } from "react"
import type { Card } from './types.ts'

// Props accepted by the Toolbar component
type ToolbarProps = {
  addNewCard: () => void // Adds a new card to the list
  updateCard: (id: number, updates: Partial<Card>) => void // Updates a specific card
  selectedCard?: Card // Currently selected card, if any
}

export default function Toolbar({ addNewCard, updateCard, selectedCard}: ToolbarProps) {
  const [isSideModalOpen, setIsSideModalOpen] = useState(false) // Modal visibility state

  const handleClose = () => setIsSideModalOpen(false) // Closes the modal

  return (
  <>
    <div className="d-flex flex-row justify-content-between bg-dark mt-3 mx-3">
      <div className="d-flex gap-2">
        <ToolbarButton icon={addIcon} onClick={addNewCard}/> {/*Button to add a new card */}
        <ToolbarButton icon={sideboardIcon} onClick={() => setIsSideModalOpen(true)} /> {/* Open side modal */}
      </div>
    </div>
    <div
      className="modal show"
      style={{ display: 'block', position: 'initial' }}
    >
      <Modal show={isSideModalOpen} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Move to Side</Modal.Title>
        </Modal.Header>
        <Modal.Body>Do you want to move the selection to the side?</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="primary" onClick={() => {
              if (selectedCard) updateCard(selectedCard.id, { side: true }); // Moves selected card to side (represented visualy with a change to red font)
              handleClose();
              }
            }>
            Move to Side
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
    
  </>
  )
}