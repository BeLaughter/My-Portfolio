import Projectcard from "./Projectcard";
import "./Project.css";
function Project() {
  return (
    <div className="pad" id="project">
      <h1 className="projecth1">Project </h1>
      <div className="flex-container">
        <div className="flex-itemb">
          <Projectcard
            img="https://cdn.pixabay.com/photo/2020/08/18/19/25/teacher-5499177_640.jpg"
            lang=" Html"
            lang2=" Css"
            lang3=" Bootstrap"
            text="Tech school webpage built with react.js, html, css & bootstrap"
            link1="https://boldlink-web.vercel.app"
            link2="#"
          />
        </div>
        <div className="flex-itemb">
          <Projectcard
            img="https://cdn.pixabay.com/photo/2020/08/18/19/25/teacher-5499177_640.jpg"
            lang="Html"
            lang2="Css"
            lang3="JavaScript"
            text="Calculator built with Html css and JavaScript"
            link1="#"
            link2="#"
          />
        </div>
      </div>
      {/* second  */}
      <div className="flex-container">
        <div className="flex-itemb">
          <Projectcard
            img="https://cdn.pixabay.com/photo/2020/08/18/19/25/teacher-5499177_640.jpg"
            lang=" Html"
            lang2=" Css"
            lang3=" Bootstrap"
            text="React practice webpage built with react.js, html, css & bootstrap"
            link1="https://react-gilt-beta.vercel.app/"
            link2="#"
          />
        </div>
        <div className="flex-itemb">
          <Projectcard
            img="https://cdn.pixabay.com/photo/2020/08/18/19/25/teacher-5499177_640.jpg"
            lang="Html"
            lang2="Javascript"
            lang3="Css"
            text="Number guess game"
            link1="https://guessdnum.vercel.app"
            link2="#"
          />
        </div>
      </div>
      {/* third */}
      <div className="flex-container">
        <div className="flex-itemb">
          <Projectcard
            img="https://cdn.pixabay.com/photo/2020/08/18/19/25/teacher-5499177_640.jpg"
            lang=" Html"
            lang2=" Css"
            lang3=" Bootstrap"
            text="Company webpage built with html, css & bootstrap"
            link1="https://1stweb-eight.vercel.app"
            link2="#"
          />
        </div>
        <div className="flex-itemb">
          <Projectcard
            img="https://cdn.pixabay.com/photo/2020/08/18/19/25/teacher-5499177_640.jpg"
            lang="MR BELLO"
            lang2="MR BELLO"
            lang3="MR BELLO"
            text="Form page with form validation built with javascript css and html"
            link1="https://form-bay-pi.vercel.app"
            link2="#"
          />
        </div>
      </div>
    </div>
  );
}

export default Project;
