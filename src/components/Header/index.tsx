import Link from 'next/link';
import Logo from '../Logo';
import { menuLinks } from '../../data/menu-links.js';
import { BiBookContent, BiSlider } from 'react-icons/bi';

export default function Header() {
  return (
    <div className="w-full max-w-[991px] m-auto flex gap-2 items-center justify-between py-6">
      <div className="p-2 rounded-lg cursor-pointer hover:bg-white/10 transition-colors duration-300">
        <Link href="/">
          <Logo />
        </Link>
      </div>
      <div>
        <ul className="flex gap-10">
          {menuLinks.map((menuLink, i) => (
            <li key={menuLink.id}>
              <Link
                href={menuLink.path}
                title={`Este link leva para ${menuLink.title}`}
              >
                {menuLink.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="flex gap-4">
        <Link
          href="#"
          className="flex items-center gap-1 p-1 rounded hover:bg-white/10 transition-colors duration-200"
        >
          <span>
            <BiSlider />
          </span>
          Configs
        </Link>
        <Link
          href="/entrar"
          className="flex items-center gap-1 p-1 rounded hover:bg-white/10 transition-colors duration-200"
        >
          <span>
            <BiBookContent />
          </span>
          Dashboard
        </Link>
      </div>
    </div>
  );
}
