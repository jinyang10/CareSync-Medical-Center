import Image from "next/image";
import Link from "next/link";
import { Star } from "lucide-react";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface DoctorCardProps {
    id: string;
    name?: string;
    specialty?: string;
    rating?: number;
    reviewCount: number;
    imageUrl: string;

}

export default function DoctorCard(
    { id, name, specialty, rating, reviewCount, imageUrl }: DoctorCardProps) {
    return (
        <Card className="w-full flex gap-y-4 p-6 max-w-sm rounded-lg shadow-sm bg-background overflow-hidden border border-border-2">
            <CardContent className="p-0 w-full flex flex-col md:flex-row items-center gap-3 md:gap-4">

                {/* Avatar */}
                <div className="relative shrink-0">
                    <div className="w-12 md:w-16 aspect-square rounded-full">
                        {/* Note: Ensure your next.config.js is configured if using external image URLs */}
                        <Image
                            src={imageUrl}
                            alt={`Profile picture of ${name}`}
                            fill
                            className="rounded-full object-cover"
                            sizes="72px"
                        />
                    </div>

                </div>


                {/* Text Details */}
                <div className="flex flex-col">
                    <h3 className="font-bold text-[19px] text-gray-900 tracking-tight leading-snug">
                        {name}
                    </h3>
                    <p className="text-[15px] text-gray-600 mb-1">
                        {specialty}
                    </p>

                    {/* Rating */}
                    <div className="flex items-center gap-1.5">
                        <Star className="w-[18px] h-[18px] text-[#FFB000] fill-[#FFB000]" />
                        <div className="flex items-baseline gap-1 text-[15px]">
                            <span className="font-medium text-gray-700">{rating}</span>
                            <span className="text-gray-500">({reviewCount} reviews)</span>
                        </div>
                    </div>
                </div>

            </CardContent>

            <CardFooter>
                {/* Bottom Section: Call to Action */}
                <Button asChild variant="brand" className="w-full text-base py-6 rounded-lg font-semibold">
                    <Link href={imageUrl}>View Profile</Link>
                </Button>
            </CardFooter>

        </Card>
    );
}