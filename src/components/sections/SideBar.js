import NavLink from 'components/common/NavLink';
import { AiOutlineHome } from 'react-icons/ai'
import { BsSearchHeart } from 'react-icons/bs'

export default function SideBar({ }){

  const navLinks = [
    {
      to: '/',
      text: 'ana sayfa',
      icon: <AiOutlineHome size={24}/>
    },
    {
      to: '/search',
      text: 'ara',
      icon: <BsSearchHeart size={24}/>
    },
  ]

  return(
    <>
      {navLinks.map(link => (
        <NavLink to={link.to}>
          {link.icon}
          <span>{link.text}</span>
        </NavLink>
      ))}
    </>
  );
}