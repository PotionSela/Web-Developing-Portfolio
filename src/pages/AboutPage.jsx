import placeHolder from "../assets/No-Image-Placeholder.png";
import Layout from "../layouts/layout";

const AboutPage = () => {
  return (
    <Layout>
      <section className="container d-flex flex-column align-items-center justify-content-center mt-5 mb-5">
        <div className="row">
          <div className="col-md-12 col-lg-6 mb-3 d-flex justify-content-center">
            <img
              src={placeHolder}
              alt="Michael Kelly"
              className="img-fluid rounded"
              style={{ maxWidth: "100%", height: "auto" }}
            />
          </div>
          <div className="col-md-12 col-lg-6 d-flex align-items-center">
            <div>
              <h2 className="text-center">Gisela Mata</h2>
              <h3 className="text-center">~Full Stack Web Developer~</h3>
              <br />
              <p>
                Hello and Welcome! This is my portfolio to showcase my talent
                and skills as a full-stack web development. Where I have
                experience creating a visually appealing HTML website, with CSS
                skills, then adding functionality to those applications using
                JavaScript for front end skills. For my backend skills I have
                taken the time to build databases in MySQL, and MongoDB, and
                adding to that I have worked using Node.js and Express.js.
              </p>
              <br />
              <p>
                I have a background in various customer service industries, even
                getting so good to become a supervisor overseeing a small team,
                and schooling that helped develop my vision from an artistic
                perspective. With these skills in my background, I can
                confidently say that I have the abilities to direct a small
                team, or work well with others as we collaborate. I have also
                the background that can support soft skills like communication,
                quick decision making for time sensitive matters, and having
                adaptability in new roles.
              </p>
              <br />
              <p>
                I'm living in the New England area, and have had spent time in
                the West Coast, I enjoy each region for their unique cultures
                that has definitely influenced my perspective on life and how
                people work together. I'm excited to get to learn more about
                coding through new challenges that any full-stack or front-end
                development job can provide to me. I'm the type of person that
                works hard to learn a new skill, so being able to constantly
                learn and grow through trial and error is ideal for me.
              </p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};
