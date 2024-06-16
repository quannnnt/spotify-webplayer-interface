export function Title(props) {
  return (
    <p className={`text-white font-sans font-medium ${props.className}`} style={{ fontSize: props.size }}>{props.title}</p>
  )
}