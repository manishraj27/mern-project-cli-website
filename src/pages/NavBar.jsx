import { Button } from "@/components/ui/button";
import { ModeToggle } from "@/components/ui/ModeToggle";
import { RainbowButton } from "@/components/ui/rainbow-button";
import { GitHubLogoIcon, TwitterLogoIcon } from "@radix-ui/react-icons";
import { Star, User, ArrowRight } from "lucide-react";
import { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import NumberTicker from "@/components/ui/number-ticker";
// import HyperText from "@/components/ui/hyper-text";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);
  const hamburgerRef = useRef(null);

  const menuItems = [
    { label: "Features", href: "#features" },
    { label: "Installation", href: "#installation" },
    { label: "Commands", href: "#commands" },
    { label: "Usage Examples", href: "#examples" },
  ];

  const socialLinks = [
    { 
      icon: <User className="h-5 w-5" />, 
      label: "Portfolio",
      href: "#portfolio"
    },
    { 
      icon: <GitHubLogoIcon className="h-5 w-5" />, 
      label: "GitHub",
      href: "#github"
    },
    { 
      icon: <TwitterLogoIcon className="h-5 w-5" />, 
      label: "X",
      href: "#twitter"
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

  return (
    <div className="sticky top-0 z-50 bg-background/80 backdrop-blur-sm">
      <div className="border-b py-4 px-5">
        <div className="max-w-7xl mx-auto">
          {/* Mobile Navigation */}
          <div className="flex md:hidden items-center justify-between">
            {/* Left Section: Hamburger + Logo */}
            <div className="flex items-center gap-4">
              {/* Hamburger Menu */}
              <button 
                ref={hamburgerRef}
                className="flex flex-col justify-center items-center w-8 h-8 space-y-2"
                onClick={() => setIsOpen(!isOpen)}
              >
                <span className="w-8 h-0.5 bg-foreground block transition-transform origin-center"></span>
                <span className="w-8 h-0.5 bg-foreground block transition-opacity left-0"></span>
                <span className="w-8 h-0.5 bg-foreground block transition-transform origin-center"></span>
              </button>

              {/* Logo */}
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
                >
                  {link.icon}
                </Button>
              ))}
              <ModeToggle />
            </div>
          </div>

          {/* Mobile Menu Overlay */}
          <div 
            ref={menuRef}
            className="fixed md:hidden top-[73px] left-0 w-full h-[calc(100vh-73px)] bg-background transform -translate-x-full"
          >
            <div className="p-6 space-y-6">
              <nav className="flex flex-col space-y-4">
                {menuItems.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    className="text-lg font-medium hover:text-primary transition-colors"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.label}
                  </a>
                ))}
              </nav>

              <div className="pt-6 border-t">
                <div className="flex flex-col space-y-4">
                  <RainbowButton className="w-full justify-center">
                    <GitHubLogoIcon className="w-5 h-5" />
                    <span className="mx-2">Star on GitHub</span>
                    <Star className="w-4 h-4" />
                    <NumberTicker className="text-color-2 ml-1" value={24} />
                    {/* <span className="ml-1">16</span> */}
                  </RainbowButton>
                  
                  <Button className="w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white hover:opacity-90">
                    Get Started <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </div>
              </div>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center justify-between">
            {/* Rest of desktop navigation code remains the same */}
            <div className="flex items-center gap-2">
              <a href="/#hero" className="flex items-center gap-2">
                <p className="text-xl font-bold tracking-tight bg-gradient-to-r from-purple-600 to-blue-600 text-transparent bg-clip-text">
                  devcli
                </p>
              </a>
            </div>
                {/* <Button variant="ghost" className="text-sm font-medium hover:bg-accent">
                 <HyperText text="Features" />
                  </Button> */}

            <nav className="flex items-center gap-2">
              {menuItems.map((item) => (
                <Button
                  key={item.label}
                  variant="ghost"
                  className="text-sm font-medium hover:bg-accent"
                >
                  {item.label}
                </Button>
              ))}
            </nav>
            
            <div className="flex items-center gap-4">
              <RainbowButton>
                <GitHubLogoIcon className="w-5 h-5" />
                <span className="mx-2 text">Star on GitHub</span>
                <Star className="w-4 h-4" />
                <NumberTicker className="text-color-2 ml-1" value={24} />
                {/* <span className="ml-1">16</span> */}
              </RainbowButton>
              
              <Button className="bg-gradient-to-r from-purple-600 to-blue-600 text-white hover:opacity-90">
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