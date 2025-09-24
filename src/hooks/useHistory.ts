import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

export function useHistory() {
  const pathname = usePathname();

  useEffect(() => {
    const history = JSON.parse(localStorage.getItem('history') || '[]');
    history.push({ path: pathname, visitedAt: new Date().toISOString() });
    localStorage.setItem('history', JSON.stringify(history));
  }, [pathname]);
}
