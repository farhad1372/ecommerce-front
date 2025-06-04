import { QueryClient } from '@tanstack/react-query';

const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            staleTime: 5 * 60 * 1000, // داده‌ها تا ۵ دقیقه تازه حساب می‌شن
            refetchOnWindowFocus: false,
        },
    },
});

export default queryClient;