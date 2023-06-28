import { ChevronRightIcon } from "@chakra-ui/icons";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink } from "@chakra-ui/react";
import { useLocation, NavLink } from "react-router-dom";
import UiLayout from "./layout/UiLayout";

const CustomBreadCrumbs = () => {
  const location = useLocation();
  let currentLink = "";

  const crumbs = location.pathname
    .split("/")
    .filter((crumb) => crumb !== "")
    .map((crumb) => {
      currentLink += `/${crumb}`;

      const isCurrentProp = currentLink === location.pathname;

      return (
        <BreadcrumbItem
          key={crumb}
          color={!isCurrentProp ? "blue.500" : undefined}
          fontSize={isCurrentProp ? "3xl" : "md"}
          fontWeight={isCurrentProp ? "black" : "normal"}
          letterSpacing={"tight"}
          as={isCurrentProp ? "h2" : undefined}
          _hover={{ textDecoration: "underline" }}
          sx={isCurrentProp && { "pointer-events": "none" }}
        >
          <BreadcrumbLink as={NavLink} to={currentLink}>
            {crumb}
          </BreadcrumbLink>
        </BreadcrumbItem>
      );
    });

  return (
    <UiLayout>
      <Breadcrumb
        separator={<ChevronRightIcon color="gray.500" />}
        css={{ textTransform: "capitalize" }}
      >
        {crumbs}
      </Breadcrumb>
    </UiLayout>
  );
};
export default CustomBreadCrumbs;
