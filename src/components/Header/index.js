// Write your code here
import {Component} from 'react'
import {Link} from 'react-router-dom'
import Popup from 'reactjs-popup'
import {AiFillHome} from 'react-icons/ai'

import {IoMdClose} from 'react-icons/io'
import {BsInfoCircleFill} from 'react-icons/bs'

import {GiHamburgerMenu} from 'react-icons/gi'
import './index.css'

class Header extends Component {
  state = {isOpen: false}

  close = () => {
    this.setState(old => ({
      isOpen: !old.isOpen,
    }))
  }

  render() {
    const {isOpen} = this.state
    return (
      <div className="header">
        <Link to="/home">
          <button type="button">
            <img
              src="https://assets.ccbp.in/frontend/react-js/hamburger-menu-website-logo.png"
              alt="website logo"
              className="logo"
            />
          </button>
        </Link>
        <div className="popup-container">
          <Popup
            modal
            open={isOpen}
            trigger={
              <button
                data-testid="hamburgerIconButton"
                type="button"
                className="trigger-button"
              >
                <GiHamburgerMenu className="menu" />
              </button>
            }
          >
            <div className="popup-cont">
              <button type="button" data-testid="closeButton">
                <IoMdClose onClick={this.close} />
              </button>
              <ul>
                <Link to="/home">
                  <li>
                    <button
                      onClick={this.close}
                      data-testid="hamburgerIconButton"
                      type="button"
                      className="pop-btn"
                    >
                      <AiFillHome />
                      <h1>Home</h1>
                    </button>
                  </li>
                </Link>

                <Link to="/about">
                  <li>
                    <button
                      onClick={this.close}
                      type="button"
                      data-testid="hamburgerIconButton"
                    >
                      <div className="pop-btn">
                        <BsInfoCircleFill />
                        <h1>About</h1>
                      </div>
                    </button>
                  </li>
                </Link>
              </ul>
            </div>
          </Popup>
        </div>
      </div>
    )
  }
}

export default Header
