import styled from 'styled-components';

export const SalesPersonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
  padding-bottom: 10px;

  .person-details {
    display: flex;
    gap: 0.5rem;

    align-items: center;
    img {
      height: 24px;
      width: 24px;
      object-fit: cover;
    }
    span {
      font-weight: 400;
      font-size: 10px;
      line-height: 150%;
    }
  }

  .amount {
    font-weight: 600;
    font-size: 12px;
    line-height: 150%;
  }
`;

export const TableCardContainer = styled.div`
  ul {
    li {
      &:nth-child(odd) {
        background: #f7f8f9;
        border-radius: 4px;
      }
      padding: 9.25px 8px;
      display: flex;
      align-items: center;
      justify-content: space-between;

      font-size: 12px;
      line-height: 150%;
      color: #272833;
      .details {
        font-weight: 400;
      }

      .amount {
        font-weight: 600;
      }
    }
  }
`;
