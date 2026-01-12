import { ChevronDownIcon } from "lucide-react";
import { SelectionCard } from "@/components/SelectionCard";
import { useState } from "react";

const getItemsbyCategory = (category) => {
  switch (category) {
    case "cities":
      return neighborhood.topCities;
    case "cuisines":
      return neighborhood.topCuisines;
    case "chains":
      return neighborhood.topChains;
    default:
      return [];
  }
};

const ITEMS_PER_VIEW = 15;

const neighborhood = {
  topCities: [
    {
      label: "New York",
      link: "https://www.doordash.com/food-delivery/new-york-city-ny-restaurants/",
    },
    {
      label: "Los Angeles",
      link: "https://www.doordash.com/food-delivery/los-angeles-ca-restaurants/",
    },
    {
      label: "Toronto",
      link: "https://www.doordash.com/food-delivery/toronto-on-restaurants/",
    },
    {
      label: "Chicago",
      link: "https://www.doordash.com/food-delivery/chicago-il-restaurants/",
    },
    {
      label: "Houston",
      link: "https://www.doordash.com/food-delivery/houston-tx-restaurants/",
    },
    {
      label: "Brooklyn",
      link: "https://www.doordash.com/food-delivery/brooklyn-ny-restaurants/",
    },
    {
      label: "San Diego",
      link: "https://www.doordash.com/food-delivery/san-diego-ca-restaurants/",
    },
    {
      label: "Las Vegas",
      link: "https://www.doordash.com/food-delivery/las-vegas-nv-restaurants/",
    },
    {
      label: "San Francisco",
      link: "https://www.doordash.com/food-delivery/san-francisco-ca-restaurants/",
    },
    {
      label: "Seattle",
      link: "https://www.doordash.com/food-delivery/seattle-wa-restaurants/",
    },
    {
      label: "Atlanta",
      link: "https://www.doordash.com/food-delivery/atlanta-ga-restaurants/",
    },
    {
      label: "Queens",
      link: "https://www.doordash.com/food-delivery/queens-ny-restaurants/",
    },
    {
      label: "Vancouver, BC",
      link: "https://www.doordash.com/food-delivery/vancouver-bc-restaurants/",
    },
    {
      label: "Miami",
      link: "https://www.doordash.com/food-delivery/miami-fl-restaurants/",
    },
    {
      label: "San Antonio",
      link: "https://www.doordash.com/food-delivery/san-antonio-tx-restaurants/",
    },
    {
      label: "Tallahassee",
      link: "https://www.doordash.com/food-delivery/tallahassee-fl-restaurants/",
    },
    {
      label: "Bend",
      link: "https://www.doordash.com/food-delivery/bend-or-restaurants/",
    },
    {
      label: "Kamloops",
      link: "https://www.doordash.com/food-delivery/kamloops-bc-restaurants/",
    },
    {
      label: "Tulsa",
      link: "https://www.doordash.com/food-delivery/tulsa-ok-restaurants/",
    },
    {
      label: "Austin",
      link: "https://www.doordash.com/food-delivery/austin-tx-restaurants/",
    },
    {
      label: "Salt Lake City",
      link: "https://www.doordash.com/food-delivery/salt-lake-city-ut-restaurants/",
    },
    {
      label: "Jacksonville",
      link: "https://www.doordash.com/food-delivery/jacksonville-fl-restaurants/",
    },
    {
      label: "Colorado Springs",
      link: "https://www.doordash.com/food-delivery/colorado-springs-co-restaurants/",
    },
    {
      label: "Wilmington",
      link: "https://www.doordash.com/food-delivery/wilmington-nc-restaurants/",
    },
    {
      label: "Birmingham",
      link: "https://www.doordash.com/food-delivery/birmingham-al-restaurants/",
    },
    {
      label: "New Orleans",
      link: "https://www.doordash.com/food-delivery/new-orleans-la-restaurants/",
    },
    {
      label: "Lexington",
      link: "https://www.doordash.com/food-delivery/lexington-ky-restaurants/",
    },
    {
      label: "Orlando",
      link: "https://www.doordash.com/food-delivery/orlando-fl-restaurants/",
    },
    {
      label: "Victoria",
      link: "https://www.doordash.com/food-delivery/victoria-bc-restaurants/",
    },
    {
      label: "Columbia",
      link: "https://www.doordash.com/food-delivery/columbia-sc-restaurants/",
    },
    {
      label: "Scottsdale",
      link: "https://www.doordash.com/food-delivery/scottsdale-az-restaurants/",
    },
    {
      label: "Augusta",
      link: "https://www.doordash.com/food-delivery/augusta-ga-restaurants/",
    },
    {
      label: "Christchurch",
      link: "https://www.doordash.com/food-delivery/christchurch-canterbury-restaurants/",
    },
    {
      label: "Milwaukee",
      link: "https://www.doordash.com/food-delivery/milwaukee-wi-restaurants/",
    },
    {
      label: "Pittsburgh",
      link: "https://www.doordash.com/food-delivery/pittsburgh-pa-restaurants/",
    },
    {
      label: "Ft. Worth",
      link: "https://www.doordash.com/food-delivery/fort-worth-tx-restaurants/",
    },
    {
      label: "Huntsville",
      link: "https://www.doordash.com/food-delivery/huntsville-al-restaurants/",
    },
    {
      label: "Des Moines",
      link: "https://www.doordash.com/food-delivery/des-moines-ia-restaurants/",
    },
    {
      label: "Quebec City",
      link: "https://www.doordash.com/food-delivery/quebec-qc-restaurants/",
    },
    {
      label: "All Cities",
      link: "https://www.doordash.com/food-delivery/restaurants-near-me/",
    },
  ],
  topCuisines: [
    { label: "Pizza", link: "https://www.doordash.com/cuisine/pizza-near-me/" },
    {
      label: "Chinese Food",
      link: "https://www.doordash.com/cuisine/chinese-near-me/",
    },
    { label: "Sushi", link: "https://www.doordash.com/cuisine/sushi-near-me/" },
    { label: "Cafe", link: "https://www.doordash.com/cuisine/cafe-near-me/" },
    {
      label: "Thai Food",
      link: "https://www.doordash.com/cuisine/thai-near-me/",
    },
    { label: "Lunch", link: "https://www.doordash.com/cuisine/lunch-near-me/" },
    {
      label: "Seafood",
      link: "https://www.doordash.com/cuisine/seafood-near-me/",
    },
    {
      label: "Indian Food",
      link: "https://www.doordash.com/cuisine/indian-near-me/",
    },
    {
      label: "Dessert",
      link: "https://www.doordash.com/cuisine/dessert-near-me/",
    },
    {
      label: "Burgers",
      link: "https://www.doordash.com/cuisine/burgers-near-me/",
    },
    {
      label: "Asian Food",
      link: "https://www.doordash.com/cuisine/asian-near-me/",
    },
    {
      label: "Italian Food",
      link: "https://www.doordash.com/cuisine/italian-near-me/",
    },
    {
      label: "Vegan Food",
      link: "https://www.doordash.com/cuisine/vegan-near-me/",
    },
    {
      label: "Sandwiches",
      link: "https://www.doordash.com/cuisine/sandwiches-near-me/",
    },
    {
      label: "Restaurants",
      link: "https://www.doordash.com/cuisine/restaurant-near-me/",
    },
  ],
  topChains: [
    {
      label: "Dunkin'",
      link: "https://www.doordash.com/business/dunkin-436529/",
    },
    {
      label: "Wingstop",
      link: "https://www.doordash.com/business/wingstop-48856/",
    },
    {
      label: "Wendy's",
      link: "https://www.doordash.com/business/wendys-7376/",
    },
    {
      label: "Popeyes Louisiana Kitchen",
      link: "https://www.doordash.com/business/popeyes-louisiana-kitchen-5235/",
    },
    {
      label: "Burger King",
      link: "https://www.doordash.com/business/burger-king-10171/",
    },
    {
      label: "Walgreens",
      link: "https://www.doordash.com/business/chick-fil-a-1855/",
    },
    {
      label: "Chick-fil-A",
      link: "https://www.doordash.com/business/chick-fil-a-1855/",
    },
    { label: "Subway", link: "https://www.doordash.com/business/subway-3720/" },
    {
      label: "Taco Bell",
      link: "https://www.doordash.com/business/taco-bell-4815/",
    },
    {
      label: "McDonald's",
      link: "https://www.doordash.com/business/mcdonalds-5579/",
    },
    {
      label: "Dollar General",
      link: "https://www.doordash.com/business/dollar-general-799015/",
    },
    {
      label: "Chipotle Mexican Grill",
      link: "https://www.doordash.com/business/chipotle-mexican-grill-115/",
    },
    {
      label: "Starbucks",
      link: "https://www.doordash.com/business/starbucks-1133/",
    },
    {
      label: "7-Eleven",
      link: "https://www.doordash.com/business/7-eleven-335808/",
    },
    {
      label: "Panda Express",
      link: "https://www.doordash.com/business/panda-express-42492/",
    },
  ],
};

