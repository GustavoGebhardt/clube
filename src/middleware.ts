import { url } from "inspector"
import { NextRequest, NextResponse } from "next/server"

export default function middleware(request: NextRequest){
  //Puxando o valor do token
  const token = request.cookies.get("token_level")?.value

  //URL da pagina de erro
  const erroURL = new URL("/enigma/erro", request.url)

  //Validando a existência de um token
  if(!token){
    //Retornar pagina de erro
    return NextResponse.redirect(erroURL)
  }
  //Validando o token com a url
  else if(parseInt(token.charAt(5)) != parseInt(request.nextUrl.pathname.charAt(13))){
    //Acesso total aos diretorios
    if(parseInt(token.charAt(5)) === 3){
      return null
    }
    //Retornar pagina de erro
    return NextResponse.redirect(erroURL)
  }
}

export const config = {
  //Caminhos que serão controlados
  matcher: [
    "/enigma/level1",
    "/enigma/level2",
    "/enigma/final"
  ]
}