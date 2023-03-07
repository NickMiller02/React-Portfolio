// Imports - REACT
import React from 'react';

// About Me function
function About() {
    return (
        <section>
			<div className="center" id="about">
				<h1 className="page-header">About Me</h1>
			</div>
			<div className="center">
				<img
					src={require('../assets/images/me.jpeg')}
					alt="about-me"
					className="photo"
				/>
			</div>
			<div>
				<p>
					Hi! I'm a full stack developer looking to build my skills! 
                    I will be receiving my certificate in full stack development
                    from the University of Central Florida, UCF, which has taught me
                    HTML, CSS, JavaScript, React.js, Node.js, and more. I like to
                    find the most efficent ways to create applications. I look forward
                    to more teaching experienced and being challenged.
				</p>
			</div>
		</section>
    )
}

export default About;