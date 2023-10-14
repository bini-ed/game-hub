import { Heading, Text } from "@chakra-ui/react";

interface Props {
  genre?: string | null;
  platform?: string | null;
}
const GameHeading = ({ genre, platform }: Props) => {
  return (
    <Heading marginY={5} fontSize={"3xl"}>
      {(platform || "") + " " + (genre || "")} Games
    </Heading>
  );
};

export default GameHeading;
