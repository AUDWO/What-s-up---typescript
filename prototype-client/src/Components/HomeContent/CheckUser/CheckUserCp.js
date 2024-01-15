import React from "react";
import SectionContainer from "../../../StyledComponents/HomeStyle/SectionContainer";
import UserCp from "./UserCp";
import styled from "styled-components";
import NoUserCp from "./NoUserCp";
import LoadingNotLoginCheckUserCp from "./LoadingNotLoginCheckUserCp";
import LoadingCheckUserCp from "./LoadingCheckUserCp";
import UserInfoQuery from "../../../customHooks/userInfoQuery";

const CheckUserCp = () => {
  const userInfo = UserInfoQuery();

  if (userInfo.isLoading) {
    console.log("isLoading - CheckUserCp ");
    return (
      <SectionContainer3 width={"320px"}>
        <section>
          <LoadingNotLoginCheckUserCp />
        </section>
      </SectionContainer3>
    );
  }

  if (userInfo.isFetching) {
    console.log("isFetching - CheckUserCp");
    return (
      <SectionContainer3 width={"320px"}>
        <section>
          <LoadingCheckUserCp />
        </section>
      </SectionContainer3>
    );
  }

  if (!userInfo.loginCheck && userInfo.loginCheck !== undefined) {
    return (
      <SectionContainer3 width={"320px"}>
        <section>
          <NoUserCp />
        </section>
      </SectionContainer3>
    );
  }

  if (userInfo.loginCheck) {
    return (
      <SectionContainer3 width={"320px"}>
        <section>
          <UserCp userInfo={userInfo} />
        </section>
      </SectionContainer3>
    );
  }
  return (
    <SectionContainer3 width={"320px"}>
      <section>
        <LoadingCheckUserCp />
      </section>
    </SectionContainer3>
  );
};

export default CheckUserCp;

export const SectionContainer3 = styled(SectionContainer)`
  position: absolute;
  right: 0;
  z-index: 1;
  width: ${(props) => props.width};
`;
