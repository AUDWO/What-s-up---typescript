import styled from "styled-components";
import marginDynamic from "../customCssFunc/marginCustom";
import paddingDynamic from "../customCssFunc/paddingCustom";

type Direction = {
  t?: string;
  l?: string;
  b?: string;
  r?: string;
};

export const PostsInfoWrapper = styled.div`
  display: flex;
  justify-content: center;
  height: 5%;
  border-top: 0.5px solid #dbdbdb;
`;

export const CountWrapper = styled.div<Direction>`
  display: flex;
  align-items: center;
  height: 100%;
  ${(props) => marginDynamic(props)};
`;

export const CountTitle = styled.div<{ type: string }>`
  height: 100%;
  padding-top: 10px;

  border-top: ${(props) => (props.type ? "1.5px solid black" : "")};
  font-size: 15px;
  cursor: pointer;
`;

export const CountNumber = styled.div<Direction>`
  height: 100%;
  font-size: 15px;
  font-weight: 700;
  ${(props) => marginDynamic(props)};
  ${(props) => paddingDynamic(props)};
`;
