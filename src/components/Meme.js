import { useState, useEffect } from "react";

const Meme = () => {
  const [meme, setMeme] = useState({
    topText: "",
    bottomText: "",
    randomImage: "https://i.imgflip.com/1ur9b0.jpg",
  });

  const [allMemeImages, setAllMemeImages] = useState();

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("https://api.imgflip.com/get_memes");
      const data = await res.json();
      const memeUrls = data.data.memes.map((items) => items.url);
      setAllMemeImages(memeUrls);
    };
    fetchData();
  }, []);

  const getMemeImage = () => {
    setMeme((prevMeme) => ({
      ...prevMeme,
      randomImage: `${
        allMemeImages[Math.floor(Math.random() * allMemeImages.length)]
      }`,
    }));
  };

  const handleChange = (e) => {
    const { value, name } = e.target;

    setMeme((prevMeme) => ({
      ...prevMeme,
      [name]: value,
    }));
  };

  return (
    <div className='meme-ctn'>
      <form className='form'>
        <input
          className='meme-input'
          name='topText'
          type='text'
          onChange={handleChange}
          value={meme.topText}
          placeholder='Top text'
        ></input>
        <input
          className='meme-input'
          id='bottomText'
          name='bottomText'
          type='text'
          onChange={handleChange}
          value={meme.bottomText}
          placeholder='Bottom text'
        ></input>
      </form>
      <button onClick={getMemeImage} id='render-btn'>
        Get a new meme image
      </button>
      <div className='meme-ctn'>
        <img className='meme-img' src={meme.randomImage}></img>
        <p className='meme-text top'>{meme.topText}</p>
        <p className='meme-text bottom'>{meme.bottomText}</p>
      </div>
    </div>
  );
};

export default Meme;
