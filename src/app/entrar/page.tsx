'use client';

import Logo from '../../components/Logo';

export default function Page() {
  return (
    <div className="flex flex-col h-[80vh] items-center justify-center">
      <>
        <Logo />
        <form action="" className="w-[400px] flex flex-col gap-4 p-6 rounded">
          <input
            type="text"
            id="username"
            name="username"
            placeholder="Usuário master"
            className="bg-[#101010] border rounded-md border-[#303030] placeholder:text-white/30 placeholder:text-sm"
          />
          <input
            type="password"
            id="password"
            name="password"
            placeholder="Senha super secreta"
            className="bg-[#101010] border rounded-md border-[#303030] placeholder:text-white/30 placeholder:text-sm"
          />
          <button
            type="submit"
            className="bg-brand-green text-[#101010] p-2 rounded-md"
          >
            Cola meu patrão
          </button>
          <p className="text-sm text-white/40">
            Essa é uma área interna privada. Mas se ficou curioso para ver como
            é por dentro, pode conferir no meu protótipo do Figma, ficou
            igualzinho!{' '}
            <a href="#" className="underline text-white/60">
              Ver protótipo
            </a>
          </p>
          <p className="text-sm text-white/40">
            Se você é dev, pode clonar o repositório, ele é open source ;){' '}
            <a href="#" className="underline text-white/60">
              Ver repo
            </a>
          </p>
        </form>
      </>
    </div>
  );
}
