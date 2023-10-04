import "./home.css";
import Navbar from "../../components/navbar/navbar";
import Footer from "../../components/footer/footer";
export default function Home()
{
    return (
        <div className="home-container">
           <Navbar/>
           
<h1 className="title">Home Page</h1>
<Footer/>
        </div>
    )
}