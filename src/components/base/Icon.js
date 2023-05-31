import { HiOutlinePlus } from 'react-icons/hi'
import { AiOutlineSearch } from 'react-icons/ai'
import { BsChevronRight, BsChevronLeft, BsCheck2, BsPinAngleFill } from 'react-icons/bs'
import { CiUser } from 'react-icons/ci'
import { TbBooks } from 'react-icons/tb'
import { BiChevronDown, BiChevronUp } from 'react-icons/bi'
import { MdOutlineDownloading } from 'react-icons/md'

export default function Icon({ type, className, size = 16 }){

  const icons = {
    plus: <HiOutlinePlus size={size}/>,
    search: <AiOutlineSearch size={size}/>,
    left: <BsChevronLeft size={size}/>,
    right: <BsChevronRight size={size}/>,
    user: <CiUser size={size}/>,
    library: <TbBooks size={size}/>,
    down: <BiChevronDown size={size}/>,
    up: <BiChevronUp size={size}/>,
    check: <BsCheck2 size={size}/>,
    pin: <BsPinAngleFill size={size}/>,
    download: <MdOutlineDownloading size={size}/>
  }

  return(
    <span className={className}>
      {icons[type]}
    </span>
  );
}