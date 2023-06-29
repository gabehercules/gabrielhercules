import Link from 'next/link';
import Logo from '../Logo';

export default function Header() {
  return (
    <div className="w-full flex gap-2 items-center justify-between py-6">
      <div className="p-2 rounded-lg cursor-pointer hover:bg-white/10 transition-colors duration-300">
        <Logo />
      </div>
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
