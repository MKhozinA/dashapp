import { DashboardLayout } from "./Home";
import { FooterLinks } from "../components/Footer";

export default function AboutPage() {
    return <DashboardLayout>
    <div id="body">
            <div className="container">

                <div className="row">

                    <div id="content" className="col-md-12">

                        <article className="single-post">
                            <div className="post-content">
                                <h4>About Website Alumni Teknologi Informasi</h4>
                                <p>Pengembangan website alumni Prodi Teknologi Informasi Universitas Muhammadiyah Yogyakarta (UMY) bertujuan untuk memberikan solusi bagi permasalahan yang dihadapi oleh universitas dalam hal pengelolaan data alumni. Dengan adanya website alumni ini diharapkan dapat memudahkan universitas dalam mengelola data alumni seperti mengupdate informasi kontak, melacak keberadaan alumni, dan menjalin komunikasi dengan alumni. Selain itu juga dapat memfasilitasi interaksi antara alumni dan universitas serta memperkuat jaringan alumni yang terjalin. Selain itu, website alumni juga dapat menjadi media untuk berbagi informasi seputar kegiatan dan prestasi alumni, membuka kesempatan kerja, serta memperkenalkan profil dan prestasi prodi Teknologi Informasi UMY kepada masyarakat luas.</p>
                                <p>Dengan adanya website alumni, alumni dapat dengan mudah terhubung dengan universitas dan sesama alumni, serta memperoleh manfaat lain seperti peluang karir, akses informasi terbaru tentang perkembangan teknologi informasi, dan berpartisipasi dalam kegiatan yang diadakan oleh universitas. Di sisi lain, universitas dapat memanfaatkan website alumni untuk memperkuat keterlibatan alumni dalam kegiatan universitas, meningkatkan citra prodi Teknologi Informasi UMY, dan memperoleh masukan dari alumni dalam meningkatkan kualitas program studi.</p>
                            </div>
                        </article>			
                    </div>

                </div>

            </div>
        </div>
    <FooterLinks />
    </DashboardLayout >
}