import { AiFillTool } from "react-icons/ai";
import { FaUser } from "react-icons/fa";
import React from 'react'

const index = () => {
  return (
    <div>
      <h1>hello i am aarti</h1>
    <h1>Hello Divya How are you yes i am fine and you </h1>
      <br/>

      <div className='head1'>
<h1 id="hello"> Sign In </h1>
</div>

<div className='humm'>
<span id="Sp"><FaUser /></span>
<input type="text" class="tell" placeholder="username" required id="uname"></input>
</div><br></br>

<div className='humm1'>
<span id="Sp1"><AiFillTool /></span>
  <input type="text" class="tell1" placeholder="password" required id="pwd"></input>
</div>

<div className="remee">
<input type="checkbox" id="html" name="fav_language" value="HTML"></input>
  <label for="html" class="la"> Remeember me</label><br></br>
</div><br></br>

<div className="btn">
<button id="Bt">Login</button>
</div>
 
<div className="page">
<p id="PP"> Dont't have an account? <a href="htt://">Sign Up</a> </p>
</div>

<div className="link">
<a href="http://" className='got1'>forgot your password</a><br></br>
</div><br></br>


    </div>
   
  )
}

export default index
