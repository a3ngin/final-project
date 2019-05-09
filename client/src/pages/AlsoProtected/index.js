import React from 'react'

import Jumbotron from "../../components/Jumbotron";
import Navbar from "../../components/Footer";


/*ToDo*/
/**
 * Let's get some styling in here
 */

/* This is a very simple component.. it probably doesn't need to be a smart component at this point but you never know what's goingto happen in the future */
class AlsoProtected extends React.Component {
	render() {
		return (
            <div>  
                <Jumbotron
                text="ACLS Study Platform" />

				<Navbar />
            </div>
		)
	}
}






export default AlsoProtected