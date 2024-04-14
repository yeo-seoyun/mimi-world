import { Outlet } from "react-router-dom";
import { Provider } from "jotai";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import ScrollToTop from "@/components/ScrollToTop";
import Header from "@/components/organisms/Header";

function Layout() {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <Provider>
        <div className="w-full h-full">
          <Header />
          <ScrollToTop />
          <main>
            <Outlet />
          </main>
          {/* <Footer /> */}
        </div>
      </Provider>
    </QueryClientProvider>
  );
}

export default Layout;
