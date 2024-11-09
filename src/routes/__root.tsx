import React from "react";
import BaseLayout from "@/layouts/BaseLayout";
import AuthBaseLayout from "@/layouts/AuthBaseLayout";

import { Outlet, createRootRoute, createRoute } from "@tanstack/react-router";




export const AuthRoute = createRootRoute({
    component: AuthRoot,
});

export const RootRoute = createRoute({
    getParentRoute: () => AuthRoute,
    component: Root,
    path: "/",
});

function AuthRoot() {
    return (
        <AuthBaseLayout>
            <Outlet />
        </AuthBaseLayout>
    );
}

function Root() {
    return (
        <BaseLayout>
            <Outlet />
        </BaseLayout>
    );
}
