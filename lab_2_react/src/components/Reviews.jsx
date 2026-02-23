import { useEffect, useState } from 'react';

// Using post 2 for this variant; change the number if your variant differs
const REVIEWS_URL =
  'https://jsonplaceholder.typicode.com/posts/3/comments';

export default function Reviews({ theme }) {
  const [comments, setComments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let isMounted = true;

    const load = async () => {
      try {
        const response = await fetch(REVIEWS_URL);
        if (!response.ok) {
          throw new Error(`Failed to load reviews (${response.status})`);
        }
        const data = await response.json();
        if (isMounted) {
          setComments(data);
        }
      } catch (err) {
        if (isMounted) {
          setError(err instanceof Error ? err.message : 'Unknown error');
        }
      } finally {
        if (isMounted) {
          setLoading(false);
        }
      }
    };

    load();

    return () => {
      isMounted = false;
    };
  }, []);

  const cardBase =
    'rounded-xl border p-4 text-sm transition-colors';
  const cardTheme =
    theme === 'dark'
      ? 'border-slate-700/60 bg-slate-800/40 text-slate-200'
      : 'border-slate-200 bg-slate-50 text-slate-800';

  return (
    <section>
      <h2
        className={`mb-4 text-2xl font-bold flex items-center gap-2 after:h-px after:flex-1 after:bg-gradient-to-r after:from-indigo-500/50 after:to-transparent ${
          theme === 'dark' ? 'text-white' : 'text-slate-900'
        }`}
      >
        <span className="text-indigo-400">💬</span> Feedbacks
      </h2>

      {loading && (
        <p className="text-sm text-slate-400">Loading feedbacks...</p>
      )}
      {error && (
        <p className="text-sm text-red-400">
          Could not load feedbacks: {error}
        </p>
      )}

      {!loading && !error && (
        <div className="space-y-3">
          {comments.map((c) => (
            <article key={c.id} className={`${cardBase} ${cardTheme}`}>
              <h3 className="font-semibold text-indigo-300">
                {c.name}
              </h3>
              <p className="text-xs text-slate-400 mb-2">
                {c.email}
              </p>
              <p className="text-sm leading-relaxed whitespace-pre-line">
                {c.body}
              </p>
            </article>
          ))}
        </div>
      )}
    </section>
  );
}

