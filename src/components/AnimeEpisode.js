
export default function AnimeEpisode(props){
    return(
        <div className='flex items-center justify-between pt-[17px]'>
            <img src={`../episode/${props.img}`} alt="ep1" className='w-[448px] h-[252px] rounded-[20px]'/>
            <div className='flex flex-col pl-4 text-left'>
                <p className='mb-[10px] font-[Outfit] font-normal text-xl text-white'>
                    {props.ep}
                </p>
                <p className='font-[Outfit] font-normal text-xl text-[#747474]'>
                    {props.desc}
                </p>
            </div>
        </div>
    )
}