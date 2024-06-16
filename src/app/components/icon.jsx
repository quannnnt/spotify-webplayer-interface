export function Icon(props) {
  return (
    <img src={props.src} alt='fds' className={`cursor-pointer ${props.className}`} style={{ height: props.height, filter: props.filter }} />
  )
}