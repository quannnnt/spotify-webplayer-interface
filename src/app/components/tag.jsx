export function Tag(props) {
  return (
    <div className={props.className} style={{ height: '33px', backgroundColor: '#252525', fontSize: '13px', borderRadius: '22px' }}>
      {props.children}
      <p>{props.textTag}</p>
    </div>
  )
}