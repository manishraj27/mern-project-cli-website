import { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Twitter, Mail, ArrowUp, X, User } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import AnimatedShinyText from "@/components/ui/animated-shiny-text";
import { LinkedInLogoIcon, TwitterLogoIcon } from '@radix-ui/react-icons';
import Installation from './Installation';

const Footer = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      const footer = document.getElementById('footer');
      if (footer) {
        const footerTop = footer.getBoundingClientRect().top;
        setIsVisible(footerTop <= window.innerHeight);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer id="footer" className="bg-gradient-to-b from-background to-neutral-100 dark:to-neutral-900 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-lg font-semibold mb-4 text-neutral-800 dark:text-neutral-200">About MERN CLI</h3>
            <p className="text-sm text-neutral-600 dark:text-neutral-400">
              Simplify your MERN stack development with our powerful CLI tool. 
              Designed to streamline your workflow and boost productivity.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4 text-neutral-800 dark:text-neutral-200">Quick Links</h3>
            <ul className="space-y-2 text-sm text-neutral-600 dark:text-neutral-400">
              <li><a href="/" className="hover:text-neutral-800 dark:hover:text-neutral-200 transition-colors">Features</a></li>
              <li><a href="/" className="hover:text-neutral-800 dark:hover:text-neutral-200 transition-colors">Installation</a></li>
              <li><a href="command-showcase" className="hover:text-neutral-800 dark:hover:text-neutral-200 transition-colors">Commands</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4 text-neutral-800 dark:text-neutral-200">Stay Connected</h3>
            <div className="flex space-x-4">
                <Button variant="outline" size="icon" onClick={() => window.open("https://manishraj.me", "_blank")}>
                    <User className="h-5 w-5" />
                </Button>
              <Button variant="outline" size="icon" onClick={() => window.open("https://github.com/manishraj27", "_blank")}>
                <Github className="h-5 w-5" />
              </Button>
              <Button variant="outline" size="icon" onClick={() => window.open("https://www.linkedin.com/in/manishraj27", "_blank")}>
                <LinkedInLogoIcon className="h-5 w-5" />
              </Button>
              <Button variant="outline" size="icon" onClick={() => window.open("https://x.com/manish_rraaj", "_blank")}>
                <TwitterLogoIcon className="h-5 w-5" />
              </Button>
              <Button variant="outline" size="icon" onClick={() => window.open("mailto:manish012raj@gmail.com", "_blank")}>
                <Mail className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
        
        <Separator className="my-8" />
        
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <AnimatedShinyText className="text-sm text-neutral-600 dark:text-neutral-400">
              © 2024 MERN Project Generator. All rights reserved.
            </AnimatedShinyText>
            <p className="text-sm text-neutral-600 dark:text-neutral-400 mt-1">
              Developed with ❤️ by Manish Raj
            </p>
          </div>
          <div className="flex items-center">
            {isVisible && (
              <Button
                variant="ghost"
                size="sm"
                className="mr-2 text-neutral-600 dark:text-neutral-400 hover:text-neutral-800 dark:hover:text-neutral-200 transition-colors"
                onClick={scrollToTop}
              >
                Back to Top
                <ArrowUp className="ml-2 h-4 w-4 animate-bounce" />
              </Button>
            )}
            <p className="text-sm text-neutral-600 dark:text-neutral-400">
              v2.0.2
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;