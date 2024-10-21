import { Button } from "@/components/ui/button";
import { ModeToggle } from "@/components/ui/ModeToggle";
import { RainbowButton } from "@/components/ui/rainbow-button";
import { GitHubLogoIcon, LinkedInLogoIcon, TwitterLogoIcon } from "@radix-ui/react-icons";
import { Star, User, ArrowRight } from "lucide-react";
import { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import NumberTicker from "@/components/ui/number-ticker";
// import HyperText from "@/components/ui/hyper-text";
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);
  const hamburgerRef = useRef(null);
  const navigate = useNavigate();

  const menuItems = [
    { label: "Features", href: "features" },
    { label: "Installation", href: "installation" },
    { label: "Commands", href: "commands" },
    { label: "Usage Examples", href: "examples" },
  ];

  const socialLinks = [
    { 
      icon: <User className="h-5 w-5" />, 
      label: "Portfolio",
      href: "https://manishraj.me"
    },
    { 
      icon: <GitHubLogoIcon className="h-5 w-5" />, 
      label: "GitHub",
      href: "https://github.com/manishraj27"
    },
    {
      icon: <LinkedInLogoIcon className="h-5 w-5" />,
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/manishraj27"
    },
    { 
      icon: <TwitterLogoIcon className="h-5 w-5" />, 
      label: "X",
      href: "https://x.com/manish_rraaj"
    },
  ];

  useEffect(() => {
    if (isOpen) {
      gsap.to(menuRef.current, {
        x: 0,
        duration: 0.1,
        ease: "power3.out"
      });
      
      // Animate hamburger to X
      gsap.to(hamburgerRef.current.children[0], {
        rotate: 45,
        y: 10,
        duration: 0.1
      });
      gsap.to(hamburgerRef.current.children[1], {
        opacity: 0,
        duration: 0.1
      });
      gsap.to(hamburgerRef.current.children[2], {
        rotate: -45,
        y: -10,
        duration: 0.1
      });
    } else {
      gsap.to(menuRef.current, {
        x: "-100%",
        duration: 0.1,
        ease: "power3.out"
      });
      
      // Animate X back to hamburger
      gsap.to(hamburgerRef.current.children[0], {
        rotate: 0,
        y: 0,
        duration: 0.1
      });
      gsap.to(hamburgerRef.current.children[1], {
        opacity: 1,
        duration: 0.1
      });
      gsap.to(hamburgerRef.current.children[2], {
        rotate: 0,
        y: 0,
        duration: 0.1
      });
    }
  }, [isOpen]);

  const handleScroll = (sectionId) => {
    if (window.location.pathname !== "/") {
      // Navigate to the landing page first
      navigate(`/#${sectionId}`);
    } else {
      // Scroll to section on the landing page
      const section = document.getElementById(sectionId);
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      } else {
        console.error(`Section with id ${sectionId} not found`);
      }
    }
  };

  
  return (
    <div className="sticky top-0 z-50 bg-background/80 backdrop-blur-sm">
      <div className="border-b py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Mobile and Tablet Navigation */}
          <div className="flex lg:hidden items-center justify-between">
            {/* Left Section: Hamburger + Logo */}
            <div className="flex items-center gap-4">
              <button 
                ref={hamburgerRef}
                className="flex flex-col justify-center items-center w-8 h-8 space-y-2"
                onClick={() => setIsOpen(!isOpen)}
              >
                <span className="w-8 h-0.5 bg-foreground block transition-transform origin-center"></span>
                <span className="w-8 h-0.5 bg-foreground block transition-opacity left-0"></span>
                <span className="w-8 h-0.5 bg-foreground block transition-transform origin-center"></span>
              </button>
              
              <a href="/#hero" className="flex items-center">
                <p className="text-xl font-bold tracking-tight bg-gradient-to-r from-purple-600 to-blue-600 text-transparent bg-clip-text">
                devcli
                </p>  
              </a>
            </div>

            {/* Right Section: Social Icons + Toggle */}
            <div className="flex items-center gap-2">
              {socialLinks.map((link) => (
                <Button
                  key={link.label}
                  variant="ghost"
                  size="icon"
                  className="h-8 w-8 hover:bg-accent"
                  aria-label={link.label}
                  onClick={() => window.open(link.href, "_blank")}
                >
                  {link.icon}
                </Button>
              ))}
              <ModeToggle />
            </div>
          </div>

          {/* Mobile and Tablet Menu Overlay */}
          <div 
            ref={menuRef}
            className="fixed lg:hidden top-[73px] left-0 w-full h-[calc(100vh-73px)] bg-background transform -translate-x-full"
          >
            <div className="p-6 space-y-6">
              <nav className="flex flex-col space-y-4">
                {menuItems.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    className="text-lg font-medium hover:text-primary transition-colors"
                    onClick={() => {
                      setIsOpen(false);
                      (item.href).scrollIntoView({ behavior: 'smooth' });
                    }}
                  >
                    {item.label}
                  </a>
                ))}
              </nav>

              <div className="pt-6 border-t">
                <div className="flex flex-col space-y-4">
                  <RainbowButton className="w-full justify-center"
                  onClick={() => window.open("https://github.com/manishraj27/mern-project-cli", "_blank")}
                  >
                    <GitHubLogoIcon className="w-5 h-5" />
                    <span className="mx-2">Star on GitHub</span>
                    <Star className="w-4 h-4" />
                    <NumberTicker className="text-color-2 ml-1" value={24} />
                  </RainbowButton>
                  
                  <Button 
                  onClick={() => window.open("https://www.npmjs.com/package/mern-project-cli", "_blank")}
                  className="w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white hover:opacity-90">
                    Get Started <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </div>
              </div>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center justify-between">
            <div className="flex items-center gap-2">
              <a href="/#hero" className="flex items-center gap-2">
                <p className="text-xl font-bold tracking-tight bg-gradient-to-r from-purple-600 to-blue-600 text-transparent bg-clip-text">
                  devcli
                </p>
              </a>
            </div>
             
            <nav className="flex items-center gap-2">
             {menuItems.map((item) => (
                <Button
                  key={item.label}
                  variant="ghost"
                  className="text-sm font-medium hover:bg-accent"
                  onClick={() => handleScroll(item.href)}
                >
                  {item.label}
                </Button>
              ))}
            </nav>
            
            <div className="flex items-center gap-4">
              <RainbowButton
               onClick={() => window.open("https://github.com/manishraj27/mern-project-cli", "_blank")}
              >
                <GitHubLogoIcon className="w-5 h-5" />
                <span className="mx-2 text">Star on GitHub</span>
                <Star className="w-4 h-4" />
                <NumberTicker className="text-color-2 ml-1" value={24} />
              </RainbowButton>
              
              <Button
               onClick={() => window.open("https://www.npmjs.com/package/mern-project-cli", "_blank")}
               className="bg-gradient-to-r from-purple-600 to-blue-600 text-white hover:opacity-90">
                Get Started <ArrowRight className="w-4 h-4" />
              </Button>

              <div className="flex items-center border-l pl-4">
                {socialLinks.map((link) => (
                  <Button
                    key={link.label}
                    variant="ghost"
                    size="icon"
                    className="hover:bg-accent"
                    aria-label={link.label}
                    onClick={() => window.open(link.href, "_blank")}
                  >
                    {link.icon}
                  </Button>
                ))}
                <ModeToggle />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;