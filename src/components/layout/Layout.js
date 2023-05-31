import Container from 'components/base/Container';

export default function Layout({ children }){
  return(
    <Container className={'layout'}>
      {children}
    </Container>
  );
}