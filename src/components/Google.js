import React, { Component } from 'react';
import GoogleLogin from 'react-google-login';

export default class Google extends Component {
    state = {
        isLoggedIn: false,
        userId:"",
        name:"",
        email:""

    };
    
    responseGoogle = response => {
        console.log(response);

        this.setState({
            isLoggedIn: true,
            userId:response.userId,
            name:response.name,
            email:response.email,
            picture:response.picture.data.url

        });
    };
    componentClicked = () => console.log("clicked");
    
    render() {
        let gContent;
        // let profile = googleUser.getBasicProfile();
        const responseGoogle = (response) => {
            console.log(response);
          }
        if(this.state.isLoggedIn){
            gContent= (
                <div style={{
                    width:'400px'
                }}>
                
                <h2>Welcome {this.state.name}</h2>
                Email : {this.state.email}
                name:{this.state.name};
                </div>
            );
           console.log('ID: ' + this.state.getId());
        }else{
             gContent=(
                <GoogleLogin
                clientId="493790066644-4euqeb7pfnbn7u5kmfig4on63nqjm04a.apps.googleusercontent.com"
                buttonText="Login"
                onSuccess={responseGoogle}
                onFailure={responseGoogle}
                cookiePolicy={'single_host_origin'}
                />
             );
        }
        return (
            <div>
                {gContent}
            </div>
        )
    }
}
