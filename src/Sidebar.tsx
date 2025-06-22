import CardThumbnail from './CardThumbnail.tsx'
import { useState } from "react"
import type { Card } from './types.ts'

// Props used by Sidebar to render and control card list
type SidebarProps = {
  cards: Array<Card> // Full list of cards
  selectedCardId: number // Currently selected card
  setSelectedCardId: (newValue: number) => void // Sets selected card
  deleteCard: (id: number) => void // Removes a card by ID
}

export default function Sidebar ({ 
    cards, 
    selectedCardId, 
    setSelectedCardId,
    deleteCard 
  }: SidebarProps){
  const [isOpen, setIsOpen] = useState(true); // Sidebar toggle state

  const handleButtonClick = () => {
    setIsOpen(!isOpen) // Toggles open/closed state
  }

  const handleCardClick = (id: number) => {
    setSelectedCardId(id) // Selects a card by ID
  }

  return (
    <>
        {isOpen ? (
          <div className="d-flex border p-1 m-3 flex-column" style={{width: "100px"}}>
            { cards.map( c => 
              <CardThumbnail 
                key={c.id} 
                card={ c } 
                onCardSelected={handleCardClick} 
                isSelected={c.id === selectedCardId}
                deleteCard={deleteCard}
              />
            )}
          </div>
          ) : null}
          <button 
            className="btn btn-secondary p-1 mb-3 mt-3" 
            onClick={handleButtonClick} // Toggle sidebar visibility
          >
            { isOpen ? "<" : ">" }
          </button>
    </>  
)}