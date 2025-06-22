import deleteIcon from "./assets/cancelicon.svg"

// Props for a single card thumbnail with selection and delete functionality
type CardThumbnailProps = { 
  card: { id: number, order: number, image: string} // Basic card info for display
  isSelected: boolean // Indicates if this card is currently selected
  onCardSelected: (id: number) => void // Function to handle selecting this card
  deleteCard: (id:number) => void // Function to handle deleting this card
}

// Component that displays a card thumnail and delete button
export default function CardThumbnail ({ card, isSelected, onCardSelected, deleteCard }: CardThumbnailProps) {
  return (
    <>
      <img 
        src={card.image} 
        className={isSelected ? "border border-primary rounded-2 p-2" : "p-2"} 
        onClick={() => onCardSelected(card.id)}/> {/* Select this card on click */}
      <div className="d-flex justify-content-between mt-2 mb-1 align-items-center">
        <button className="btn btn-danger btn-sm" onClick={() => deleteCard(card.id)} > {/* Trigger delete action */}
          <img src={deleteIcon} style={{width: ".75rem"}}/>
        </button>
      </div>
    </>
  )
}