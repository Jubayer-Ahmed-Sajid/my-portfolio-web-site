import  { useEffect, useRef } from 'react';
import emailjs from '@emailjs/browser';
import Aos from 'aos';
const Contact = () => {
    useEffect(()=>{
        Aos.init({
            duration:1500
        })
    },[])
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_lzgtoes', 'template_ipthqvd', form.current, '5UJTYFKudy-2MtPvP')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
    };
    return (
        <div id='contacts' className='bg-black py-8 text-white'>
            <h2 className="mb-8 text-3xl text-center" data-aos='fade-left'>
                Contact 
            </h2>
            <div className='border-[#058472]  border-2 mx-4 py-8 rounded-xl flex items-center justify-center' data-aos='zoom-in'>

            <form className='' ref={form} onSubmit={sendEmail}>
                <label>Name</label>
                <br />
                <input type="text" name="user_name" placeholder="Type your Name " className="text-slate-400 input mb-2 input-bordered input-accent w-full" />
                <br />
                <label>Email</label>
                <br />
                <input type="email" name="user_email"placeholder='Enter your Email' className="input mb-2 text-slate-400 input-bordered input-accent w-full" />
                <br />
                <label>Message</label>
                <br />
                <textarea name="message" placeholder='Enter your Message' className="textarea mb-2 text-slate-400 border-accent  w-full"/>
                <br />
                <input className='btn btn-secondary px-8 w-full' type="submit" value="Send" />
            </form>
            </div>
        </div>
    );
};

export default Contact;