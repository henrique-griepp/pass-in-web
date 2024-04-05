import { ChevronLeft, ChevronRight, ChevronsLeft, ChevronsRight, MoreHorizontal, Search } from "lucide-react";

export const AttendeeList = () => {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex gap-3 items-center">
        <h1 className="text-2xl font-bold">Participantes</h1>
        <div className="gap-3 px-3 w-72 py-1.5 border border-current/10 rounded-lg text-sm flex items-center">
          <Search className=" size-4 text-emerald-300" />
          <input
            className="bg-transparent flex-1 outline-none"
            placeholder="Buscar Participante..."
          />
        </div>
      </div>
      <div className="border border-current/10 rounded-lg">
        <table className="w-full ">
          <thead>
            <tr className=" border-b border-current/10">
              <th
                style={{ width: 48 }}
                className="py-3 px-4 text-sm font-semibold text-left"
              >
                <input type="checkbox" />
              </th>
              <th className="py-3 px-4 text-sm font-semibold text-left">
                Código
              </th>
              <th className="py-3 px-4 text-sm font-semibold text-left">
                Participantes
              </th>
              <th className="py-3 px-4 text-sm font-semibold text-left">
                Data de inscrição
              </th>
              <th className="py-3 px-4 text-sm font-semibold text-left">
                Data de check-in
              </th>
              <th
                style={{ width: 64 }}
                className="py-3 px-4 text-sm font-semibold text-left"
              ></th>
            </tr>
          </thead>
          <tbody>
            {Array.from({ length: 8 }).map((_, i) => {
              return (
                <tr key={i} className="border-b border-current/10">
                  <td className="py-3 px-4 text-sm">
                    <input type="checkbox" />
                  </td>
                  <td className="py-3 px-4 text-sm">1232352</td>
                  <td className="py-3 px-4 text-sm">
                    <div className="flex flex-col gap-1">
                      <span className=" font-semibold  ">Henrique Griepp</span>
                      <span>henrique@dafhd.com</span>
                    </div>
                  </td>
                  <td className="py-3 px-4 text-sm">7 dias atras</td>
                  <td className="py-3 px-4 text-sm">3 dias atras</td>
                  <td className="py-3 px-4 text-sm">
                    <button className=" border rounded-md p-1.5">
                      <MoreHorizontal className="size-4" />
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
          <tfoot>
            <tr>
              <td className="py-3 px-4 text-sm" colSpan={3}>
                Mostrando 10 de 228
              </td>
              <td className="py-3 px-4 text-sm text-right" colSpan={3}>
                <div className=" inline-flex items-center gap-8">
                    <span >Página 1 de 23</span>

                <div className="flex gap-1.5">
                  <button className=" border rounded-md p-1.5 bg-zinc-500/30">
                    <ChevronsLeft className="size-4" />
                  </button>
                  <button className=" border rounded-md p-1.5 bg-zinc-500/30">
                    <ChevronLeft className="size-4" />
                  </button>
                  <button className=" border rounded-md p-1.5 bg-zinc-500/30">
                    <ChevronRight className="size-4" />
                  </button>
                  <button className=" border rounded-md p-1.5 bg-zinc-500/30">
                    <ChevronsRight className="size-4" />
                  </button>
                </div>
                </div>
              </td>
            </tr>
          </tfoot>
        </table>
      </div>
    </div>
  );
};
