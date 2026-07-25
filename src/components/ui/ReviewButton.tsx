"use client";

import { Star } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface ReviewButtonProps {
  variant?: "default" | "floating" | "floating-orange" | "navbar";
  className?: string;
}

export function ReviewButton({ variant = "default", className = "" }: ReviewButtonProps) {
  const googleReviewUrl = "https://g.page/r/CadT0CTbct2xEAI/review";

  // --- Floating Orange Pill (for use inside FloatingActions) ---
  if (variant === "floating-orange") {
    return (
      <Link
        href={googleReviewUrl}
        target="_blank"
        rel="noopener noreferrer"
        className={cn("block", className)}
      >
        <Button
          size="lg"
          className={cn(
            "w-full rounded-full shadow-lg gap-2 px-6 py-6",
            "bg-orange-500 hover:bg-orange-600 text-white",
            "border-0 transition-all duration-300",
            "hover:scale-[1.02] active:scale-95",
            "font-semibold text-base"
          )}
        >
          <Star className="h-5 w-5 fill-current" />
          <span>Leave a Review</span>
        </Button>
      </Link>
    );
  }

  // --- Original floating (theme primary) ---
  if (variant === "floating") {
    return (
      <Link
        href={googleReviewUrl}
        target="_blank"
        rel="noopener noreferrer"
        className={cn("fixed bottom-6 right-6 z-50", className)}
      >
        <Button
          size="lg"
          className="rounded-full shadow-2xl gap-2 bg-primary text-primary-foreground hover:bg-primary/90"
        >
          <Star className="h-4 w-4 fill-current" />
          <span>Leave a Review</span>
        </Button>
      </Link>
    );
  }

  // --- Navbar variant ---
  if (variant === "navbar") {
    return (
      <Link
        href={googleReviewUrl}
        target="_blank"
        rel="noopener noreferrer"
        className={className}
      >
        <Button
          variant="outline"
          size="sm"
          className="gap-2 border-primary/50 text-foreground hover:bg-primary/10"
        >
          <Star className="h-3 w-3 fill-current" />
          <span>Review</span>
        </Button>
      </Link>
    );
  }

  // --- Default standalone ---
  return (
    <Link
      href={googleReviewUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={className}
    >
      <Button size="lg" className="gap-2">
        <Star className="h-4 w-4" />
        <span>Leave a Review</span>
      </Button>
    </Link>
  );
}