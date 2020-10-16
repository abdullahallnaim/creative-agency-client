import React from 'react';
import CarouselSlide from '../CarouselSlide/CarouselSlide';
import ClientsFeedBack from '../ClientsFeedBack/ClientsFeedBack';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Navigation from '../Navigation/Navigation';
import Partner from '../Partner/Partner';
import Services from '../Services/Services';
import './Home.css'

const Home = () => {
    return (
        <>
            <div className='home-bg'>
                <Navigation></Navigation>
                <Header></Header>
            </div>
                <Partner></Partner>
                <Services></Services>
                <CarouselSlide></CarouselSlide>
                <ClientsFeedBack></ClientsFeedBack>
                <Footer></Footer>
        </>
    );
};

export default Home;