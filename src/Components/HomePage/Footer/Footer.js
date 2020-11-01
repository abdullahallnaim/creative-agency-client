import React from 'react';
import emailjs from 'emailjs-com';

const Footer = () => {
    const handleSubmit = (e) => {
        e.preventDefault()
        if(document.getElementById('email').value == '' && document.getElementById('name').value == '' && document.getElementById('message').value == ''){
            alert('You must fill all the fields')
          }
          else{
            emailjs.sendForm('service_a3il6aj', 'template_52hpdpw', e.target, 'user_2v9sentTANCCH78czyxeH')
      .then(function(response) {
          console.log(response)
        if(response){
          alert('You have successfully sent me an email')
          document.getElementById('contact-form').reset()
        }
        
      })
          }    
      };
    return (
        <div style={{ backgroundColor: '#FBD062', marginTop: '50px', paddingBottom: '50px'}}>
            <div className='container pt-5'>
                <div className='row'>
                    <div className='col-md-6 col-12 text-left'>
                        <h1 className='font-weight-bold'>Let Us Handle Your<br />project, professionally</h1>
                        <p className='text-dark'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officiis ipsa corporis dignissimos. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Pariatur, veritatis?</p>
                    </div>
                    <div className='col-md-6 col-12'>
                        <form className='text-left' id='contact-form'  onSubmit={handleSubmit}>
                            <div className = "form-group text-left">
                                <input type="email" className = "form-control" id="email" name='f_email' aria-describedby="emailHelp" placeholder="Your emai address" />
                            </div>
                            <div className = "form-group text-left">
                                <input type="text" className = "form-control" id="name" name='f_name' placeholder="Your name/ company's name" />
                            </div>
                            <div className = "form-group text-left">
                                <textarea className = "form-control" id="message" name='f_message' rows="10" placeholder='Your message '></textarea>
                            </div>
                            <button className = "btn btn-dark px-5">Send</button>
                        </form>
                    </div>
                </div>
            </div>
            <p className = "mt-5 text-dark text-center">copyright Creative Agency 2020</p>
        </div>
    );
};

export default Footer;