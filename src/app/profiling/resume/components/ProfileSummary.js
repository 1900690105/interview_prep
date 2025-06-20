import { Button } from "@/components/ui/button";

export default function ProfileSummary({ formData, onFormChange }) {
  const handleChange = (e) => {
    const { name, value } = e.target;
    onFormChange(name, value);
  };

  return (
    <form className="space-y-4">
      <h2 className="text-xl font-bold text-blue-800">Build Your Resume</h2>
      <div>
        <label className="block text-sm text-blue-800">Address</label>
        <textarea
          name="address"
          value={formData.address}
          onChange={handleChange}
          className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
        ></textarea>
      </div>
      <div>
        <label className="block text-sm text-blue-800">Profile Summary</label>
        <textarea
          name="profileSummary"
          value={formData.profileSummary}
          onChange={handleChange}
          className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
        ></textarea>
      </div>
    </form>
  );
}
