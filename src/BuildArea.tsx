import type { Card } from "./types.ts"

// Define expected props for BuildArea component
type BuildAreaProps = {
  card?: Card // Optional card object to display and edit
  updateCard: (id: number, updates: Partial<Card>) => void // Function to update card fields
}



export default function BuildArea ({ card, updateCard }: BuildAreaProps) {
  
  return (
    <div className="flex-grow-1 d-flex flex-column"> {/* Main content column */}
      <div className="d-flex flex-grow-1 justify-content-center"> {/* Centered display section */}
        <div 
          className="bg-secondary m-3 w-75 shadow-sm p-3 border" // Card display box
          style={{
            height: "500px",
            color: card?.side ? "red" : "black" // Conditional text color based on card.side
            }}
        >
            { card?.name } {/* Display card name */}
        </div>
      </div>
      <div className="d-flex p-3 justify-content-center"> {/* Note editing area */}
        <textarea 
          className= "form-control mb-3"
          onChange={(event) => {
            if (card) updateCard(card.id, { notes: event.target.value }) // Update card notes
          }}
          value={card?.notes} // Bind to current notes
        >
        </textarea>
      </div>
    </div>
  )
}