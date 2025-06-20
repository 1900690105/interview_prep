export const metadata = {
  title: "Company Dashboard",
  description: "Manage hiring and job postings",
};

export default function CompanyLayout({ children }) {
  return (
    <div className="flex min-h-screen bg-gray-50">
      <main className="flex-1 p-6 overflow-auto">{children}</main>
    </div>
  );
}
