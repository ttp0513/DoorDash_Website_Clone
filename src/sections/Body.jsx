import { Card } from "@/components/Card";

export const Body = () => {
  return (
    <section id="body">
      <div className="relative">
        {/* First Promo */}
        <div className="container mx-auto flex flex-col md:flex-row lg:gap-10 items-center bg-body-background lg:bg-transparent lg:relative z-10">
          <div className="order-1 md:order-2 ">
            <img
              className="w-full h-auto object-cover lg:relative z-10 lg:-mb-10 md:-mb-5"
              src="https://img.cdn4dd.com/cdn-cgi/image/fit=cover,format=auto,quality=60/https://cdn.doordash.com/managed/consumer/seo/home/landing_cta/download_the_app_desktop.png"
            />
          </div>

          <div className="w-full lg:w-[40%] flex order-2 md:order-1 px-10 lg:ml-20">
            <Card
              header="Everything you crave, delivered."
              content="Get a slice of pizza or the whole pie delivered, or pick up house lo mein from the Chinese takeout spot you've been meaning to try."
              subheader="Your favorite local restaurants"
              cta="Find restaunrants"
              link="https://www.doordash.com/p/beauty-supply"
              textPosition="left"
            ></Card>
          </div>
        </div>

        {/* Second Promo */}
        <div className="bg-body-background">
          <div className="relative container mx-auto flex flex-col md:flex-row items-center lg:py-22 bg-body-background z-0 ">
            <div className="order-1 md:order-1">
              <img
                className="w-full h-auto object-cover"
                src="https://img.cdn4dd.com/cdn-cgi/image/fit=cover,format=auto,quality=60/https://cdn.doordash.com/managed/consumer/seo/home/landing_cta/dashpass_desktop.png"
              />
            </div>

            <div className="w-full lg:w-[40%] flex order-2 md:order-2 px-10 lg:px-20">
              <Card
                header="DashPass is delivery for less"
                content="Members get a $0 delivery fee on DashPass orders, 5% back on pickup orders, and so much more. Plus, it's free for 30 days."
                cta="Get DashPass"
                link="https://www.doordash.com/p/beauty-supply"
                textPosition="left"
              ></Card>
            </div>
          </div>
        </div>

        {/* 3rd Promo */}
        <div className="relative">
           {/* Background image */}
          <img
            src="https://cdn.andnowuknow.com/mainStoryImage/postmatesdoordash_grocery_100119.jpg?VersionId=GpYujR493egQ3hvunBh7J6qBGHEzz752"
            className="absolute inset-0 w-full h-full object-cover"
          />
           {/* Background Dark layout */}
          <div className="absolute inset-0 bg-black/50"></div>

          {/* Content */}
          <div className="relative container mx-auto flex flex-col items-center lg:py-22 z-0 ">
            <div className="lg:w-[40%] py-10 items-center">
              <Card
                header="Get grocery and convenience store essentials"
                subheader="Grocery delivery, exactly how you want it."
                content="Shop from home and fill your cart with fresh produce, frozen entrees, deli delights and more."
                cta="Shop Groceries"
                variant="secondary"
                link="https://www.doordash.com/p/beauty-supply"
                textColor="white"
              ></Card>
            </div>
          </div>
        </div>

        {/* 4th Promo */}
        
        <div className="container mx-auto flex flex-col md:flex-row lg:gap-10 py-10 items-center bg-transparent lg:relative z-10">
          <div className="order-1 md:order-2 ">
            <img
              className="w-full h-auto object-cover lg:relative z-10 lg:-mb-15 md:-mb-5"
              src="https://img.cdn4dd.com/cdn-cgi/image/fit=cover,format=auto,quality=60/https://cdn.doordash.com/managed/consumer/seo/home/landing_cta/convenience_desktop.png"
            />
          </div>

          <div className="w-full lg:w-[40%] flex order-2 md:order-1 px-10 lg:px-20">
            <Card
              header="Convenience stores at your doorstep"
              content="Stock up on snacks, household essentials, candy, or vitamins — all delivered in under an hour."
              cta="Shop Now"
              link="https://www.doordash.com/p/convenience-stores"
              textPosition="left"
            ></Card>
          </div>
        </div>
      </div>

      {/* Helping Section */}
      <div className="bg-body-background">
        <div className="container mx-auto relative overflow-hidden ">
          <div className="container mx-auto w-90">
            <h1 className="py-8 lg:py-16 text-2xl md:text-3xl font-bold text-headline text-center">
              Helping you with to-dos and gifting
            </h1>
          </div>

          <div className="relative container px-0 mx-0 lg:px-50 ">
            <div className="grid grid-cols-1 sm:grid-cols-2 items-center gap-10 overflow-hidden">
              <Card
                img="https://img.cdn4dd.com/cdn-cgi/image/fit=cover,format=auto,quality=60/https://cdn.doordash.com/managed/consumer/seo/home/landing_cta/beauty_desktop.png"
                header="Beauty essentials from top brands"
                content="Get all your beauty and self-care needs delivered at home or on-the-go"
                cta="Shop beauty"
                link="https://www.doordash.com/p/beauty-supply"
              ></Card>

              <Card
                img="https://img.cdn4dd.com/cdn-cgi/image/fit=cover,format=auto,quality=60/https://cdn.doordash.com/managed/consumer/seo/home/landing_cta/flowers_desktop.png"
                header="Flowers for any occasion"
                content="Shop hand-picked and thoughtfully-arranged blooms from florists near you."
                cta="Send Flowers"
                link="https://www.doordash.com/p/flower-delivery"
              ></Card>

              <Card
                img="https://img.cdn4dd.com/cdn-cgi/image/fit=cover,format=auto,quality=60/https://cdn.doordash.com/managed/consumer/seo/home/landing_cta/alcohol_desktop.png"
                header="Restock the minibar"
                content="Hosting a get-together or need or need a special cocktail ingredient? Get liquor, beer, mixers, champagne and wine delivered fast.*"
                cta="Shop Alcohol"
                link="https://www.doordash.com/p/alcohol-delivery"
                warning="*Must be 21+. Enjoy responsibly."
              ></Card>

              <Card
                img="https://img.cdn4dd.com/cdn-cgi/image/fit=cover,format=auto,quality=60/https://cdn.doordash.com/managed/consumer/seo/home/landing_cta/pet_supplies_desktop.png"
                header="What your pets need, and want"
                content="Finally, something cat people and dog people agree on — pet supplies delivery. Shop pet food, chew toys, and even costumes."
                cta="Get Pet Supplies"
                link="https://www.doordash.com/p/pet-store-near-me"
              ></Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
