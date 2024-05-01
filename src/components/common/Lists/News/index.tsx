import React, { useState, useEffect, useMemo } from 'react';

import NewsCard from '@/components/common/Cards/NewsCard';
import NewsCardPlaceholder from '@/components/common/Placeholders/NewsCardPlaceholder';
import { GetGeneralNews, GetToken } from '@/utils/helpers/services';

export default function NewsList() {
  const [news, setNews] = useState([]);
  const isLoading = useMemo(() => news.length === 0, [news]);
  const VirtualizedData = isLoading ? Array.from({ length: 3 }) : news;

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const token = GetToken();

        if (token) {
          const response = await GetGeneralNews(token);
          setNews(response.data);
        } else {
          console.error('User not logged in');
        }
      } catch (err) {
        console.error('Error Fetching News', err);
      }
    };
    fetchNews();
  }, []);

  return (
    <div className='flex flex-col flex-1 overflow-y-scroll rounded-lg gap-2'>
      {
        // showplaceholder for 5 times
        isLoading &&
          VirtualizedData.map((_, index) => <NewsCardPlaceholder key={index} />)
      }
      {
        news.slice(0, 5).map((news, index) => (
          <NewsCard key={index} newsDetails={news} />
        ))
      }
    </div>
  );
}
