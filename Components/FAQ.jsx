
import { BsSend } from "react-icons/bs";
import { toast } from "react-toastify";
const FAQ = () => {
    const send=()=>
    {
        toast.success("Message Sent Successfully");
    }
    return (
        <div>
            <div className="text-center mt-4">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl"data-aos="zoom-in-down">
            Get Answers and Share Your Thoughts
            </h2>
            <p className="mt-4 text-lg text-gray-600 font-serif mx-auto lg:max-w-lg"data-aos="zoom-in-down">
            Have questions about our luxury properties or feedback to share? Use the form below to ask anything you need or provide us with your valuable insights.
            </p>
          </div>
            <div className="container mx-auto flex flex-wrap items-start justify-between  mt-3 lg:py-12 lg:px-4 lg:shadow-md border border-base-300 lg:border-base-300 rounded-lg"data-aos="zoom-in" data-aos-easing="linear"
     data-aos-duration="500">
  {/* Left side - Ask Question */}
  <div className="w-full lg:w-1/3 mb-8 lg:mb-0 h-full">
    <div className="bg-white p-8 rounded-lg shadow-md lg:shadow-none h-full flex flex-col">
      <h2 className="text-2xl font-semibold mb-6 text-primary">Have a Question or Feedback?</h2>
      <div className="flex  items-center mb-4">
        <input type="text" placeholder="Your Email" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500" />
      </div>
      <div className="flex  items-center mb-4">
        <input type="text" placeholder="Your question or feedback..." className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500" />
      </div>
      
      <button onClick={send} className="bg-primary flex justify-center items-center gap-2 text-white px-6 py-2 rounded-lg hover:bg-secondary transition duration-300 "><BsSend /> Send </button>
    </div>
  </div>

  {/* Right side - FAQ */}
  <div className="w-full lg:w-2/3">
    <div className="bg-gray-100 p-8 rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold mb-6 text-secondary">Frequently Asked Questions</h2>

      {/* FAQ items */}
      <div className="accordion">
        <div className="collapse collapse-plus bg-white rounded-lg shadow-md mb-4">
          <input type="checkbox" id="faq1" className="collapse-toggle" />
          <label htmlFor="faq1" className="collapse-title text-lg font-medium cursor-pointer">What types of properties do you offer?</label>
          <div className="collapse-content">
            <p className="text-gray-700 mt-2">We offer a range of luxury properties including oceanfront penthouses, private beach villas, seaside mansions, and more. Each property is carefully curated to provide unparalleled luxury and comfort.</p>
          </div>
        </div>

        <div className="collapse collapse-plus bg-white rounded-lg shadow-md mb-4">
          <input type="checkbox" id="faq2" className="collapse-toggle" />
          <label htmlFor="faq2" className="collapse-title text-lg font-medium cursor-pointer">How can I schedule a viewing?</label>
          <div className="collapse-content">
            <p className="text-gray-700 mt-2">To schedule a viewing, simply contact our team through the website or give us a call. We'll be happy to arrange a convenient time for you to visit the property and explore its features.</p>
          </div>
        </div>

        <div className="collapse collapse-plus bg-white rounded-lg shadow-md mb-4">
          <input type="checkbox" id="faq3" className="collapse-toggle" />
          <label htmlFor="faq3" className="collapse-title text-lg font-medium cursor-pointer">Do you offer financing options?</label>
          <div className="collapse-content">
            <p className="text-gray-700 mt-2">Yes, we work with trusted financial institutions to provide financing options for qualified buyers. Our team can help you explore your financing options and choose the best solution for your needs.</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
        </div>
    );
};

export default FAQ;