import Container from 'components/base/Container';
import Icon from 'components/base/Icon';
import Input from 'components/base/Input';

export default function SearchInput({ placeholder }){
  return(
    <Container className={'relative group max-w-full min-w-0'}>
      <Icon type={'search'} className={'absolute top-0 h-12 w-9 justify-center text-white/70 group-hover:text-white flex items-center'} size={22} />
      <Input placeholder={placeholder} className={'rounded-full h-12 px-9 py-1 text-sm bg-elevated-base text-white truncate max-w-full'}/>
    </Container>
  );
}