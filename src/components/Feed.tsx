import axios from "axios";
import { useEffect, useState } from "react";
import { Card } from "./Card";

interface NoticiasProps {
  id: number;
  titulo: string;
  introducao: string;
  data_publicacao: string;
}

export function Feed() {

  const [noticias, setNoticias] = useState<NoticiasProps[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    axios.get('http://servicodados.ibge.gov.br/api/v3/noticias/').then((res) => {
      setNoticias(res.data.items);
      setIsLoading(false);
    })
  }, []);

  return (
    <div className="flex max-w-5xl mx-auto py-10">
      <div className="w-72">
        <div className="text-white bg-zinc-800 py-10 rounded-lg flex flex-col items-center">
          <img className="w-24 h-24 rounded-full border-2 border-purple-500" src="https://github.com/rafaelppereira.png" alt="Rafael Pereira" />
          <h1 className="mt-5 text-2xl">Rafael Pereira</h1>
          <p className="opacity-60">
            Pleno web developer
          </p>
          <span className="block mt-3">Resolv Tech</span>
        </div>
      </div>
      <div className="flex-1 px-10 flex flex-col gap-10">
        {isLoading ? (
          <div className="w-full flex justify-center h-52 items-center">
            <div className="w-10 h-10 border-4 border-zinc-800 rounded-full border-t-purple-500 animate-spin"></div>
          </div>
        ) : (
          <>
            {noticias.map(item => (
              <Card 
                key={item.id}
                title={item.titulo}
                description={item.introducao}
                author={item.data_publicacao}
              />
            ))}
          </>
        )}

      </div>
    </div>
  )
}