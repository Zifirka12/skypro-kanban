import styled from "styled-components";

export const PopUserContainer = styled.div`
  display: ${({ $isVisible }) =>
    $isVisible ? "block" : "none"}; /* Используем пропс */
  position: absolute;
  top: 61px;
  right: 176px;
  width: 213px;
  height: 205px;
  border-radius: 10px;
  border: 0.7px solid rgba(148, 166, 190, 0.4);
  background: #fff;
  box-shadow: 0px 10px 39px 0px rgba(26, 56, 101, 0.21);
  padding: 34px;
  text-align: center;
  z-index: 100;

  &.target {
    display: block;
  }
`;

export const PopUserName = styled.p`
  color: #000;
  font-size: 14px;
  font-weight: 500;
  line-height: 21px;
  letter-spacing: -0.14px;
  margin-bottom: 4px;
`;

export const PopUserMail = styled.p`
  color: #94a6be;
  font-size: 14px;
  line-height: 21px;
  letter-spacing: -0.14px;
  margin-bottom: 10px;
`;

export const PopUserTheme = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 30px;

  & p {
    /* Стили для <p> внутри PopUserTheme */
    color: #000;
    font-size: 14px;
    line-height: 21px;
    letter-spacing: -0.14px;
  }

  & input[type="checkbox"] {
    /* Стили для input[type="checkbox"] */
    position: relative;
    width: 24px;
    height: 13px;
    border-radius: 100px;
    background: #eaeef6;
    outline: none;
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
  }

  & input[type="checkbox"]::before {
    /* Стили для pseudo-элемента ::before */
    content: "";
    position: absolute;
    top: 1px;
    left: 1px;
    width: 11px;
    height: 11px;
    border-radius: 50%;
    background-color: #94a6be;
    transition: 0.5s;
  }

  & input:checked[type="checkbox"]::before {
    /* Стили для :checked состояния */
    left: 12px;
  }
`;

// 5. Стили для <button type="button" className="_hover03">
// Класс `_hover03` является общим и может быть перенесен в GlobalStyles,
// если он используется в других местах. Если нет, то его стили можно встроить.
// Пока встроим.
export const PopUserButton = styled.button`
  width: 72px;
  height: 30px;
  background: transparent;
  color: #565eef;
  border-radius: 4px;
  border: 1px solid #565eef;

  & a {
    /* Стили для <a> внутри кнопки */
    color: #565eef;
  }

  &:hover {
    background-color: #33399b;
    color: #ffffff;
  }
  &:hover a {
    /* Стили для <a> внутри кнопки при hover */
    color: #ffffff;
  }
`;