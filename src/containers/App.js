import React from 'react'
import { Link, Route, Switch } from 'react-router-dom'
import HeaderContainer from './HeaderContainer'
import ItemsContainer from './ItemsContainer'
import CartContainer from './CartContainer'

import GridContainer from './GridContainer'
import PaymentContainer from './PaymentContainer'
import PaymentSuccessContainer from './PaymentSuccessContainer'
import PaymentRedirectContainer from './PaymentRedirectContainer'
import DetailContainer from './DetailContainer'
const App = () => (

  <div>
    <HeaderContainer />
    
    <hr/>
    <Switch>
    <Route exact path="/" component={ItemsContainer} />
    <Route exact path="/cart" render={() => <CartContainer successPage='/payment' ngPage='/login' />} />
    <Route exact path="/product" component={GridContainer} />
    <Route exact path="/payment" component={PaymentSuccessContainer} />
    <Route exact path="/login" component={PaymentRedirectContainer} />
    <Route exact path="/product/:id" component={DetailContainer} />
    </Switch>


  </div>

)

export default App
