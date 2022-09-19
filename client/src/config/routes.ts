export const routes = {
    dashboard: "/",
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