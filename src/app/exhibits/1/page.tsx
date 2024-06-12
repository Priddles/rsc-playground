import Title from "@/components/Title/Title";
import ClientComponent from "./ClientComponent";
import ServerComponent from "./ServerComponent";

export default function Page() {
  return (
    <>
      <Title>Client components are always client-side right?</Title>
      <ServerComponent />
      <br />
      <ClientComponent useHooks={false} />
    </>
  );
}
