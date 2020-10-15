import React from 'react';

const Footer = () => {
    return (
        <div style={{ backgroundColor: '#FBD062', marginTop: '50px', paddingBottom: '50px'}}>
            <div className='container pt-5'>
                <div className='row'>
                    <div className='col-md-6 col-12 text-left'>
                        <h1 className='font-weight-bold'>Let Us Handle Your<br />project, professionally</h1>
                        <p className='text-dark'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officiis ipsa corporis dignissimos. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Pariatur, veritatis?</p>
                    </div>
                    <div className='col-md-6 col-12'>
                        <form className='text-left'>
                            <div className = "form-group text-left">
                                <input type="email" className = "form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Your emai address" />
                            </div>
                            <div className = "form-group text-left">
                                <input type="text" className = "form-control" placeholder="Your name/ company's name" />
                            </div>
                            <div className = "form-group text-left">
                                <textarea className = "form-control" id="exampleFormControlTextarea1" rows="10" placeholder='Your message '></textarea>
                            </div>
                            <button type="submit" className = "btn btn-dark px-5">Send</button>
                        </form>
                    </div>
                </div>

            </div>
            <p className = "mt-5 text-dark text-center">copyright Orange labs 2020</p>
        </div>
    );
};

export default Footer;