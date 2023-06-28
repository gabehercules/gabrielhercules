import Link from 'next/link';
import { me } from '../../data/me.js';

export default function Header() {
  return (
    <div className="w-full flex gap-2 items-center justify-between py-3 border-b border-zinc-700">
      <p>
        <span className="text-xl font-extrabold">{me.personal.nickname}</span>
      </p>
      <div className="flex gap-3">
        <Link href="mailto:gabrielsyze@gmail.com">
          <div>Contato</div>
        </Link>
        <Link href="https://drive.google.com/file/d/1soWtO13gDGgSjCOBSx_k2vR5t7e0EHY7/view?usp=sharing">
          Download CV
        </Link>
      </div>
    </div>
  );
}
