export const routes = {
    dashboard: "/",
    overview: "/overview",
    tickets: "/tickets",
    ideas: "/ideas",
    contacts: "/contacts",
    agents: "/agents",
    articles: "/articles",
    settings: "/settings",
    subscriptions: "/subscriptions",
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