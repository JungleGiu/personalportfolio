import React from "react";
import emailjs from "emailjs-com";
import { ToastContainer, toast, Slide } from "react-toastify";
export const ContactForm = () => {
  const SERVICE_ID = import.meta.env.VITE_SERVICE_ID;
  const TEMPLATE_ID = import.meta.env.VITE_TEMPLATE_ID;
  const PUBLIC_KEY = import.meta.env.VITE_PUBLIC_KEY;
const toastStyle = {
position: "bottom-right",
autoClose: 5000,
hideProgressBar: true,
closeOnClick: false,
pauseOnHover: false,
draggable: true,
progress: undefined,
theme: "colored",
transition: Slide,
}
  const [emailError, setEmailError] = React.useState(false);
  const [formData, setFormData] = React.useState({
    name: "",
    from_email: "",
    message: "",
  });
  const validateEmail = (email) => {
    const re =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email.toLowerCase()).trim());
  };
  const handleEmailChange = (e) => {
    const email = e.target.value;
    setFormData({ ...formData, from_email: email });
    setEmailError(!validateEmail(email) && email.length > 0);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.from_email || !formData.message) {
      toast.error("Please fill in all the fields", toastStyle);
      return;
    }
    if (validateEmail(formData.from_email)) {
const templateParams = {
  name: formData.name,
  from_email: formData.from_email,
  message: formData.message,
}
      emailjs
        .send(SERVICE_ID, TEMPLATE_ID, templateParams, PUBLIC_KEY)
        .then((res) => {
          console.log(res);
          setFormData({ name: "", from_email: "", message: "" });
          toast.success("Message sent successfully!", toastStyle);
        })
        .catch((err) => {
          console.log("error: ", err);
          toast.error("Something went wrong, please try again!", toastStyle);
        });
    } else {
      toast.error("Please enter a valid email address", toastStyle);
    }
  };

  return (
    <div className="flex flex-col justify-center align-middle items-center my-auto text-blue-950 dark:text-gray-200">
      <div className="min-h-screen w-3/6 flex-col justify-center items-center py-20">
        <h2 className="text-3xl font-bold mb-2 align-text-center">
          Get In Touch
        </h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="relative">
            <input
              type="text"
              name="name"
             
              id="name"
              value={formData.name}
              className="w-full p-3 border-2  rounded px-4 py-3 bg-inherit transition focus:outline-none focus:border-gray-400 focus:bg-gray-200 focus:bg-opacity-10 focus:text-opacity-100"
              placeholder="Your name"
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
            />
          </div>
          <div className="relative">
            <input
              type="email"
              name="form_email"
          
              id="email"
              value={formData.from_email}
              className="w-full p-3 border-2  rounded px-4 py-3 bg-inherit transition focus:outline-none  focus:border-gray-400 focus:bg-gray-200 focus:bg-opacity-10 focus:text-opacity-100"
              placeholder="Your email"
              onChange={(e) => handleEmailChange(e)}
            />
            <div
              i
              className={`${
                emailError ? "block" : "hidden"
              }  absolute inset-y-0 right-0 flex items-center pr-3 text-red-500`}
            >
              <p className="text-sm">please enter a valid email</p>
            </div>
          </div>
          <div className="relative">
            <textarea
              name="message"
              id="message"
              type="text"
              value={formData.message}
              rows="5"
              className="w-full p-3 border-2  rounded px-4 py-3 bg-inherit transition focus:outline-none focus:border-gray-400 focus:bg-gray-200 focus:bg-opacity-10 focus:text-opacity-100"
              placeholder="Your message..."
              onChange={(e) =>
                setFormData({ ...formData, message: e.target.value })
              }
            />
          </div>
        <button
          type="submit"
          className="bg-blue-950 text-white px-4 py-2 rounded mt-4 justify-center hover:-translate-y-0.5 hover:shadow-lg"
        >
          Send Message
        </button>
        </form>
      </div>
      <ToastContainer position="bottom-right"
autoClose={5000}
hideProgressBar
newestOnTop={false}
closeOnClick={false}
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover={false}
theme="colored"
transition={Slide} />
    </div>
  );
};
