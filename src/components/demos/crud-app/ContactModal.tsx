import { useState, useEffect } from "react";
import { FiX } from "react-icons/fi";
import type { Contact } from "./initialData";

interface ContactModalProps {
  contact: Contact | null;
  onSave: (contact: Contact) => void;
  onCancel: () => void;
}

const emptyContact: Contact = {
  id: "",
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  company: "",
  role: "",
};

export function ContactModal({ contact, onSave, onCancel }: ContactModalProps) {
  const [form, setForm] = useState<Contact>(contact ?? emptyContact);
  const isEdit = contact !== null;

  useEffect(() => {
    setForm(contact ?? emptyContact);
  }, [contact]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSave({
      ...form,
      id: form.id || Date.now().toString(),
    });
  };

  const inputClass =
    "w-full px-3 py-2 rounded-lg bg-bg-primary border border-border text-text-primary text-sm focus:border-accent focus:outline-none";

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 px-4">
      <div className="bg-bg-secondary rounded-xl border border-border w-full max-w-md p-6">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-semibold text-text-primary">
            {isEdit ? "Edit Contact" : "Add Contact"}
          </h2>
          <button onClick={onCancel} className="text-text-muted hover:text-text-primary transition-colors">
            <FiX size={20} />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-3">
          <div className="grid grid-cols-2 gap-3">
            <input
              type="text"
              placeholder="First Name"
              value={form.firstName}
              onChange={(e) => setForm({ ...form, firstName: e.target.value })}
              className={inputClass}
              required
            />
            <input
              type="text"
              placeholder="Last Name"
              value={form.lastName}
              onChange={(e) => setForm({ ...form, lastName: e.target.value })}
              className={inputClass}
              required
            />
          </div>
          <input
            type="email"
            placeholder="Email"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            className={inputClass}
            required
          />
          <input
            type="text"
            placeholder="Phone"
            value={form.phone}
            onChange={(e) => setForm({ ...form, phone: e.target.value })}
            className={inputClass}
          />
          <input
            type="text"
            placeholder="Company"
            value={form.company}
            onChange={(e) => setForm({ ...form, company: e.target.value })}
            className={inputClass}
          />
          <input
            type="text"
            placeholder="Role"
            value={form.role}
            onChange={(e) => setForm({ ...form, role: e.target.value })}
            className={inputClass}
          />
          <div className="flex gap-3 pt-2">
            <button
              type="submit"
              className="flex-1 py-2 bg-accent hover:bg-accent-hover text-white rounded-lg text-sm font-medium transition-colors"
            >
              {isEdit ? "Save Changes" : "Add Contact"}
            </button>
            <button
              type="button"
              onClick={onCancel}
              className="flex-1 py-2 border border-border text-text-secondary hover:text-text-primary rounded-lg text-sm transition-colors"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
