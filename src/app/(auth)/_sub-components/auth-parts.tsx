import { IconStore } from "@/components/icons";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils/cn";
import { AuthHeadingProps, FormFieldProps, SocialAuthButtonsProps } from "./interface";

export function AuthHeading({ eyebrow, children }: AuthHeadingProps) {
  return (
    <div>
      <p className="font-body text-sm text-persian-blue-600">{eyebrow}</p>
      <h1 className="font-heading mt-1 text-3xl font-semibold leading-tight tracking-tight text-shuttle-gray-800 sm:text-4xl">
        {children}
      </h1>
    </div>
  );
}

export function FormField({ id, label, className, ...props }: FormFieldProps) {
  return (
    <div className="space-y-2">
      <label htmlFor={id} className="font-body block text-xs font-normal text-shuttle-gray-700">
        {label}
      </label>
      <Input
        id={id}
        name={id}
        className={cn(
          "font-body h-11 rounded-lg border-shuttle-gray-100 bg-shuttle-gray-50",
          className,
        )}
        {...props}
      />
    </div>
  );
}

export function SocialAuthButtons({ onFacebook, onGoogle }: SocialAuthButtonsProps) {
  const base =
    "flex size-14 cursor-pointer items-center justify-center rounded-2xl border border-shuttle-gray-100 bg-white-800 transition-colors hover:bg-shuttle-gray-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-persian-blue-600";

  return (
    <div className="flex justify-center gap-4">
      <button
        type="button"
        aria-label="Continue with Facebook"
        onClick={onFacebook}
        className={base}
      >
        <IconStore iconName="facebook" className="text-2xl text-black" />
      </button>
      <button type="button" aria-label="Continue with Google" onClick={onGoogle} className={base}>
        <IconStore iconName="google" className="text-2xl text-black" />
      </button>
    </div>
  );
}

export function OrDivider() {
  return (
    <div className="flex items-center gap-4" role="separator">
      <span className="h-px flex-1 bg-shuttle-gray-100" />
      <span className="font-body text-xs text-shuttle-gray-500">or</span>
      <span className="h-px flex-1 bg-shuttle-gray-100" />
    </div>
  );
}
