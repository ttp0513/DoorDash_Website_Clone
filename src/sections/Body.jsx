import { BodyCard } from "@/components/BodyCard";


export const Body = () => {

    return (
        <section id="body" className="bg-body-background ">
            <div className="container mx-auto relative overflow-hidden">
                <div className="container mx-auto w-90">
                <h1 className="py-16 text-2xl md:text-3xl font-bold text-headline text-center">Helping you with to-dos and gifting</h1>
                </div>

            {/* Helping Section */ }
            <div className="relative container px-0 mx-0 lg:px-50 ">
                <div className="grid grid-cols-1 sm:grid-cols-2 items-center gap-10 overflow-hidden">
                    
                    <BodyCard 
                        img= "https://img.cdn4dd.com/cdn-cgi/image/fit=cover,format=auto,quality=60/https://cdn.doordash.com/managed/consumer/seo/home/landing_cta/beauty_desktop.png"
                        header="Beauty essentials from top brands" 
                        content="Get all your beauty and self-care needs delivered at home or on-the-go"
                        cta="Shop beauty" 
                        link="https://www.doordash.com/p/beauty-supply"
                        >
                    </BodyCard> 


                    <BodyCard 
                        img= "https://img.cdn4dd.com/cdn-cgi/image/fit=cover,format=auto,quality=60/https://cdn.doordash.com/managed/consumer/seo/home/landing_cta/flowers_desktop.png"
                        header="Flowers for any occasion" 
                        content="Shop hand-picked and thoughtfully-arranged blooms from florists near you."
                        cta="Send Flowers" 
                        link="https://www.doordash.com/p/flower-delivery"
                        >
                    </BodyCard> 


                    <BodyCard 
                        img= "https://img.cdn4dd.com/cdn-cgi/image/fit=cover,format=auto,quality=60/https://cdn.doordash.com/managed/consumer/seo/home/landing_cta/alcohol_desktop.png"
                        header="Restock the minibar" 
                        content="Hosting a get-together or need or need a special cocktail ingredient? Get liquor, beer, mixers, champagne and wine delivered fast.*"
                        cta="Shop Alcohol" 
                        link="https://www.doordash.com/p/alcohol-delivery"
                        warning="*Must be 21+. Enjoy responsibly."
                        >
                    </BodyCard>
                    
                    <BodyCard 
                        img= "https://img.cdn4dd.com/cdn-cgi/image/fit=cover,format=auto,quality=60/https://cdn.doordash.com/managed/consumer/seo/home/landing_cta/pet_supplies_desktop.png"
                        header="What your pets need, and want" 
                        content="Finally, something cat people and dog people agree on — pet supplies delivery. Shop pet food, chew toys, and even costumes."
                        cta="Get Pet Supplies" 
                        link="https://www.doordash.com/p/pet-store-near-me"
                        >
                    </BodyCard> 
                </div>

                {/* Unlock Section */ }
            </div>
            </div>
        </section>
    );
}