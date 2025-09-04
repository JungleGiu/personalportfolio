import React from "react";

export const ContactForm = () => {
  return (
    <div className="flex flex-col justify-center align-middle items-center my-auto text-blue-950 dark:text-gray-200">
      <div className="min-h-screen w-3/6 flex-col justify-center items-center py-20">
        <h2 className="text-3xl font-bold mb-2 align-text-center">Get In Touch</h2>
        <form className="space-y-6">
          <div className="relative">
            <input
              type="text"
              name="name"
              id="name"
              className="w-full p-3 border-2  rounded px-4 py-3 bg-inherit transition focus:outline-none focus:border-gray-400 focus:bg-gray-200 focus:bg-opacity-10 focus:text-opacity-100"
              placeholder="Your name"
            />
        </div>
        <div className="relative">
              <input
              type="text"
              name="email"
              id="email"
              className="w-full p-3 border-2  rounded px-4 py-3 bg-inherit transition focus:outline-none focus:border-gray-400 focus:bg-gray-200 focus:bg-opacity-10 focus:text-opacity-100"
              placeholder="Your email"
            />
        </div>
        <div className="relative">
                 <textarea
              name="message"
              id="message"
              type="text"
              rows="5"     
              className="w-full p-3 border-2  rounded px-4 py-3 bg-inherit transition focus:outline-none focus:border-gray-400 focus:bg-gray-200 focus:bg-opacity-10 focus:text-opacity-100"
              placeholder="Your message..."
            />
          </div>
        </form>
        <button className="bg-blue-950 text-white px-4 py-2 rounded mt-4 justify-center">Send Message</button>
      </div>
    </div>
  );
};
