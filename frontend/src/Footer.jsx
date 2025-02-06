// Footer.jsx
import { IconBrandGithub, IconBrandLinkedin, IconBrandX } from '@tabler/icons-react';
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-6">
      <div className="container mx-auto text-center">
        <div className="mb-4">
          <h3 className="text-lg font-semibold">Stay Connected!</h3>
          <div className="flex justify-center space-x-4 mt-2">
            <a href="https://www.linkedin.com/in/surya-raghava-saketh/" target="_blank" rel="noopener noreferrer">
              <IconBrandLinkedin/>
            </a>
            <a href="https://github.com/Saketh1K" target="_blank" rel="noopener noreferrer">
            <IconBrandGithub/>
            </a>
            
          </div>
        </div>
        
        
      </div>
    </footer>
  );
};

export default Footer;
