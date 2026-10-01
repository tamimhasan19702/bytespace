"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { AuthHeading, FormField } from "../_sub-components/auth-parts";

export default function JoinUsPage() {
  return (
    <>
      <AuthHeading eyebrow="Create an Account">
        Welcome to
        <br />
        ByteSpace
      </AuthHeading>

      <form onSubmit={(e) => e.preventDefault()} className="mt-8 space-y-5" noValidate>
        <FormField
          id="fullName"
          label="Full Name"
          type="text"
          placeholder="Jamie Davis"
          autoComplete="name"
        />
        <FormField
          id="email"
          label="Email"
          type="email"
          placeholder="designer@example.com"
          autoComplete="email"
        />
        <FormField
          id="password"
          label="Password"
          type="password"
          placeholder="********"
          autoComplete="new-password"
        />

        <div className="flex sm:justify-end">
          <Button
            type="submit"
            className="font-body h-10 w-full rounded-full bg-electric-lime-400 px-6 font-medium text-shuttle-gray-800 hover:bg-electric-lime-500 sm:w-auto"
          >
            Continue
          </Button>
        </div>
      </form>

      <p className="font-body mt-10 text-center text-xs text-shuttle-gray-600 lg:mt-auto lg:pt-10">
        Already have an account?{" "}
        <Link href="/signin" className="text-persian-blue-600 hover:underline">
          Login
        </Link>
      </p>
    </>
  );
}
