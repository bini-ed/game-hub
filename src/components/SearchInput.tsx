import { Input, InputGroup, InputRightElement } from "@chakra-ui/react";
import { useRef } from "react";
import { BsSearch } from "react-icons/bs";

interface Props {
  onSearch: (search: string) => void;
  searchText: string | null;
}
const SearchInput = ({ onSearch, searchText }: Props) => {
  const ref = useRef<HTMLInputElement>(null);
  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        if (ref.current) onSearch(ref.current.value);
      }}
    >
      <InputGroup>
        <InputRightElement children={<BsSearch />} />
        <Input
          ref={ref}
          variant={"filled"}
          borderRadius={20}
          placeholder="Search"
        />
      </InputGroup>
    </form>
  );
};

export default SearchInput;
