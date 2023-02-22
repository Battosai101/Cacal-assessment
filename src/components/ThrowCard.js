
export default function ThrowCard(props){
    return(
        <button className='w-[375px] h-[427px] rounded-[30px] overflow-hidden shrink-0 snap-start border-2 border-white'>
                <img src={`../ThrowPoster/${props.poster}`} alt={props.alt} className='w-full h-full'/>
        </button>
    )
}
