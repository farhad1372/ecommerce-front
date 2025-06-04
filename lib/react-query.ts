import { QueryClient } from '@tanstack/react-query';

const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            retry: 1, // Retry failed requests once
            staleTime: 1 * 60 * 1000, // Data stays fresh for 1 minutes
        },
    },
});

export default queryClient;