import Button from 'components/base/Button';
import Panel from './Panel';
import H6 from 'components/base/heading/H6';
import ReactDOM from 'react-dom';
import Icon from 'components/base/Icon';

export default function DropdownPanel({ options, selection, handleOptionClick }) {
  return ReactDOM.createPortal(
    <Panel className='dropdown-panel absolute top-0'>
      <H6 className='text-[11px] font-semibold text-white/70 py-3 pr-2 pl-3'>
        Şuna göre sırala:
      </H6>
      {options.map((option) => (
        <Button
          key={option.key}
          onClick={() => handleOptionClick(option)}
          className={`min-w-[10rem] flex py-3 pr-2 pl-3 text-sm hover:bg-white/10 rounded-sm justify-between focus:outline-none ${
            option.label === selection?.label ? 'text-green-700' : null
          }`}
        >
          {option.label}
          {option.label === selection?.label && (
            <Icon type='check' size={22} />
          )}
        </Button>
      ))}
    </Panel>,

    document.querySelector('.panel')
  )
}