export const Selection = () => {
  // Controls which list is shown: "cities", "cuisines", or "chains"
  const [activeCategory, setActiveCategory] = useState("cities");

  // Controls whether we show all items or only a limited subset.
  const [showAll, setShowAll] = useState(false);

  const allItems = getItemsbyCategory(activeCategory);
  const itemsToDisplay = showAll ? allItems : allItems.slice(0, ITEMS_PER_VIEW);

  return (
    <div className="container mx-auto py-12 px-20">
      <h1 className="font-bold text-3xl text-center">
        Get more from your neighborhood
      </h1>

      {/* Selection Tabs */}
      <div className="grid lg:grid-cols-3 py-8 font-semibold">
        <SelectionCard
          label="Top Cities"
          isActive={activeCategory === "cities"}
          onClick={() => {
            setActiveCategory("cities");
            setShowAll(false);
          }}
        />

        <SelectionCard
          label="Top Cuisines"
          isActive={activeCategory === "cuisines"}
          onClick={() => {
            setActiveCategory("cuisines");
            setShowAll(false);
          }}
        />

        <SelectionCard
          label="Top Chains"
          isActive={activeCategory === "chains"}
          onClick={() => {
            setActiveCategory("chains");
            setShowAll(false);
          }}
        />
      </div>

      {/* List */}

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 py-2 font-semibold text-headline text-sm sm:text-base hover:underline text-left gap-2">
            {itemsToDisplay.map((item, index) => (
            <a
                key={index}
                href={item.link}
            >
                {item.label}
            </a>
            ))}
        </div>

    {/* See more / See less */}
      <div className="max-w-content flex flex-col items-center mt-4">
        {allItems.length > ITEMS_PER_VIEW && (
          <button onClick={() => setShowAll((prev) => !prev)}
            className="text-headline font-bold text-base sm:text-2xl flex items-center gap-2 hover:cursor-pointer"
          >
            <span>{showAll ? "See less" : "See more"}</span>
            <span className="bg-secondary-muted rounded-full p-3 hover:brightness-90 transition">
              <ChevronDownIcon className={`transform transition-transform duration-200 ${ showAll ? "rotate-180" : "rotate-0" }`} />
            </span>
          </button>
        )}
      </div>

    </div>

  );
};
