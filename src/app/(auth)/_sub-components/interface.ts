import { Input } from "@/components/ui/input";
import { ComponentProps, ReactNode } from "react";

export interface FormFieldProps extends ComponentProps<typeof Input> {
  id: string;
  label: string;
}

export interface AuthHeadingProps {
  eyebrow: string;
  children: ReactNode;
}

export interface SocialAuthButtonsProps {
  onFacebook?: () => void;
  onGoogle?: () => void;
}
