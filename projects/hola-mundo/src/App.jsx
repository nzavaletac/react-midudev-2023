import "./App.css";
import { TwitterFollowCard } from "./TwitterFollowCard";
export const App = () => {
  const formatUserName = (userName) => `@${userName}`;
  return (
    <section className="App">
      <TwitterFollowCard
        formatUserName={formatUserName}
        userName="nzavaletac"
        name="Noe Zavaleta Cardeña"
        isFollowing={true}
      />
      <TwitterFollowCard
        formatUserName={formatUserName}
        userName="midudev"
        name="Miguel Angel Durand"
        isFollowing={false}
      />
      <TwitterFollowCard
        formatUserName={formatUserName}
        userName="pheralb"
        name="Pablo Hernadez"
        isFollowing={true}
      />
      <TwitterFollowCard
        formatUserName={formatUserName}
        userName="lionelmessi"
        name="Leonel Messi"
        isFollowing={false}
      />
    </section>
  );
};
