import { url } from "inspector"
import { NextRequest, NextResponse } from "next/server"

export default function middleware(request: NextRequest){
  const token = request.cookies.get("token_level")?.value

  const erroURL = new URL("/enigma", request.url)

  if(!token){
    return NextResponse.redirect(erroURL)
  }
  else if(parseInt(token.charAt(5)) != parseInt(request.nextUrl.pathname.charAt(13))){
    return NextResponse.redirect(erroURL)
  }
}

export const config = {
  //matcher: ["/enigma/:path*"]
  matcher: ["/enigma/level1", "/enigma/level2"]
}