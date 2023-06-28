export default function Roadmap() {
  return (
    <>
      <h2 className="text-xl font-bold pt-10 mb-3">Roadmap</h2>
      <p className="text-sm text-white/60 leading-none bg-white/5 p-2 rounded inline-flex mb-3">
        Por que não? O que planejo para o portfólio.
      </p>
      <div className="flex flex-col gap-3">
        <p className="text-white/80">
          <span className="inline-flex gap-2 items-center bg-green-400/30 p-1 text-sm leading-none font-medium text-green-400 rounded ">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-85"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-400"></span>
            </span>
            Agora:
          </span>{' '}
          Só o básico. Atualizado do Next 12 para o 13. Migrado de Styled
          Components para TailwindCSS e reajustado estrutura de pastas para o
          novo App Router.
        </p>
        <p className="text-white/80">
          <span className="inline-flex gap-2 items-center bg-blue-400/30 p-1 text-sm leading-none font-medium text-blue-400 rounded ">
            <span className="flex w-2 h-2 rounded bg-blue-400"></span>Em
            progresso:
          </span>{' '}
          Definir uma tipografia bunitinha; Escolher uma biblioteca de ícones
          bacana; Ajustar o responsivo; Definir um CMS para o gerenciamento de
          conteúdo; Reconfigurar o Analytics e o GTM; Mudar deploy da Netlify
          para Vercel;
        </p>
        <p className="text-white/80">
          <span className="inline-flex gap-2 items-center bg-purple-400/30 p-1 text-sm leading-none font-medium text-purple-400 rounded ">
            <span className="flex w-2 h-2 rounded bg-purple-400"></span>{' '}
            Planejado:
          </span>{' '}
          Página Sobre; Adicionar linha do tempo com experiências; Página
          Contato com form; Adicionar versão inglês com i18n; Montar o schema no
          CMS e fazer um fetch nos dados; Acessibilidade e keyboard navigation;
          e mais...
        </p>
      </div>
    </>
  );
}
