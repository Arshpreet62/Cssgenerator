import Button from "../../ui/Button";
import Input from "../../ui/Input";
import Paragraph from "../../ui/Paragraph";
import Header from "./Header";
import { Route, useLocation } from "wouter";

export default function Home() {
  const [location] = useLocation();
  const path = location.split("/")[2];
  const component =
    path === "button"
      ? "Button"
      : path === "paragraph"
      ? "Paragraph"
      : path === "input"
      ? "Input"
      : null;
  if (!component) {
    return (
      <div className="flex items-center justify-center h-screen w-full">
        Component not found
      </div>
    );
  }
  const Component =
    component === "Button"
      ? Button
      : component === "Paragraph"
      ? Paragraph
      : Input;

  return (
    <div className="flex w-full flex-col h-full bg-[#ffffff]">
      <Header />
      <Route path="/home/:component">
        <Component />
      </Route>
    </div>
  );
}
