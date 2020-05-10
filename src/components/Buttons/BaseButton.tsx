import React, { forwardRef, Ref } from "react";
import Link from "next/link";
import Button from "@material-ui/core/Button";

interface IButtonLink {
  href?: string;
  hrefAs?: string;
  className?: string;
  children: unknown;
}

const ButtonLink = forwardRef(
  ({ href, hrefAs, className, children }: IButtonLink, ref?: Ref<any>) => {
    if (!href)
      return (
        <div ref={ref} className={className}>
          {children}
        </div>
      );
    return (
      <>
        <Link href={href} as={hrefAs}>
          <a ref={ref} {...ref} className={className}>
            {children}
          </a>
        </Link>
      </>
    );
  }
);

// https://material-ui.com/demos/buttons/#third-party-routing-library
const BaseButton = (props) => <Button component={ButtonLink} {...props} />;

export default BaseButton;
