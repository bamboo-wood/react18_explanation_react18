import { useQuery } from "@tanstack/react-query";
import axios from "axios";

type Album = {
  userId: number;
  id: number;
  title: string;
};

const fetchAlbums = async () => {
  const result = await axios.get<Album[]>(
    "https://jsonplaceholder.typicode.com/albums"
  );
  return result.data;
};

export const ReactQuery = () => {
  const { isLoading, error, data } = useQuery<Album[]>(["albums"], fetchAlbums);

  // if (isLoading) return <div>Loading...</div>;
  // if (error) return <div>Error!</div>;

  return (
    <div>
      <p>ReactQuery</p>
      {data?.map((album) => (
        <div key={album.id}>{album.title}</div>
      ))}
    </div>
  );
};
