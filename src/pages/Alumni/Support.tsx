import { DashboardLayout } from "./Home";
import { FooterLinks } from "../../components/Footer";
export default function SupportPage() {
    return <DashboardLayout>
        <div id="body">
            <div className="container">

                <div className="row">

                    <div id="content" className="col-md-12">

                        <article className="single-post">
                            <div className="post-content">
                                <h4>Kantor Alumni<br />
                                    Universitas Muhammadiyah Yogyakarta</h4>
                                <p>Kampus Terpadu UMY JL. Brawijaya, Kasihan, Bantul, Yogyakarta<br />
                                    Daerah Istimewa Yogyakarta, Indonesia, 55185</p>
                                <p>Telepon/ Faksimili: +62 274 387656, +62 274 387646<br />
                                    SMS/WA : +62 274 387656<br />
                                    Email: <a href="mailto:bhp@umy.ac.id">bhp@umy.ac.id</a></p>
                                <p>&nbsp;</p>
                            </div>
                        </article>			
                    </div>

                </div>

            </div>
        </div>
        <FooterLinks />
    </DashboardLayout>
}