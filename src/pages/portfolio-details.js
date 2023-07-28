export default function PortfolioDetails() {
  return (
    <main id="main">
      <section id="portfolio-details" class="portfolio-details">
        <div class="container">
          <div class="row">
            <div class="col-lg-8">
              <h2 class="portfolio-title">
                This is an example of portfolio detail
              </h2>
              <div class="owl-carousel portfolio-details-carousel">
                <img
                  src="assets/img/portfolio/portfolio-details-1.jpg"
                  class="img-fluid"
                  alt=""
                />
                <img
                  src="assets/img/portfolio/portfolio-details-2.jpg"
                  class="img-fluid"
                  alt=""
                />
                <img
                  src="assets/img/portfolio/portfolio-details-3.jpg"
                  class="img-fluid"
                  alt=""
                />
              </div>
            </div>

            <div class="col-lg-4 portfolio-info">
              <h3>Project information</h3>
              <ul>
                <li>
                  <strong>Category</strong>: Web design
                </li>
                <li>
                  <strong>Client</strong>: ASU Company
                </li>
                <li>
                  <strong>Project date</strong>: 01 March, 2020
                </li>
                <li>
                  <strong>Project URL</strong>:{" "}
                  <a href="example.com">www.example.com</a>
                </li>
              </ul>

              <p>
                Autem ipsum nam porro corporis rerum. Quis eos dolorem eos
                itaque inventore commodi labore quia quia. Exercitationem
                repudiandae officiis neque suscipit non officia eaque itaque
                enim. Voluptatem officia accusantium nesciunt est omnis tempora
                consectetur dignissimos. Sequi nulla at esse enim cum deserunt
                eius.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
