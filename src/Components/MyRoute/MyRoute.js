import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Admin from '../AdminPanel/Admin/Admin';
import MakeAdmin from '../AdminPanel/MakeAdmin/MakeAdmin';
import ShowServicesList from '../AdminPanel/ShowServicesList/ShowServicesList'
import AddServices from '../AdminPanel/AddServices/AddServices'
import CustomerOrder from '../CustomerPanel/CustomerOrder/CustomerOrder';
import Review from '../CustomerPanel/Review/Review';
import ServiceList from '../CustomerPanel/ServiceList/ServiceList';
import Home from '../HomePage/Home/Home';
import Login from '../Login/Login';
import PrivateRoute from '../PrivateRoute/PrivateRoute';
import AdminLogin from '../AdminPanel/AdminLogin/AdminLogin';
import AdminRoute from '../AdminRoute/AdminRoute';

const MyRoute = () => {
    return (
        <BrowserRouter>
            <Route exact path="/" component={Home} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/adminlogin" component={AdminLogin} />
            <AdminRoute exact path="/admin" component={Admin} />
            <AdminRoute exact path="/admin-serviceslist" component={ShowServicesList} />
            <AdminRoute exact path="/admin-makeadmin" component={MakeAdmin} />
            <AdminRoute exact path="/admin-addservices" component={AddServices} />
            <PrivateRoute exact path="/servicelist" component={ServiceList} />
            <PrivateRoute exact path="/order" component={CustomerOrder} />
            <PrivateRoute exact path="/review" component={Review} />
        </BrowserRouter>
    );
};

export default MyRoute;