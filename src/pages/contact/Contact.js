import { LocationEdit } from 'lucide-react';
import Breadcrumb from '../../components/common/Breadcrumb';
import Header2 from '../../components/header/Header2';
import Navbar from '../../components/navbar/Navbar';
import { IMAGES } from '../../constants/images/image';
import EmailSubscribe from '../../utils/EmailSubscribe';

const Contact = () => {
  const breadcrumbItems = [
    { label: 'Pages', link: '/pages' },
    { label: 'Contact Us', link: '/contact' },
  ];

  return (
    <div>
      {/* Header */}
      <Header2 />

      {/* Navbar */}
      <Navbar />

      {/* common breadcrumb */}
      <Breadcrumb items={breadcrumbItems} />

      {/* Contact Information */}
      <div className="px-4 md:px-12 lg:px-24 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Main Info */}
          <div className="lg:col-span-1 space-y-4">
            <p className="text-primary font-medium text-sm">How can help you?</p>
            <p className="font-quicksand font-bold text-2xl md:text-3xl">Let us know how we can help you</p>
            <p className="text-gray-500 text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
            <p className="text-gray-500 text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
          </div>

          {/* Right Column - Services Grid */}
          <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <p className="text-sm font-bold">01. Visit Feedback</p>
              <p className="text-gray-500 text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
            </div>

            <div className="space-y-2">
              <p className="text-sm font-bold">02. Employer Services</p>
              <p className="text-gray-500 text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
            </div>

            <div className="space-y-2">
              <p className="text-sm font-bold text-primary">03. Billing Inquiries</p>
              <p className="text-gray-500 text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
            </div>

            <div className="space-y-2">
              <p className="text-sm font-bold">04. General Inquiries</p>
              <p className="text-gray-500 text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Google Maps */}
      <div className="px-4 md:px-12 lg:px-24 py-2">
        <div className="w-full h-96 md:h-[500px] lg:h-[600px]">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.3254589596544!2d106.66373631533432!3d10.786834192318078!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752ed23c80767d%3A0x5a981a5efee9726!2zVHLGsOG7nW5nIMSQ4bqhaSBo4buNYyBLaG9hIGjhu41jIFThu7Egbmhpw6puIC0gxJBIUUctSENN!5e0!3m2!1svi!2s!4v1641234567890!5m2!1svi!2s"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="rounded-2xl shadow-lg"
          ></iframe>
        </div>
      </div>

      {/* Contact Locations */}
      <div className="px-4 md:px-12 lg:px-24 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {/* Office */}
          <div className="space-y-3 p-6 border border-gray-200 rounded-lg hover:shadow-lg transition-shadow">
            <p className="font-bold text-primary text-lg">Office</p>
            <p className="text-sm text-gray-500 leading-relaxed">
              205 North Michigan Avenue, Suite 810<br />
              Chicago, 60601, USA<br />
              Phone: (123) 456-7890<br />
              Email: contact@Evara.com
            </p>
            <button className="text-white px-4 py-2 bg-primary rounded flex items-center gap-2 hover:bg-primaryDark transition-colors mt-4">
              <LocationEdit size={16} />
              View map
            </button>
          </div>

          {/* Studio */}
          <div className="space-y-3 p-6 border border-gray-200 rounded-lg hover:shadow-lg transition-shadow">
            <p className="font-bold text-primary text-lg">Studio</p>
            <p className="text-sm text-gray-500 leading-relaxed">
              205 North Michigan Avenue, Suite 810<br />
              Chicago, 60601, USA<br />
              Phone: (123) 456-7890<br />
              Email: contact@Evara.com
            </p>
            <button className="text-white px-4 py-2 bg-primary rounded flex items-center gap-2 hover:bg-primaryDark transition-colors mt-4">
              <LocationEdit size={16} />
              View map
            </button>
          </div>

          {/* Shop */}
          <div className="space-y-3 p-6 border border-gray-200 rounded-lg hover:shadow-lg transition-shadow">
            <p className="font-bold text-primary text-lg">Shop</p>
            <p className="text-sm text-gray-500 leading-relaxed">
              205 North Michigan Avenue, Suite 810<br />
              Chicago, 60601, USA<br />
              Phone: (123) 456-7890<br />
              Email: contact@Evara.com
            </p>
            <button className="text-white px-4 py-2 bg-primary rounded flex items-center gap-2 hover:bg-primaryDark transition-colors mt-4">
              <LocationEdit size={16} />
              View map
            </button>
          </div>
        </div>
      </div>

      {/* Contact form */}
      <div className="px-4 md:px-12 lg:px-24 py-8">
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
        {/* Form Email Footer */}
        <EmailSubscribe
          backgroundImage={IMAGES.form_email_footer}
          personImage={IMAGES.banner_13}
        />
      </div>
    </div>
  );
};

export default Contact;
