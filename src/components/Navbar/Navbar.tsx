export const Navbar = ()=>{
    return(
<div className="shadow bg-black">
  <div className="h-16 mx-auto px-5 flex items-center justify-between">
      <img src="https://static.wikia.nocookie.net/markiplier/images/3/35/7_Days_To_Die_Logo.png" alt="7 days to die image logo" className="h-10"/>
      
      <ul className="flex items-center gap-5">
        <li><a className="hover:text-cyan-500 transition-colors" href="">Home</a></li>
        <li><a className="hover:text-cyan-500 transition-colors" href="">About</a></li>
        <li><a className="hover:text-cyan-500 transition-colors" href="">Login</a></li>
      </ul>
  </div>
</div>
    )
}