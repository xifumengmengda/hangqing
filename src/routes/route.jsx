


// https://www.jianshu.com/p/eabf90d08307 路由配置
import React from 'react'
import { Route,Switch,BrowserRouter as Router,} from "react-router-dom";

import  Test from '../pages/test'
import Hourse from '../pages/hourse'
class RouteMap extends React.Component {
    render() {
        return (
            <Router basename='/visualization'>
                <Switch>
                    <Route path="/" exact component={Test}/>
		    <Route path="/residential" exact component={Hourse}/>
                </Switch>
            </Router>
        )
    }
}
 
export default RouteMap