import { AppShell } from "@mantine/core";
import { FooterLinks } from "../components/Footer";
import { HeaderMenuColored } from "../components/Header";
import { HeroImageBackground } from "../components/HeroText";
import { links } from '../assets/links.json';
export default function IndexPage() {
    return (<DashboardLayout>
        <HeroImageBackground></HeroImageBackground>

        <h1>Features</h1>
        <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam dignissimos iusto voluptatum voluptates, mollitia accusantium possimus doloremque nulla, autem, neque animi obcaecati distinctio vel praesentium quaerat tempore saepe. Vitae, vel?
        </p>
        <FooterLinks />
    </DashboardLayout>)
}

export const DashboardLayout = ({ children }: any) => {
    return (
        <AppShell header={<HeaderMenuColored links={links} />} padding={0}>
            {children}
        </AppShell>
    )
}