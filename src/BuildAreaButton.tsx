// Define props for BuildAreaButton component
type BuildAreaButtonProps = {
  icon: string, // Path to icon image used inside the button
  onClick?: () => void, // Callback function for click event
  type?: "button" | "submit" | "reset", // Optional button type (default to "button")
  className?: string // Optional additional CSS classes
}

// Render a small styled button with an icon inside
export default function BuildAreaButton({ icon, onClick, type="button", className="" }: BuildAreaButtonProps ) {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`btn btn-secondary btn-sm mx-1 ${className}`} // Combine default and custom classes
    >
      <img src={icon} style={{width: ".75rem"}}/> {/* Render the icon at a small size */}
    </button>
  )
}