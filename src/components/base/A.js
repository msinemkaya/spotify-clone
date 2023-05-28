export default function A({ children, to }){
  return(
    <a href={to}>
      {children}
    </a>
  );
}