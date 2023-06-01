export default function Input({ placeholder, className, type }){
  return(
    <input type={type} placeholder={placeholder} className={className} />
  );
}