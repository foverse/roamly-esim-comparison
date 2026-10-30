import { NextRequest, NextResponse } from "next/server";
import { defaultLocale, isLocale } from "@/lib/i18n";

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const segment = pathname.split("/")[1];

  if (isLocale(segment)) return NextResponse.next();

  const preferred = request.headers
    .get("accept-language")
    ?.split(",")
    .map((value) => value.trim().slice(0, 2))
    .find(isLocale);

  request.nextUrl.pathname = `/${preferred ?? defaultLocale}${pathname}`;
  return NextResponse.redirect(request.nextUrl);
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico|.*\\..*).*)"],
};
