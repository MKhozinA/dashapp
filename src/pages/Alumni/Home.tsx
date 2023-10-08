import { AppShell } from "@mantine/core";
import { FooterLinks } from "../../components/Footer";
import { HeaderMenuColored } from "../../components/Header";
import { HeroImageBackground } from "../../components/HeroText";
import { links } from '../../assets/links.json';
export default function IndexPage() {
    return (<DashboardLayout>
        <HeroImageBackground></HeroImageBackground>
        <div className="container-fluid pt-5 mb-3">
            <div className="container">
                <div className="section-title">
                    <h4 className="m-0 text-uppercase font-weight-bold">Featured News</h4>
                </div>
                
            </div>
        </div>

        <h1>Berita Terbaru Alumni</h1>
        <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam dignissimos iusto voluptatum voluptates, mollitia accusantium possimus doloremque nulla, autem, neque animi obcaecati distinctio vel praesentium quaerat tempore saepe. Vitae, vel?
        </p>

        <h1>Informasi Lowongan Pekerjaan</h1>
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