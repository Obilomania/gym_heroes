import React from 'react'
import "./About.css"
import image1 from "../../assets/about1.jpg"
import image2 from "../../assets/about2.jpg"
import Arm from '../../assets/arm.jpg'
import swim from '../../assets/swim.jpg'
import rope from '../../assets/rope.jpg'
import threadmill from '../../assets/threadmill.jpg'

const About = () => {
    return (
        <div className='about' id='about'>
            <h1>ABOUT GYM <span>HEROES</span></h1>
            <div className="about__content">
                <div className="images">
                    <img src={image1} alt="" className='img1' />
                    <img src={image2} alt="" className='img2' />
                </div>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Pariatur aperiam nulla rerum est ea ut nesciunt a explicabo
                    facere, excepturi ipsa vitae dolores earum. Sed doloribus
                    laborum aliquid! Deserunt, obcaecati corporis minima unde
                    impedit consequuntur voluptas exercitationem et odio
                    fugiat aspernatur facilis repudiandae qui, asperiores
                    aperiam id blanditiis nostrum adipisci voluptatum, quis
                    illum error numquam? Molestias, assumenda saepe excepturi
                    ratione consectetur fugit velit accusamus, ut ullam odio
                    mollitia quasi doloremque debitis necessitatibus
                    perspiciatis? Iste doloremque deleniti sapiente ad.
                    Necessitatibus harum, ut consequuntur magnam vitae
                    quidem soluta voluptatibus natus ab eligendi.
                    Exercitationem incidunt itaque, quam ipsam voluptatibus
                    consequuntur ipsum autem illum.</p>
            </div>
            <div className="about__images">
                <div className="container">
                    <div className="box">
                        <div className="imgBx">
                            <img src={Arm} alt="arm" />
                        </div>
                        <div className="content content_main">
                            <div>
                                <h2>Muscle Build</h2>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi accusamus molestias quidem iusto.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="box">
                        <div className="imgBx">
                            <img src={swim} alt="swim" />
                        </div>
                        <div className="content content_main">
                            <div>
                                <h2>Swimming</h2>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi accusamus molestias quidem iusto.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="box">
                        <div className="imgBx">
                            <img src={rope} alt="rope" />
                        </div>
                        <div className="content content_main">
                            <div>
                                <h2>Rope Roll</h2>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi accusamus molestias quidem iusto.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="box">
                        <div className="imgBx">
                            <img src={threadmill} alt="threadmill" />
                        </div>
                        <div className="content ">
                            <div>
                                <h2>ThreadMill</h2>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi accusamus molestias quidem iusto.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About