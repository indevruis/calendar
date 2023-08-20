import "./globals.css";

export const metadata = {
  title: "Calendar"
};

const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <body>
      {children}
      </body>
    </html>
  );
};

export default RootLayout;
