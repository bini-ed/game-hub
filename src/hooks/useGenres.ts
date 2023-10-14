import { useEffect, useState } from "react";
import useData from "./useData";

export interface GenreType {
  id: number;
  name: string;
  image_background: string;
}
const useGenres = () => useData<GenreType>("/genres");

export default useGenres;
