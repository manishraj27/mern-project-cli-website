import Heading from "@/components/ui/Heading";
import MERNProjectStructure from "./MERNProjectStructure";
import { CheckCircle2 } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const StructurePage = () => {
    const features = [
        {
            title: "Modular Architecture",
            description: "Organized components and services for better maintainability"
        },
        {
            title: "Clear Separation",
            description: "Distinct frontend and backend layers for independent scaling"
        },
        {
            title: "Easy to Navigate",
            description: "Intuitive folder structure for quick development"
        },
        {
            title: "Best Practices",
            description: "Following industry standards for code organization"
        }
    ];

    return (
        <section
            id="structure"
            aria-label="structure-section"
            className="py-16 sm:py-24"
        >
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="flex justify-center items-center mb-12">
                    <Heading title="Project Structure" />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* Left side - Project Structure */}
                    
                        <MERNProjectStructure />
                

                    {/* Right side - Features */}
                    <div className="w-full space-y-4">
                        <h3 className="text-2xl font-semibold mb-6">MVC Structure</h3>
                        {features.map((feature, index) => (
                            <Card key={index} className="border-none shadow-md">
                                <CardContent className="p-6">
                                    <div className="flex items-start gap-4">
                                        <CheckCircle2 className="h-6 w-6 text-green-500 flex-shrink-0" />
                                        <div>
                                            <h4 className="text-lg font-medium mb-1">{feature.title}</h4>
                                            <p className="text-gray-600">{feature.description}</p>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

export default StructurePage