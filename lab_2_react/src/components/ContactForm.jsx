import { useEffect, useState } from 'react';

const FORM_ENDPOINT = 'https://formspree.io/f/maqdlevv';

export default function ContactForm({ theme }) {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const timerId = window.setTimeout(() => {
      setIsOpen(true);
    }, 60000);

    return () => {
      window.clearTimeout(timerId);
    };
  }, []);

  if (!isOpen) {
    return null;
  }

  const panelBase =
    'w-full max-w-md rounded-2xl p-6 shadow-2xl';
  const panelTheme =
    theme === 'dark'
      ? 'bg-slate-900/95 border border-slate-700 text-slate-100'
      : 'bg-white border border-slate-200 text-slate-900';

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 px-4">
      <div className={`${panelBase} ${panelTheme}`}>
        <div className="flex items-start justify-between gap-4 mb-4">
          <h2 className="text-lg font-semibold">Send feedback</h2>
          <button
            type="button"
            onClick={() => setIsOpen(false)}
            className="text-slate-400 hover:text-slate-200 text-xl leading-none"
          >
            ×
          </button>
        </div>

        <form
          action={FORM_ENDPOINT}
          method="POST"
          className="space-y-3 text-sm"
        >
          <div>
            <label className="mb-1 block" htmlFor="name">
              Name
            </label>
            <input
              id="name"
              name="name"
              type="text"
              required
              className="w-full rounded-md border border-slate-600/60 bg-transparent px-3 py-2 text-sm focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500"
            />
          </div>

          <div>
            <label className="mb-1 block" htmlFor="email">
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              className="w-full rounded-md border border-slate-600/60 bg-transparent px-3 py-2 text-sm focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500"
            />
          </div>

          <div>
            <label className="mb-1 block" htmlFor="phone">
              Phone
            </label>
            <input
              id="phone"
              name="phone"
              type="tel"
              required
              className="w-full rounded-md border border-slate-600/60 bg-transparent px-3 py-2 text-sm focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500"
            />
          </div>

          <div>
            <label className="mb-1 block" htmlFor="message">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              required
              rows={4}
              className="w-full rounded-md border border-slate-600/60 bg-transparent px-3 py-2 text-sm focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500"
            />
          </div>

          <button
            type="submit"
            className="mt-2 w-full rounded-md bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm transition-colors hover:bg-indigo-500"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

