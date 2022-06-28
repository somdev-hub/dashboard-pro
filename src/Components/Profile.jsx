import React from "react";
import styled from "styled-components";
import AvatarImage2 from "../Assets/AvatarImage2.jpg";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { cardStyle } from "./ReusableStyles";

const Profile = () => {
  return (
    <Section>
      <div className="img">
        <img src={AvatarImage2} alt="" />
      </div>
      <div className="title">
        <h2>Somdev Behera</h2>
        <h5>
          <HiOutlineLocationMarker /> Patnagarh, Odisha
        </h5>
      </div>
      <div className="info">
        <div className="container">
          <h5>Days at work</h5>
          <h3>423</h3>
        </div>
        <div className="container">
          <h5>Hours</h5>
          <h3>87</h3>
        </div>
      </div>
    </Section>
  );
};

const Section = styled.section`
  ${cardStyle};
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  .img {
    max-width: 10rem;
    overflow: hidden;
    border-radius: 20rem;
    img {
      height: 10rem;
      width: 10rem;
      object-fit: cover;
      border-radius: 20rem;
      transition: 0.5s ease-in-out;
    }
    &:hover {
      img {
        transform: scale(1.1);
      }
    }
  }
  .title{
    text-align: center;
    h2,h5{
      color: #ffc107;
      font-family: "Permanent Marker", cursive;
      letter-spacing: 0.3rem;
    }
    h5{
      letter-spacing: 0.2rem;
    }
  }
  .info{
    display: flex;
    gap: 1rem;
    .container{
      text-align: center;
    }
  }
`;

export default Profile;
