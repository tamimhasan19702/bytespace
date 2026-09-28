import { Logo } from "@/components/logo";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Link from "next/link";

export const Newsletter = () => {
  return (
    <div className="max-w-md">
      <Link href="/" className="flex items-center gap-2">
        <Logo variant="alt" />
      </Link>

      <p className="font-body mt-4 text-sm text-muted-foreground">
        Stay Up to date with our latest features and releases by joining our newsletter.
      </p>

      <form className="mt-5 flex items-center gap-3">
        <Input
          type="email"
          placeholder="Enter your email"
          className="h-11 flex-1 rounded-full border-border font-body"
        />
        <Button
          type="submit"
          className="h-11 cursor-pointer rounded-full bg-electric-lime-400 px-6 font-body text-shuttle-gray-800 hover:bg-electric-lime-500"
        >
          Search
        </Button>
      </form>

      <p className="font-body mt-4 text-xs text-muted-foreground">
        By subscribing, you agree to our Privacy Policy and consent to receive updates from our
        company.
      </p>
    </div>
  );
};
