import React from 'react';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import { Switch } from 'react-router-dom';
import NavBarContainer from './nav/navbar_container';

import MainPage from './main/main_page';
import LoginFormContainer from './session/login_form_container';
import SignupFormContainer from './session/signup_form_container';


// pet components 
import PetCreateContainer from './pets/pet_create_container';
import PetsContainer from './pets/pets_container';

const App = () => (
  <div>
    <NavBarContainer />
    <Switch>
      <AuthRoute exact path = "/" component={MainPage} />
      <AuthRoute exact path="/login" component={LoginFormContainer} />
      <AuthRoute exact path="/signup" component={SignupFormContainer} />
      <ProtectedRoute exact path = "/pets" component={PetsContainer} />
      <ProtectedRoute exact path = "/new_pet" component={PetCreateContainer} />
    </Switch>
  </div>
);

export default App;