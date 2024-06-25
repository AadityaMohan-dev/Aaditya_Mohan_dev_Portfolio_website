import React, { useCallback, useState } from "react";
import hello from ".././assets/hello.gif";
import profile from ".././assets/Profile.png";
import bg from ".././assets/p2.png";
import bg2 from ".././assets/p3.png";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


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
      setIsLoading(false);
      e.target.reset();
    } catch (error) {
      setIsLoading(false);
    }
  }
  
  
  

  return (
    <>
    <div id="toast" className="flex flex-row-reverse"><ToastContainer
position="top-right"
autoClose={5000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="light"
/>

</div>
      <div id="img-container" className="py-5 grid grid-cols-4">
      
        <img src={hello} alt="" className="h-36 bg-contain rounded-xl  " />
        <img src={bg2} alt="" className="h-36 bg-contain rounded-xl  " />
        <img src={profile} alt="" className="h-36 bg-contain rounded-xl  " />
        <img src={bg} alt="" className="h-36 bg-contain rounded-xl  " />
      </div>
      <form class="max-w-full mx-full" onSubmit={handleSubmit}>
        <div id="container" className="grid grid-cols-2 gap-8">
          <div id="row-1">
            <label
              for="website-admin"
              class="block mb-2 text-sm font-medium text-white dark:text-white"
            >
              Your Name
            </label>
            <div class="flex">
              <span class="inline-flex items-center px-3 text-sm text-gray-900 bg-gray-200 border border-e-0 border-gray-300 rounded-s-md dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600">
                <svg
                  class="w-4 h-4 text-gray-500 dark:text-gray-400"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm0 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 13a8.949 8.949 0 0 1-4.951-1.488A3.987 3.987 0 0 1 9 13h2a3.987 3.987 0 0 1 3.951 3.512A8.949 8.949 0 0 1 10 18Z" />
                </svg>
              </span>
              <input
                required
                name="user_name"
                type="text"
                id="website-admin"
                class="rounded-none rounded-e-lg bg-gray-50 border border-gray-300 text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Bonnie Green"
              />
            </div>
          </div>
          <div id="row-2">
            <label
              for="email-address-icon"
              class="block mb-2 text-sm font-medium text-white dark:text-white"
            >
              Your Email
            </label>
            <div class="relative">
              <div class="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                <svg
                  class="w-4 h-4 text-gray-500 dark:text-gray-400"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 16"
                >
                  <path d="m10.036 8.278 9.258-7.79A1.979 1.979 0 0 0 18 0H2A1.987 1.987 0 0 0 .641.541l9.395 7.737Z" />
                  <path d="M11.241 9.817c-.36.275-.801.425-1.255.427-.428 0-.845-.138-1.187-.395L0 2.6V14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2.5l-8.759 7.317Z" />
                </svg>
              </div>
              <input
                required
                name="email_from"
                type="text"
                id="sender_email"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="name@flowbite.com"
              />
            </div>
          </div>
        </div>

        <div id="row-3" className="py-5">
          <label
            for="message"
            class="block mb-2 text-sm font-medium text-white dark:text-white"
          >
            Your message
          </label>
          <textarea
            required
            name="message"
            id="message"
            rows="4"
            class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Message..."
          ></textarea>
        </div>
        <button
          id="btn"
          type="submit"
          class="w-52 relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-white rounded-lg group bg-gradient-to-br from-orange-600 to-yellow-400 group-hover:from-orange-600 group-hover:to-yellow-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800"
        >
          <span class=" w-52 uppercase relative px-5 py-2.5 transition-all ease-in duration-75 bg-zinc-800 dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
            send
          </span>
        </button>
      </form>
    </>
  );
}

export default Contact;
