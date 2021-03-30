import ProductListContainer from './containers/ProductListContainer';
import NotFound from './components/NotFound';
import ProductDetailContainer from './containers/ProductDetailContainer';
import CartContainer from './containers/CartContainer';
import Login from './components/Login';
import AdminPage from './pages/AdminPage';
import HomePage from './pages/HomePage';

export const routes=[
    {
        path:'/',
        exact:true,
        main:()=><ProductListContainer/>
    },
    {
        path:'/login',
        exact:false,
        main:()=><Login/>
    },
    {
        path:'/cart',
        exact:true,
        main:()=><CartContainer/>
    },
    {
        path:'/:slug',
        exact:false,
        main:({match})=><ProductDetailContainer match={match}/>
    },
    {
        path:'',
        exact:false,
        main:()=><NotFound/>
    }
];
export const routesPage=[
    {
        path:'/admin',
        exact:false,
        main:()=><AdminPage/>
    },
    {
        path:'/',
        exact:false,
        main:()=><HomePage/>
    }
];
