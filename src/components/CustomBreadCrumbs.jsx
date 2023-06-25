import { ChevronRightIcon } from "@chakra-ui/icons";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink } from "@chakra-ui/react";
import { useLocation, NavLink } from "react-router-dom";

const CustomBreadCrumbs = () => {
  const location = useLocation();
  let currentLink = "";

  const crumbs = location.pathname
    .split("/")
    .filter((crumb) => crumb !== "")
    .map((crumb) => {
      currentLink += `/${crumb}`;

      const isCurrentProp =
        currentLink === location.pathname ? "blue.500" : undefined;

      return (
        <BreadcrumbItem
          key={crumb}
          color={isCurrentProp}
          _hover={{ textDecoration: "underline" }}
        >
          <BreadcrumbLink as={NavLink} to={currentLink}>
            {crumb}
          </BreadcrumbLink>
        </BreadcrumbItem>
      );
    });

  return (
    <Breadcrumb
      separator={<ChevronRightIcon color="gray.500" />}
      css={{ textTransform: "capitalize" }}
    >
      {crumbs}
    </Breadcrumb>
  );
};
export default CustomBreadCrumbs;
