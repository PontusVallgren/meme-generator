const Meme = () => {
  return (
    <div className='meme-ctn'>
      <form className='form'>
        <input
          className='meme-input'
          id='memeOne'
          name='memeOne'
          type='text'
          value='Upper text'
        ></input>
        <input
          className='meme-input'
          id='memeTwo'
          name='memeTwo'
          type='text'
          value='Bottom text'
        ></input>
      </form>
      <button id='render-btn'>Get a new meme image</button>
    </div>
  );
};

export default Meme;
