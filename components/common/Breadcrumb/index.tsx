import React from "react";
import Image from "next/image";
import Router from "next/router";
import Button from "../Button";
import { BackText, BreadcrumbContainer, Icon, Navbar, NavItem } from "./styles";
import { Route } from "../../../types";

interface BreadcrumbProps {
  redirectURL?: string;
  breadcrumbs: string[];
}

const Breadcrumb: React.FC<BreadcrumbProps> = ({
  redirectURL = "/",
  breadcrumbs = [],
}) => {
  return (
    <BreadcrumbContainer>
      <Button size="sm" onClick={() => Router.push(redirectURL)}>
        <Image
          src="/assets/images/icons/back.svg"
          width={16}
          height={16}
          alt=":( Not Found"
        />
        <BackText>Back to Home</BackText>
      </Button>
      <Navbar>
        {breadcrumbs.map((breadcrumb: String, index: React.Key) => {
          const isLast = index === breadcrumbs.length - 1;
          return (
            <React.Fragment key={index}>
              <NavItem active={isLast}>{breadcrumb}</NavItem>
              {!isLast && (
                <Icon>
                  <Image
                    src="/assets/images/icons/arrow-right.svg"
                    width={24}
                    height={24}
                    alt=":( Not Found"
                  />
                </Icon>
              )}
            </React.Fragment>
          );
        })}
      </Navbar>
    </BreadcrumbContainer>
  );
};

export default Breadcrumb;
