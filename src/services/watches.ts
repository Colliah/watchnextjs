import { fetcher } from "@/lib/fetcher"

export const watchesApi = {
    fetchAll: async () => {
        const data = await fetcher("/watches")
        return data
    }
}