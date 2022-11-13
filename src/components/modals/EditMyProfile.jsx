import {useDispatch} from "react-redux";
import {useState} from "react";
import {editMyProfileAction} from "../../redux/Actions/mineAction";

const EditMyProfile = ({my_profile})=>
{
    const dispatch = useDispatch()
    const [email, setEmail] = useState(my_profile?.user?.email);
    const [username, setUsername] = useState(my_profile?.user?.username);
    const [bio, setBio] = useState(my_profile?.bio);
    const [avatar, setAvatar] = useState(null);
    const [cover_image, setCover_image] = useState(null);

    const editMyProfile = async (e) =>
    {
        let editedProfile = new FormData()
        editedProfile.append('email', email ? email : my_profile?.user?.email)
        editedProfile.append('username', username ? username : my_profile?.username)
        editedProfile.append('user', my_profile?.user?.id)
        editedProfile.append('bio', bio ? bio : my_profile?.bio)
        if(avatar !== null)
        {
            editedProfile.append('avatar', avatar )
        }
        if(cover_image !== null)
        {
            editedProfile.append('cover_image', cover_image)
        }
        e.preventDefault()
        dispatch(editMyProfileAction(editedProfile))
    }
    return(
        <div className="rounded-md shadow-xl p-4">
            <form onSubmit={editMyProfile}>
                <div className="relative z-0 mb-6 w-full group">
                    <input type="email" name="email" id="email"
                           defaultValue={my_profile?.user?.email}
                           onChange={(e)=>setEmail(e.target.value)}
                           className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                           placeholder=" " required={true}/>
                    <label htmlFor="email"  className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Email address</label>
                </div>
                <div className="relative z-0 mb-6 w-full group">
                    <input type="text" name="username" id="username"
                           defaultValue={my_profile?.user?.username}
                           onChange={(e)=>setUsername(e.target.value)}
                           className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                           placeholder=" " required={true}/>
                    <label htmlFor="username" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Username</label>
                </div>
                <div className="grid md:grid-cols-2 md:gap-6">
                    {/*<div className="relative z-0 mb-6 w-full group">*/}
                    {/*    <input type="text" name="floating_first_name" id="floating_first_name"*/}
                    {/*           className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"*/}
                    {/*           placeholder=" " required=""/>*/}
                    {/*    <label htmlFor="floating_first_name"  className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">First name</label>*/}
                    {/*</div>*/}
                    {/*<div className="relative z-0 mb-6 w-full group">*/}
                    {/*    <input type="text" name="floating_last_name" id="floating_last_name"*/}
                    {/*           className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"*/}
                    {/*           placeholder=" " required=""/>*/}
                    {/*    <label htmlFor="floating_last_name" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Last  name</label>*/}
                    {/*</div>*/}
                </div>
                <div className="grid md:grid-cols-2 md:gap-6">
                    <div className="relative z-0 mb-6 w-full group">
                        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                               htmlFor="profile">Profile Photo</label>
                        <input
                            // defaultValue={my_profile?.avatar}
                            accept='image/*'
                            onChange={(e)=>setAvatar(e.target.files[0] ? e.target.files[0] : my_profile?.avatar)}
                            className="block w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 cursor-pointer dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
                            id="image_cover" type="file" required={false}/>
                    </div>
                    <div className="relative z-0 mb-6 w-full group">
                        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                               htmlFor="cover">Cover Image</label>
                        <input
                            // defaultValue={my_profile?.cover_image}
                            accept='image/*'
                            onChange={(e)=>setCover_image(e.target.files[0] ? e.target.files[0] : my_profile?.image_cover)}
                            className="block w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 cursor-pointer dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
                            id="cover" type="file" required={false}/>
                    </div>
                </div>
                <div className="relative z-0 mb-6 w-full group">
                    <textarea id="message" rows="3"
                              defaultValue={my_profile?.bio}
                              onChange={(e)=>setBio(e.target.value)}
                              className="block px-0 w-full text-normal text-gray-800 bg-white border-0 dark:bg-gray-800 focus:ring-0 dark:text-white dark:placeholder-gray-400"
                              placeholder="Tell us about yourself..."/>
                    <button type="submit"
                            className="inline-flex float-right mt-0 items-center px-6 py-2 text-sm rounded-full font-bold text-center text-white bg-blue-700 rounded-lg focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-900 hover:bg-blue-800">Update
                    </button>
                </div>

            </form>

        </div>
    )
}
export default EditMyProfile
