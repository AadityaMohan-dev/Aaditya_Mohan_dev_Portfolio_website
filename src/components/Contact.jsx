import React, { useState } from "react";
import hello from ".././assets/hello.gif";
import profile from ".././assets/Profile.png";
import bg from ".././assets/p2.png";
import bg2 from ".././assets/p3.png";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Contact() {
  const [isLoading, setIsLoading] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();
    setIsLoading(true);
    try {
      await emailjs.sendForm(
        "service_ph6t1bp",
        "template_ox125gv",
        e.target,
        "Wf427jilxoYNreaK2"
      );
      toast.success("Message Sent ...");
      setTimeout(() => {
        setIsLoading(false);
      }, 4000);
      e.target.reset();
    } catch (error) {
      toast.error("Error in Sending the message");
      setIsLoading(false);
    }
  }

  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
      <div className="py-5 flex flex-wrap justify-center md:justify-between">
        <img src={hello} alt="Hello" className="h-24 md:h-36 bg-contain rounded-xl" />
        <div className="grid grid-cols-3 gap-2 pt-10 md:pt-0 lg:w-3/4">
          <img src={bg2} alt="" className="h-24 md:h-36 bg-contain rounded-xl" />
          <img src={profile} alt="" className="h-24 md:h-36 bg-contain rounded-xl" />
          <img src={bg} alt="" className="h-24 md:h-36 bg-contain rounded-xl" />
        </div>
      </div>
      <form className="max-w-full mx-auto px-4" onSubmit={handleSubmit}>
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <label className="block mb-2 text-sm font-medium text-white">Your Name</label>
            <input
              required
              name="user_name"
              type="text"
              className="w-full p-2 border text-black rounded-md bg-gray-50 dark:bg-gray-700 dark:text-white"
              placeholder="Your Name"
            />
          </div>
          <div>
            <label className="block mb-2 text-sm font-medium text-white">Your Email</label>
            <input
              required
              name="email_from"
              type="email"
              className="w-full p-2 border text-black rounded-md bg-gray-50 dark:bg-gray-700 dark:text-white"
              placeholder="name@mail.com"
            />
          </div>
        </div>
        <div className="py-5">
          <label className="block mb-2 text-sm font-medium text-white">Your Message</label>
          <textarea
            required
            name="message"
            rows="4"
            className="w-full p-2 border text-black lg:h-64 rounded-md bg-gray-50 dark:bg-gray-700 dark:text-white"
            placeholder="Message..."
          ></textarea>
        </div>
        <div className="flex justify-start ">
          <button
            type="submit"
            className="w-full md:w-52 p-3  uppercase font-extrabold tracking-widest  text-white bg-gradient-to-br from-orange-600 to-yellow-400 rounded-lg hover:from-orange-700 hover:to-yellow-500 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800"
            disabled={isLoading}
          >
            {isLoading ? "Sending..." : "Send"}
          </button>
        </div>
      </form>
    </>
  );
}

export default Contact;
