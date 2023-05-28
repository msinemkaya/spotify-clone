import { Link } from 'react-router-dom'

export default function NavLink({ to, children }) {
  return (
    <Link
      to={to}
      className='text-white/70 hover:text-white transition-all duration-300 flex items-center gap-x-5 h-10 font-semibold capitalize text-base p-3'
    >
      {children}
    </Link>
  )
}
