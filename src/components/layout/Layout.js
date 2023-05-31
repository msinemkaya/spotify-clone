import Container from 'components/base/Container';

export default function Layout({ children }){
  return(
    <Container className={'layout gap-2'}>
      {children}
    </Container>
  );
}