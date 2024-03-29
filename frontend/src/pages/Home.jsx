import { useState, useEffect } from "react";
import api from "../api";
import Note from "../components/Note";

function Home() {
  const [notes, setNotes] = useState([]);
  const [content, setContent] = useState("");
  const [title, setTitle] = useState("");

  useEffect(() => {
    getNotes();
  }, []);

  const getNotes = () => {
    api
      .get("/api/notes/")
      .then((res) => res.data)
      .then((data) => {
        setNotes(data);
      })
      .catch((err) => alert(err));
  };

  const deleteNote = (id) => {
    api
      .delete(`/api/notes/delete/${id}/`)
      .then((res) => {
        if (res.status === 204) alert("Note deleted!");
        else alert("Failed to delete note.");
        getNotes();
      })
      .catch((error) => alert(error));
  };

  const createNote = (e) => {
    e.preventDefault();
    api
      .post("/api/notes/", { content, title })
      .then((res) => {
        if (res.status === 201) alert("Note created!");
        else alert("Failed to make note.");
        getNotes();
      })
      .catch((err) => alert(err));
  };

  return (
    <div>
      <div className="p-6 bg-gray-100 flex justify-center">
        <div className="container max-w-screen-lg mx-auto">
          <div>
            <h2 className="font-semibold text-xl text-gray-600">Notes</h2>
            <form onSubmit={createNote}>
              <div className="bg-white rounded shadow-lg p-4 px-4 md:p-8 mb-6">
                <div className="grid gap-4 gap-y-2 text-sm grid-cols-1 lg:grid-cols-3">
                  <div className="text-gray-600">
                    <p className="font-medium text-lg">Create a Note</p>
                  </div>

                  <div className="lg:col-span-2">
                    <div className="grid gap-4 gap-y-2 text-sm grid-cols-1 md:grid-cols-5">
                      <div className="md:col-span-5">
                        <label htmlFor="title">Title:</label>
                        <input
                          className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                          type="text"
                          id="title"
                          name="title"
                          required
                          onChange={(e) => setTitle(e.target.value)}
                          value={title}
                        />
                      </div>

                      <div className="md:col-span-5">
                        <label htmlFor="content">Content:</label>
                        <textarea
                          className="h-20 border mt-1 rounded px-4 w-full bg-gray-50"
                          id="content"
                          name="content"
                          required
                          value={content}
                          onChange={(e) => setContent(e.target.value)}
                        ></textarea>
                      </div>

                      <div className="md:col-span-5 text-right">
                        <div className="inline-flex items-end">
                          <button
                            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                            type="submit"
                          >
                            Submit
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div className="p-6 bg-gray-100 flex items-center justify-center">
        <div className="container max-w-screen-lg mx-auto">
          <div className="bg-white rounded shadow-lg p-4 px-4 md:p-8 mb-6">
            <div className="grid gap-4 gap-y-2 text-sm grid-cols-1">
              <table className="hover:table-fixed border-collapse border border-slate-500">
                <thead>
                  <tr>
                    <th className="border border-slate-600 ">Title</th>
                    <th className="border border-slate-600 ">Content</th>
                    <th className="border border-slate-600 ">Date</th>
                    <th className="border border-slate-600 ">Action</th>
                  </tr>
                </thead>
                <tbody className="text-center">
                  {notes.map((note) => (
                    <Note note={note} onDelete={deleteNote} key={note.id} />
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
