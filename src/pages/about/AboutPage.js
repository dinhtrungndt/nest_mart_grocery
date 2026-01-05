import { Facebook, Instagram, Twitter, Youtube } from 'lucide-react';
import Breadcrumb from '../../components/common/Breadcrumb';
import Header2 from '../../components/header/Header2';
import Navbar from '../../components/navbar/Navbar';
import { IMAGES } from '../../constants/images/image';
import EmailSubscribe from '../../utils/EmailSubscribe';

const AboutPage = () => {
  const breadcrumbItems = [
    { label: 'Pages', link: '/pages' },
    { label: 'About Us', link: '/about' },
  ];

  return (
    <div>
      {/* Header */}
      <Header2 />

      {/* Navbar */}
      <Navbar />

      {/* common breadcrumb */}
      <Breadcrumb items={breadcrumbItems} />

      <div className="px-4 md:px-12 lg:px-24 py-4 md:py-6">
        {/* Welcome to Nest */}
        <div className="flex flex-col md:flex-row gap-4 md:gap-0">
          <img src={IMAGES.about_1} alt="about" className="w-full md:w-1/3 h-auto object-cover rounded-lg md:rounded-none" />
          <div className="flex flex-col p-4 md:p-8">
            <p className="text-xl md:text-2xl font-bold font-quicksand">Welcome to Nest</p>
            <p className="text-gray-500 text-xs md:text-sm pt-2 md:pt-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
              ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
              ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate id est laborum.
            </p>
            <p className="text-gray-500 text-xs md:text-sm pt-2 md:pt-4">
              Ius ferri velit sanctus cu, sed at soleat accusata. Dictas prompta et Ut placerat legendos
              interpre.Donec vitae sapien ut libero venenatis faucibus. Nullam quis ante Etiam sit amet
              orci eget. Quis commodo odio aenean sed adipiscing. Turpis massa tincidunt dui ut ornare
              lectus. Auctor elit sed vulputate mi sit amet. Commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate id est laborum.
            </p>
            <div className="flex flex-wrap md:flex-nowrap gap-4 md:gap-8 pt-4 md:p-6 md:pl-0">
              <img src={IMAGES.about_2} alt="about" className="w-full md:w-auto" />
              <img src={IMAGES.about_3} alt="about" className="w-full md:w-auto" />
              <img src={IMAGES.about_4} alt="about" className="w-full md:w-auto" />
            </div>
          </div>
        </div>

        {/* What We Provide? */}
        <div className="flex flex-col items-center justify-center mt-8 md:mt-0">
          <p className="text-xl md:text-2xl font-bold font-quicksand text-center mb-2 pt-8 md:pt-12">What We Provide?</p>
          <svg width="170" height="15" viewBox="0 0 170 15" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M2 9C2 9 20 -2 38 9C56 20 74 9 74 9C74 9 92 -2 110 9C128 20 146 9 146 9C146 9 164 -2 182 9" stroke="#81B13D" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
          </svg>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-16 lg:gap-32 pt-8 md:pt-12">
            <div className="flex flex-col items-center justify-center gap-4 text-center">
              <img src={IMAGES.best_prices_offers} alt="about" className="w-16 h-16 md:w-20 md:h-20" />
              <p className="text-sm md:text-base font-bold font-quicksand">Best Prices & Offers</p>
              <p className="text-gray-500 text-xs">There are many variations of passages of Lorem
                Ipsum available, but the majority have suffered
                alteration in some form</p>
              <p className="text-xs font-bold font-quicksand text-primary cursor-pointer hover:underline">Read more</p>
            </div>
            <div className="flex flex-col items-center justify-center gap-4 text-center">
              <img src={IMAGES.free_delivery} alt="about" className="w-16 h-16 md:w-20 md:h-20" />
              <p className="text-sm md:text-base font-bold font-quicksand">Wide Assortment</p>
              <p className="text-gray-500 text-xs">There are many variations of passages of Lorem
                Ipsum available, but the majority have suffered
                alteration in some form</p>
              <p className="text-xs font-bold font-quicksand text-primary cursor-pointer hover:underline">Read more</p>
            </div>
            <div className="flex flex-col items-center justify-center gap-4 text-center">
              <img src={IMAGES.great_daily_deal} alt="about" className="w-16 h-16 md:w-20 md:h-20" />
              <p className="text-sm md:text-base font-bold font-quicksand">Free Delivery</p>
              <p className="text-gray-500 text-xs">There are many variations of passages of Lorem
                Ipsum available, but the majority have suffered
                alteration in some form</p>
              <p className="text-xs font-bold font-quicksand text-primary cursor-pointer hover:underline">Read more</p>
            </div>
            <div className="flex flex-col items-center justify-center gap-4 text-center">
              <img src={IMAGES.wide_assortment} alt="about" className="w-16 h-16 md:w-20 md:h-20" />
              <p className="text-sm md:text-base font-bold font-quicksand">Easy Returns</p>
              <p className="text-gray-500 text-xs">There are many variations of passages of Lorem
                Ipsum available, but the majority have suffered
                alteration in some form</p>
              <p className="text-xs font-bold font-quicksand text-primary cursor-pointer hover:underline">Read more</p>
            </div>
            <div className="flex flex-col items-center justify-center gap-4 text-center">
              <img src={IMAGES.easy_return} alt="about" className="w-16 h-16 md:w-20 md:h-20" />
              <p className="text-sm md:text-base font-bold font-quicksand">100% Satisfaction</p>
              <p className="text-gray-500 text-xs">There are many variations of passages of Lorem
                Ipsum available, but the majority have suffered
                alteration in some form</p>
              <p className="text-xs font-bold font-quicksand text-primary cursor-pointer hover:underline">Read more</p>
            </div>
            <div className="flex flex-col items-center justify-center gap-4 text-center">
              <img src={IMAGES.great_daily} alt="about" className="w-16 h-16" />
              <p className="text-sm md:text-base font-bold font-quicksand">Great Daily Deal</p>
              <p className="text-gray-500 text-xs">There are many variations of passages of Lorem
                Ipsum available, but the majority have suffered
                alteration in some form</p>
              <p className="text-xs font-bold font-quicksand text-primary cursor-pointer hover:underline">Read more</p>
            </div>
          </div>
        </div>

        {/* Your partner */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-20 pt-8 md:pt-12">
          <img src={IMAGES.your_partner} alt="about" className="w-full md:w-1/3" />
          <div className="flex flex-col">
            <p className="text-lg md:text-xl font-medium font-quicksand text-gray-400">Our performance</p>
            <p className="text-xl md:text-2xl font-bold font-quicksand text-gray-800 mt-2">Your Partner for e-commerce grocery solution</p>
            <p className="text-gray-500 text-xs md:text-sm pt-2">Ed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium
              doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo
              inventore veritatis et quasi architecto</p>
            <p className="text-gray-500 text-xs md:text-sm pt-2">Pitatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim
              ipsam voluptas sit aspernatur aut odit aut fugit, sed quia</p>
          </div>
        </div>

        {/* Who we are, our history, our mission */}
        <div className="flex flex-col md:flex-row justify-between gap-8 md:gap-20 mt-8">
          <div className="flex-1">
            <p className="text-xl md:text-2xl font-bold font-quicksand pt-4 md:pt-12">Who we are</p>
            <p className="text-gray-500 text-xs md:text-sm pt-2">Volutpat diam ut venenatis tellus in metus. Nec dui nunc
              mattis enim ut tellus eros donec ac odio orci ultrices in.
              ellus eros donec ac odio orci ultrices in.</p>
          </div>

          <div className="flex-1">
            <p className="text-xl md:text-2xl font-bold font-quicksand pt-4 md:pt-12">Our history</p>
            <p className="text-gray-500 text-xs md:text-sm pt-2">Volutpat diam ut venenatis tellus in metus. Nec dui nunc
              mattis enim ut tellus eros donec ac odio orci ultrices in.
              ellus eros donec ac odio orci ultrices in.</p>
          </div>

          <div className="flex-1">
            <p className="text-xl md:text-2xl font-bold font-quicksand pt-4 md:pt-12">Our mission</p>
            <p className="text-gray-500 text-xs md:text-sm pt-2">Volutpat diam ut venenatis tellus in metus. Nec dui nunc
              mattis enim ut tellus eros donec ac odio orci ultrices in. ellus
              eros donec ac odio orci ultrices in.</p>
          </div>
        </div>

        {/* Statistics */}
        <div className="relative w-full mt-8 md:mt-10">
          <img src={IMAGES.thongke__after} alt="about" className="w-full object-cover rounded-xl md:rounded-3xl" />
          <div className="absolute inset-0 flex flex-wrap md:flex-nowrap justify-around items-center px-4 md:px-16 gap-4 md:gap-0">
            <div className="flex flex-col items-center">
              <p className="text-3xl md:text-5xl lg:text-7xl font-bold font-quicksand text-white">0+</p>
              <p className="text-xs md:text-base lg:text-xl font-bold font-quicksand text-white text-center">Glorious years</p>
            </div>

            <div className="flex flex-col items-center">
              <p className="text-3xl md:text-5xl lg:text-7xl font-bold font-quicksand text-white">0+</p>
              <p className="text-xs md:text-base lg:text-xl font-bold font-quicksand text-white text-center">Happy clients</p>
            </div>

            <div className="flex flex-col items-center">
              <p className="text-3xl md:text-5xl lg:text-7xl font-bold font-quicksand text-white">0+</p>
              <p className="text-xs md:text-base lg:text-xl font-bold font-quicksand text-white text-center">Projects complete</p>
            </div>

            <div className="flex flex-col items-center">
              <p className="text-3xl md:text-5xl lg:text-7xl font-bold font-quicksand text-white">0+</p>
              <p className="text-xs md:text-base lg:text-xl font-bold font-quicksand text-white text-center">Team advisor</p>
            </div>

            <div className="flex flex-col items-center">
              <p className="text-3xl md:text-5xl lg:text-7xl font-bold font-quicksand text-white">0+</p>
              <p className="text-xs md:text-base lg:text-xl font-bold font-quicksand text-white text-center">Products Sale</p>
            </div>
          </div>
        </div>

        {/* Our Team */}
        <div className="flex flex-col items-center justify-center mt-8 md:mt-0">
          <p className="text-xl md:text-2xl font-bold font-quicksand text-center mb-2 pt-8 md:pt-12">Our Team</p>
          <svg width="170" height="15" viewBox="0 0 170 15" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M2 9C2 9 20 -2 38 9C56 20 74 9 74 9C74 9 92 -2 110 9C128 20 146 9 146 9C146 9 164 -2 182 9" stroke="#81B13D" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          <div className="flex flex-col lg:flex-row items-center justify-between mb-12 md:mb-24 gap-6 md:gap-8 mt-8 md:mt-12 w-full">
            <div className="flex flex-col gap-4 md:gap-6 lg:w-1/3">
              <p className="text-xs text-primary font-medium">Our Team</p>
              <p className="text-2xl md:text-3xl lg:text-4xl font-quicksand font-bold">Meet Our Expert Team</p>
              <p className="text-sm md:text-base">Proin ullamcorper pretium orci. Donec necscele risque leo.
                Nam massa dolor imperdiet neccon sequata congue idsem.
                Maecenas malesuada faucibus finibus.</p>
              <p className="text-sm md:text-base">Proin ullamcorper pretium orci. Donec necscele risque leo.
                Nam massa dolor imperdiet neccon sequata congue idsem.
                Maecenas malesuada faucibus finibus.</p>
              <button className="w-full md:w-1/2 bg-primaryLight text-white py-2 px-4 rounded hover:bg-primaryDark transition-colors">
                View All Members
              </button>
            </div>

            <div className="relative w-full lg:w-auto">
              <img src={IMAGES.our_team1} alt="about" className="w-full" />
              <div className="absolute -bottom-8 md:-bottom-14 left-1/2 -translate-x-1/2 lg:left-8 lg:translate-x-0 bg-white px-8 md:px-16 lg:px-24 py-3 md:py-4 rounded border shadow-lg flex flex-col items-center justify-center hover:scale-105 transition-transform cursor-pointer">
                <p className="text-base md:text-xl font-bold font-quicksand text-black">H. Merinda</p>
                <p className="text-xs text-gray-500">CEO & Co-Founder</p>
                <div className="flex mt-2 gap-1 md:gap-2">
                  <Facebook size={16} className="md:w-5 md:h-5 cursor-pointer bg-primary rounded-full text-white p-1" />
                  <Twitter size={16} className="md:w-5 md:h-5 cursor-pointer bg-primary rounded-full text-white p-1" />
                  <Instagram size={16} className="md:w-5 md:h-5 cursor-pointer bg-primary rounded-full text-white p-1" />
                  <Youtube size={16} className="md:w-5 md:h-5 cursor-pointer bg-primary rounded-full text-white p-1" />
                </div>
              </div>
            </div>

            <div className="relative w-full lg:w-auto mt-12 lg:mt-0">
              <img src={IMAGES.our_team2} alt="about" className="w-full" />
              <div className="absolute -bottom-8 md:-bottom-14 left-1/2 -translate-x-1/2 lg:left-8 lg:translate-x-0 bg-white px-8 md:px-16 lg:px-24 py-3 md:py-4 rounded border shadow-lg flex flex-col items-center justify-center hover:scale-105 transition-transform cursor-pointer">
                <p className="text-base md:text-xl font-bold font-quicksand text-black">Dilan Specter</p>
                <p className="text-xs text-gray-500">Head Engineer</p>
                <div className="flex mt-2 gap-1 md:gap-2">
                  <Facebook size={16} className="md:w-5 md:h-5 cursor-pointer bg-primary rounded-full text-white p-1" />
                  <Twitter size={16} className="md:w-5 md:h-5 cursor-pointer bg-primary rounded-full text-white p-1" />
                  <Instagram size={16} className="md:w-5 md:h-5 cursor-pointer bg-primary rounded-full text-white p-1" />
                  <Youtube size={16} className="md:w-5 md:h-5 cursor-pointer bg-primary rounded-full text-white p-1" />
                </div>
              </div>
            </div>
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

export default AboutPage;
