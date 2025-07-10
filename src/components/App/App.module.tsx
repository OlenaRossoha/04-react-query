/*import { useState } from "react";
import { fetchMovies } from "../../services/movieService";
import type { MoviesResponse, Movie } from "../../types/movie";
import { useQuery } from "@tanstack/react-query";
import SearchBar from "../SearchBar/SearchBar";
import MovieGrid from "../MovieGrid/MovieGrid";
import Loader from "../Loader/Loader";
import ErrorMessage from "../ErrorMessage/ErrorMessage";
import MovieModal from "../MovieModal/MovieModal";
import ReactPaginate from "react-paginate";
import { Toaster, toast } from "react-hot-toast";
import styles from "./App.module.css";

export default function App() {
  const [query, setQuery] = useState("");
  const [page, setPage] = useState(1);
  const [selected, setSelected] = useState<Movie | null>(null);

  const { data, isLoading, isError } = useQuery<MoviesResponse, Error>({
    queryKey: ["movies", query, page],
    queryFn: () => fetchMovies(query, page),
    enabled: !!query,
    onError: () => toast.error("No movies found for your request."),
  });

  const handleSubmit = (q: string) => {
    setQuery(q);
    setPage(1);
  };

  const handlePage = ({ selected }: { selected: number }) => {
    setPage(selected + 1);
  };

  return (
    <>
      <SearchBar onSubmit={handleSubmit} />
      {isLoading && <Loader />}
      {isError && <ErrorMessage />}
      {data && data.results.length > 0 && (
        <>
          { Пагінація зверху }
          {data.total_pages > 1 && (
            <ReactPaginate
              pageCount={data.total_pages}
              pageRangeDisplayed={5}
              marginPagesDisplayed={1}
              onPageChange={handlePage}
              forcePage={page - 1}
              containerClassName={styles.pagination}
              activeClassName={styles.active}
              nextLabel="→"
              previousLabel="←"
            />
          )}

          { Сітка з фільмами }
          <MovieGrid movies={data.results} onSelect={setSelected} />
        </>
      )}
      {selected && (
        <MovieModal movie={selected} onClose={() => setSelected(null)} />
      )}
      <Toaster position="top-right" />
    </>
  );
}*/

import { useState, useEffect } from "react";
import { fetchMovies } from "../../services/movieService";
import type { MoviesResponse, Movie } from "../../types/movie";
import { useQuery } from "@tanstack/react-query";
import SearchBar from "../SearchBar/SearchBar";
import MovieGrid from "../MovieGrid/MovieGrid";
import Loader from "../Loader/Loader";
import ErrorMessage from "../ErrorMessage/ErrorMessage";
import MovieModal from "../MovieModal/MovieModal";
import ReactPaginate from "react-paginate";
import { Toaster, toast } from "react-hot-toast";
import styles from "./App.module.css";

export default function App() {
  const [query, setQuery] = useState("");
  const [page, setPage] = useState(1);
  const [selected, setSelected] = useState<Movie | null>(null);

  const { data, isLoading, isError } = useQuery({
    queryKey: ["movies", query, page],
    queryFn: (): Promise<MoviesResponse> => fetchMovies(query, page),
    enabled: !!query,
  });

  // Показываем ошибку через эффект
  useEffect(() => {
    if (isError) {
      toast.error("No movies found for your request.");
    }
  }, [isError]);

  // Приведение типа data к MoviesResponse | undefined для TS
  const typedData = data as MoviesResponse | undefined;

  const handleSubmit = (q: string) => {
    setQuery(q);
    setPage(1);
  };

  const handlePage = ({ selected }: { selected: number }) => {
    setPage(selected + 1);
  };

  return (
    <>
      <SearchBar onSubmit={handleSubmit} />
      {isLoading && <Loader />}
      {isError && <ErrorMessage />}
      {typedData?.results?.length ? (
        <>
          {typedData.total_pages > 1 && (
            <ReactPaginate
              pageCount={typedData.total_pages}
              pageRangeDisplayed={5}
              marginPagesDisplayed={1}
              onPageChange={handlePage}
              forcePage={page - 1}
              containerClassName={styles.pagination}
              activeClassName={styles.active}
              nextLabel="→"
              previousLabel="←"
            />
          )}
          <MovieGrid movies={typedData.results} onSelect={setSelected} />
        </>
      ) : null}
      {selected && (
        <MovieModal movie={selected} onClose={() => setSelected(null)} />
      )}
      <Toaster position="top-right" />
    </>
  );
}
