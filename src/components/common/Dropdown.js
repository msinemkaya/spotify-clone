import Button from 'components/base/Button';
import Container from 'components/base/Container';
import Icon from 'components/base/Icon';
import { useRef, useState } from 'react';
import Panel from './Panel';
import H6 from 'components/base/heading/H6';

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
        <Icon type={'down'} />
      </Button>
      {isOpen && (
        <Panel>
          <H6 className={'text-[11px] font-semibold text-white/70 py-3 pr-2 pl-3'}>Şuna göre sırala:</H6>
          {options.map(option => (
            <Button key={option.key} onClick={() => handleOptionClick(option)} className={`min-w-[10rem] flex py-3 pr-2 pl-3 text-sm hover:bg-white/10 rounded-sm justify-between ${option.label === selection?.label ? 'text-green-700': null}`}>
              {option.label}
              {option.label === selection?.label && <Icon type={'check'} size={22}/> }
            </Button>
          ))}
        </Panel>
      )}
    </Container>
  );
}