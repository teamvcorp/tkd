import "./styles/globals.css";
import Header from "../components/navbar";
import Footer from "@/components/footer";

export const metadata = {
  title: "Taekwondo",
  description: "Taekwondo in Storm lake, Cherokee, and Aurelia.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&family=Oswald:wght@200;300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
     
      </head>
      <body>
        <section>
          <Header />
        </section>
        {children}
        <section>
          <Footer />
        </section>
      </body>
    </html>
  );
}
