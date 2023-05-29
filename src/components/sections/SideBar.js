import Button from 'components/base/Button'
import Container from 'components/base/Container'
import FlexBox from 'components/common/FlexBox'
import NavLink from 'components/common/NavLink'
import SliderMenu from 'components/common/SliderMenu'
import SpotifyButton from 'components/common/SpotifyButton'
import Wrapper from 'components/common/Wrapper'
import { AiOutlineHome } from 'react-icons/ai'
import { BsSearchHeart } from 'react-icons/bs'

export default function SideBar({}) {
  const navLinks = [
    {
      to: '/',
      text: 'ana sayfa',
      icon: <AiOutlineHome size={24} />,
    },
    {
      to: '/search',
      text: 'ara',
      icon: <BsSearchHeart size={24} />,
    },
  ]

  return (
    <Container className={'flex flex-col gap-2 w-90'}>
      <Wrapper>
        {navLinks.map((link, index) => (
          <NavLink key={index} to={link.to}>
            {link.icon}
            <span>{link.text}</span>
          </NavLink>
        ))}
      </Wrapper>
      <Wrapper>
        <FlexBox className={'justify-between py-2'}>
          <Button
            className={
              'text-white/70 hover:text-white transition-all duration-300 flex items-center gap-x-5 h-10 font-semibold capitalize text-base p-3'
            }
            type={'library'}
            iconSize={24}
          >
            kitaplığın
          </Button>
          <SpotifyButton highlight type={'plus'} />
        </FlexBox>
        <SliderMenu/>
      </Wrapper>
    </Container>
  )
}
