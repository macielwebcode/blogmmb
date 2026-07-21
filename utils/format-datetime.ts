import { format } from "date-fns/format"
import { ptBR } from "date-fns/locale"

export function formatDatetime(dateStr: string): string{
    const date =  new Date(dateStr)
    return format(date, "dd/MM/yyyy 'às' HH'h'mm", {
      locale: ptBR  
    })
}