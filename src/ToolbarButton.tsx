
// Props expected by the ToolbarButton component
type ToolbarButtonProps = {
  icon: string, 
  onClick: () => void
}

export default function ToolbarButton({ icon, onClick }: ToolbarButtonProps ) {
  return (
    <div 
      className="btn btn-secondary me-2"
      onClick={onClick} // Handles click events
    >
      <img src={icon} style={{width: "1rem"}}/> {/* Renders the icon image */}
    </div>
  )
}