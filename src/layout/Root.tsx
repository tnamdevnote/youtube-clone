import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Outlet } from "react-router-dom";
import { ApiProvider } from "../context/YoutubeAPIContext";
import Header from "./Header";
import PageManager from "./PageManager";

const queryClient = new QueryClient();

export default function Root() {
    return (
        <>
            <Header />
            <PageManager>
                <ApiProvider>
                    <QueryClientProvider client={queryClient}>
                        <Outlet />
                    </QueryClientProvider>
                </ApiProvider>
            </PageManager>
        </>
    );
}
