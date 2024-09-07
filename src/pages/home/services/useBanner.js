import { useQuery } from '@tanstack/react-query';

export const useBanner = () => {
  return useQuery({
    queryKey: ['bannerData'],
    queryFn: () =>
      fetch('/api/banner').then((res) => res.json()),
  });
};
