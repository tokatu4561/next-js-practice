import { MainNavigation } from "./MainNavigation";

export const Layout = (props: any) => {
  return (
    <>
      <MainNavigation></MainNavigation>
      {props.children}
    </>
  );
};
