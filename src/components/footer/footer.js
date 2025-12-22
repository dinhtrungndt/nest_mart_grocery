import { Clock, Headset, Mail, MapPinCheckInside } from 'lucide-react';
import { IMAGES } from '../../constants/images/image';

const Footer = () => {
  return (
    <div className="py-8 grid grid-cols-7" >
      <div className="space-y-2 col-span-2">
        <img src={IMAGES.logo} alt="" className="w-32 cursor-pointer" />
        <p className="text-xs py-2">Awesome grocery store website template</p>
        <p className="text-xs flex items-start"><MapPinCheckInside size={14} className="mr-1 mt-0.5 shrink-0 text-primary" /><span>Address 5171 W Campbell Ave undefined <br /> Kent, Utah 53127 United States</span></p>
        <p className="text-xs flex items-center"><Headset size={14} className="mr-1 text-primary" />Call Us: <span className="ml-1 text-primary">(+91)-540-025-124553</span></p>
        <p className="text-xs flex items-center"><Mail size={14} className="mr-1 text-primary" />Email: <span className="ml-1 text-primary">nguyendinhtrung.it@gmail.com</span></p>
        <p className="text-xs flex items-center"><Clock size={14} className="mr-1 text-primary" />Hours: <span>10:00 - 18:00, Mon - Sat</span></p>
      </div>
      <div>
        <h2 className="text-lg font-medium pb-4">Company</h2>
        <ul className="space-y-2">
          <li className="text-xs hover:text-primary cursor-pointer transition-colors">About Us</li>
          <li className="text-xs hover:text-primary cursor-pointer transition-colors">Delivery Information</li>
          <li className="text-xs hover:text-primary cursor-pointer transition-colors">Privacy Policy</li>
          <li className="text-xs hover:text-primary cursor-pointer transition-colors">Terms & Conditions</li>
          <li className="text-xs hover:text-primary cursor-pointer transition-colors">Contact Us</li>
          <li className="text-xs hover:text-primary cursor-pointer transition-colors">Support Center</li>
          <li className="text-xs hover:text-primary cursor-pointer transition-colors">Careers</li>
        </ul>
      </div>
      <div>
        <h2 className="text-lg font-medium pb-4">Account</h2>
        <ul className="space-y-2">
          <li className="text-xs hover:text-primary cursor-pointer transition-colors">Sign In</li>
          <li className="text-xs hover:text-primary cursor-pointer transition-colors">View Cart</li>
          <li className="text-xs hover:text-primary cursor-pointer transition-colors">My Wishlist</li>
          <li className="text-xs hover:text-primary cursor-pointer transition-colors">Track My Order</li>
          <li className="text-xs hover:text-primary cursor-pointer transition-colors">Help Ticket</li>
          <li className="text-xs hover:text-primary cursor-pointer transition-colors">Shipping Details</li>
          <li className="text-xs hover:text-primary cursor-pointer transition-colors">Compare products</li>
        </ul>
      </div>
      <div>
        <h2 className="text-lg font-medium pb-4">Corporate</h2>
        <ul className="space-y-2">
          <li className="text-xs hover:text-primary cursor-pointer transition-colors">Become a Vendor</li>
          <li className="text-xs hover:text-primary cursor-pointer transition-colors">Affiliate Program</li>
          <li className="text-xs hover:text-primary cursor-pointer transition-colors">Farm Business</li>
          <li className="text-xs hover:text-primary cursor-pointer transition-colors">Farm Careers</li>
          <li className="text-xs hover:text-primary cursor-pointer transition-colors">Our Suppliers</li>
          <li className="text-xs hover:text-primary cursor-pointer transition-colors">Accessibility</li>
          <li className="text-xs hover:text-primary cursor-pointer transition-colors">Promotions</li>
        </ul>
      </div>
      <div>
        <h2 className="text-lg font-medium pb-4">Popular</h2>
        <ul className="space-y-2">
          <li className="text-xs hover:text-primary cursor-pointer transition-colors">Milk & Flavoured Milk</li>
          <li className="text-xs hover:text-primary cursor-pointer transition-colors">Butter and Margarine</li>
          <li className="text-xs hover:text-primary cursor-pointer transition-colors">Eggs Substitutes</li>
          <li className="text-xs hover:text-primary cursor-pointer transition-colors">Marmalades</li>
          <li className="text-xs hover:text-primary cursor-pointer transition-colors">Sour Cream and Dips</li>
          <li className="text-xs hover:text-primary cursor-pointer transition-colors">Tea & Kombucha</li>
          <li className="text-xs hover:text-primary cursor-pointer transition-colors">Cheese</li>
        </ul>
      </div>
      <div>
        <h2 className="text-lg font-medium pb-4">Install App</h2>
        <p className="text-xs text-gray-500">From App Store or Google Play</p>
        <div className="flex items-center gap-2 pt-4">
          <img src={require("../../assets/image/install_app/google_play.png")} alt="" className="w-28 cursor-pointer" />
          <img src={require("../../assets/image/install_app/app_store.png")} alt="" className="w-28 cursor-pointer" />
        </div>
        <p className="pt-4 text-xs">Secured Payment Gateways</p>
        <img src={require("../../assets/image/payment.png")} alt="" className="w-48 pt-4" />
      </div>
    </div >
  );
};

export default Footer;
