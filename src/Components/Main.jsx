import { BrowserRouter as Route, Switch } from 'react-router-dom';
const Main=()=>{
    return (
       <div>
        <Switch>
            <Route path="/">
                <h1>Fraud Detection </h1>
            </Route>
            <Route path="/about">
                <h1>About Us </h1>
            </Route>
        </Switch>
       </div>
    )
}
export default Main;