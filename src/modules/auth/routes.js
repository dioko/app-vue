import Base from "@/modules/auth/base"

const routes = [
    {
        path: "/auth",
        component: Base,
        meta: { layout: "auth" },
        children: [
            {
                path: "login",
                component: () => import(/* webpackChunkName: "login" */ "@/modules/auth/components/login"),
                name: "auth.login",
                meta: { layout: "auth" }
            },
            {
                path: "form",
                component: () => import(/* webpackChunkName: "login" */ "@/modules/auth/components/form"),
                name: "auth.form",
                meta: { layout: "auth" }
            },
        ]
    }
]

export default routes;
