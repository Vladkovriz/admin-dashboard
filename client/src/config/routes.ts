export const routes = {
    dashboard: "/",
    overview: "/overview",
    profile: {
        root: "/profile",
        edit: "/edit",
    },
    auth: {
        root: "/auth/*",
        login: "login",
        registration: "registration",
        refreshPassword: "refresh-password"
    },
}