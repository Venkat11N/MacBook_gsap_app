import { footerLinks } from "../constants/index";

const Footer = () => {
  return (
    <footer>
      <div className="info">
        <p>
          Copyright 2024 Apple Inc. All rights reserved. <span>|</span> Privacy
          Policy <span>|</span> Terms of Use <span>|</span> Sales and Refunds
          <span>|</span> Legal <span>|</span> Site Map
        </p>
      </div>
      <hr />
      <div className="links">
        <ul>
          {footerLinks.map((link, index) => (
            <li key={index}>{link.label}</li>
          ))}
        </ul>
      </div>
    </footer>
  );
};

export default Footer;