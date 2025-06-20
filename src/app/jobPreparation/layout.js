import ChatBot from "./components/ChatBot";

export const metadata = {
  title: "job praparation",
  description: "this is college website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
        <ChatBot />
      </body>
    </html>
  );
}
