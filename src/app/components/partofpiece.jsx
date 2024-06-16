export function PartOfPiece(props) {
  return (
    <div style={{ width: props.width, height: props.height }} className={props.className}>
      {props.children}
    </div>
  )
}