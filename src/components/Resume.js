// Imports - REACT
import React from 'react';

// Resume function
function Resume() {
    return (
        <section>
        <div className='center'>
            <h1 className='page-header'>My Resume</h1>
        </div>
        <div className='bottom-spacing'>
            <a href={require('../assets/files/Resume.pdf')} download>
                <h4>Download My Resume Here</h4>
            </a>
        </div>
        <div>
            <h2>Skill Set</h2>
            <ul>
                <li>HTML, CSS, Javascript</li>
                <li>OpenAPI, NodeJS, JSON</li>
                <li>React, handlebars, Express</li>
                <li>Markdown, MySql</li>
                <li>Git, npm, Sql</li>
                <li>Github Repo Management</li>
            </ul>
        </div>
    </section>
    );
}

export default Resume;