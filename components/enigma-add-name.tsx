export default async function enigmaAddName(nome: string,){
  const url = "http://localhost:4000/";
  const dados = {nome: nome};

  const envio = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(dados),
  });
  const info = await envio.json();
  return info;
}