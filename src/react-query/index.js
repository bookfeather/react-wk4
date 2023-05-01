import { useQuery } from "@tanstack/react-query";
import { getImages } from "../api";


export const useImages = () => {
    const { data, isLoading } = useQuery([], getImages, {
        onSuccess: (data) => {
          console.log("獲取到的資料：", data);
        },
      });
    
    return { data, isLoading }
}