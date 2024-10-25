import { NextResponse } from 'next/server';
import React from 'react'


export function middleware(req: { cookies: { get: (arg0: string) => any; }; nextUrl: { pathname: string; }; url: string | URL | undefined; }) {
 const username = req.cookies.get('username');  

 //Redirect to login if the user is not authenticated
 if(!username && req.nextUrl.pathname !== '/login'){
    return NextResponse.redirect(new URL('/login', req.url));
 }  
 return NextResponse.next();

 }
  //Specify which paths the middleware should apply to
  export const config = {
    matcher: ['/login/:path*']
}