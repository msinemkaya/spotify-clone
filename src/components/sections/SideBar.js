import Button from 'components/base/Button'
import Container from 'components/base/Container'
import Dropdown from 'components/common/Dropdown'
import FlexBox from 'components/common/FlexBox'
import NavLink from 'components/common/NavLink'
import SliderMenu from 'components/common/SliderMenu'
import SpotifyButton from 'components/common/SpotifyButton'
import Wrapper from 'components/common/Wrapper'
import { useState } from 'react'
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

  const [selection, setSelection] = useState(null)

  const options = [
    { label: 'Yakın tarihli', value: 'Yakın tarihli'},
    { label: 'Yeni eklenenler', value: 'Yeni eklenenler'},
    { label: 'Alfabetik', value: 'Alfabetik'},
    { label: 'Oluşturan', value: 'Oluşturan'},
  ]

  const handleSelect = (option) => {
    setSelection(option)
  }

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
        <FlexBox className={'py-2 px-1 justify-between'}>
          <SpotifyButton highlight type={'search'} />
          <Dropdown options={options} selection={selection} onSelect={handleSelect}/>
        </FlexBox>
      </Wrapper>
    </Container>
  )
}
