export function Subtitle(props) {
  return (
    <p className={`text-zinc-400 font-sans font-medium ${props.className}`} style={{ fontSize: '12px' }}>{props.subtitle}</p>
  )
}