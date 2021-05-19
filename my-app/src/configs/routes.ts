import { RouteProps } from "react-router-dom";
import { lazy } from 'react';

const Dashboard = lazy(() => import('../containers/Dashboard/views/Dashboard'));

const routes: RouteProps[] = [
    { exact: true, path: "/dashboard", component: Dashboard }
];

export default routes;