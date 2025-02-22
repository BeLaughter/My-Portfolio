import Projectcard from "./Projectcard";
import "./Project.css";
function Project() {
  return (
    <div className="pad" id="project">
      <h1 className="projecth1">Projects </h1>
      <div className="flex-container">
        <div className="flex-itemb">
          <Projectcard
            img="https://i.ibb.co/MDrx8v4c/IMG-6420.jpg"
            lang=" Html"
            lang2=" Css"
            lang3=" Bootstrap"
            text="Tech school webpage built with react.js, html, css & bootstrap"
            link1="https://boldlink-web.vercel.app"
            link2="https://github.com/BeLaughter/Boldlink-web/tree/main"
          />
        </div>
        <div className="flex-itemb">
          <Projectcard
            img="https://i.ibb.co/jkQkn4N4/IMG-6415.jpg"
            lang="Html"
            lang2="Css"
            lang3="JavaScript"
            text="Calculator built with Html css and JavaScript"
            link1="https://calculator-seven-black-85.vercel.app"
            link2="https://github.com/BeLaughter/calculator/tree/main"
          />
        </div>
      </div>
      {/* second  */}
      <div className="flex-container">
        <div className="flex-itemb">
          <Projectcard
            img="https://i.ibb.co/sJHBrdhJ/c1203761-ac06-427d-8103-172b92b2cdae.jpg"
            lang=" Html"
            lang2=" Css"
            lang3=" Bootstrap"
            text="React Pizza webpage built with react.js, html, css & bootstrap"
            link1="https://pizza-page-khaki.vercel.app/#contact"
            link2="https://github.com/BeLaughter/Pizza-page/tree/main"
          />
        </div>
        <div className="flex-itemb">
          <Projectcard
            img="https://i.ibb.co/hJDtyzqx/IMG-6419.jpg"
            lang="Html"
            lang2="Javascript"
            lang3="Css"
            text="Number guess game"
            link1="https://guessdnum.vercel.app"
            link2="https://github.com/BeLaughter/Guessdnum/tree/main"
          />
        </div>
      </div>
      {/* third */}
      <div className="flex-container">
        <div className="flex-itemb">
          <Projectcard
            img="https://i.ibb.co/zHmSzcd5/IMG-6418.jpg"
            lang=" Html"
            lang2=" Css"
            lang3=" Bootstrap"
            text="Company webpage built with html, css & bootstrap"
            link1="https://1stweb-eight.vercel.app"
            link2="https://github.com/BeLaughter/web/tree/main"
          />
        </div>
        <div className="flex-itemb">
          <Projectcard
            img="https://i.ibb.co/fzSrtYPW/IMG-6417.jpg"
            lang="Html"
            lang2="Css"
            lang3="JavaScript"
            text="Form page with form validation built with javascript css and html"
            link1="https://form-bay-pi.vercel.app"
            link2="https://github.com/BeLaughter/form/tree/main"
          />
        </div>
      </div>
    </div>
  );
}

export default Project;
