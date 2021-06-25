import "./footer.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faLinkedin,
  faTwitter,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <div style={{ paddingTop: "100px" }}>
      <hr className='hr-or' />
      <hr className='hr-or' />
      <hr className='hr-or' />
      <footer className='nb-footer'>
        <div className='container'>
          <div className='row'>
            <div className='col-sm-12'>
              <div className='about'>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book.
                </p>

                <div className='social-media'>
                  <ul className='list-inline d-flex justify-content-center'>
                    <li className='p-1 cursor'>
                      <Link className='facebook' to='/'>
                        <FontAwesomeIcon icon={faFacebook} />
                      </Link>
                    </li>
                    <li className='p-1'>
                      <Link className='twitter' to='/' title=''>
                        <FontAwesomeIcon icon={faTwitter} />
                      </Link>
                    </li>
                    <li className='p-1'>
                      <Link className='instagram' to='/' title=''>
                        <FontAwesomeIcon icon={faInstagram} />
                      </Link>
                    </li>
                    <li className='p-1'>
                      <Link className='linkedin' to='/' title=''>
                        <FontAwesomeIcon icon={faLinkedin} />
                      </Link>
                    </li>
                    <li className='p-1'>
                      <Link className='youtube' to='/' title=''>
                        <FontAwesomeIcon icon={faYoutube} />
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        <section className='copyright'>
          <div className='container'>
            <div className='row'>
              <div className='col-sm-12 justify-content-center d-flex'>
                <p>© 2021 LostSoul Pvt. Ltd. @ All Rights Reserved.</p>
              </div>
            </div>
          </div>
        </section>
      </footer>
    </div>
  );
};

export default Footer;
