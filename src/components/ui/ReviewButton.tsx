"use client";

import { Star } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

interface ReviewButtonProps {
  variant?: "default" | "floating" | "navbar";
  className?: string;
}

export function ReviewButton({ variant = "default", className = "" }: ReviewButtonProps) {
  const googleReviewUrl =
    "https://g.page/r/CadT0CTbct2xEAI/review";

  const buttonContent = (
    <>
      <Star className="h-4 w-4 fill-current" />
      <span>Leave a Review</span>
    </>
  );

  if (variant === "floating") {
    return (
      <Link
        href={googleReviewUrl}
        target="_blank"
        rel="noopener noreferrer"
        className={`fixed bottom-6 right-6 z-50 ${className}`}
      >
        <Button
          size="lg"
          className="rounded-full shadow-2xl gap-2 bg-primary text-primary-foreground hover:bg-primary/90"
        >
          {buttonContent}
        </Button>
      </Link>
    );
  }

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
          {buttonContent}
        </Button>
      </Link>
    );
  }

  // default: standalone button
  return (
    <Link
      href={googleReviewUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={className}
    >
      <Button size="lg" className="gap-2">
        {buttonContent}
      </Button>
    </Link>
  );
}