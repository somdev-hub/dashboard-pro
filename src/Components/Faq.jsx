import React from "react";
import styled from "styled-components";
import { IoIosArrowForward } from "react-icons/io";
import { AiFillCalendar } from "react-icons/ai";
import { MdTimelapse } from "react-icons/md";
import { IoMdCash } from "react-icons/io";
import { cardStyle } from "./ReusableStyles";

const Faq = () => {
  const faqs = [
    {
      icon: <AiFillCalendar />,
      Text: "How to manage time and good marks for trips",
    },
    {
      icon: <MdTimelapse />,
      Text: "How to regulate transactions over time",
    },
    {
      icon: <IoMdCash />,
      Text: "Withdrawing money through ATM",
    },
  ];
  return (
    <Section>
      <div className="title">
        <h2>Information for drivers</h2>
      </div>
      <div className="faqs">
        {faqs.map((faq,index) => {
          return (
            <div className="faq" key={index}>
              <div className="info">
                {faq.icon}
                <h4>{faq.Text}</h4>
              </div>
              <IoIosArrowForward />
            </div>
          );
        })}
      </div>
    </Section>
  );
};

const Section = styled.section`
  ${cardStyle};
  .title {
    h2 {
      color: #ffc107;
      font-family: "Permanent Marker", cursive;
      letter-spacing: 0.3rem;
    }
  }
  .faqs {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    margin-top: 1rem;
    .faq {
      display: flex;
      align-items: center;
      justify-content: space-between;
      cursor: pointer;
      .info {
        display: flex;
        gap: 1rem;
        align-items: center;
      }
      svg {
        font-size: 1.4rem;
      }
      &::nth-of-type(2) {
        border-top: 0.01rem solid #6e6e6e;
        border-bottom: 0.01rem solid #6e6e6e;
        padding: 0.8rem 0;
      }
    }
  }
  @media screen and (min-width:280px) and (max-width:1080px){
    svg{
      font-size:2rem !important;
    }
  }
`;

export default Faq;
