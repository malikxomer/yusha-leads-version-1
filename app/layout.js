import CustomThemeProvider from "../theme/theme-provider";
import { Roboto } from "next/font/google";

const roboto = Roboto({
  weight: ["100", "300", "400", "500", "700", "900"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: "Yusha Leads - The Future of Advertising",
  description:
    "Yusha Leads is a Leading Advertising Company in the region and our aim is to revolutionize the Advertising business",
  icons: {
    icon: "favicon.ico",
    shortcut: "apple-touch-icon.png",
    apple: "apple-touch-icon.png",
    other: {
      rel: "apple-touch-icon-precomposed",
      url: "apple-touch-icon.png",
    },
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={roboto.className}>
      <body>
        <CustomThemeProvider>{children}</CustomThemeProvider>
      </body>
    </html>
  );
}
