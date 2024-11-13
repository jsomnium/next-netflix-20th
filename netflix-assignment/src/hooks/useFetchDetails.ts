import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

const fetchDetails = async (type: string, id: string) => {
    const response = await axios.get(`/details/${type}/${id}`);
    return response.data;
};

export const useFetchDetails = (type: 'movie' | 'tv', id: string) => {
    return useQuery({
        queryKey: ['details', type, id],
        queryFn: () => fetchDetails(type, id),
        staleTime: 1000 * 60 * 60,
    });
};