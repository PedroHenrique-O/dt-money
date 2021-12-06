import styled from "styled-components";

export const Container = styled.div`
  margin-top: 4rem;
  //width: 800px;
  max-width: 1120px;
  margin: 0 auto;
  padding: 2.5rem 1rem;

  table {
    width: 100%;

    border-spacing: 0 0.5rem;

    th {
      background: var(--shape);
      border: 1px solid #cccccc;

      color: var(--text-body);
      font-weight: 700;
      padding: 1rem 2rem;
      text-align: left;
      line-height: 1.5rem;
    }
    td {
      padding: 1rem 2rem;
      border: 0;
      background: #fff;
      color: var(--text-body);
      border-radius: 0.25rem;
      &:first-child {
        color: var(--text-title);
      }
      &.deposity {
        color: green;
      }
      &.withdraw {
        color: red;
      }
    }
  }
`;
