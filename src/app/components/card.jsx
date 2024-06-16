export function Card(props) {
  return (
    <div className='rounded-lg p-4 bg-zinc-900 hover:brightness-125 cursor-pointer' style={{ width: props.width, height: props.height }}>
      {props.children}
    </div>
  )
}