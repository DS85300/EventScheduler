
const SignIn = () => {

    return (

        <>
        <div className="bg-gradient-to-r from-[#79c3e0] to-[#2084ab] flex items-center justify-center h-screen">
        <form className="fieldset w-xs bg-base-200 border border-base-300 p-4 rounded-box">
  <legend className="fieldset-legend">Login</legend>
  
  <label className="fieldset-label">Email</label>
  <input type="email" className="input" placeholder="Email" />
  
  <label className="fieldset-label">Password</label>
  <input type="password" className="input" placeholder="Password" />
  
  <button className="btn btn-neutral mt-4">Login</button>
</form>
        </div>
        </>
    );
};

export default SignIn;
