import {
  ChevronLeft,
  ChevronRight,
  ChevronsLeft,
  ChevronsRight,
  MoreHorizontal,
  Search,
} from "lucide-react";
import { IconButton } from "./icon-button";
import { Table } from "./table/table";
import { TableHeader } from "./table/table-header";
import { TableCell } from "./table/table-cell";
import { TableRow } from "./table/table-row";

export const AttendeeList = () => {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex gap-3 items-center">
        <h1 className="text-2xl font-bold">Participantes</h1>
        <div className="gap-3 px-3 w-72 py-1.5 border border-current/10 rounded-lg text-sm flex items-center">
          <Search className=" size-4 text-emerald-300" />
          <input
            className=" bg-transparent border-0  flex-1 outline-none h-auto p-0 text-sm "
            placeholder="Buscar Participante..."
          />
        </div>
      </div>
      <Table>
        <thead>
          <TableRow>
            <TableHeader style={{ width: 48 }}>
              <input
                type="checkbox"
                className=" size-4 bg-transparent focus:bg-transparent checked:bg-orange-500 rounded-sm focus:ring-2 focus:ring-orange-500"
              />
            </TableHeader>
            <TableHeader>Código</TableHeader>
            <TableHeader>Participantes</TableHeader>
            <TableHeader>Data de inscrição</TableHeader>
            <TableHeader>Data de check-in</TableHeader>
            <TableHeader style={{ width: 64 }}></TableHeader>
          </TableRow>
        </thead>
        <tbody>
          {Array.from({ length: 8 }).map((_, i) => {
            return (
              <TableRow key={i} className="border-b border-current/10">
                <TableCell>
                  <input
                    type="checkbox"
                    className=" size-4 bg-transparent focus:bg-transparent checked:bg-orange-500 rounded-sm focus:ring-2 focus:ring-orange-500 focus:bg-orange-500"
                  />
                </TableCell>
                <TableCell>1232352</TableCell>
                <TableCell>
                  <div className="flex flex-col gap-1">
                    <span className=" font-semibold  ">Henrique Griepp</span>
                    <span>henrique@dafhd.com</span>
                  </div>
                </TableCell>
                <TableCell>7 dias atrás</TableCell>
                <TableCell>3 dias atrás</TableCell>
                <TableCell>
                  <IconButton transparent>
                    <MoreHorizontal className="size-4" />
                  </IconButton>
                </TableCell>
              </TableRow>
            );
          })}
        </tbody>
        <tfoot>
          <TableRow>
            <TableCell colSpan={3}>
              Mostrando 10 de 228
            </TableCell>
            <TableCell className="text-right" colSpan={3}>
              <div className=" inline-flex items-center gap-8">
                <span>Página 1 de 23</span>

                <div className="flex gap-1.5">
                  <IconButton>
                    <ChevronsLeft className="size-4" />
                  </IconButton>
                  <IconButton>
                    <ChevronLeft className="size-4" />
                  </IconButton>
                  <IconButton>
                    <ChevronRight className="size-4" />
                  </IconButton>
                  <IconButton>
                    <ChevronsRight className="size-4" />
                  </IconButton>
                </div>
              </div>
            </TableCell>
          </TableRow>
        </tfoot>
      </Table>
    </div>
  );
};
