import { useState } from "react";

const Meme = ({ images }) => {
  const [meme, setMeme] = useState({
    topText: "",
    bottomText: "",
    randomImage: "https://i.imgflip.com/30b1gx.jpg",
  });

  const [allMemeImages, setAllMemeImages] = useState(images);

  const getMemeImage = () => {
    setMeme((prevMeme) => ({
      ...prevMeme,
      randomImage: `${images[Math.floor(Math.random() * images.length)]}`,
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
