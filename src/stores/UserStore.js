import { extendObservable } from 'mobx';

class UserStore{
  constructor(){
    extendObservable(this, {
      loading: true,
      isLoggenIn: false,
      username: ''

    });
  }

}

export default new UserStore();