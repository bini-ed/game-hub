import useGenres, { GenreType } from "../hooks/useGenres";
import {
  Button,
  HStack,
  Image,
  List,
  ListItem,
  Spinner,
  Text,
} from "@chakra-ui/react";
import getCroppedImageUrl from "../services/image-url";

interface Props {
  onSelectGenre: (genre: GenreType) => void;
}
const GenreList = ({ onSelectGenre }: Props) => {
  const { error, data, isLoading } = useGenres();
  if (isLoading) return <Spinner />;
  return (
    <>
      {error && <Text>{error}</Text>}
      <List>
        {data.map((genre) => (
          <ListItem key={genre.id} paddingY={"5px"}>
            <HStack>
              <Image
                boxSize={"32px"}
                src={getCroppedImageUrl(genre.image_background)}
                overflow={"hidden"}
                borderRadius={5}
              ></Image>
              <Button
                fontSize="lg"
                variant="link"
                onClick={() => onSelectGenre(genre)}
              >
                {genre.name}
              </Button>
            </HStack>
          </ListItem>
        ))}
      </List>
    </>
  );
};

export default GenreList;
