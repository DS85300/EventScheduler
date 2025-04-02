import { Link } from "react-router-dom";



const Navbar= () => {


    return (

        <>

<div className="navbar bg-[#414E59] text-white shadow-sm">
  <div className="flex-1">
    <a className="btn btn-ghost text-white text-xl">Event Scheduler</a>
  </div>
  <div className="flex-none">
    <ul className="menu-horizontal px-1 mr-2">
      <li className="mr-5"><Link>Home       </Link></li>
      <li className="mr-5"><Link to="/CreateEvent">Create Event</Link></li>
      <li className="mr-5">|</li>
      <li className="mr-5"><Link to="LogIn">Login      </Link></li>
      <li className="mr-5"><Link>SignUp</Link></li>
    </ul>
  </div>
</div>
      
        
        </>


    );
};

export default Navbar;
