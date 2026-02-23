import { useEffect, useState } from 'react';

const STORAGE_KEY = 'system-info';

export default function SystemInfoFooter({ theme }) {
  const [info, setInfo] = useState(() => {
    if (typeof window === 'undefined') {
      return null;
    }

    try {
      const stored = window.localStorage.getItem(STORAGE_KEY);
      return stored ? JSON.parse(stored) : null;
    } catch {
      return null;
    }
  });

  useEffect(() => {
    if (typeof window === 'undefined') {
      return;
    }

    try {
      const data = {
        userAgent: window.navigator.userAgent,
        platform: window.navigator.platform,
        timestamp: new Date().toISOString(),
      };

      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setInfo(data);
    } catch {
      // ignore errors
    }
  }, []);

  const baseClasses =
    'px-8 py-4 border-t text-center text-xs md:text-[0.7rem]';
  const themeClasses =
    theme === 'dark'
      ? 'border-slate-700/50 bg-slate-900/40 text-slate-400'
      : 'border-slate-200 bg-slate-50 text-slate-500';

  return (
    <footer className={`${baseClasses} ${themeClasses}`}>
      {info ? (
        <>
          <p>
            User agent: <span className="break-all">{info.userAgent}</span>
          </p>
          <p className="mt-1">
            Platform: <span>{info.platform}</span>
          </p>
        </>
      ) : (
        <p>Collecting system information...</p>
      )}
    </footer>
  );
}

