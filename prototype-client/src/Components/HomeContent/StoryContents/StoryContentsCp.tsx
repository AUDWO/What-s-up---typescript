import axios, { AxiosError, AxiosResponse } from "axios";
import { Link } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";

//Styled-Components
import {
  StoryWrapper,
  StoryContents,
} from "../../../StyledComponents/HomeContentStyle/StoryContentsCpSt";

//Component
import StoryContentCp from "./StoryContentCp";

//Atom
import MakeStoryCp from "./MakeStoryCp";

interface StoryData {
  User: {
    id: number;
    nickname: string;
    profileImg: string | null;
  };
  UserId: number;
  contactCheck: null | boolean;
  content: string;
  id: number;
  img: string;
  updatedAt: string;
}

const StoryContentsCp = () => {
  const getAllStory = async () => {
    try {
      const response = await axios.get<StoryData[], AxiosResponse<StoryData[]>>(
        "/page/render-story"
      );
      return response.data;
    } catch (error) {
      console.error(error);
    }
  };

  const { data: storyContentsInfo, isLoading } = useQuery({
    queryKey: ["storyContents"],
    queryFn: getAllStory,
  });

  if (isLoading) {
    return (
      <StoryWrapper>
        <StoryContents>
          <StoryContentCp backC={"#DDD9D9"} />
          <StoryContentCp backC={"#DDD9D9"} />
          <StoryContentCp backC={"#DDD9D9"} />
          <StoryContentCp backC={"#DDD9D9"} />
          <StoryContentCp backC={"#DDD9D9"} />
        </StoryContents>
      </StoryWrapper>
    );
  }

  return (
    <StoryWrapper>
      <StoryContents>
        <MakeStoryCp />
        {storyContentsInfo?.map((story) => {
          return (
            <Link to={`/more-story/${story.id}`} key={story.id}>
              <StoryContentCp story={story} />
            </Link>
          );
        })}
      </StoryContents>
    </StoryWrapper>
  );
};

export default StoryContentsCp;
