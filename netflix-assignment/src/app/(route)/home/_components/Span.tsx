import Plus from '../../../../assets/svg/Plus.svg';
import Info from '../../../../assets/svg/Info.svg';
import RightArrow from '../../../../assets/svg/RightArrow.svg';

export default function Span() {
    return (
        <div className='mt-[13px] w-[259px] h-[45px] flex justify-around items-center'>
            <span className='w-[41px] text-white flex flex-col items-center'>
                <Plus className='stroke-current'/>
                <p className='w-[100vw] text-[13.64px] font-normal text-center'>My List</p>
            </span>
            <span className='w-[110.63px] h-full bg-[#C4C4C4] rounded-[5.63px] flex justify-center items-center gap-[15px] text-black'>
                <RightArrow className='stroke-current '/>
                <p className='text-[20.46px] font-semibold'>Play</p>
            </span>
            <span className='w-[41px] text-white flex flex-col items-center'>
                <Info className='stroke-current'/>
                <p className='text-[13.64px] font-normal text-center'>Info</p>
            </span>
      </div>
    );
}
