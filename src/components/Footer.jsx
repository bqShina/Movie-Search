import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'


export const Footer = () => {
    let deadLink = "https://bqshina.github.io/My-Portfolio/";
    return (
        <div className="footer-container">
            <footer>
                <div className="pad100">
                    <Container>
                        <Row>
                            <Col lg={3} md={6} sm={12}>
                                <div className="margin-bottom">                                
                                    <img loading="lazy" src="https://klbtheme.com/movify/wp-content/uploads/2018/04/logo-white.png" alt="" width="110" height="28"/>

                                    <p className="nomargin">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque, ducimus, atque. Praesentium suscipit provident explicabo dignissimos nostrum numquam deserunt earum accusantium et fugit.</p>
                                </div>
                                
                            </Col>
                            <Col lg={3} md={6} sm={12}>
                                <div className="column-two margin-bottom">
                                    <h4 className="widget-title">Twitter Feed</h4>
                                        <div className="twitter-container">
                                            <p>
                                                Bacola Grocery Store and Organic Food eCommerce WordPress Theme <a href={deadLink} title="Search #grocery">#grocery</a> <a href={deadLink} title="Search #supermarket">#supermarket</a> <a href={deadLink} title="Search #organicfood">#organicfood</a> <a href={deadLink} title="Search #woocommerce">#woocommerce</a>...<a href={deadLink}>https://t.co/pTTHRtbHOY</a>
                                            </p>
                                            <a className="twitter-time" target={deadLink} href={deadLink}>79 days ago</a>
                                        </div>                         
                                            
                    
                                </div>
                                
                            </Col>
                            <Col lg={3} md={6} sm={12}>
                                <div className="column-three margin-bottom3">
                                    <h4 className="widget-title">Useful Links</h4>
                                    <ul className="menu">
                                        <li>
                                            <a href={deadLink}>About Movify</a></li>
                                        <li>
                                            <a href={deadLink}>Blog</a>
                                        </li>
                                        <li>
                                            <a href={deadLink}>Contact Us</a>
                                        </li>
                                        <li>
                                            <a href={deadLink}>Testimonials</a>
                                        </li>
                                        <li>
                                            <a href={deadLink}>Error 404</a>
                                        </li>
                                    </ul>
                                </div>                               
                            </Col>
                            <Col lg={3} md={6} sm={12}>
                                <div className="column-four">
                                    <h4 className="widget-title">Instagram</h4>
                                    <p>Instagram did not return a 200.</p>
                                    <a href={deadLink}>Follow Us!</a>
                                </div>                            
                            </Col>
                        </Row>
                    </Container>
                </div>
                

                <div className="copyright-area">
                    <Container>
                        <Row>
                            <Col md={12}>
                                <div className="copyright-inner-container">
                                    <ul>
                                        <li><a href={deadLink}>Privacy & Cookies</a></li>
                                        <li><a href={deadLink}>Terms & Conditions</a></li>
                                        <li><a href={deadLink}>Legal Disclaimer</a></li>
                                        <li><a href={deadLink}>Community</a></li>
                                    </ul>
                                    <div className="copyright-end">
                                        Copyright 2020.KlbTheme . All rights reserved								
                                    </div> 
                                </div>
                                                                                            
                            </Col>
                            
                        </Row>
                    </Container>
                </div>
{/* 
                <div className="backtotop"> 
                    <a href="#"></a>
                </div> */}

            </footer>
        </div>
    )
}
