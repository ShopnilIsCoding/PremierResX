import { GrLike, GrUserExpert } from "react-icons/gr";
import { RiCustomerService2Line } from "react-icons/ri";

const WhyUS = () => {
  return (
    <div className="relative lg:mb-32">
      <section className="bg-gray-100 py-16 mt-4 lg:mt-10 rounded-xl">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl" data-aos="zoom-out-right">
              Why Choose Us
            </h2>
            <p className="mt-4 text-lg text-gray-600 font-serif" data-aos="zoom-out-right">
              For over a decade, we've been dedicated to delivering unparalleled real estate experiences. Our commitment to excellence ensures that every client receives personalized service tailored to their unique needs. With a portfolio of premium properties and a team of seasoned experts, we're here to guide you through every step of your real estate journey, making your dreams a reality.
            </p>
          </div>
          <div className="mt-20 grid grid-cols-1 gap-16 lg:grid-cols-3 lg:gap-x-5 lg:gap-y-12">
            <div className="flex flex-col items-center" data-aos="zoom-out-down">
              <div className="flex items-center justify-center h-12 w-12 rounded-full bg-blue-500 text-white">
                <RiCustomerService2Line className="text-xl" />
              </div>
              <h3 className="mt-6 text-xl font-medium text-gray-900">
                Exceptional Service
              </h3>
              <p className="mt-2 text-base text-gray-600 text-center">
                We provide exceptional service to our clients, ensuring their
                satisfaction every step of the way.
              </p>
            </div>
            <div className="flex flex-col items-center"data-aos="zoom-out-down">
              <div className="flex items-center justify-center h-12 w-12 rounded-full bg-green-500 text-white">
                <GrLike />
              </div>
              <h3 className="mt-6 text-xl font-medium text-gray-900">
                Quality Properties
              </h3>
              <p className="mt-2 text-base text-gray-600 text-center">
                Our properties are of the highest quality, meticulously curated
                to meet your expectations.
              </p>
            </div>
            <div className="flex flex-col items-center"data-aos="zoom-out-down">
              <div className="flex items-center justify-center h-12 w-12 rounded-full bg-purple-500 text-white">
                <GrUserExpert />
              </div>
              <h3 className="mt-6 text-xl font-medium text-gray-900">
                Expert Guidance
              </h3>
              <p className="mt-2 text-base text-gray-600 text-center">
                With our expert guidance, you'll make informed decisions and find
                the perfect property for your needs.
              </p>
            </div>
          </div>
        </div>
      </section>
      <div className="stats w-full lg:max-w-7xl mx-auto mt-2  shadow lg:absolute lg:z-50 lg:left-1/2 lg:transform lg:-translate-x-1/2 -bottom-20" >
        <div className=" max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-3 items-center justify-between  space-x-4">
            <div className="stat">
              <div className="stat-figure text-secondary">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-8 h-8 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
              </div>
              <div className="stat-title">Total Sales</div>
              <div className="stat-value">$1.5M</div>
              <div className="stat-desc">This Quarter</div>
            </div>
            <div className="stat">
              <div className="stat-figure text-secondary">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-8 h-8 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"></path></svg>
              </div>
              <div className="stat-title">New Clients</div>
              <div className="stat-value">457</div>
              <div className="stat-desc">This Month</div>
            </div>
            <div className="stat">
              <div className="stat-figure text-secondary">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-8 h-8 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"></path></svg>
              </div>
              <div className="stat-title">Customer Satisfaction</div>
              <div className="stat-value">95%</div>
              <div className="stat-desc">Highest Rating</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyUS;
