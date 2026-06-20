import './footer.scss';
import locationIcon from '../../img/locations.svg';
import timeIcon from '../../img/time.svg';

export function Footer () {
  return(
    <>
      <footer>
        <div className="botFoot">
          <div className="logoF">
            <h3>BEST STORE</h3>
          </div>

          <div className="locFirm">
            <div className="someInfo">
              <nav>
                <ul>
                  <li>
                    <a 
                      href="email:#" 
                      target='_blank'
                      onClick={(e) => e.preventDefault()}
                    >
                      Email: <span>theBestStore@store.ua</span>
                    </a>
                  </li>
                  <li>
                    <a 
                      href="tel:#"
                      target='_blank'
                      onClick={(e) => e.preventDefault()}
                    >
                      Phone number: <span>+38(098)9999999</span>
                    </a>
                  </li>
                  <li>
                    <a 
                      href="#"
                      target='_blank'
                      onClick={(e) => e.preventDefault()}
                    >
                      Our partners' website: <span>Some_Link</span>
                    </a> 
                  </li>
                </ul>
              </nav>
            </div>
          </div>

          <div className="firmInfo">
            <ul>
              <li>
                <div className="imgF"></div>
                <a 
                  href="https://maps.app.goo.gl/jJdM93eKrGdJMzNZ7"
                  target='_blank'
                >
                  Locations: <span>Kiev, Shevchenko street, 2</span>
                </a>
              </li>
              <li>
                <div className="imgW"></div>
                <span className="wtm">
                  Mon–Fri: <span>10:00 AM–8:00 PM</span>
                </span>
              </li>
              <li>
                <div className="imgW"></div>
                <span className="wtm">
                  Sat: <span>10:00 AM–7:00 PM</span>
                </span>
              </li>
              <li>
                <div className="imgW"></div>
                <span className="wtm">
                  Sun: <span>Closed</span>
                </span>
              </li>
            </ul>
          </div>

        </div>
      </footer>
    </>
  );
}