import * as React from "react";
import {Slot} from "@radix-ui/react-slot";
import {cva, type VariantProps} from "class-variance-authority";

import {cn} from "./../../lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded gap-3 font-bold text-sm transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary-hover px-[25px] py-[15px]",
        large: "bg-primary text-primary-foreground hover:bg-primary-hover px-[40px] py-[15px]",
        outline: "bg-transparent text-primary-foreground border-primary-foreground border hover:bg-primary-foreground hover:text-primary-hover px-[40px] py-[15px]",
        "outline-primary-rounded": "bg-transparent text-primary rounded-full border-primary border hover:bg-primary-hover hover:border-primary-hover hover:text-primary-foreground px-[40px] py-[15px]",
        dark: "bg-background-dark text-background-dark-foreground hover:bg-background-dark-hover px-[25px] py-[15px]",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return <Comp className={cn(buttonVariants({ variant, className }))} ref={ref} {...props} />;
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
