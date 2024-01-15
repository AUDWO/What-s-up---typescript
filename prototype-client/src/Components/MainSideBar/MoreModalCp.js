import React, { forwardRef, useRef } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useSetRecoilState } from "recoil";

//Styled-Components
import {
  MoreModalWrapper,
  MoreOptionWrapper,
  MoreOption,
} from "../../StyledComponents/MainSideBar/MoreModalCpSt";

//Atom
import ModalOpenAtom from "../../store/ModalOpenAtom";
import useModalOutClickEffect from "../../customHooks/useModalEffect";

import CustomUseMutation from "../../customHooks/CustomUseMutation";

const MoreModalCp = forwardRef((props, ref) => {
  const navigate = useNavigate();
  const moreModalRef = useRef(null);

  const deleteUserInfo = async () => {
    try {
      return axios.post("/auth/logout");
    } catch (error) {
      console.error(error);
    }
  };

  const { mutate } = CustomUseMutation(
    deleteUserInfo,
    ["myUserInfo", "postContentsInfo", "diaryContentsInfo"],
    () => {
      setMoreModalOpen(false);
      navigate("/");
    }
  );

  const handleLogOut = async () => {
    mutate();
  };

  useModalOutClickEffect(moreModalRef, () => {
    setMoreModalOpen(false);
  });

  const setMoreModalOpen = useSetRecoilState(ModalOpenAtom("moreModal"));
  return (
    <MoreModalWrapper ref={moreModalRef}>
      <MoreOptionWrapper>
        <MoreOption>문제신고</MoreOption>
      </MoreOptionWrapper>
      <MoreOptionWrapper>
        <MoreOption>커뮤니티</MoreOption>
      </MoreOptionWrapper>
      <MoreOptionWrapper
        onClick={() => {
          handleLogOut();
        }}
      >
        <MoreOption>로그아웃</MoreOption>
      </MoreOptionWrapper>
    </MoreModalWrapper>
  );
});

export default MoreModalCp;
