import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

type Album = {
  userId: number;
  id: number;
  title: string;
};

const fetchAlbums = async () => {
  const result = await axios.get<Album[]>(
    "https://jsonplaceholder.typicode.com/albums"
  );

  await sleep(1000);

  return result.data;
};

export const AlbumList = () => {
  const { data } = useQuery<Album[]>(["albums"], fetchAlbums);
  return (
    <div
      style={{
        height: "300px",
        border: "2px solid gray",
        background: "cornsilk",
        overflowY: "scroll",
      }}
    >
      <h2>AlbumList</h2>
      <p>ReactQuery</p>
      {data?.map((album) => (
        <div key={album.id}>{album.title}</div>
      ))}
    </div>
  );
};
