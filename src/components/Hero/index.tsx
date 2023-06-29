import Image from 'next/image';
import { me } from '../../data/me.js';

export default function Hero() {
  return (
    <div className="flex gap-10">
      <div className="w-[220px]">
        <Image
          src={me.personal.photo}
          width={364}
          height={364}
          alt={`${me.personal.name} este sou eu!`}
          className="rounded-md"
        />
        <div className="w-full mt-4">
          <ul className="flex gap-2">
            <li>
              <a href={me.social.linkedin} target="_blank">
                LinkedIn
              </a>
            </li>
            <span className="">•</span>
            <li>
              <a href={me.social.instagram} target="_blank">
                Instagram
              </a>
            </li>
            <span className="">•</span>
            <li>
              <a href={me.social.github} target="_blank">
                Github
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="flex-1">
        <p className="text-md mb-3">
          🤌 Olá, meu nome é Gabriel Hercules e sou um
        </p>
        <h1 className="text-5xl font-black mb-8">
          Front End Dev, apaixonado por impactar pessoas
        </h1>
        <p className="text-xl">
          Estou no quarto semestre de Ciência da Computação e atualmente
          trabalho como Web Designer na{' '}
          <a
            href="https://mgcholding.com.br/?ref=gabeh.com.br"
            target="_blank"
            className="text-brand-green underline"
          >
            MGC Holding
          </a>
        </p>
      </div>
    </div>
  );
}
