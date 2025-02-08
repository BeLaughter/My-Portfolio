import "./Project.css";
function Projectcard(props) {
  return (
    <div className="projectcard">
      <div className="row ">
        <div className="col picard">
          <img
            src={props.img}
            alt="web development course"
            className="card-img"
          />
          <div className="boxbt flex-container justify-content-center">
            <a href={props.link1} target="blank" className="bt">
              View Project
            </a>
            <a href={props.link2} target="blank" className="bt">
              View Code
            </a>
          </div>
        </div>
      </div>

      <div className="row mrow">
        <div className="col orange">
          <a>{props.lang}</a>
        </div>
        <div className="col orange">
          <a>{props.lang2}</a>
        </div>
        <div className="col orange">
          <a>{props.lang3}</a>
        </div>
      </div>

      <div className="row mrow">
        <div className="col">
          <p>{props.text}</p>
        </div>
      </div>
    </div>
  );
}

export default Projectcard;
