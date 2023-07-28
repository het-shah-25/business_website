import React from "react";

const Footer = () => {
  return (
    <footer id="footer">
      <div class="footer-top">
        <div class="container">
          <div class="row">
            <div class="col-lg-3 col-md-6">
              <div class="footer-info">
                <h3>Sailor</h3>
                <p>
                  A108 Adam Street <br />
                  NY 535022, USA
                  <br />
                  <br />
                  <strong>Phone:</strong> +1 5589 55488 55
                  <br />
                  <strong>Email:</strong> info@example.com
                  <br />
                </p>
                <div class="social-links mt-3">
                  <a href="twitter" class="twitter">
                    <i class="bx bxl-twitter"></i>
                  </a>
                  <a href="facebook" class="facebook">
                    <i class="bx bxl-facebook"></i>
                  </a>
                  <a href="instagram" class="instagram">
                    <i class="bx bxl-instagram"></i>
                  </a>
                  <a href="google-plus" class="google-plus">
                    <i class="bx bxl-skype"></i>
                  </a>
                  <a href="linkedin" class="linkedin">
                    <i class="bx bxl-linkedin"></i>
                  </a>
                </div>
              </div>
            </div>

            <div class="col-lg-2 col-md-6 footer-links">
              <h4>Useful Links</h4>
              <ul>
                <li>
                  <i class="bx bx-chevron-right"></i> <a href="index">Home</a>
                </li>
                <li>
                  <i class="bx bx-chevron-right"></i>{" "}
                  <a href="Aboutus">About us</a>
                </li>
                <li>
                  <i class="bx bx-chevron-right"></i>{" "}
                  <a href="services">Services</a>
                </li>
                <li>
                  <i class="bx bx-chevron-right"></i>{" "}
                  <a href="tos">Terms of service</a>
                </li>
                <li>
                  <i class="bx bx-chevron-right"></i>{" "}
                  <a href="privacy policy">Privacy policy</a>
                </li>
              </ul>
            </div>

            <div class="col-lg-3 col-md-6 footer-links">
              <h4>Our Services</h4>
              <ul>
                <li>
                  <i class="bx bx-chevron-right"></i>{" "}
                  <a href="web design">Web Design</a>
                </li>
                <li>
                  <i class="bx bx-chevron-right"></i>{" "}
                  <a href="Web Development">Web Development</a>
                </li>
                <li>
                  <i class="bx bx-chevron-right"></i>{" "}
                  <a href="Product Management">Product Management</a>
                </li>
                <li>
                  <i class="bx bx-chevron-right"></i>{" "}
                  <a href="Marketing">Marketing</a>
                </li>
                <li>
                  <i class="bx bx-chevron-right"></i>{" "}
                  <a href="Graphic Design">Graphic Design</a>
                </li>
              </ul>
            </div>

            <div class="col-lg-4 col-md-6 footer-newsletter">
              <h4>Our Newsletter</h4>
              <p>
                Tamen quem nulla quae legam multos aute sint culpa legam noster
                magna
              </p>
              <form action="" method="post">
                <input type="email" name="email" />
                <input type="submit" value="Subscribe" />
              </form>
            </div>
          </div>
        </div>
      </div>

      <div class="container">
        <div class="copyright">
          &copy; Copyright{" "}
          <strong>
            <span>Het shah</span>
          </strong>
          . All Rights Reserved
        </div>
        <div class="credits">
          {/* <!-- All the links in the footer should remain intact. -->
          <!-- You can delete the links only if you purchased the pro version. -->
          <!-- Licensing information: https://bootstrapmade.com/license/ -->
          <!-- Purchase the pro version with working PHP/AJAX contact form: https://bootstrapmade.com/sailor-free-bootstrap-theme/ --> */}
          Designed by Het Shah
        </div>
      </div>
    </footer>
  );
};

export default Footer;
