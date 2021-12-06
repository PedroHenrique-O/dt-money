import styled from "styled-components";
import { darken, transparentize } from "polished";

export const Container = styled.form`
  h2 {
    color: var(--text-title);
    font-size: 1.5rem;
    margin-bottom: 2rem;
  }
  input {
    width: 100%;
    padding: 0 1.5rem;
    height: 4rem;
    border-radius: 0.25rem;
    color: #000;
    border: 1px solid #d7d7d7;
    font-weight: 400;
    font-size: 1rem;
    &::placeholder {
      color: var(--text-body);
    }
    & + input {
      margin-top: 1rem;
    }
  }

  .submit-btn {
    width: 100%;
    padding: 0 1.5rem;
    height: 4rem;
    background-color: var(--green);
    border-radius: 0.25rem;
    border: 0;
    color: #fff;
    font-size: 1rem;
    margin-top: 1.5rem;
    font-weight: 600;
    transition: background-color 0.6s;

    &:hover {
      background-color: ${darken(0.2, "#33cc95")};
    }
  }
`;

export const TransactionContainer = styled.div`
  margin: 1rem 0;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0.5rem;
`;

interface RadioBoxProps {
  isActive: boolean;
  isActiveColor: "green" | "red";
}

const colors = {
  green: "#33cc95",
  red: " #e52e4d",
};

export const RadioBox = styled.button<RadioBoxProps>`
  height: 4rem;
  border: 1px solid #d7d7d7;
  border-radius: 0.25rem;
  transition: border-color 0.2s;

  background: ${(props) =>
    props.isActive
      ? transparentize(0.9, colors[props.isActiveColor])
      : "transparent"};
  align-items: center;
  justify-content: center;
  transition: border-color 0.6s;

  &:hover {
    border-color: ${darken(0.6, "#d7d7d7")};
  }
  img {
    width: 20%;
    height: 20px;
    font-size: 1rem;
    color: var(--text-title);
  }
`;
