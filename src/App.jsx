import Header from './components/Card/Header.jsx';
import React, { useEffect, useState } from 'react';
import Card from './components/Card/Card';

function App() {
  const [cards, setCards] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [activeCard, setActiveCard] = useState(2); // default active is the middle card

  // Fetch card data (simulate API call)
  useEffect(() => {
    setLoading(true);
    setError(null);

    setTimeout(() => {
      try {
        const fetchedCards = [
          {
            id: 1,
            title: "Heading 1",
            text: [
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. "
          
            ],
            image: "https://res.cloudinary.com/total-dealer/image/upload/v1687754017/test/brisbane_vgpzva.jpg",
            button: "Button 1"
          },
          {
            id: 2,
            title: "Heading 2",
            text: [
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            ],
            image: "https://res.cloudinary.com/total-dealer/image/upload/v1687754017/test/brisbane_vgpzva.jpg",
            button: "Button 2"
          },
          {
            id: 3,
            title: "Heading 3",
            text: [
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna",
              " Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
            ],
            image: "https://res.cloudinary.com/total-dealer/image/upload/v1687754017/test/brisbane_vgpzva.jpg",
            button: "Button 3"
          }
        ];
        setCards(fetchedCards);
        setLoading(false);
      } catch (err) {
        setError("Failed to load data.");
        setLoading(false);
      }
    }, 1000);
  }, []);

  return (
    <div className="min-h-screen bg-white text-black">
      <Header />
      {/* Hero Section with overlay and CTA */}
      <section
        className="relative h-[500px] bg-cover bg-center"
        style={{
          backgroundImage: "url('https://res.cloudinary.com/total-dealer/image/upload/v1687754017/test/ford-ranger_rd5m4t.jpg')"
        }}
      >
        <div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center text-white text-center px-4">
          <h1 className="text-3xl md:text-5xl font-bold mb-4">Welcome to G Automotive</h1>
          <p className="max-w-xl mb-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>
          <button className="bg-blue-600 hover:bg-blue-700 px-6 py-2 rounded-full text-white font-semibold">
            Contact Us
          </button>
        </div>
      </section>

      {/* Cards Section */}
      <section className="py-12 bg-white dark:bg-gray-900 text-black dark:text-white">
        <div className="max-w-6xl mx-auto px-4">
          {loading ? (
            <p className="text-center">Loading...</p>
          ) : error ? (
            <p className="text-center text-red-500">{error}</p>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
              {cards.map((card) => (
                <Card
                  key={card.id}
                  image={card.image}
                  title={card.title}
                  text={card.text}
                  button={card.button}
                  isActive={activeCard === card.id}
                  onClick={() => setActiveCard(card.id)}
                />
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
}

export default App;
