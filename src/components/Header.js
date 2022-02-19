import logo from "../images/troll-face.png";

const Header = () => {
  return (
    <header className='header'>
      <img className='logo' src={logo} alt='meme-face-logo'></img>
      <h1 className='logo_title'>Meme Generator</h1>
      <p className='header_text'>React Course - Project 3</p>
    </header>
  );
};

export default Header;
