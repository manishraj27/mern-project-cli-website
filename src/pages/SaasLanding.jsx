import { ChevronRight, Star, Zap, Shield, Globe } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "CEO at TechFlow",
    content: "This tool has transformed how we manage our projects. Couldn't be happier!",
    rating: 5
  },
  {
    name: "Mike Chen",
    role: "Developer",
    content: "The best development tool I've used in years. Incredibly intuitive.",
    rating: 5
  },
  {
    name: "Lisa Brown",
    role: "Product Manager",
    content: "Game-changer for our team's productivity. Highly recommended!",
    rating: 5
  }
];

const features = [
  {
    title: "Lightning Fast",
    description: "Deploy your projects in seconds, not hours",
    icon: Zap
  },
  {
    title: "Enterprise Security",
    description: "Bank-grade security for your applications",
    icon: Shield
  },
  {
    title: "Global Scale",
    description: "Deploy to any region with one click",
    icon: Globe
  }
];

export default function SaasLanding() {
  return (
    <div className="min-h-screen bg-gradient-to-b">
      {/* Hero Section */}
      <header className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16 text-center">
        <div className="space-y-8">
          <div className="inline-flex items-center px-4 py-2 bg-blue-50 rounded-full text-blue-600 text-sm font-medium mb-4">
            🚀 Now with AI-powered automation
          </div>
          <h1 className="text-5xl font-bold tracking-tight text-gray-900 sm:text-6xl">
            MERN Project Generator
            <span className="text-blue-600"> CLI</span>
          </h1>
          <p className="max-w-2xl mx-auto text-xl text-gray-500">
            Create production-ready MERN stack projects in seconds. Stop configuring, start building.
          </p>
          <div className="flex justify-center gap-4">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
              Get Started <ChevronRight className="ml-2 h-4 w-4" />
            </Button>
            <Button size="lg" variant="outline">
              View Demo
            </Button>
          </div>
        </div>
      </header>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900">Everything you need to build faster</h2>
            <p className="mt-4 text-gray-500">All the tools you need to create and deploy MERN applications quickly.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="border-none shadow-lg">
                <CardHeader>
                  <feature.icon className="h-12 w-12 text-blue-600 mb-4" />
                  <CardTitle>{feature.title}</CardTitle>
                  <CardDescription>{feature.description}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-16">Loved by developers worldwide</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="bg-white">
                <CardContent className="pt-6">
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-600 mb-4">{testimonial.content}</p>
                  <div>
                    <p className="font-semibold">{testimonial.name}</p>
                    <p className="text-sm text-gray-500">{testimonial.role}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-8">Ready to start building?</h2>
          <p className="text-xl text-blue-100 mb-8">Join thousands of developers who are shipping faster with our tools.</p>
          <Button size="lg" variant="secondary" className="bg-white text-blue-600 hover:bg-gray-100">
            Start Building For Free
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p>© 2024 MERN Project Generator CLI. All rights reserved.</p>
          </div>
        </div>
      </footer>
      <div>
        -------
      </div>
    </div>
    
  );
}