import {BsGithub} from "react-icons/bs";
import {AiOutlineMail} from "react-icons/ai";
import {useNavigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {Fragment, useEffect, useState} from "react";
import {login} from "../redux/Actions/authActions";

const Longin = ()=>
{
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const token = localStorage.getItem('token')
    const {user, error, isLoading} = useSelector(state => state.authReducer)
    const [credentialError, setCredentialError] = useState('');
    const [formData, setFormData] = useState({username:"", password:""});
    const {username, password} = formData
    const onChange = (e) => setFormData({...formData, [e.target.name]: e.target.value})

    const onSubmit = (e) =>
    {
        e.preventDefault()
        dispatch(login(username, password))
    }
    useEffect(() =>
    {
        if(error !== null)
        {
            setCredentialError("Your credentials are incrrect")
        }
        if(token)
        {
            return navigate('/')
        }
    }, [dispatch, user]);

    if(isLoading){return <Fragment>
        <div role="status">
            <svg aria-hidden="true" className="flex items-center justify-center w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
                 viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                    fill="currentColor"></path>
                <path
                    d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                    fill="currentFill"></path>
            </svg>
        </div>
    </Fragment>}
    return(
        <section className="w-screen h-screen ">
            <div className="container px-12 py-12 w-full h-full  lg:ml-52">
                <div className="flex justify-center items-center flex-wrap h-full  text-gray-800">
                    <div className="md:w-8/12 lg:w-5/12 mb-12 md:mb-0">
                        <img
                            src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.svg"
                            className="w-full"
                            alt="Phone image"
                        />
                    </div>
                    <div className="md:w-8/12 lg:w-3/12 lg:ml-20">
                        <form onSubmit={onSubmit}>
                            {/*-- Email input --*/}
                            <div className="mb-6">
                                <input
                                    type="text"
                                    className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded-3xl transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                                    placeholder="Username"
                                    value={username}
                                    onChange={e=>onChange(e)}
                                    id="username" name="username"
                                />
                            </div>

                            {/*Password input */}
                            <div className="mb-6">
                                <input
                                    type="password"
                                    className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded-3xl transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                                    placeholder="Password"
                                    value={password}
                                    minLength={6}
                                    name="password"
                                    onChange={e =>onChange(e)}
                                />
                            </div>
                            {error && <b className="flex text-red-500 text-center mb-2 mt-0">{credentialError}</b>}

                            <div className="flex justify-between items-center mb-6">
                                <div className="form-group form-check">
                                    <input
                                        type="checkbox"
                                        className="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                                        id="exampleCheck3"
                                        // checked
                                    />
                                    <label className="form-check-label inline-block text-gray-800" htmlFor="exampleCheck2">Remember me</label>
                                </div>
                                <a  href="#" className="text-blue-600 hover:text-blue-700 focus:text-blue-700 active:text-blue-800 duration-200 transition ease-in-out">Forgot password?</a>

                            </div>
                                {/*signup button*/}
                            <button
                                type="submit"
                                className="inline-block px-7 py-3 bg-blue-600 text-white font-medium text-sm leading-snug uppercase rounded-xl shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out w-full"
                                data-mdb-ripple="true"
                                data-mdb-ripple-color="light">Sign In</button>

                            <div  className="flex items-center my-4 before:flex-1 before:border-t before:border-gray-300 before:mt-0.5 after:flex-1 after:border-t after:border-gray-300 after:mt-0.5">
                                <p className="text-center font-semibold mx-4 mb-0">OR</p>
                            </div>
                            <a
                                className="px-7 py-3  mb-3 shadow bg-gray-100 font-normal text-sm leading-snug uppercase rounded-xl shadow-md hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 ease-in-out w-full flex justify-center items-center"
                                href="/register"
                                role="button"
                                data-mdb-ripple="true"
                                data-mdb-ripple-color="light"
                            >
                                <AiOutlineMail className="mr-3" size={20}/>
                                Continue with Email
                            </a>
                            <a
                                className="px-7 py-3 font-normal text-sm bg-black text-white leading-snug uppercase rounded-xl shadow-md hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 ease-in-out w-full flex justify-center items-center mb-3"
                                href="#"
                                role="button"
                                data-mdb-ripple="true"
                                data-mdb-ripple-color="light"
                            >
                                <BsGithub size={20} className="text-white mr-3"/>
                                Continue with Github
                            </a>

                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Longin
