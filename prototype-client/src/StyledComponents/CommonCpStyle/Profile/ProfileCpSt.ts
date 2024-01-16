import styled from "styled-components";
import { FaUser } from "react-icons/fa6";
import marginDynamic from "../../customCssFunc/marginCustom";
import paddingDynamic from "../../customCssFunc/paddingCustom";

type Direction = {
  t?: string;
  r?: string;
  b?: string;
  l?: string;
};

export const ProfileWrapper = styled.div<{
  p: string;
  zI: string;
  width: string;
  l: string;
  t: string;
  jC: string;
  fD: string;
  mg: Direction;
  pd: Direction;
}>`
  cursor: pointer;
  position: ${(props) => (props.p ? props.p : "")};
  z-index: ${(props) => (props.zI ? props.zI : "")};
  width: ${(props) => props.width};
  left: ${(props) => (props.l ? props.l : "")};
  top: ${(props) => (props.t ? props.t : "")};
  display: flex;
  align-items: center;
  justify-content: ${(props) => (props.jC ? props.jC : "space-between")};
  flex-direction: ${(props) => (props.fD ? props.fD : "")};
  ${(props) => marginDynamic(props.mg)};
  ${(props) => paddingDynamic(props.pd)};
`;

export const ProfileImgWrapper = styled.div<{
  mg: Direction;
  w: string;
  h: string;
  b: string;
}>`
  display: flex;
  align-items: center;
  justify-content: center;
  ${(props) => marginDynamic(props.mg)};
  width: ${(props) => props.w};
  height: ${(props) => props.h};
  border-radius: 50%;
  border: ${(props) => (props.b === "on" ? "3px solid #f7dd07" : "")};
`;

export const ProfileImg = styled.img<{
  w: string;
  h: string;
  zI: string;
  mg: { t?: string; l?: string; b?: string; r?: string };
  bd: string;
}>`
  width: ${(props) => props.w};
  height: ${(props) => props.h};
  z-index: ${(props) => (props.zI ? props.zI : "")};
  ${(props) => marginDynamic(props.mg)};
  border: ${(props) => (props.bd === "on" ? "2px solid black" : "")};
  border-radius: 50%;
  object-fit: cover;
`;

export const BasicProfileImg = styled(FaUser)<{
  fS: string;
  zI: string;
  mg: Direction;
}>`
  font-size: ${(props) => props.fS};
  z-index: ${(props) => (props.zI ? props.zI : "")};
  ${(props) => marginDynamic(props.mg)};
  border-radius: 50%;
  color: white;
  padding: 3px;
  background-color: black;
  border: 1px solid black;
`;

export const ProfileNickname = styled.div<{
  bC: string;
  c: string;
  bR: string;
  fS: string;
  fW: string;
  h: string;
  fF: string;
  mg: Direction;
  pd: Direction;
}>`
  display: flex;
  align-items: center;
  background-color: ${(props) => (props.bC ? props.bC : "none")};
  color: ${(props) => (props.c ? props.c : "black")};
  border-radius: ${(props) => (props.bR ? props.bR : "none")};
  font-size: ${(props) => (props.fS ? props.fS : "")};
  font-weight:${(props) => (props.fW ? props.fW : "")}
  height: ${(props) => props.h};
  font-family:${(props) => props.fF};
  ${(props) => marginDynamic(props.mg)};
  ${(props) => paddingDynamic(props.pd)};
  
`;
