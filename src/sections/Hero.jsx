import { HeroCard } from "@/components/HeroCard";
import { ArrowRight, MapPin, User } from "lucide-react";
import { Button } from "@/components/Button";

export const Hero = () => {
  return (
    <main>
      {/* Background */}
      <div
        className="h-[650px] bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/DoorDash-hero-bg.png')" }}
      >
        {/* Headline */}
        <div className="relative flex flex-col items-center mx-auto py-50 ">
          <img
            className="object-contain w-auto h-9 mb-6"
            src="DoorDash-Logo-White.png"
          />
          <h1 className="text-center text-white font-black uppercase text-[2.3rem] md:text-4xl leading-none">
            $0 Delivery Fee on first order
          </h1>
          <p className="text-white text-[11px] font-bold">Other fees apply</p>

          {/* Address */}
          <div className="w-80 sm:w-100 flex items-center gap-2 bg-white border border-black/30 rounded-full mt-4 px-5 py-1.5 focus-within:border-black focus-within:ring-1 focus-within:ring-black transition-all">
            <MapPin className="text-muted w-7 h-7" />

            <input
              type="text"
              placeholder="Enter delivery address"
              className="flex-grow bg-transparent outline-none text-sm font-semibold"
            />

            <button className="bg-primary rounded-full p-2">
              <ArrowRight className="text-white w-6 h-6" />
            </button>
          </div>

          {/* Sign in */}
          <div className="mt-4">
            <Button variant="secondary">
              <a
                className="sm:text-sm md:text-[17px] lg:text-l relative flex items-center justify-center gap-1"
                href={
                  "https://www.doordash.com/?srsltid=AfmBOoo76qye0Ayh80j2zEHVD3PnxB3kI_nWE2lh3eYGRCXdO5WD2P1A"
                }
              >
                <User className="w-4 h-4 text-gray-700" />
                <span className="text-[14px] text-[#10181e]">
                  Sign in for saved address
                </span>
              </a>
            </Button>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-6 pt-15 pb-30 relative z-10">
        <div className="grid sm:grid-cols-1 lg:grid-cols-3 place-items-center gap-8 px-4 py-10">
          <HeroCard
            img="https://cdn.doordash.com/media/consumer/home/landing/new/ScootScoot.svg"
            header="Become a Dasher"
            content="As a delivery driver, make money and work on your schedule. Sign up in minutes."
            cta="Start earning"
            link="http://dasher.doordash.com/en-us?utm_source=cx_home"
            variant="hero"
          >
            <ArrowRight className="w-5 h-5" />
          </HeroCard>

          <HeroCard
            img="https://cdn.doordash.com/media/consumer/home/landing/new/Storefront.svg"
            header="Become a Merchant"
            content="Attract new customers and grow sales, starting with 0% commissions for up to 30 days."
            cta="Sign up for DoorDash"
            link="https://merchants.doordash.com/en-us?utm_source=cx_home"
            variant="hero"
          >
            <ArrowRight className="w-5 h-5" />
          </HeroCard>

          <HeroCard
            img="https://cdn.doordash.com/media/consumer/home/landing/new/iphone.svg"
            header="Get the best DoorDash experience"
            content="Experience the best your neighborhood has to offer, all in one app."
            cta="Get the app"
            link="https://apps.apple.com/us/app/doordash-food-grocery-more/id719972451"
            variant="hero"
          >
            <ArrowRight className="w-5 h-5" />
          </HeroCard>
        </div>
      </div>
    </main>
  );
};
