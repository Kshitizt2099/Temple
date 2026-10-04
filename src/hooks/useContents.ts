import { useState, useEffect, useMemo } from 'react';
import { supabase } from '../lib/supabaseClient';

export interface ContentRecord {
  id: number;
  created_at: string;
  tyepOfContent: string;
  content: string;
  Position: string | null;
}

interface UseContentsReturn {
  records: ContentRecord[];
  images: ContentRecord[];
  loading: boolean;
  error: string | null;
  refetch: () => void;
  video: ContentRecord[];
}

export function useContents(): UseContentsReturn {
  const [records, setRecords] = useState<ContentRecord[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const fetchContents = async () => {
    setLoading(true);
    setError(null);

    try {
      const { data, error: supabaseError } = await supabase
        .from('Contents')
        .select('*')
        .order('created_at', { ascending: false });

      if (supabaseError) {
        throw supabaseError;
      }

      setRecords(data ?? []);
    } catch (err: any) {
      setError(err.message ?? 'Failed to fetch contents');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchContents();
  }, []);

  const images = useMemo(
    () => records.filter(r => r.tyepOfContent === 'image'),
    [records]
  );
  const video = useMemo(
    () => records.filter(r => r.tyepOfContent === 'video'),
    [records]
  );

  return {
    records,
    images,
    video,
    loading,
    error,
    refetch: fetchContents,
  };
}
