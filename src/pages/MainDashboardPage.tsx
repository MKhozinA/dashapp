import { Button, Text, Title } from "@mantine/core";
import { Link } from "react-router-dom";

export const MainDashboardPage = () => {
    const handleClick = () => {
        alert("Hello");
    };
    return (
        <><Title order={6}>Main Dashboard</Title>
        <Text size="sm" color="dimmed">This is the main dashboardpage</Text><section id="statistik">
        
            <Title order={6}>Statistik</Title>

            <Link to="/admindataalumni">
                Admindataalumni
            </Link>

            <Button component={Link} to="/admindataalumni">Lihat</Button>

            <Button onClick={handleClick}>User</Button>
           
        </section></>
    );
};