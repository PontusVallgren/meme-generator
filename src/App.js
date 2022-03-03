import Header from "./components/Header";
import Meme from "./components/Meme";
import memeData from "./memeData";

function App() {
  const imgUrls = memeData.data.memes.map((items) => items.url);

  return (
    <div>
      <Header />
      <Meme images={imgUrls} />
    </div>
  );
}

export default App;
