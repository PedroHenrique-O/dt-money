import styled from "styled-components";

export const Container = styled.div`
  margin-top: 4rem;
  table {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    border-spacing: 0 0.5rem;

    th {
      color: var(--text-body);
      font-weight: 400;
      padding: 1rem 2rem;
      line-height: 1.5rem;
      tr {
        display: flex;
        justify-content: left;
      }
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
