import '../App.css';
function Nav() {
  return (
    <nav>
        <img src={require ('./img/logo.png')} />
        <h1>Minimal <span className='shop'>Shop</span>ping</h1>
    </nav>
  );
};
export default Nav;