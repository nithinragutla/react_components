import { Component } from "react";
import Card from 'react-bootstrap/Card';

class Footer extends Component{
    render(){
        return(
           <Card>
            <center>
            <Card.Footer>  <p>&copy; 2024 Delicious Bites Restaurant</p>
    <p>123 Foodie Lane, Flavor Town, CA 98765</p>
    <p>Contact: (555) 123-4567 | Email: info@deliciousbites.com</p>
    <p>Open Hours: Mon - Fri: 10:00 AM - 10:00 PM, Sat - Sun: 12:00 PM - 11:00 PM</p></Card.Footer>
    </center>
            </Card>
        )
    }
}
export default Footer;