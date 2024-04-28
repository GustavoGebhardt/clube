export default async function enigmaAddName(nome: string,){
  const url = "http://localhost:4000/users";
  const dados = {name: nome};

  const envio = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(dados)
  });

  return envio;
}