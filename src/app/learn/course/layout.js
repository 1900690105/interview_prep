import ChatBot from "../../components/ChatBot";

export default function CourseLayout({ children }) {
  return (
    <>
      <main role="main" id="main-content">
        {children}
      </main>

      <aside
        className="mb-12"
        role="complementary"
        aria-label="Course help chatbot"
      >
        <ChatBot />
      </aside>
    </>
  );
}
