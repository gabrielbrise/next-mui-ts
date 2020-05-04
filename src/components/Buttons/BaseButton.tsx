import React from "react";
import Link from "next/link";
import Button from "@material-ui/core/Button";

const ButtonLink = ({ href, hrefAs, className, children }) => (
  <>
    <Link href={href} as={hrefAs}>
      <a className={className}>{children}</a>
    </Link>
  </>
);

// https://material-ui.com/demos/buttons/#third-party-routing-library
const BaseButton = (props) => <Button component={ButtonLink} {...props} />;

export default BaseButton;
