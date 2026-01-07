import { Card } from "@/components/Card";


export const Body = () => {

    return (
        <section id="body" className="container mx-auto relative overflow-hidden">
            <div className="grid grid-cols-2 items-center ">
                <Card 
                    header="Beauty essentials from top brands" 
                    content="Get all your beauty and self-care needs delivered at home or on-the-go"
                    cta="Shop beauty" 
                    fontSize="lg"
                    link="https://www.doordash.com/p/beauty-supply"
                    >
                </Card> 
                <div>
                    <img src="https://img.cdn4dd.com/cdn-cgi/image/fit=cover,format=auto,quality=60/https://cdn.doordash.com/managed/consumer/seo/home/landing_cta/download_the_app_desktop.png" atl="#" />
                </div>

            </div>
        </section>
    );
}