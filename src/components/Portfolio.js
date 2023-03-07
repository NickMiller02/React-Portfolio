// Imports - REACT & Project.js
import React from 'react';
import Project from './Project.js';

// Portfolio function
function Portfolio() {
    // Hard coded Project list
    const projects = [
        {
            name: 'Park Finder',
            description: 'This is a website created to find national parks near you! Created as a collaboration effort, This website will pull up the nearest park and activities for you to plan and visit!',
            image: 'parkfinder.png',
            github: 'https://github.com/Rilaey/Park-Finder',
            deployed: 'https://rilaey.github.io/Park-Finder/'
        },
        {
            name: 'Woofr',
            description: 'A pet lovers paradise! My team and I came together to attempt to create a website based around dogs and blogs, using handlebars and bootstrap.',
            image: 'woofr.png',
            github: 'https://github.com/CherryElla/project2',
            deployed: 'https://woofr2.herokuapp.com/'
        },
    ];

    return (
        <section>
            <div className='center'>
                <h1 className='page-header'>My Portfolio</h1>
            </div>
            <div>
				<ul className="flex-row mobile-row">
					<li className="padding">
						<Project projects={projects[0]}></Project>
					</li>
					<li className="padding">
						<Project projects={projects[1]}></Project>
					</li>
				</ul>
			</div>
        </section>
    )
}

export default Portfolio;