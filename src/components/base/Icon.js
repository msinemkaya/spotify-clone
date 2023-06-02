import { HiOutlinePlus } from 'react-icons/hi'
import { HiOutlineQueueList } from 'react-icons/hi2'
import { AiOutlineSearch } from 'react-icons/ai'
import { BsChevronRight, BsChevronLeft, BsCheck2, BsPinAngleFill, BsPlayFill, BsPauseFill } from 'react-icons/bs'
import { CiUser } from 'react-icons/ci'
import { TbBooks, TbDevices2 } from 'react-icons/tb'
import { BiChevronDown, BiChevronUp, BiShuffle, BiRepeat, BiVolume } from 'react-icons/bi'
import { MdOutlineDownloading } from 'react-icons/md'
import { IoPlaySkipForward, IoPlaySkipBack } from 'react-icons/io5'

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
    download: <MdOutlineDownloading size={size}/>,
    play: <BsPlayFill size={size}/>,
    skipback: <IoPlaySkipBack size={size} />,
    skipforward: <IoPlaySkipForward size={size} />,
    pause: <BsPauseFill size={size} />,
    shuffle: <BiShuffle size={size} />,
    repeat: <BiRepeat size={size} />,
    volume: <BiVolume size={size} />,
    queue: <HiOutlineQueueList size={size} />,
    device: <TbDevices2 size={size} />,

  }

  return(
    <span className={className}>
      {icons[type]}
    </span>
  );
}