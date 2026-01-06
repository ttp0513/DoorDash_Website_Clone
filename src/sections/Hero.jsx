import { Card } from "@/components/Card";
import { ArrowRight } from "lucide-react";

export const Hero = () => {
    return (
        <main>
            {/* Background */ }
            <div
                className="h-[650px] bg-cover bg-center bg-no-repeat"
                style={{ backgroundImage: "url('/DoorDash-hero-bg.png')" }}
            >
                <div className="relative flex flex-col items-center mx-auto py-50 ">
                    <img className="object-contain w-auto h-9 mb-6" src="DoorDash-Logo-White.png"></img>
                    <h1 className="text-white font-black uppercase text-4xl">$0 Delivery Fee on first order</h1>
                </div>
            </div>

            {/* Content */ }
            <div className="container mx-auto px-6 pt-15 pb-30 relative z-10">
                <div className="grid sm:grid-cols-1 lg:grid-cols-3 place-items-center gap-8 px-4 py-10">
                    <Card 
                        img="https://cdn.doordash.com/media/consumer/home/landing/new/ScootScoot.svg" 
                        header="Become a Dasher" 
                        content="As a delivery driver, make money and work on your schedule. Sign up in minutes."
                        cta="Start earning" 
                        link="http://dasher.doordash.com/en-us?utm_source=cx_home"
                        variant="hero">
                        <ArrowRight className="w-5 h-5"/>
                    </Card> 

                    <Card
                        img="https://cdn.doordash.com/media/consumer/home/landing/new/Storefront.svg" 
                        header="Become a Merchant" 
                        content="Attract new customers and grow sales, starting with 0% commissions for up to 30 days."
                        cta="Sign up for DoorDash" 
                        link="https://merchants.doordash.com/en-us?utm_source=cx_home"
                        variant="hero">
                        <ArrowRight className="w-5 h-5"/>
                    </Card> 

                    <Card
                        img="https://cdn.doordash.com/media/consumer/home/landing/new/iphone.svg" 
                        header="Get the best DoorDash experience" 
                        content="Experience the best your neighborhood has to offer, all in one app."
                        cta="Get the app" 
                        link="https://apps.apple.com/us/app/doordash-food-grocery-more/id719972451"
                        variant="hero">
                        <ArrowRight className="w-5 h-5"/>
                    </Card> 
                </div>
            </div>
        </main>
    );
}

