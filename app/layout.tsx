import type { Metadata } from "next";
import "./globals.css";
import { Inter } from "next/font/google";
import { ThemeProvider } from "@/components/ThemeProvider";
// import { extractRouterConfig } from "uploadthing/server";
// import { ourFileRouter } from "@/app/api/uploadthing/core";
// import { NextSSRPlugin } from "@uploadthing/react/next-ssr-plugin";
// import { Toaster } from "sonner";
// import AuthProvider from "@/components/AuthProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Mygram",
  description: "A replica of the Instagram App",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {/* <AuthProvider> */}
            {/* hello */}
            {children}
            {/* <Toaster richColors /> */}
          {/* </AuthProvider> */}
        </ThemeProvider>
      </body>
    </html>
  );
}

{/* <NextSSRPlugin/> */}
  /**
   * The `extractRouterConfig` will extract **only** the route configs
   * from the router to prevent additional information from being
   * leaked to the client. The data passed to the client is the same
   * as if you were to fetch `/api/uploadthing` directly.
   */
  // routerConfig={extractRouterConfig(ourFileRouter)}
