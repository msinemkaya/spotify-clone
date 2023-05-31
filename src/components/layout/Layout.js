import Container from 'components/base/Container';

export default function Layout({ children }){
  return(
    <Container className={'grid auto-cols-auto h-full'}>
      {children}
    </Container>
  );
}