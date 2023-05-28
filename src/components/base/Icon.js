import { HiOutlinePlus } from 'react-icons/hi'
import { AiOutlineSearch } from 'react-icons/ai'
import { BsChevronRight, BsChevronLeft } from 'react-icons/bs'
import { CiUser } from 'react-icons/ci'
import { TbBooks } from 'react-icons/tb'

export default function Icon({ type, className, size = 16 }){

  const icons = {
    plus: <HiOutlinePlus size={size}/>,
    search: <AiOutlineSearch size={size}/>,
    left: <BsChevronLeft size={size}/>,
    right: <BsChevronRight size={size}/>,
    user: <CiUser size={size}/>,
    library: <TbBooks size={size}/>
  }

  return(
    <span className={className}>
      {icons[type]}
    </span>
  );
}