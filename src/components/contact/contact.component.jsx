import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

import { StyledComponents as S } from "./contact.styles";

import { selectCurrentPage } from "../../redux/pages/pages.selector";

const Contact = () => {
  const currentPage = useSelector(selectCurrentPage);

  return (
    <>
      <S.IconContainerLeft currentPage={currentPage === "contact"}>
        <Link
          to={{ pathname: "https://www.github.com/nemad88/" }}
          target="_blank"
        >
          <S.GitHubIcon />
        </Link>

        <a href="mailto:sayhi@adamgerman.hu">
          <S.MailIcon />
        </a>
      </S.IconContainerLeft>
      <S.IconContainerRight currentPage={currentPage === "contact"}>
        <Link
          to={{ pathname: "https://www.linkedin.com/in/nemethadam88/" }}
          target="_blank"
        >
          <S.LinkedInIcon />
        </Link>
        <Link
          to={{ pathname: "http://www.adamgerman.hu/cv/cv-english.pdf" }}
          target="_blank"
        >
          <S.CVIcon />
        </Link>
      </S.IconContainerRight>
    </>
  );
};

export default Contact;
