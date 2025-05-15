import { dehydrate, HydrationBoundary, useQueryClient } from "@tanstack/react-query"
import WatchesContainer from "./_component/watch-container";
import { watchesApi } from "@/services/watches";

export default async function WatchesPage() {
    const queryClient = useQueryClient()
    await queryClient.prefetchQuery({
        queryKey: ['users'],
        queryFn: watchesApi.fetchAll
    })

    const dehydratedState = dehydrate(queryClient);

    return (
        <HydrationBoundary state={dehydratedState}>
            <WatchesContainer />
        </HydrationBoundary>
    )
}
