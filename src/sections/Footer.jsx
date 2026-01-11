const footerLinks = {
  popularCategories: [
    { label: "Alcohol Australia", link: "/alcohol-australia" },
    {
      label: "Alcohol Delivery Australia",
      link: "/alcohol-delivery-australia",
    },
    { label: "Aldi Australia", link: "/aldi-australia" },
    { label: "Battle Of The Brands", link: "/battle-of-the-brands" },
    { label: "Beauty Stores", link: "/beauty-stores" },
    { label: "Beauty Supply", link: "/beauty-supply" },
    { label: "Catering Near Me", link: "/catering-near-me" },
    { label: "Chips Ahoy Big Cookie", link: "/chips-ahoy-big-cookie" },
    { label: "Coca Cola", link: "/coca-cola" },
    { label: "Convenience Stores Canada", link: "/convenience-stores-canada" },
    { label: "Dashmart Near Me", link: "/dashmart-near-me" },
    { label: "Deck The Doorstep", link: "/deck-the-doorstep" },
    { label: "Diageo Holiday", link: "/diageo-holiday" },
    { label: "Drugstores Canada", link: "/drugstores-canada" },
    { label: "Flower Delivery", link: "/flower-delivery" },
    { label: "Game Day", link: "/game-day" },
    { label: "Grocery Delivery Canada", link: "/grocery-delivery-canada" },
    {
      label: "Grocery Retail Convenience",
      link: "/grocery-retail-convenience",
    },
    { label: "Haleon Well Within Reach", link: "/haleon-well-within-reach" },
    { label: "Halloween", link: "/halloween" },
    { label: "Holiday Hosting", link: "/holiday-hosting" },
    { label: "Hsa Bank", link: "/hsa-bank" },
    { label: "Hsa Fsa Store", link: "/hsa-fsa-store" },
    { label: "Large Group Orders", link: "/large-group-orders" },
    { label: "Local Eats Deserve Pepsi", link: "/local-eats-deserve-pepsi" },
    { label: "Make It Date Night", link: "/make-it-date-night" },
    { label: "Medicine Delivery", link: "/medicine-delivery" },
    { label: "Mothers Day", link: "/mothers-day" },
    { label: "New Years Eve", link: "/new-years-eve" },
    { label: "Pepsi", link: "/pepsi" },
    { label: "Pet Store Near Me", link: "/pet-store-near-me" },
    { label: "Pickleball", link: "/pickleball" },
    { label: "Play For An Ultra", link: "/play-for-an-ultra" },
    { label: "Procter Gamble", link: "/procter-gamble" },
    { label: "Retail Stores Near Me", link: "/retail-stores-near-me" },
    { label: "Seasonal Holidays", link: "/seasonal-holidays" },
    { label: "Snap Ebt", link: "/snap-ebt" },
    { label: "Thanksgiving", link: "/thanksgiving" },
    { label: "Valentines Day", link: "/valentines-day" },
    { label: "Winter Holidays", link: "/winter-holidays" },
  ],
  getToKnowUs: [
    { label: "About Us", link: "/about" },
    { label: "Careers", link: "/careers" },
    { label: "Investors", link: "/investors" },
    { label: "Company Blog", link: "/company-blog" },
    { label: "Engineering Blog", link: "/engineering-blog" },
    { label: "Merchant Blog", link: "/merchant-blog" },
    { label: "Gift Cards", link: "/gift-cards" },
    { label: "Promotions", link: "/promotions" },
    { label: "Dasher Central", link: "/dasher-central" },
    { label: "LinkedIn", link: "https://www.linkedin.com/company/doordash" },
    {
      label: "Glassdoor",
      link: "https://www.glassdoor.com/Overview/Working-at-DoorDash-EI_IE813073.11,19.htm",
    },
    { label: "Accessibility", link: "/accessibility" },
    { label: "Newsroom", link: "/newsroom" },
  ],
  letUsHelpYou: [
    { label: "Account Details", link: "/account" },
    { label: "Order History", link: "/orders" },
    { label: "Help", link: "/help" },
  ],
  doingBusiness: [
    { label: "Become a Dasher", link: "/become-a-dasher" },
    { label: "DoorDash Merchant", link: "/merchant-signup" },
    { label: "Get Dashers for Deliveries", link: "/get-dashers" },
    { label: "Get DoorDash for Business", link: "/business" },
  ],
  appDownloads: [
    {
      label: "Available on the App Store",
      link: "https://apps.apple.com/app/id719972451",
    },
    {
      label: "Android App on Google Play",
      link: "https://play.google.com/store/apps/details?id=com.dd.doordash",
    },
  ],
  others: [
    { label: "Terms of Service", link: "" },
    { label: "Privacy", link: "" },
    { label: "Delivery Locations", link: "" },
    { label: "Do not Sell or Share My Personal Information", link: "" },
  ],
  social: [{ label: "Facebook", link: "" }],
};

export const Footer = () => {
  return (
    <footer>
      <div className="bg-footer w-full ">
        <div className="container mx-auto relative overflow-hidden text-center lg:text-left lg:px-20">
          <h1 className="font-semibold text-white mt-6 mb-3">
            Popular Categories
          </h1>
          <div className="grid grid-cols-1  md:grid-cols-4 lg:grid-rows-10 gap-2">
            {footerLinks.popularCategories.map((item, index) => (
              <p key={index} className="text-white/80 text-[14px] space-y-4">
                <a
                  className="hover:text-white hover:underline"
                  href={item.link}
                >
                  {item.label}
                </a>
              </p>
            ))}
          </div>
        </div>

        <div className="container mx-auto grid grid-cols-1 md:grid-cols-6 gap-3 lg:px-20">
          <div className="text-center lg:text-left space-y-3 overflow-hidden">
            <h1 className="font-semibold text-white mt-16 mb-3">
              Get to know us
            </h1>
            {footerLinks.getToKnowUs.map((item, index) => (
              <p key={index} className="text-white/80 text-xs space-y-4">
                <a
                  className="hover:text-white hover:underline"
                  href={item.link}
                >
                  {item.label}
                </a>
              </p>
            ))}
          </div>

          <div className="text-center lg:text-left space-y-3 overflow-hidden">
            <h1 className="font-semibold text-white mt-16 mb-3">
              Let us help you
            </h1>
            {footerLinks.letUsHelpYou.map((item, index) => (
              <p key={index} className="text-white/80 text-xs space-y-4">
                <a
                  className="hover:text-white hover:underline"
                  href={item.link}
                >
                  {item.label}
                </a>
              </p>
            ))}
          </div>
          
          
          <div className="text-center lg:text-left space-y-3 overflow-hidden">
            <h1 className="font-semibold text-white mt-16 mb-3">
              Doing Business
            </h1>
            {footerLinks.doingBusiness.map((item, index) => (
              <p key={index} className="text-white/80 text-xs space-y-4">
                <a
                  className="hover:text-white hover:underline"
                  href={item.link}
                >
                  {item.label}
                </a>
              </p>
            ))}
          </div>

        </div>
      </div>
    </footer>
  );
};
