import { DashboardLayout } from "./Home";
import { FooterLinks } from "../../components/Footer";
export default function BeritaPage() {
    return <DashboardLayout>
        <div id="body">
            <div className="container">

                <div className="row">

                    <div className="section-header">
                        <span>Arsip</span>
                        <h2>Berita Alumni</h2>
                    </div>
                    <article>
                        <div className="col-md-4 col-sm-4 post-img">

                        </div>
                        <div className="col-md-8 col-sm-8 post-content">
                            <div className="post-title">
                                <h3>
                                    <a href="https://alumni.ugm.ac.id/2023/09/12/career-preparation-class-9-2023-5-best-public-speaking-practice-for-interview/">
                                        Career Preparation Class #9 2023: 5 Best Public Speaking Practice for Interview					</a>
                                </h3>
                                <p className="post-meta">
                                    <span className="post-category">
                                        <a href="https://alumni.ugm.ac.id/category/agenda-id">Agenda-id</a><a href="https://alumni.ugm.ac.id/category/berita">Berita</a><a href="https://alumni.ugm.ac.id/category/berita-id">Berita-id</a>						</span>
                                    <span className="post-date">Selasa, 12 September 2023</span>
                                </p>
                            </div>
                            <div className="entry-content"></div>
                        </div>

                        <div className="entry-content">
                            <div className="ecae">
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam dignissimos iusto voluptatum voluptates, mollitia accusantium possimus doloremque nulla, autem, neque animi obcaecati distinctio vel praesentium quaerat tempore saepe. Vitae, vel?
                                <span className="ecae-button ecae-buttonskin-none">  
                                    <a className="ecae-link" href="https://alumni.ugm.ac.id/2023/09/12/career-preparation-class-9-2023-5-best-public-speaking-practice-for-interview/">
                                        <span>read more
                                        </span>
                                    </a>
                                </span>
                                </p>
                            </div>		
                        </div>
                    </article>
                </div>

            </div>
        </div>
        <FooterLinks />
    </DashboardLayout>
}