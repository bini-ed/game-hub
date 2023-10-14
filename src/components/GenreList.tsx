import useGenres, { GenreType } from "../hooks/useGenres";
import {
  Button,
  HStack,
  Heading,
  Image,
  List,
  ListItem,
  Spinner,
  Text,
} from "@chakra-ui/react";
import getCroppedImageUrl from "../services/image-url";

interface Props {
  selectedGenre: GenreType | null;
  onSelectGenre: (genre: GenreType) => void;
}
const GenreList = ({ onSelectGenre, selectedGenre }: Props) => {
  const { error, data, isLoading } = useGenres();
  if (isLoading) return <Spinner />;
  return (
    <>
      {error && <Text>{error}</Text>}
      <Heading fontSize={"2xl"} marginBottom={3}>
        Genres
      </Heading>
      <List>
        {data.map((genre) => (
          <ListItem key={genre.id} paddingY={"5px"}>
            <HStack>
              <Image
                objectFit={"cover"}
                boxSize={"32px"}
                src={getCroppedImageUrl(genre.image_background)}
                overflow={"hidden"}
                borderRadius={5}
              ></Image>
              <Button
                whiteSpace={"normal"}
                textAlign={"left"}
                fontWeight={genre.id === selectedGenre?.id ? "bold" : "normal"}
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
