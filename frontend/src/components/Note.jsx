import React from "react";

function Note({ note, onDelete }) {
  const formattedDate = new Date(note.created_at).toLocaleDateString("en-US");

  return (
    <tr>
      <td className="border border-slate-300 ">{note.title}</td>
      <td className="border border-slate-300 ">{note.content}</td>
      <td className="border border-slate-300 ">{formattedDate}</td>
      <td className="border border-slate-300 ">
        <button
          onClick={() => onDelete(note.id)}
          type="button"
          class="px-3 py-2 text-xs font-medium text-center text-white bg-red-700 rounded-lg hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800"
        >
          Delete
        </button>
      </td>
    </tr>
  );
}

export default Note;
