import { getShortAddress } from '../service/string'

const Header = (props) => {
  const { address, connect } = props
  return (
    <nav className="navbar navbar-expand-lg navbar-light nav-custom">
      <div className="container-fluid">
        <a className="navbar-brand" href="./index.html">
          <img src="images/logo.png" className="logo" />
        </a>
        <button className="navbar-toggler">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse justify-content-end" id="navbarText">
          <ul className="navbar-nav mr-auto">
            <a className="custom-btn" id="connect-wallet" onClick={connect}>
              {address === ''? "Connect Wallet" : getShortAddress(address)}
            </a>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Header;