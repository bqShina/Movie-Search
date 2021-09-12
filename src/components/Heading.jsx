import React from 'react'
const deadLink = '#';

export const Heading = () => {
    return (
        <div className="heading-container">
            <section className="overlay-gradient">
                <div className="inner-container">
                    <h2 className="title">Movie Search</h2>
                    <ol className="subtitle">
                        <li>
                            <a href={deadLink} title="Home" rel="bookmark">Home</a>
                        </li>
                        <li>|</li>                       
                        <li><span>Movie Search</span></li>
                    </ol>
                </div>
                 
            </section>
        </div>
        
    )
}
