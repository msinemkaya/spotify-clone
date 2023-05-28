export default function Container({ children }){
  return(
    <div className='bg-base rounded-lg px-2 py-3'>
      {children}
    </div>
  );
}