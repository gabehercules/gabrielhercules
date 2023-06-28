import Image from 'next/image';
import { me } from '../../data/me.js';

export default function Hero() {
  return (
    <div className="flex gap-10 py-10">
      <div className="w-[300px]">
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
        <h1 className="text-5xl font-bold mb-4">
          Olá, meu nome é Gabriel Hercules e sou um Desenvolvedor em formação
        </h1>
        <p className="text-xl">
          Estou no quarto semestre de Ciência da Computação e atualmente
          trabalho como Web Designer na{' '}
          <a
            href="https://mgcholding.com.br/?ref=gabrielhercules.netlify.app"
            target="_blank"
            className="text-blue-400 underline"
          >
            MGC Holding
          </a>
        </p>
      </div>
    </div>
  );
}
