import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <div>
        <div>haha header</div>
        <div className={inter.className}>
            {/* children is the content inside page.js file */}
            {children}
        </div>
        <div>haha footer</div>
    </div>
  );
}