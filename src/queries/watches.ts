import { watchesApi } from "@/services/watches";
import { useQuery } from "@tanstack/react-query";

export const useWatchesQuery = () => useQuery({
    queryKey: ["watches"],
    queryFn: watchesApi.fetchAll
})