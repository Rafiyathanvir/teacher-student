import axios from 'axios';
import { useFormik } from 'formik'
import React from 'react'
import { Link, useNavigate } from 'react-router-dom';
import "./Login.css"
function Login() {
 
            
    
    return (
       

                            <div className="text-center text-lg-start date mt-4 pt-2">

                                <h1>Welcome to STUDENT and TEACHER Mangement</h1>
                                <br/>
                                <br/>
                                <Link to={"/portal"}><input type="submit" value="Click Me" className="btn btn-primary btn-lg"
                                    style={{ paddingleft: "2.5rem", paddingright: "2.5rem" }} /></Link>
                               
                            </div>




                
    )
}

export default Login