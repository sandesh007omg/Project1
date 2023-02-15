import styled from 'styled-components';

export const CardDetailsContainer = styled.section`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  .details {
    .amount {
      font-weight: 600;
      font-size: 36px;
      line-height: 150%;
    }

    .comparison {
      font-weight: 400;
      font-size: 14px;
      line-height: 150%;
      color: #a7a9bc;

      span {
        font-weight: 600;
        font-size: 12px;
        line-height: 150%;
        padding: 0 4px;

        &.increment {
          color: #287d3c;
          border: 1px solid #5aca75;
          border-radius: 2px;
          &::before {
            content: '+';
          }
        }

        &.decrement {
          color: #da1414;
          border: 1px solid #f48989;
          border-radius: 2px;
          &::before {
            content: '+';
          }
        }
      }
    }
  }

  .footer {
    border-top: 1px solid #e7e7ed;
    padding-top: 1rem;
    .footer-amount {
      font-weight: 600;
      font-size: 24px;
      line-height: 150%;
      color: #6b6c7e;
    }
    .footer-desc {
      font-weight: 600;
      font-size: 10px;
      line-height: 150%;
      color: #a7a9bc;
    }
  }
`;
