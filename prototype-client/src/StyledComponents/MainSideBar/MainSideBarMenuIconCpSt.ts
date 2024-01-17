import styled, { css } from "styled-components";
import { BiHomeAlt2 } from "react-icons/bi";
import { BsSearch } from "react-icons/bs";
import { BsJournalBookmark } from "react-icons/bs";
import { AiOutlineAppstoreAdd } from "react-icons/ai";
import { IoReorderThreeSharp } from "react-icons/io5";
import { BsPencilSquare } from "react-icons/bs";
import { HiOutlineUserCircle } from "react-icons/hi";

import marginDynamic from "../customCssFunc/marginCustom";

let cursorPointer = css`
  cursor: pointer;
`;

const size = css`
  font-size: 25px;
  fontweight: 700;
`;

type Direction = {
  t?: string;
  b?: string;
  l?: string;
  r?: string;
};

export const HomeIcon = styled(BiHomeAlt2)<Direction>`
  font-weight: 800;
  ${cursorPointer};
  ${size};
  ${(props) => marginDynamic(props)};
  m
`;

export const SearchIcon = styled(BsSearch)<Direction>`
  ${cursorPointer};
  ${size};
  ${(props) => marginDynamic(props)};
  position: relative;
`;

export const DiaryIcon = styled(BsJournalBookmark)<Direction>`
  ${cursorPointer};
  ${size};
  ${(props) => marginDynamic(props)};
`;

export const NewPostIcon = styled(AiOutlineAppstoreAdd)<Direction>`
  ${cursorPointer};
  ${size};
  ${(props) => marginDynamic(props)};
`;

export const KeepDiaryIcon = styled(BsPencilSquare)<Direction>`
  ${cursorPointer};
  ${size};
  ${(props) => marginDynamic(props)};
`;

export const UserIcon = styled(HiOutlineUserCircle)<Direction>`
  ${cursorPointer};
  font-size: 30px;
  ${(props) => marginDynamic(props)};
`;

export const MoreIcon = styled(IoReorderThreeSharp)<Direction>`
  ${cursorPointer};
  ${size};
  ${(props) => marginDynamic(props)};
  position: relative;
`;
