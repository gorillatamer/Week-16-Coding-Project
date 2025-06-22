import Toolbar from "./Toolbar.tsx"
import Sidebar from "./Sidebar.tsx"
import BuildArea from "./BuildArea.tsx"
import {useEffect, useState} from "react"
import reactLogo from './assets/react.svg'
import type { Card } from "./types.ts"
import HeaderEditor from "./HeaderEditor.tsx"

// Initial list of test cards used for app state
const testCards = [
  {
    id: 0,
    order: 1,
    image: reactLogo,
    name: "Lightning Bolt",
    side: true,
    notes: "Placeholder notes"
  },
  {
    id: 1,
    order: 2,
    image: reactLogo,
    name: "Rhystic Study",
    side: false,
    notes: "Placeholder notes"
  },
  {
    id: 2,
    order: 3,
    image: reactLogo,
    name: "Cultivate",
    side: true,
    notes: "Placeholder notes"
  },
  {
    id: 3,
    order: 4,
    image: reactLogo,
    name: "Diaboloic Tutor",
    side: false,
    notes: "Placeholder notes"
  },
]

export default function App() {
  const [cards, setCards] = useState<Card[]>(testCards); // State for all cards
  const [selectedCardId, setSelectedCardId] = useState(0); // State for selected card ID
  const selectedCard = cards.find(c => c.id === selectedCardId) //Currently selected card

  useEffect(() => {
    document.title = `Cards (${cards.length})` // Update page title when card count changes
  }, [cards.length])

  // Adds a new card to the list with default values
  const addNewCard = () => {
    const newCard = {
      id: cards.length ? cards[cards.length - 1].id + 1 : 0,
      order: 5,
      image: reactLogo,
      name: "",
      side: false,
      notes: "Placeholder notes"
    }

    setCards( [ ...cards, newCard ])
  }

  // Removes a card from the list by ID
  const deleteCard = (idToDelete: number) => {
    setCards( cards.filter(c => c.id !== idToDelete))
  }

  //Updates a card by ID with a partial set of properties (e.g. side, notes, etc.)
  const updateCard = (idToUpdate: number, updates: Partial<Card>) => {
    setCards(cards.map(card => (
      card.id !== idToUpdate ? card : {
        ...card,
        ...updates
      }
    )))
  }

  return (
    <div className="bg-dark d-flex flex-column"> {/* App container with dark background */}
      <Toolbar 
        selectedCard={selectedCard} 
        addNewCard={addNewCard} 
        updateCard={updateCard}
      />
      <HeaderEditor /> {/* Title and description editor */}
      <div className="d-flex"> {/* Horizontal layout for sidebar and build area */}
        <Sidebar 
          cards={cards} 
          deleteCard={deleteCard} 
          selectedCardId={selectedCardId} 
          setSelectedCardId={setSelectedCardId}
        />
        <BuildArea 
          card={selectedCard}
          updateCard={updateCard}
        />
      </div>
    </div>
  )
}