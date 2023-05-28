export default function Wrapper({ children }){
  return(
    <div className='bg-base rounded-lg px-2 py-3'>
      {children}
    </div>
  );
}