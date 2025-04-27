import { Link } from "react-router-dom";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
        
        {/* About Project */}
        <div>
          <h2 className="text-xl font-semibold mb-4">About TaskTrack</h2>
          <p className="text-gray-400 text-sm">
            TaskTrack is a simple task management tool to organize your work efficiently across To Do, In Progress, and Done stages.
          </p>
        </div>

        {/* Quick Navigation */}
        <div>
          <h2 className="text-xl font-semibold mb-4">Navigate</h2>
          <ul className="space-y-2">
            <li><Link to="/board" className="text-gray-400 hover:text-white">Task Board</Link></li>
            <li><Link to="/profile" className="text-gray-400 hover:text-white">My Profile</Link></li>
            <li><Link to="/login" className="text-gray-400 hover:text-white">Login</Link></li>
            <li><Link to="/register" className="text-gray-400 hover:text-white">Register</Link></li>
          </ul>
        </div>

        {/* Connect with Us */}
        <div>
          <h2 className="text-xl font-semibold mb-4">Connect</h2>
          <div className="flex space-x-4">
            <a href="https://github.com/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white text-2xl">
              <FaGithub />
            </a>
            <a href="https://linkedin.com/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white text-2xl">
              <FaLinkedin />
            </a>
            <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white text-2xl">
              <FaTwitter />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="text-center text-gray-500 text-sm mt-8 border-t border-gray-700 pt-4">
        © 2025 TaskTrack. All Rights Reserved.
      </div>
    </footer>
  );
}
