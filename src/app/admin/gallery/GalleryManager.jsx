"use client";

import { useState } from "react";
import { addGalleryImageAction, deleteGalleryImageAction } from "@/app/actions/gallery";
import { Plus, Trash, Image as ImageIcon, X } from "lucide-react";
import Image from "next/image";

export default function GalleryManager({ initialImages = [] }) {
  const [images, setImages] = useState(initialImages);
  const [showModal, setShowModal] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Form states
  const [url, setUrl] = useState("");
  const [caption, setCaption] = useState("");
  const [album, setAlbum] = useState("Outreaches");

  const albums = ["Outreaches", "Healthcare", "Education", "Empowerment", "General"];

  const handleAddImage = async (e) => {
    e.preventDefault();
    setError(null);
    setLoading(true);

    const formData = new FormData();
    formData.append("url", url);
    formData.append("caption", caption);
    formData.append("album", album);

    try {
      const res = await addGalleryImageAction(null, formData);
      if (res.error) {
        setError(res.error);
      } else {
        setShowModal(false);
        setUrl("");
        setCaption("");
        setAlbum("Outreaches");
        window.location.reload(); // Reload to get fresh serialized records
      }
    } catch (err) {
      setError("An unexpected error occurred.");
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id) => {
    if (!confirm("Are you sure you want to delete this image?")) return;

    try {
      const res = await deleteGalleryImageAction(id);
      if (res.error) {
        alert(res.error);
      } else {
        setImages(images.filter((img) => img.id !== id));
      }
    } catch (err) {
      alert("Failed to delete image.");
    }
  };

  return (
    <div className="space-y-6">
      {/* Header controls */}
      <div className="flex items-center justify-between">
        <h2 className="text-lg font-bold text-zinc-900 dark:text-white">
          Manage Photos ({images.length})
        </h2>
        <button
          onClick={() => setShowModal(true)}
          className="inline-flex items-center gap-2 rounded-xl bg-blue-600 px-4 py-2.5 text-sm font-bold text-white shadow-md shadow-blue-500/20 hover:bg-blue-700 transition-colors"
        >
          <Plus className="h-4 w-4" /> Add Photo
        </button>
      </div>

      {/* Grid List */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
        {images.map((img) => (
          <div
            key={img.id}
            className="group relative aspect-square rounded-2xl overflow-hidden border border-zinc-200 dark:border-zinc-800 bg-zinc-100 dark:bg-zinc-950 shadow-sm"
          >
            <Image
              src={img.url}
              alt={img.caption || "Gallery item"}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-300"
            />
            {/* Hover overlay details */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-4 flex flex-col justify-between">
              <div className="flex justify-end">
                <button
                  onClick={() => handleDelete(img.id)}
                  className="rounded-lg bg-red-600 p-2 text-white hover:bg-red-700 transition-colors shadow"
                >
                  <Trash className="h-4 w-4" />
                </button>
              </div>

              <div>
                <span className="inline-block rounded bg-blue-600 px-2 py-0.5 text-xxs font-bold text-white uppercase tracking-wider mb-1">
                  {img.album}
                </span>
                <p className="text-xs text-white line-clamp-2 leading-relaxed">
                  {img.caption || "No caption provided"}
                </p>
              </div>
            </div>
          </div>
        ))}

        {images.length === 0 && (
          <div className="col-span-full py-16 text-center text-zinc-400 dark:text-zinc-500">
            No gallery images found. Click 'Add Photo' to upload one.
          </div>
        )}
      </div>

      {/* Add Photo Modal */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4">
          <div className="w-full max-w-md rounded-3xl bg-white p-8 border border-zinc-150 shadow-2xl dark:bg-zinc-900 dark:border-zinc-800">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-lg font-bold text-zinc-900 dark:text-white">
                Add Gallery Photo
              </h3>
              <button
                onClick={() => setShowModal(false)}
                className="text-zinc-400 hover:text-zinc-650 dark:hover:text-white"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <form onSubmit={handleAddImage} className="space-y-4">
              {error && (
                <div className="rounded-xl bg-red-50 p-3 text-xs font-semibold text-red-700 dark:bg-red-950/20 dark:text-red-400">
                  {error}
                </div>
              )}

              <div>
                <label className="block text-xs font-bold text-zinc-700 dark:text-zinc-300">
                  Image URL
                </label>
                <input
                  type="url"
                  required
                  value={url}
                  onChange={(e) => setUrl(e.target.value)}
                  placeholder="https://example.com/image.jpg"
                  className="mt-1.5 block w-full rounded-xl border border-zinc-200 bg-zinc-50 px-4 py-2.5 text-xs text-zinc-900 focus:border-blue-500 focus:bg-white focus:outline-none dark:border-zinc-800 dark:bg-zinc-950 dark:text-white"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-zinc-700 dark:text-zinc-300">
                  Caption (Optional)
                </label>
                <input
                  type="text"
                  value={caption}
                  onChange={(e) => setCaption(e.target.value)}
                  placeholder="Describe this outreach moment"
                  className="mt-1.5 block w-full rounded-xl border border-zinc-200 bg-zinc-50 px-4 py-2.5 text-xs text-zinc-900 focus:border-blue-500 focus:bg-white focus:outline-none dark:border-zinc-800 dark:bg-zinc-950 dark:text-white"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-zinc-700 dark:text-zinc-300">
                  Album / Category
                </label>
                <select
                  value={album}
                  onChange={(e) => setAlbum(e.target.value)}
                  className="mt-1.5 block w-full rounded-xl border border-zinc-200 bg-zinc-50 px-4 py-2.5 text-xs text-zinc-900 focus:border-blue-500 focus:bg-white focus:outline-none dark:border-zinc-800 dark:bg-zinc-950 dark:text-white"
                >
                  {albums.map((alb) => (
                    <option key={alb} value={alb}>
                      {alb}
                    </option>
                  ))}
                </select>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full mt-6 rounded-xl bg-blue-600 py-3.5 text-xs font-bold text-white shadow-md shadow-blue-500/20 hover:bg-blue-700 transition-colors disabled:opacity-50"
              >
                {loading ? "Saving..." : "Add to Gallery"}
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
