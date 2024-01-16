import { useQuery } from "@tanstack/react-query";
import axios from "axios";

interface UserInfoType {
  createdAt: string;
  diarieslength: number;
  email: string;
  follower: number;
  followering: number;
  id: number;
  loginCheck: boolean;
  name: string | null;
  nickname: string;
  postslength: number;
  profileImg: string;
}

const UserInfoQuery = () => {
  const getMyInfo = async () => {
    try {
      const response = await axios.get<UserInfoType>(`/page/user-info`);
      return response.data;
    } catch (error) {
      console.error(error);
    }
  };
  const { data, isLoading, isFetching } = useQuery({
    queryKey: ["myUserInfo"],
    queryFn: getMyInfo,
    staleTime: Infinity,
  });

  return { ...data, isLoading, isFetching };
};

export default UserInfoQuery;
