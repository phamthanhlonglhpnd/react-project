import { useCallback, useEffect, useState } from "react";
import userApi from "./apis/user.api";
import Cart from "./components/Cart";
import Loading from "./components/Loading";
import NoMoreData from "./components/NoMoreData";
import { User } from "./types/common.type";

function App() {
  const [data, setData] = useState<User[]>([]);
  const [page, setPage] = useState<number>(1);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [hasMoreData, setHasMoreData] = useState<boolean>(true);

  const loadMoreData = async () => {
    try {
      setIsLoading(true);
      const response = await userApi.getUsers(page);
      setData((currentData: User[]) => [
        ...currentData,
        ...response?.data?.data?.data,
      ]);
      setPage((currentPage) => currentPage + 1);
      setIsLoading(false);
      setHasMoreData(response?.data?.data?.hasMoreData);
    } catch (error) {
      setData([]);
    }
  };

  useEffect(() => {
    loadMoreData();
  }, []);

  const onScroll = useCallback(async () => {
    if (
      window.innerHeight + window.scrollY >= document.body.offsetHeight - 100 &&
      !isLoading &&
      hasMoreData
    ) {
      await loadMoreData();
    }
  }, [isLoading, page, hasMoreData]);

  useEffect(() => {
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, [onScroll]);

  return (
    <div className="flex justify-center items-center min-h-screen flex-col gap-10 py-20 bg-slate-200">
      {data.map((user: User) => (
        <div key={user.id}>
          <Cart user={user} />
        </div>
      ))}
      {isLoading ? <Loading /> : <NoMoreData />}
    </div>
  );
}

export default App;
