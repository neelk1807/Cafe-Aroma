export default function menu() {
  return (
    <main className="bg-[#fffaf3] text-[#4b2e1e]">
      {/* Coffee & Espresso */}

      <div className="firstmenu p-3">
        <h2 className="menu-heading text-[#8b4513] font-semibold text-3xl text-center mt-5">
          Coffee & Espresso
        </h2>
        <div className="menulist-1 bg-[#fffaf3]">
          {[
            {
              title: "Morning Sunrise",
              description: "Medium roast with caramel and vanilla notes",
              price: "$4.50",
            },
            {
              title: "Midnight Roast",
              description: "Dark, bold espresso blend",
              price: "$4.75",
            },
            {
              title: "Hazelnut Dream",
              description: "Smooth coffee with hazelnut flavor",
              price: "$5.00",
            },
            {
              title: "Classic Americano",
              description: "Rich espresso with hot water",
              price: "$3.75",
            },
            {
              title: "Cappuccino",
              description: "Espresso with steamed milk foam",
              price: "$4.25",
            },
            {
              title: "Vanilla Latte",
              description: "Espresso with vanilla and steamed milk",
              price: "$5.25",
            },
          ].map((menu, menulist1) => (
            <div key={menulist1} className="menulist-1 bg-[#fffaf3] mb-5 mt-5">
              <div className="menu-list-container bg-white max-w-4xl mx-auto rounded-xl shadow-md p-6 flex justify-between items-start">
                <div>
                  <h3 className="menu-list-iteamheading text-xl font-semibold text-[#8b4513]">
                    {menu.title}
                  </h3>
                  <p className="menu-list-itemtext text-lg text-black mt-1 font-normal">
                    {menu.description}
                  </p>
                </div>
                <span className="menu-list-price text-[#8b4513] font-bold text-2xl">
                  {menu.price}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Fresh Pastries */}

      <div className="second-menu p-3">
        <h2 className="menu-heading text-[#8b4513] font-semibold text-3xl text-center pt-5 pb-5">
          Fresh Pastries
        </h2>
        <div className="menulist-2 bg-[#fffaf3] ">
          {[
            {
              title: "Blueberry Muffin",
              description: "Fresh baked with wild blueberries",
              price: "$3.50",
            },
            {
              title: "Chocolate Croissant",
              description: "Buttery pastry with dark chocolate",
              price: "$4.00",
            },
            {
              title: "Cinnamon Roll",
              description: "Warm, gooey, and glazed",
              price: "$3.75",
            },
            {
              title: "Banana Bread",
              description: "Homemade with walnuts",
              price: "$3.25",
            },
          ].map((menu, menulist2) => (
            <div key={menulist2} className="menulist-2 bg-[#fffaf3] mb-5 mt-5">
              <div className="menu-list-container bg-white max-w-4xl mx-auto rounded-xl shadow-md p-6 flex justify-between items-start">
                <div>
                  <h3 className="menu-list-itemheading text-xl font-semibold text-[#8b4513]">
                    {menu.title}
                  </h3>
                  <p className="menu-list-itemtext text-lg text-black font-normal mt-1">
                    {menu.description}
                  </p>
                </div>
                <span className="menu-list-price text-[#8b4513] font-bold text-2xl">
                  {menu.price}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Today's Specials */}

      <div className="third-menu p-3">
        <h2 className="menu-heading text-[#8b4513] font-semibold text-3xl text-center pt-5 pb-5">
          Today Specials
        </h2>
        <div className="menulist-3 bg-[#fffaf3]">
          {[
            {
              title: "Iced Caramel Macchiato",
              description: "Cold brew with caramel drizzle",
              price: "$5.50",
            },
            {
              title: "Pumpkin Spice Latte",
              description: "Seasonal favorite with real pumpkin",
              price: "$5.75",
            },
            {
              title: "Cold Brew Float",
              description: "Cold brew with vanilla ice cream",
              price: "$6.00",
            },
          ].map((menu, menulist3) => (
            <div key={menulist3} className="menulist-3 bg-[#fffaf3] mb-5 mt-5">
              <div className="menu-list-container bg-white max-w-4xl mx-auto rounded-xl shadow-md p-6 flex justify-between items-start">
                <div>
                  <h3 className="menu-list-itemheading text-xl font-semibold text-[#8b4513]">
                    {menu.title}
                  </h3>
                  <p className="menu-list-itemtext text-lg text-black font-normal mt-1">
                    {menu.description}
                  </p>
                </div>
                <span className="menu-list-price text-[#8b4513] font-bold text-2xl">
                  {menu.price}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
