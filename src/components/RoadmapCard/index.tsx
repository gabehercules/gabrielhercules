import { roadmap } from '../../data/roadmap.js';

export default function RoadmapCard() {
  return (
    <div className="w-full">
      <h2 className="text-xl font-bold mb-3">Roadmap</h2>
      <p className="text-sm text-white/60 leading-none bg-white/5 p-2 rounded inline-flex mb-3">
        Por que não? O que planejo para o portfólio.
      </p>

      <div className="w-full flex gap-3">
        {roadmap.map((roadmapItem, i) => (
          <div
            className="flex flex-col flex-1 bg-[#1F1F1F] rounded border border-[#303030]"
            key={i}
          >
            <div className="flex gap-2 items-center border-b border-[#303030] px-5 p-2">
              <div
                className={`${roadmapItem.styles} inline-flex gap-2 items-center p-1 text-sm leading-none font-medium rounded`}
              >
                {/* <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-85"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-green-400"></span>
                </span> */}
                <div>{roadmapItem.title}</div>
              </div>
              <div className="text-[#bdbdbd]">{roadmapItem.tagline}</div>
            </div>
            <div className="flex gap-3 flex-1 flex-col p-5">
              <ul className="flex flex-1 flex-col gap-3">
                {roadmapItem.content.map((contentValue, i) => (
                  <li key={i} className="text-sm">
                    • {contentValue}
                  </li>
                ))}
              </ul>
              <div>
                {roadmapItem.link === null ? null : (
                  <a
                    href={roadmapItem.link}
                    target="_blank"
                    className="text-sm underline"
                  >
                    Veja aqui
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
