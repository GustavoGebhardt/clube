export default async function enigmaAddName(nome: string,){
  const url = "https://clube-backend.onrender.com/users";
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