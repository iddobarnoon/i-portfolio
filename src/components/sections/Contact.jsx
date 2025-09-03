import { useState } from "react";
import { RevealOnScroll } from "../RevealOnScroll"
import emailjs from 'emailjs-com'

export const Contact = () => {
    const SERVICE_ID = import.meta.env.VITE_SERVICE_ID;
    const TEMPLATE_ID = import.meta.env.VITE_TEMPLATE_ID;
    const PUBLIC_K = import.meta.env.VITE_PUBLIC_KEY;



    const [formData, setFormData] = useState({
        name:"",
        email:"",
        message:"",
    })
    
    const handleSubmit = (e) => {
        e.preventDefault();

        emailjs.sendForm(SERVICE_ID,TEMPLATE_ID, e.target,PUBLIC_K).then((result) => {
            alert("Message Sent");
            setFormData({name: "", email: "", message: ""});
        }).catch(() => alert("Something went wrong, try again"));
    };

    return (<section id="contact" className="min-h-screen flex items-center justify-center py-20">
        <RevealOnScroll>
            <div className="w-full sm:w-full md:w-[600px] px-4 md:px-10 mx-auto">
                <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-cyan-500 to-violet-600 bg-clip-text text-transparent text-center">Contact Me</h2>
                <form className="space-y-6" onSubmit={handleSubmit}>
                    <div className="relative">
                        <input type="text" id="name" name="name" value={formData.name} onChange={(e) => setFormData({...formData, name: e.target.value})} required className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/5" placeholder="Name:"/>
                    </div>
                    <div className="relative">
                        <input type="email" id="email" name="email" value={formData.email} onChange={(e) => setFormData({...formData, email: e.target.value})} required className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/5" placeholder="example@email.com"/>
                    </div>
                    <div className="relative">
                        <textarea type="message" id="message" name="message" value={formData.message} onChange={(e) => setFormData({...formData, message: e.target.value})} required rows={5} className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/5" placeholder="Your Message"/>
                    </div>

                    <button type="submit" className="w-full bg-blue-500 text-white py-3 px-6 rounded font-medium transition relative overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.4)]">Send Message</button>
                </form>
            </div>
        </RevealOnScroll>
    </section>)
}