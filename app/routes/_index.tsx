import type { MetaFunction } from "@remix-run/node";
import GetProfiles from "./chaptor06.getProfiles";

export const meta: MetaFunction = () => {
  return [
    { title: "Duanghathai" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  return (
    <>
      <GetProfiles />
    </>
  );
}
