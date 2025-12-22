import { Facebook, Instagram, PhoneIncoming, Twitter, Youtube } from 'lucide-react';

const BottomFooter = () => {
  return (
    <div className="py-6">
      <span className="block h-0.5 w-full bg-primaryLight mb-6" />
      <div className="flex flex-col md:flex-row items-center justify-around gap-4 md:gap-0">
        <div className="col-span-2">
          <p className="text-xs text-gray-500">© 2025, Nest – DVN Technology</p>
          <p className="text-xs text-gray-500">All rights reserved</p>
        </div>
        <div className="flex items-center">
          <PhoneIncoming size={24} className="text-gray-500" />
          <div className="ml-2">
            <p className="text-base text-primary font-semibold">0889.541.507</p>
            <p className="text-xs text-gray-500">Working 8:00 - 22:00</p>
          </div>
        </div>
        <div className="flex items-center">
          <PhoneIncoming size={24} className="text-gray-500" />
          <div className="ml-2">
            <p className="text-base text-primary font-semibold">0889.541.507</p>
            <p className="text-xs text-gray-500">24/7 Support Center</p>
          </div>
        </div>
        <div className="flex flex-col items-center md:items-end">
          <div className="flex items-center gap-2">
            <p className="text-xs font-medium">Follow Us</p>
            <Facebook size={24} className="cursor-pointer bg-primary rounded-full p-1 text-white" />
            <Instagram size={24} className="cursor-pointer bg-primary rounded-full p-1 text-white" />
            <Twitter size={24} className="cursor-pointer bg-primary rounded-full p-1 text-white" />
            <Youtube size={24} className="cursor-pointer bg-primary rounded-full p-1 text-white" />
          </div>
          <p className="text-xs text-gray-500">Up to 15% discount on your first subscribe</p>
        </div>
      </div>
    </div>
  );
};

export default BottomFooter;
