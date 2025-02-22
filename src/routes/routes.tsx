import { createRoute } from "@tanstack/react-router";
import HomePage from "../pages/HomePage";
import { AuthRoute, RootRoute } from "./__root";
import AboutPage from "@/pages/AboutPage";
import InboxPage from "@/pages/InboxPage";

import LoginPage from "@/pages/auth/Login";

// TODO: Steps to add a new route:
// 1. Create a new page component in the '../pages/' directory (e.g., NewPage.tsx)
// 2. Import the new page component at the top of this file
// 3. Define a new route for the page using createRoute()
// 4. Add the new route to the routeTree in RootRoute.addChildren([...])
// 5. Add a new Link in the navigation section of RootRoute if needed

// Example of adding a new route:
// 1. Create '../pages/NewPage.tsx'
// 2. Import: import NewPage from '../pages/NewPage';
// 3. Define route:
//    const NewRoute = createRoute({
//      getParentRoute: () => RootRoute,
//      path: '/new',
//      component: NewPage,
//    });
// 4. Add to routeTree: RootRoute.addChildren([HomeRoute, NewRoute, ...])
// 5. Add Link: <Link to="/new">New Page</Link>

export const LoginRoute = createRoute({
    getParentRoute: () => AuthRoute,
    path: "/login",
    component: LoginPage,
});

export const InboxRoute = createRoute({
    getParentRoute: () => RootRoute,
    path: "/inbox",
    component: InboxPage,
});

export const AboutRoute = createRoute({
    getParentRoute: () => RootRoute,
    path: "/about",
    component: AboutPage,
});

export const HomeRoute = createRoute({
    getParentRoute: () => RootRoute,
    path: "/home",
    component: HomePage,
});

export const rootTree = AuthRoute.addChildren([
    LoginRoute,
    RootRoute.addChildren([HomeRoute, AboutRoute, InboxRoute]),
]);
