import { FiAlertTriangle } from "react-icons/fi";

interface DeleteConfirmationProps {
  contactName: string;
  onConfirm: () => void;
  onCancel: () => void;
}

export function DeleteConfirmation({ contactName, onConfirm, onCancel }: DeleteConfirmationProps) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 px-4">
      <div className="bg-bg-secondary rounded-xl border border-border w-full max-w-sm p-6 text-center">
        <div className="flex justify-center mb-3">
          <FiAlertTriangle size={32} className="text-rose-400" />
        </div>
        <h3 className="text-lg font-semibold text-text-primary mb-2">Delete Contact</h3>
        <p className="text-text-secondary text-sm mb-6">
          Are you sure you want to delete <span className="text-text-primary font-medium">{contactName}</span>? This action cannot be undone.
        </p>
        <div className="flex gap-3">
          <button
            onClick={onCancel}
            className="flex-1 py-2 border border-border text-text-secondary hover:text-text-primary rounded-lg text-sm transition-colors"
          >
            Cancel
          </button>
          <button
            onClick={onConfirm}
            className="flex-1 py-2 bg-rose-500 hover:bg-rose-600 text-white rounded-lg text-sm font-medium transition-colors"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}
