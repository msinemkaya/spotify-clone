export default function NavLink({ to, children }){

  return(
    <a href={to} className='text-white/70 hover:text-white transition-all duration-300 flex items-center gap-x-5 h-10 font-semibold capitalize text-base'>
      {children}
    </a>
  );
}