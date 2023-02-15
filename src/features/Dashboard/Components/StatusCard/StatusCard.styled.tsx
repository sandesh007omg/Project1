import styled from 'styled-components';

export const StatusCardContainer = styled.div`
  .amount {
    font-weight: 600;
    font-size: 24px;
    line-height: 150%;
    &.outgoing {
      color: #da1414;
    }
    &.incoming {
      color: #287d3c;
    }
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
          content: '-';
        }
      }
    }
  }
`;
