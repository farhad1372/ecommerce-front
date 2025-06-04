"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";

interface ErrorProps {
  error: Error;
  reset: () => void;
}

export default function Error({ error, reset }: ErrorProps) {
  console.log("--------", { error });
  return (
    <div className="p-4 text-center">
      {error?.message === "404" ? (
        <>
          <h1 className="text-3xl font-bold mt-10">
            Oops! This page doesn&apos;t exist.
          </h1>
          <Link
            href={"/"}
            className="bg-primary text-white inline-block font-bold rounded-lg mt-7 py-3 px-20 text-lg"
          >
            Back to Home
          </Link>
        </>
      ) : (
        <>
          <h1 className="text-3xl font-bold mt-10">
            Oops! Something went wrong.
          </h1>
          <p className="mt-3 ">{error?.message || "Unexpected error"}</p>
          <Button onClick={reset} className="mt-7 py-6 px-20 text-lg">
            Try Again
          </Button>
        </>
      )}
    </div>
  );
}
