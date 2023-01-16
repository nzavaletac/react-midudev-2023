import "./App.css";
import { TwitterFollowCard } from "./TwitterFollowCard";
export const App = () => {
  const midudev = {
    userName: "midudev",
    name: "Miguel Angel Durand",
  };

  return (
    <section className="App">
      <TwitterFollowCard userName="nzavaletac" name="Noe Zavaleta Cardeña" />
      <TwitterFollowCard {...midudev} />
      <TwitterFollowCard userName="pheralb" name="Pablo Hernadez" />
      <TwitterFollowCard userName="lionelmessi" name="Leonel Messi" />
    </section>
  );
};
