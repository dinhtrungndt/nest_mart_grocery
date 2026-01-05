import { IMAGES } from '../constants/images/image';

const ContactForm = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center pb-12">
      {/* Form */}
      <div className="flex flex-col space-y-4">
        <p className="text-primary font-medium text-sm">Contact form</p>
        <p className="text-black text-2xl md:text-3xl font-bold font-quicksand">Drop Us a Line</p>
        <p className="text-gray-500 text-sm mb-4">
          Your email address will not be published. Required fields are marked <span className="text-red-500">*</span>
        </p>

        <input
          type="text"
          placeholder="First Name"
          className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
        />

        <input
          type="email"
          placeholder="Your Email"
          className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
        />

        <input
          type="tel"
          placeholder="Your Phone"
          className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
        />

        <input
          type="text"
          placeholder="Subject"
          className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
        />

        <textarea
          placeholder="Your Message"
          className="w-full border border-gray-300 rounded-lg px-4 py-3 h-32 resize-none focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
        ></textarea>

        <button className="w-full md:w-auto text-white px-8 py-3 bg-primary rounded-lg hover:bg-primaryDark transition-colors font-medium">
          Send message
        </button>
      </div>

      {/* Image */}
      <div className="order-first lg:order-last">
        <img
          src={IMAGES.drop_us_a_line}
          alt="Drop Us a Line"
          className="w-full h-auto rounded-lg shadow-lg"
        />
      </div>
    </div>
  );
};

export default ContactForm;
