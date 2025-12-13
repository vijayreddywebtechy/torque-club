import "../assets/scss/theme.scss";
import 'react-circular-progressbar/dist/styles.css';
import "react-perfect-scrollbar/dist/css/styles.css";
import "react-datepicker/dist/react-datepicker.css";
import "react-datetime/css/react-datetime.css";
import NavigationProvider from "@/contentApi/navigationProvider";
import SettingSideBarProvider from "@/contentApi/settingSideBarProvider";
// import ThemeCustomizer from "@/components/shared/ThemeCustomizer";
import { themeInitScript } from "@/utils/themeInit";

export const metadata = {
  title: "Torque Club | Dashboard",
  description: "Torque Club Enterprise Portal",
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
    other: [
      {
        rel: "icon",
        url: "/favicon-32x32.png",
        sizes: "32x32",
        type: "image/png",
      },
    ],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
      </head>
      <body>
        <SettingSideBarProvider>
          <NavigationProvider>
            {children}
          </NavigationProvider>
        </SettingSideBarProvider>
        {/* <ThemeCustomizer /> */}
      </body>
    </html>
  );
}
