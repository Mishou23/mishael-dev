import Header from "../../../containers/Header/OtherPages/index";
import MyProject from "../../../containers/Projects/project/index";
import Footer from '../../../components/footer/index'
import "./index.css";
export default function Projects() {
    return (
      <>
        <Header hideVideo={true} />
        <main>
         <MyProject/>
        </main>
        <footer>
        <Footer/>
        </footer>
        
      </>
    );
  }
  