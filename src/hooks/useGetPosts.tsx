import { useEffect, useState } from 'react';
import { getAllPosts } from '../apis/posts';

const useGetPosts = () => {

    const [state, setState] = useState<{
        posts: any[],
        loading: boolean,
        error: null | Error,
    }>({
        posts: [],
        loading: false,
        error: null,
    });

    useEffect(() => {
        const fetchData = async () => {
            setState(prevState => ({ ...prevState, loading: true }));
            try {
                const response = await getAllPosts();
                setState(prevState => ({ ...prevState, posts: response, loading: false }));
            } catch (error) {
                setState(prevState => ({ ...prevState, error: error as Error, loading: false }));
            }
        };
        fetchData(); 

    }, []);

    return state;
};

export default useGetPosts;
