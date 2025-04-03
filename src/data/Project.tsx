import blood from "../assets/blood.png";
import car from "../assets/car.png";
import fec from "../assets/fec.png";
import mychat from "../assets/mychat.png";
import news from "../assets/news.png";
import scr from "../assets/scr.png";
import sdt from "../assets/sdt.png";
import so from "../assets/so.png";

export const projects = [
    { title: "Finance Emission Computation", description: "Built using Django, MySQL, ReactJS and TypeScipt. Calculates financial emissions for businesses following PCAF Framework.", image: fec, link: "https://indiaesg.org/finance_emission_computation/" },
    {
        title: "Sustainability Olympiad", description: `Built using Laravel, MySQL, ReactJS and TypeScipt. An online quiz platform on sustainability topics provides real time
        leadership boards and certificates.`, image: so, link: "https://sustainabilityolympiad.org/"
    },
    {
        title: "Steel Decarbonisation Tool", description: `Created a tool for steel sector emissions analysis using Python and MySQL. 
 Processed Excel sheet and visualized trends with interactive graphs.`, image: sdt, link: "https://github.com/mishra-tanya/steel-decarbonization"
    },
    {
        title: "Sustainability & Climate Risk", description: `Developed a SCR tool using Laravel and MySQL. 
 Enabled admin functionalities, including user management, email notifications, and trial approvals. `, image: scr, link: "https://indiaesg.org/scr-prep/public/"
    },


    { title: "Car Rental Application", description: "A car booking platform where users can rent cars for specific dates, and admins manage bookings, approve requests, and oversee car availability. Built with PHP, MySQL, and Bootstrap.", image: car, link: "https://github.com/mishra-tanya/car-rental-agency" },
    {
        title: "Blood Bank System", description: `A system for managing blood donations and requests where users can request blood based on compatibility. Doctors can approve requests, contact users, and ensure seamless coordination between donors and recipients.

`, image: blood, link: "https://github.com/mishra-tanya/blood-bank-system"
    },
    {
        title: "My News", description: `Built a news website using ReactJS, integrating third-party APIs to deliver real-time news updates with a modern and 
responsive user interface. `, image: news, link: "https://github.com/mishra-tanya/my-news"
    },
    {
        title: "My Chat", description: `A dynamic website using PHP, MySQL, HTML, CSS, AJAX and JavaScript to implement robust real-time chat 
functionalities and providing responsive user-interface for seamless chatting experience.`, image: mychat, link: "https://github.com/mishra-tanya/Mychat"
    },


];