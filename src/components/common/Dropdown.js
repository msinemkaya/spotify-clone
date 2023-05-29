import Button from 'components/base/Button';
import Container from 'components/base/Container';
import Icon from 'components/base/Icon';
import { useRef, useState } from 'react';
import DropdownPanel from './DropdownPanel';

export default function Dropdown({ options, selection, onSelect }){

  const [isOpen, setIsOpen] = useState(false)
  const dropdown = useRef(null)

  const handleClick = () => {
    setIsOpen(!isOpen)
  }

  const handleOptionClick = ( option ) => {
    setIsOpen(false)
    onSelect(option)
  }
  

  return(
    <Container ref={dropdown} className={'relative'}>
      <Button className={'text-xs text-white/70 hover:text-white flex gap-2 h-8 items-center px-2'} onClick={handleClick}>
        {selection?.label || 'Yakın tarihli'}
        {isOpen ? <Icon type={'up'} /> : <Icon type={'down'} />}
      </Button>
      {isOpen && (
        <DropdownPanel options={options} selection={selection} handleOptionClick={handleOptionClick}/>
      )}
    </Container>
  );
}