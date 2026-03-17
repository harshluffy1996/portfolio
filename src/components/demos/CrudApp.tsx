import { useState, useMemo } from "react";
import { FiSearch, FiPlus, FiEdit2, FiTrash2, FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { DemoLayout } from "./DemoLayout";
import { initialContacts, type Contact } from "./crud-app/initialData";
import { ContactModal } from "./crud-app/ContactModal";
import { DeleteConfirmation } from "./crud-app/DeleteConfirmation";

const PAGE_SIZE = 10;

function CrudApp() {
  const [contacts, setContacts] = useState<Contact[]>(initialContacts);
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);
  const [editingContact, setEditingContact] = useState<Contact | null>(null);
  const [showModal, setShowModal] = useState(false);
  const [deletingContact, setDeletingContact] = useState<Contact | null>(null);

  const filtered = useMemo(() => {
    const q = search.toLowerCase();
    if (!q) return contacts;
    return contacts.filter(
      (c) =>
        c.firstName.toLowerCase().includes(q) ||
        c.lastName.toLowerCase().includes(q) ||
        c.email.toLowerCase().includes(q) ||
        c.company.toLowerCase().includes(q) ||
        c.role.toLowerCase().includes(q)
    );
  }, [contacts, search]);

  const totalPages = Math.max(1, Math.ceil(filtered.length / PAGE_SIZE));
  const paginated = filtered.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE);

  const handleAdd = () => {
    setEditingContact(null);
    setShowModal(true);
  };

  const handleEdit = (contact: Contact) => {
    setEditingContact(contact);
    setShowModal(true);
  };

  const handleSave = (contact: Contact) => {
    if (editingContact) {
      setContacts((prev) => prev.map((c) => (c.id === contact.id ? contact : c)));
    } else {
      setContacts((prev) => [contact, ...prev]);
    }
    setShowModal(false);
    setEditingContact(null);
  };

  const handleDelete = () => {
    if (deletingContact) {
      setContacts((prev) => prev.filter((c) => c.id !== deletingContact.id));
      setDeletingContact(null);
      if (paginated.length === 1 && page > 1) setPage(page - 1);
    }
  };

  return (
    <DemoLayout title="Contact Manager">
      {/* Top Bar */}
      <div className="flex flex-col sm:flex-row gap-3 mb-6">
        <div className="relative flex-1">
          <FiSearch size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-text-muted" />
          <input
            type="text"
            value={search}
            onChange={(e) => { setSearch(e.target.value); setPage(1); }}
            placeholder="Search contacts..."
            className="w-full pl-10 pr-4 py-2.5 rounded-lg bg-bg-secondary border border-border text-text-primary text-sm focus:border-accent focus:outline-none"
          />
        </div>
        <button
          onClick={handleAdd}
          className="flex items-center justify-center gap-2 px-5 py-2.5 bg-accent hover:bg-accent-hover text-white rounded-lg text-sm font-medium transition-colors shrink-0"
        >
          <FiPlus size={16} /> Add Contact
        </button>
      </div>

      {/* Table */}
      <div className="bg-bg-secondary rounded-xl border border-border overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-border text-text-muted">
                <th className="text-left py-3 px-4 font-medium">Name</th>
                <th className="text-left py-3 px-4 font-medium hidden md:table-cell">Email</th>
                <th className="text-left py-3 px-4 font-medium hidden lg:table-cell">Phone</th>
                <th className="text-left py-3 px-4 font-medium hidden sm:table-cell">Company</th>
                <th className="text-left py-3 px-4 font-medium hidden lg:table-cell">Role</th>
                <th className="text-right py-3 px-4 font-medium">Actions</th>
              </tr>
            </thead>
            <tbody>
              {paginated.length === 0 ? (
                <tr>
                  <td colSpan={6} className="py-12 text-center text-text-muted">
                    No contacts found
                  </td>
                </tr>
              ) : (
                paginated.map((contact) => (
                  <tr key={contact.id} className="border-b border-border/50 hover:bg-bg-tertiary/50 transition-colors">
                    <td className="py-3 px-4">
                      <span className="text-text-primary font-medium">{contact.firstName} {contact.lastName}</span>
                      <span className="block sm:hidden text-text-muted text-xs mt-0.5">{contact.company}</span>
                    </td>
                    <td className="py-3 px-4 text-text-secondary hidden md:table-cell">{contact.email}</td>
                    <td className="py-3 px-4 text-text-muted hidden lg:table-cell font-mono text-xs">{contact.phone}</td>
                    <td className="py-3 px-4 text-text-secondary hidden sm:table-cell">{contact.company}</td>
                    <td className="py-3 px-4 text-text-muted hidden lg:table-cell">{contact.role}</td>
                    <td className="py-3 px-4 text-right">
                      <div className="flex items-center justify-end gap-2">
                        <button
                          onClick={() => handleEdit(contact)}
                          className="p-1.5 rounded-lg hover:bg-accent/10 text-text-muted hover:text-accent transition-colors"
                          title="Edit"
                        >
                          <FiEdit2 size={14} />
                        </button>
                        <button
                          onClick={() => setDeletingContact(contact)}
                          className="p-1.5 rounded-lg hover:bg-rose-500/10 text-text-muted hover:text-rose-400 transition-colors"
                          title="Delete"
                        >
                          <FiTrash2 size={14} />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        <div className="flex items-center justify-between px-4 py-3 border-t border-border">
          <p className="text-text-muted text-xs">
            Showing {(page - 1) * PAGE_SIZE + 1}–{Math.min(page * PAGE_SIZE, filtered.length)} of {filtered.length}
          </p>
          <div className="flex items-center gap-2">
            <button
              onClick={() => setPage(page - 1)}
              disabled={page === 1}
              className="p-1.5 rounded-lg border border-border hover:bg-bg-tertiary text-text-muted disabled:opacity-30 transition-colors"
            >
              <FiChevronLeft size={16} />
            </button>
            <span className="text-text-secondary text-xs font-mono px-2">
              {page} / {totalPages}
            </span>
            <button
              onClick={() => setPage(page + 1)}
              disabled={page === totalPages}
              className="p-1.5 rounded-lg border border-border hover:bg-bg-tertiary text-text-muted disabled:opacity-30 transition-colors"
            >
              <FiChevronRight size={16} />
            </button>
          </div>
        </div>
      </div>

      {/* Modals */}
      {showModal && (
        <ContactModal
          contact={editingContact}
          onSave={handleSave}
          onCancel={() => { setShowModal(false); setEditingContact(null); }}
        />
      )}
      {deletingContact && (
        <DeleteConfirmation
          contactName={`${deletingContact.firstName} ${deletingContact.lastName}`}
          onConfirm={handleDelete}
          onCancel={() => setDeletingContact(null)}
        />
      )}
    </DemoLayout>
  );
}

export default CrudApp;
