export function Footer() {
  return (
    <footer className="px-4 pb-7 pt-2 sm:px-6">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-center rounded-2xl border border-[rgb(var(--border-rgb))/0.7] bg-[rgb(var(--card-rgb))/0.6] px-4 py-3 text-center text-xs text-[rgb(var(--muted-rgb))] backdrop-blur-xl">
        <p>
          © {new Date().getFullYear()} Srikanth Kurva
          <span className="mx-2 text-[rgb(var(--border-rgb))]">•</span>
          React Developer
        </p>
      </div>
    </footer>
  )
}
