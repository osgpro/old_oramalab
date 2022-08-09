import React, { Component } from "react";
import Slider from "react-slick";

import About1 from '../Assets/images/about-images-01.jpg'
import About2 from '../Assets/images/about-images-02.jpg'
import About3 from '../Assets/images/about-images-03.jpg'
import About4 from '../Assets/images/about-images-04.jpg'

export default class SlickGoTo extends React.Component {

    state = {
        slideIndex: 0,
        updateCount: 0
    };

    render() {
        var settings = {
            dots: false,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
            afterChange: () =>
                this.setState(state => ({ updateCount: state.updateCount + 1 })),
            beforeChange: (current, next) => this.setState({ slideIndex: next })
        };
        return (
        <div>
            <h2>Slick Go To</h2>
            <p>Total updates: {this.state.updateCount} </p>
            <input
            onChange={e => this.slider.slickGoTo(e.target.value)}
            value={this.state.slideIndex}
            type="range"
            min={0}
            max={2}
            />
            <Slider ref={slider => (this.slider = slider)} {...settings}>
                <div>
                    <img src={About1} alt=""/>
                </div>
                <div>
                    <img src={About2} alt=""/>
                </div>
                <div>
                    <img src={About3} alt=""/>
                </div>
            </Slider>
        </div>
        );
    }
}