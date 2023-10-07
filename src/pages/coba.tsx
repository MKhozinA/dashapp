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

//LoginPage.tsx
// import { Auth } from '@supabase/auth-ui-react'
// import { supabase } from "../supabase"
// import { ThemeSupa } from '@supabase/auth-ui-shared'

// export const LoginPage = () => {
//     return <>
//         <div style={{display: "flex", placeContent: "center" , height: "100dvh"}}>
//             <div style={{margin: 20, maxWidth: 300}}>
//                 <Auth supabaseClient={supabase} appearance={{ theme: ThemeSupa}} providers={[]} ></Auth>
//             </div>
//         </div>
//     </>
// }


//App tsx

// function App() {
//   const { session } = useAuth();
//   const [ todos, setTodos ] = useState<{
//     id: any;
//     task: any;
//     is_complete: any;
//   }[] | null>([])

//   useEffect(() => {
//     fetchData().then(({ todos, error }) => {
//       if (error) console.log('error', error)
//       else setTodos(todos)
//     })
//   }, [])

//   return (
//     <>
//       <h1>Supabase Todo List</h1>
//       <h2>Hi {session?.user?.email}</h2>
//       <button onClick={() => supabase.auth.signOut()}>Sign Out</button>
//       {
//         todos?.map((todo) => {
//           return <div key={todo.id}>{todo.task} {todo.is_complete ? 'v' : 'x'}</div>
//         })
//       }
//     </>
//   )
// }




//main tsx
// import { ProtectedPage } from './ProtectedPage'
// import { LoginPage } from './pages/LoginPage'
// import { AuthProvider } from './providers/AuthProvider'
// import { createBrowserRouter } from 'react-router-dom'


// const router = createBrowserRouter([
//   { path: '/', element: <ProtectedPage></ProtectedPage><App/>}
//   { path: '/login', element: <LoginPage /> }
// ])

{/* <MantineProvider theme={{ primaryColor: "cyan" }} withGlobalStyles withNormalizeCSS>
      <App />
    </MantineProvider> */}



//router

// element: <DashboardLayout />,
// children: [
//   {

//   }
// ]


//Login
// Anchor<'a'> href="#" weight={700} onClick={(event) => event.preventDefault()}

//link json

// {
//   "link": "/dashboardpage",
//   "label": "Admin"
// },


{/* <div className="col-md-8 col-sm-8 post-content">
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
</div> */}

{/* <div className="entry-content">
    <div className="ecae">
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam dignissimos iusto voluptatum voluptates, mollitia accusantium possimus doloremque nulla, autem, neque animi obcaecati distinctio vel praesentium quaerat tempore saepe. Vitae, vel?
        <span className="ecae-button ecae-buttonskin-none" style="text-align:left">  
            <a className="ecae-link" href="https://alumni.ugm.ac.id/2023/09/12/career-preparation-class-9-2023-5-best-public-speaking-practice-for-interview/">
                <span>read more
                </span>
            </a>
        </span>
        </p>
    </div>		
</div> */}

