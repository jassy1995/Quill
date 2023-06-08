import { Router, Route, RootRoute } from '@tanstack/router';

import Follow from './pages/Follow';
import Post from './pages/Post';
import App from './App';
import Home from './pages/Home';

// Create a root route
const rootRoute = new RootRoute({ component: App })

// Create an home route
const homeRoute = new Route({
    getParentRoute: () => rootRoute,
    path: '/',
    component: Home,
})

const followRoute = new Route({
    getParentRoute: () => rootRoute,
    path: '/follow',
    component: Follow,
})

const postRoute = new Route({
    getParentRoute: () => rootRoute,
    path: '/post',
    component: Post,
})

// Create the route tree using your routes
const routeTree = rootRoute.addChildren([homeRoute, followRoute, postRoute])

// Create the router using your route tree
const router = new Router({ routeTree })

export default router
