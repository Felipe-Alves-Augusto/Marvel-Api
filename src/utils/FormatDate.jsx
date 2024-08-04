// src/FormatDate.js
import { format, parseISO } from 'date-fns';
import { ptBR } from 'date-fns/locale';

const FormatDate = ({ dateString }) => {
    const date = parseISO(dateString);
    const formattedDate = format(date, "dd 'de' MMMM 'de' yyyy", { locale: ptBR });

    return (

        <div className="last-one-comics">
            <p className='subtitle'>Último quadrinho: { formattedDate }</p>
        </div>

    ) 
};

export default FormatDate;