import { HiOutlinePlus } from 'react-icons/hi'
import { AiOutlineSearch } from 'react-icons/ai'
import { BsChevronRight, BsChevronLeft } from 'react-icons/bs'
import { CiUser } from 'react-icons/ci'

export default function ButtonIcon({ type }){

  const icons = [
    {
      type: 'plus',
      icon: <HiOutlinePlus size={16}/>
    },
  
    {
      type: 'search',
      icon: <AiOutlineSearch size={16}/>
    },
    {
      type: 'left',
      icon: <BsChevronLeft size={16}/>
    },
    {
      type: 'right',
      icon: <BsChevronRight size={16}/>
    },
    {
      type: 'user',
      icon: <CiUser size={16}/>
    },
  
  ]

  const icon = icons.find(icon => type === icon.type)

  return(
    <span>
      {icon.icon}
    </span>
  );
}