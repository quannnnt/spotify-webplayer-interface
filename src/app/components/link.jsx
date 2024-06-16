export function Link(props) {
  return (
    <div style={{ width: '100%', height: '50%', cursor: 'pointer' }} className='flex justify-start items-center gap-5 text-zinc-400 text-[16px] hover:text-white font-sans font-medium group'>
      <img src={props.img} className='invert-[0.8] group-hover:invert' style={{ height: '50%' }} alt="icon" />
      <p>{props.textLink}</p>
    </div>
  )
}