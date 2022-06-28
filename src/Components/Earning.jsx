import React from "react";
import styled from "styled-components";
import { AreaChart, Area, Tooltip, ResponsiveContainer } from "recharts";
import { cardStyle } from "./ReusableStyles";

const data = [
  {
    data: 4500,
  },
  {
    data: 4000,
  },
  {
    data: 5000,
  },
  {
    data: 4760,
  },
  {
    data: 6000,
  },
  {
    data: 5500,
  },
  {
    data: 6590,
  },
  {
    data: 4900,
  },
  {
    data: 5100,
  },
  {
    data: 7000,
  },
  {
    data: 6980,
  },
  {
    data: 6900,
  },
  {
    data: 7830,
  },
  {
    data: 8300,
  },
  {
    data: 6390,
  },
  {
    data: 7111,
  },
  {
    data: 6478,
  },
  {
    data: 8492,
  },
  {
    data: 8122,
  },
  {
    data: 6101,
  },
  {
    data: 7689,
  },
];

const Earning = () => {
  return (
    <Section>
      <div className="top">
        <div className="info">
          <h4>This months earnings</h4>
          <h1>$782.23</h1>
          <div className="growth">
            <span>+2.46%</span>
          </div>
        </div>
      </div>
      <div className="chart">
        <ResponsiveContainer>
          <AreaChart
            width={500}
            height={400}
            data={data}
            margin={{ top: 0, left: 0, right: 0, bottom: 0 }}
          >
            <Tooltip cursor={false} />
            <Area
              animationBegin={800}
              animationDuration={2000}
              type="monotone"
              dataKey="data"
              stroke="#ffc107"
              fill="#8068233e"
              strokeWidth={4}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </Section>
  );
};

const Section = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 20rem;
  ${cardStyle};
  padding: 2rem 0 0 0;
  .top {
    .info {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 0.2rem;
      h1 {
        font-size: 2rem;
      }
      .growth {
        background-color: #d7e31e1d;
        padding: 0.5rem;
        border-radius: 1rem;
        transition: 0.3s ease-in-out;
        &:hover {
          background-color: #ffc107;
          span {
            color: black;
          }
        }
        span {
          color: #ffc107;
        }
      }
    }
  }
  .chart {
    height: 70%;
    .recharts-default-tooltip {
      background-color: black !important;
      border-color: black !important;
    }
  }
`;

export default Earning;
