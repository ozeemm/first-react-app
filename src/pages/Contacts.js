import Navigation from "../components/Navigation/Navigation"
import ContactsSection from "../components/ContactsSection/ContactsSection"
import Footer from "../components/Footer/Footer"

function Contacts(){
    return(
        <div className="App">
            <Navigation/>
            <ContactsSection/>
            <Footer/>
        </div>
    );
}

export default Contacts