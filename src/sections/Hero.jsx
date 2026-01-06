import { Card } from "@/components/Card";
import { ArrowRight } from "lucide-react";
import { HeroBg } from "@/layout/Hero-background";

export const Hero = () => {
    return (
        <main>

            <HeroBg />
            <div className="container mx-auto px-6 pt-32 pb-30 relative z-10">
        
                <div className="flex flex-wrap justify-center gap-30">
                    <Card 
                        img="https://cdn.doordash.com/media/consumer/home/landing/new/ScootScoot.svg" 
                        header="Become a Dasher" 
                        content="As a delivery driver, make money and work on your schedule. Sign up in minutes."
                        cta="Start earning" 
                        link="http://dasher.doordash.com/en-us?utm_source=cx_home">
                        <ArrowRight className="w-5 h-5"/>
                    </Card> 

                    <Card
                        img="https://cdn.doordash.com/media/consumer/home/landing/new/Storefront.svg" 
                        header="Become a Merchant" 
                        content="Attract new customers and grow sales, starting with 0% commissions for up to 30 days."
                        cta="Sign up for DoorDash" 
                        link="https://merchants.doordash.com/en-us?utm_source=cx_home">
                        <ArrowRight className="w-5 h-5"/>
                    </Card> 

                    <Card
                        img="https://cdn.doordash.com/media/consumer/home/landing/new/iphone.svg" 
                        header="Get the best DoorDash experience" 
                        content="Experience the best your neighborhood has to offer, all in one app."
                        cta="Get the app" 
                        link="https://apps.apple.com/us/app/doordash-food-grocery-more/id719972451">
                        <ArrowRight className="w-5 h-5"/>
                    </Card> 
                </div>
            </div>
        </main>
    );
}

