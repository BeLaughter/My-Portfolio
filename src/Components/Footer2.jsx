import "./Footer.css";

function Footer2() {
  return (
    <div className="flex-container foot">
      <div className="flex-item">
        <p className="foottext">
          © Benson Portfolio. All Rights Reserved. Designed by BLACKFIRE Codex
        </p>
      </div>
      <div className="flex-item">
        <ul className="itemq">
          <li>
            <a href="#" className="afoot">
              Privacy
            </a>
          </li>
          <li>
            <a href="#" className="afoot">
              Terms
            </a>
          </li>
          <li>
            <a href="#" className="afoot">
              FAQs
            </a>
          </li>
          <li>
            <a href="#" className="afoot">
              Help
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Footer2;
