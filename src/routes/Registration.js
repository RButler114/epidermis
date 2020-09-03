import React from 'react';
import { observer } from 'mobx-react';
import UserStore  from '../stores/UserStore';
import LoginForm from '../components/LoginForm';
import SubmitButton from '../components/SubmitButton';


class Registration extends React.Component{

  async componentDidMount(){
    try{
      let res = await fetch('/isLoggedIn', {
        method: 'post',
        headers:{
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        }
      }),
      result = await res.json();

      if(result && result.success){
        UserStore.isLoggenIn = true;
        UserStore.username = result.username;
      }else{
        UserStore.isLoggenIn = false;
      }
      UserStore.loading = false;
    }catch(e){
      UserStore.loading = false;
      UserStore.isLoggenIn = false;
    }
  }

  async doLogout(){
    try{
      let res = await fetch('/logout', {
        method: 'post',
        headers:{
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        }
      }),
      result = await res.json();

      if(result && result.success){
        UserStore.isLoggenIn = false;
        UserStore.username = '';
      }

    }catch(e){
      console.log(e);
    }
  }



  render(){
    console.log(UserStore.loading);
    if(UserStore.loading){
      return(
        <div>
          <p>Is Loading...</p>
        </div>
      );
    }else{
      if(UserStore.isLoggenIn){
        return(
          <div>
            <div>
              Welcome {UserStore.username}

              <SubmitButton
                text={'Log out'}
                disabled={false}
                onClick={ ()=> this.doLogout() }
              />
            </div>
          </div>
        );
      }

      return(
        <div>
         
          <LoginForm/>

        </div>
      );
    }
  }
}

export default observer(Registration);