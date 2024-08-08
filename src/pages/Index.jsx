import { useState, useEffect } from 'react';
import { Leaf, Mail, Briefcase, User, ChevronDown } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const Index = () => {
  const [showEasterEgg, setShowEasterEgg] = useState(false);
  const [clickCount, setClickCount] = useState(0);

  useEffect(() => {
    if (clickCount === 5) {
      setShowEasterEgg(true);
    }
  }, [clickCount]);

  const handleLeafClick = () => {
    setClickCount(prevCount => prevCount + 1);
  };

  return (
    <div className="min-h-screen bg-[#F4A460] text-[#8B4513]">
      {/* Header */}
      <header className="bg-[#D2691E] py-4 px-6 sticky top-0 z-10">
        <nav className="flex justify-between items-center max-w-6xl mx-auto">
          <h1 className="text-2xl font-bold text-[#FFF8DC]">Anton Osika</h1>
          <div className="space-x-4">
            <a href="#about" className="text-[#FFF8DC] hover:text-[#FFE4B5]">About</a>
            <a href="#portfolio" className="text-[#FFF8DC] hover:text-[#FFE4B5]">Portfolio</a>
            <a href="#contact" className="text-[#FFF8DC] hover:text-[#FFE4B5]">Contact</a>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-6 bg-[#DEB887] text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-5xl font-bold mb-6">Founder & Philosopher</h2>
          <p className="text-xl mb-8">Exploring the intersection of technology, philosophy, and human potential</p>
          <Button className="bg-[#8B4513] hover:bg-[#A0522D] text-[#FFF8DC]">
            Learn More
          </Button>
          <Leaf
            className="mx-auto mt-8 text-[#8B4513] cursor-pointer animate-bounce"
            size={32}
            onClick={handleLeafClick}
          />
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-6 bg-[#F4A460]">
        <div className="max-w-4xl mx-auto">
          <h3 className="text-3xl font-bold mb-6">About Anton</h3>
          <div className="flex items-center space-x-8">
            <img
              src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80"
              alt="Anton Osika"
              className="w-64 h-64 rounded-full object-cover"
            />
            <div>
              <p className="text-lg mb-4">
                Anton Osika is a visionary founder and philosopher, dedicated to bridging the gap between technology and human understanding. With a background in both computer science and philosophy, Anton brings a unique perspective to the tech industry.
              </p>
              <p className="text-lg">
                His work focuses on leveraging cutting-edge technology to address fundamental questions about consciousness, ethics, and the future of humanity.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-20 px-6 bg-[#CD853F]">
        <div className="max-w-4xl mx-auto">
          <h3 className="text-3xl font-bold mb-6">Portfolio</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="bg-[#DEB887]">
              <CardContent className="p-6">
                <h4 className="text-xl font-semibold mb-2">AI Ethics Framework</h4>
                <p>Developed a comprehensive ethical framework for AI development and deployment.</p>
              </CardContent>
            </Card>
            <Card className="bg-[#DEB887]">
              <CardContent className="p-6">
                <h4 className="text-xl font-semibold mb-2">Consciousness Exploration App</h4>
                <p>Created an app that guides users through philosophical exercises to explore consciousness.</p>
              </CardContent>
            </Card>
            <Card className="bg-[#DEB887]">
              <CardContent className="p-6">
                <h4 className="text-xl font-semibold mb-2">Tech-Philosophy Podcast</h4>
                <p>Host of a popular podcast discussing the philosophical implications of emerging technologies.</p>
              </CardContent>
            </Card>
            <Card className="bg-[#DEB887]">
              <CardContent className="p-6">
                <h4 className="text-xl font-semibold mb-2">Ethical Tech Consultancy</h4>
                <p>Founded a consultancy helping tech companies navigate ethical challenges in product development.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6 bg-[#F4A460]">
        <div className="max-w-4xl mx-auto">
          <h3 className="text-3xl font-bold mb-6">Get in Touch</h3>
          <form className="space-y-4">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full p-2 rounded bg-[#FFF8DC] text-[#8B4513]"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full p-2 rounded bg-[#FFF8DC] text-[#8B4513]"
            />
            <textarea
              placeholder="Your Message"
              rows="4"
              className="w-full p-2 rounded bg-[#FFF8DC] text-[#8B4513]"
            ></textarea>
            <Button className="bg-[#8B4513] hover:bg-[#A0522D] text-[#FFF8DC]">
              Send Message
            </Button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#D2691E] py-6 px-6 text-[#FFF8DC]">
        <div className="max-w-4xl mx-auto flex justify-between items-center">
          <p>&copy; 2023 Anton Osika. All rights reserved.</p>
          <div className="flex space-x-4">
            <Mail size={24} />
            <Briefcase size={24} />
            <User size={24} />
          </div>
        </div>
      </footer>

      {/* Easter Egg */}
      {showEasterEgg && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-[#FFF8DC] p-8 rounded-lg text-center">
            <h4 className="text-2xl font-bold mb-4 text-[#8B4513]">You've discovered the Easter Egg!</h4>
            <p className="text-lg mb-4 text-[#8B4513]">
              "The unexamined life is not worth living." - Socrates
            </p>
            <Button
              onClick={() => setShowEasterEgg(false)}
              className="bg-[#8B4513] hover:bg-[#A0522D] text-[#FFF8DC]"
            >
              Close
            </Button>
          </div>
        </div>
      )}

      {/* Scroll to Top Button */}
      <Button
        className="fixed bottom-4 right-4 bg-[#8B4513] hover:bg-[#A0522D] text-[#FFF8DC] rounded-full p-2"
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      >
        <ChevronDown className="transform rotate-180" />
      </Button>
    </div>
  );
};

export default Index;
