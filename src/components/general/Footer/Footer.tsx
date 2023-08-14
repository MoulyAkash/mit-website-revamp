import { useState } from "react";
import "./footer.css";

import Dropdown from "../Dropdown/DropDown";
import { footerContents } from "../../../pages/public/Home/data";
import { NavLink } from "react-router-dom";

export interface FooterContent {
  title: string;
  url: string;
  content?: FooterContent[];
}

function Footer() {
  const [selectedLanguage, setSelectedLanguage] = useState("English");

  return (
    <div className="footer-container noselect">
      <span>
        <span>
          <h1>Anna University, MIT Campus</h1>
          <div>
            Example344@gmail.com<p>+880 123 456 789</p>
          </div>
          <span>Social Media Icons</span>
        </span>
        <p>© 2022 All Rights Reserved By Anna University, MIT Campus</p>
      </span>
      <span>
        {footerContents.map((item: FooterContent, index: number) => (
          <span key={`${item}${index}`}>
            <NavLink className="column-title" to={item.url}>
              {item.title}
            </NavLink>
            <span>
              {item?.content?.map((item: FooterContent, index: number) => (
                <NavLink key={`${item}${index}`} to={item.url}>
                  {item.title}
                </NavLink>
              ))}
            </span>
          </span>
        ))}
        <span>
          <h1 className="column-title">Stay up to date</h1>
          <span>
            <p>Become an instructor</p>
            <p>Become a student</p>
          </span>
          <Dropdown
            value={selectedLanguage}
            onChange={setSelectedLanguage}
            items={["English", "Tamil"]}
          />
        </span>
      </span>
    </div>
  );
}

export default Footer;
