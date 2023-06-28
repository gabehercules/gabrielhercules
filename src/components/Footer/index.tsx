export default function Footer() {
  function getActualYear() {
    let date = new Date();
    return date.getFullYear();
  }

  return (
    <div className="h-full flex gap-4 items-end py-4">
      <p className="text-sm text-white/70">
        © {getActualYear()}. Gabriel Hercules. Feito com{' '}
        <a href="https://nextjs.com" target="_blank" className="text-white">
          Next.js
        </a>
      </p>
      <a
        href="https://github.com/gabehercules/gabrielhercules"
        target="_blank"
        className="text-sm underline"
      >
        Link do repositório
      </a>
    </div>
  );
}
