import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import PageManager from "./PageManager";

const queryClient = new QueryClient();

export default function Root() {
    return (
        <>
            <Header />
            <PageManager>
                <QueryClientProvider client={queryClient}>
                    <Outlet />
                </QueryClientProvider>
            </PageManager>
        </>
    );
}
