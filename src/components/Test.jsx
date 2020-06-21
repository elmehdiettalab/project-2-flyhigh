
import React , { useState , useEffect}from 'react'
import FacebookLogin from 'react-facebook-login/dist/facebook-login-render-props'
import fb from '../assets/facebook.png';

const Test = () => {
    const [user, setUser] = useState({}); 
    const [email, setEmail] = useState({}); 
    const [data, setData] = useState({}); 
    const [url, setUrl] = useState(""); 

    const responseFacebook = (response) => {
        setUser(response); 
        setUrl(response.picture.data.url); 
        console.log(response);

      }
    return (
        <div>
            <FacebookLogin
                appId="579594626321527"
                autoLoad={false}
                fields = "name,email,picture"
                callback = {responseFacebook}
                render={renderProps => (
                    <button style = {{background: 'none' , border: 'none' , outline: 'none'}} onClick={renderProps.onClick}>
                        <img src={fb} alt="" />

                    </button>
                )}
            />


            

        </div>
    )
}

export default Test
