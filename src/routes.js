import Album from "./pages/Album/Album";
import Home from "./pages/Home/Home";
import News from "./pages/News/News";
import Contact from "./pages/Contact/Contact";
import AboutUs from "./pages/AboutUs/AboutUs";
import Honors from "./pages/Honors/Honors";
import NotFound from "./pages/NotFound/NotFound";
import Teachers from "./pages/Teachers/Teachers";
import NetworkAndSoftware from "./pages/Teachers/MoreThan/NetworkAndSoftware";
import Accounting from "./pages/Teachers/MoreThan/Accounting";
import Electrotechnic from "./pages/Teachers/MoreThan/Electrotechnic";
import AlbumZoom from "./pages/Album/albumZoom/AlbumZoom";
import Panel from "./pages/Panel/Panel";
import Desighned from "./pages/Designed&Support/Designed";
// import Registration from "./pages/Registration/Registration";
// import Sigup from "./pages/Login&Reg/Sigup"
// import IndexPage from "./pages/Login&Reg/IndexPage";
// import ForgetPass from "./pages/Login&Reg/ForgetPass";
const router = [
  { path: "/", element: <Home /> },
  { path: "/news", element: <News /> },
  { path: "/album", element: <Album /> },
  { path: "/albumZoom/:albumId", element: <AlbumZoom /> },
  { path: "/contact", element: <Contact /> },
  { path: "/aboutus", element: <AboutUs /> },
  { path: "/honors", element: <Honors /> },
  {path : "/teachers" , element: <Teachers/>},
  {path : "/networkAndSoftware" , element: <NetworkAndSoftware/>},
  {path : "/accounting" , element: <Accounting/>},
  {path : "/electrotechnic" , element: <Electrotechnic/>},
  {path : "/panel" , element: <Panel/>},
  {path : '/designed&support' , element : <Desighned/>},
  {path : '*' , element : <NotFound />}
  // { path: "/registration", element: <Registration /> },
  // {path : "/loginSigup" , element: <IndexPage/>},
  // {path : '/sigup' , element : <Sigup />},
  // {path : "/forgetPass" , element: <ForgetPass/>},
];
export default router;
