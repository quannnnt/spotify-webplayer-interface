export function Piece(props) {
  return (
    <div style={{ backgroundColor: '#121212', width: props.width, minWidth: props.minWidth, height: props.height }} className={props.className}>
      {props.children}
    </div>
  )
}