import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const Home = () => {
  return (
    <div className="max-w-4xl mx-auto text-center">
      <h1 className="text-4xl font-bold text-gray-900 mb-6">
        Find and Book the Best Doctors
      </h1>
      <p className="text-xl text-gray-600 mb-8">
        Schedule appointments with top healthcare professionals in your area.
      </p>
      <Link
        to="/doctors"
        className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
      >
        Browse Doctors
        <ArrowRight className="ml-2" size={20} />
      </Link>
    </div>
  );
};

export default Home;