{/* <div className="container-fluid pt-5 mb-3">
    <div className="container">
        <div className="section-title">
            <h4 className="m-0 text-uppercase font-weight-bold">Featured News</h4>
        </div>
        <div className="owl-carousel news-carousel carousel-item-4 position-relative owl-loaded owl-drag">
            <div className="owl-stage-outer"><div class="owl-stage" style="transform: translate3d(-2202px, 0px, 0px); transition: all 1s ease 0s; width: 4037px;"><div class="owl-item cloned" style="width: 337px; margin-right: 30px;"><div class="position-relative overflow-hidden" style="height:300px;"><img src="assets/img/news-700x435-3.jpg" alt="website template image" class="img-fluid h-100" style="object-fit:cover;">
                <div className="overlay">
                    <div className="mb-2"><a className="badge badge-primary text-uppercase font-weight-semi-bold p-2 mr-2" href="https://www.free-css.com/free-css-templates">Business</a> <a className="text-white" href="https://www.free-css.com/free-css-templates"><small>Jan 01, 2045</small></a></div>
                    <a className="h6 m-0 text-white text-uppercase font-weight-semi-bold" href="https://www.free-css.com/free-css-templates">Lorem ipsum dolor sit amet elit...</a></div>
            </div></div><div class="owl-item cloned" style="width: 337px; margin-right: 30px;"><div class="position-relative overflow-hidden" style="height:300px;"><img src="assets/img/news-700x435-4.jpg" alt="website template image" class="img-fluid h-100" style="object-fit:cover;">
                <div className="overlay">
                    <div className="mb-2"><a className="badge badge-primary text-uppercase font-weight-semi-bold p-2 mr-2" href="https://www.free-css.com/free-css-templates">Business</a> <a className="text-white" href="https://www.free-css.com/free-css-templates"><small>Jan 01, 2045</small></a></div>
                    <a className="h6 m-0 text-white text-uppercase font-weight-semi-bold" href="https://www.free-css.com/free-css-templates">Lorem ipsum dolor sit amet elit...</a></div>
            </div></div><div class="owl-item cloned" style="width: 337px; margin-right: 30px;"><div class="position-relative overflow-hidden" style="height:300px;"><img src="assets/img/news-700x435-5.jpg" alt="website template image" class="img-fluid h-100" style="object-fit:cover;">
                <div className="overlay">
                    <div className="mb-2"><a className="badge badge-primary text-uppercase font-weight-semi-bold p-2 mr-2" href="https://www.free-css.com/free-css-templates">Business</a> <a className="text-white" href="https://www.free-css.com/free-css-templates"><small>Jan 01, 2045</small></a></div>
                    <a className="h6 m-0 text-white text-uppercase font-weight-semi-bold" href="https://www.free-css.com/free-css-templates">Lorem ipsum dolor sit amet elit...</a></div>
            </div></div><div class="owl-item" style="width: 337px; margin-right: 30px;"><div class="position-relative overflow-hidden" style="height:300px;"><img src="assets/img/news-700x435-1.jpg" alt="website template image" class="img-fluid h-100" style="object-fit:cover;">
                <div className="overlay">
                    <div className="mb-2"><a className="badge badge-primary text-uppercase font-weight-semi-bold p-2 mr-2" href="https://www.free-css.com/free-css-templates">Business</a> <a className="text-white" href="https://www.free-css.com/free-css-templates"><small>Jan 01, 2045</small></a></div>
                    <a className="h6 m-0 text-white text-uppercase font-weight-semi-bold" href="https://www.free-css.com/free-css-templates">Lorem ipsum dolor sit amet elit...</a></div>
            </div></div><div class="owl-item" style="width: 337px; margin-right: 30px;"><div class="position-relative overflow-hidden" style="height:300px;"><img src="assets/img/news-700x435-2.jpg" alt="website template image" class="img-fluid h-100" style="object-fit:cover;">
                <div className="overlay">
                    <div className="mb-2"><a className="badge badge-primary text-uppercase font-weight-semi-bold p-2 mr-2" href="https://www.free-css.com/free-css-templates">Business</a> <a className="text-white" href="https://www.free-css.com/free-css-templates"><small>Jan 01, 2045</small></a></div>
                    <a className="h6 m-0 text-white text-uppercase font-weight-semi-bold" href="https://www.free-css.com/free-css-templates">Lorem ipsum dolor sit amet elit...</a></div>
            </div></div><div class="owl-item" style="width: 337px; margin-right: 30px;"><div class="position-relative overflow-hidden" style="height:300px;"><img src="assets/img/news-700x435-3.jpg" alt="website template image" class="img-fluid h-100" style="object-fit:cover;">
                <div className="overlay">
                    <div className="mb-2"><a className="badge badge-primary text-uppercase font-weight-semi-bold p-2 mr-2" href="https://www.free-css.com/free-css-templates">Business</a> <a className="text-white" href="https://www.free-css.com/free-css-templates"><small>Jan 01, 2045</small></a></div>
                    <a className="h6 m-0 text-white text-uppercase font-weight-semi-bold" href="https://www.free-css.com/free-css-templates">Lorem ipsum dolor sit amet elit...</a></div>
            </div></div><div class="owl-item active" style="width: 337px; margin-right: 30px;"><div class="position-relative overflow-hidden" style="height:300px;"><img src="assets/img/news-700x435-4.jpg" alt="website template image" class="img-fluid h-100" style="object-fit:cover;">
                <div className="overlay">
                    <div className="mb-2"><a className="badge badge-primary text-uppercase font-weight-semi-bold p-2 mr-2" href="https://www.free-css.com/free-css-templates">Business</a> <a className="text-white" href="https://www.free-css.com/free-css-templates"><small>Jan 01, 2045</small></a></div>
                    <a className="h6 m-0 text-white text-uppercase font-weight-semi-bold" href="https://www.free-css.com/free-css-templates">Lorem ipsum dolor sit amet elit...</a></div>
            </div></div><div class="owl-item active" style="width: 337px; margin-right: 30px;"><div class="position-relative overflow-hidden" style="height:300px;"><img src="assets/img/news-700x435-5.jpg" alt="website template image" class="img-fluid h-100" style="object-fit:cover;">
                <div className="overlay">
                    <div className="mb-2"><a className="badge badge-primary text-uppercase font-weight-semi-bold p-2 mr-2" href="https://www.free-css.com/free-css-templates">Business</a> <a className="text-white" href="https://www.free-css.com/free-css-templates"><small>Jan 01, 2045</small></a></div>
                    <a className="h6 m-0 text-white text-uppercase font-weight-semi-bold" href="https://www.free-css.com/free-css-templates">Lorem ipsum dolor sit amet elit...</a></div>
            </div></div><div class="owl-item cloned" style="width: 337px; margin-right: 30px;"><div class="position-relative overflow-hidden" style="height:300px;"><img src="assets/img/news-700x435-1.jpg" alt="website template image" class="img-fluid h-100" style="object-fit:cover;">
                <div className="overlay">
                    <div className="mb-2"><a className="badge badge-primary text-uppercase font-weight-semi-bold p-2 mr-2" href="https://www.free-css.com/free-css-templates">Business</a> <a className="text-white" href="https://www.free-css.com/free-css-templates"><small>Jan 01, 2045</small></a></div>
                    <a className="h6 m-0 text-white text-uppercase font-weight-semi-bold" href="https://www.free-css.com/free-css-templates">Lorem ipsum dolor sit amet elit...</a></div>
            </div></div><div class="owl-item cloned" style="width: 337px; margin-right: 30px;"><div class="position-relative overflow-hidden" style="height:300px;"><img src="assets/img/news-700x435-2.jpg" alt="website template image" class="img-fluid h-100" style="object-fit:cover;">
                <div className="overlay">
                    <div className="mb-2"><a className="badge badge-primary text-uppercase font-weight-semi-bold p-2 mr-2" href="https://www.free-css.com/free-css-templates">Business</a> <a className="text-white" href="https://www.free-css.com/free-css-templates"><small>Jan 01, 2045</small></a></div>
                    <a className="h6 m-0 text-white text-uppercase font-weight-semi-bold" href="https://www.free-css.com/free-css-templates">Lorem ipsum dolor sit amet elit...</a></div>
            </div></div><div class="owl-item cloned" style="width: 337px; margin-right: 30px;"><div class="position-relative overflow-hidden" style="height:300px;"><img src="assets/img/news-700x435-3.jpg" alt="website template image" class="img-fluid h-100" style="object-fit:cover;">
                <div className="overlay">
                    <div className="mb-2"><a className="badge badge-primary text-uppercase font-weight-semi-bold p-2 mr-2" href="https://www.free-css.com/free-css-templates">Business</a> <a className="text-white" href="https://www.free-css.com/free-css-templates"><small>Jan 01, 2045</small></a></div>
                    <a className="h6 m-0 text-white text-uppercase font-weight-semi-bold" href="https://www.free-css.com/free-css-templates">Lorem ipsum dolor sit amet elit...</a></div>
            </div></div></div></div><div className="owl-nav"><div className="owl-prev"><i className="fa fa-angle-left" aria-hidden="true"></i></div><div className="owl-next"><i className="fa fa-angle-right" aria-hidden="true"></i></div></div><div className="owl-dots disabled"></div></div>
    </div>
</div> */}