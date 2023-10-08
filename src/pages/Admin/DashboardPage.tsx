import { AppShell, Footer, Header, Navbar, Text, Title } from "@mantine/core";
import { Outlet } from "react-router-dom" ;
import { MainNavbar } from "./Admin";

export const DashboardLayout =() => {
    return (
        <div>
            <AppShell
                header={
                    <Header height={60}>

                    </Header>
                }
                layout="alt"
                footer={
                    <Footer height={24}>
                        <Text size="xs" color="dimmed" align="center">
                            copyright &copy; 2023 Khozin
                        </Text>
                    </Footer>
                }
                navbar={
                    <MainNavbar/>
                }
            >
                <Outlet />
            </AppShell>
        </div>
    );
}