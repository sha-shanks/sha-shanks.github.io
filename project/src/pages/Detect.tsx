import React, { useState } from 'react';
import { Upload, Link as LinkIcon, Loader2 } from 'lucide-react';

const Detect = () => {
  const [isDragging, setIsDragging] = useState(false);
  const [urls, setUrls] = useState<string[]>([]);
  const [newUrl, setNewUrl] = useState('');
  const [uploading, setUploading] = useState(false);

  const handleDrop = async (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    setUploading(true);
    
    // Simulate upload
    await new Promise(resolve => setTimeout(resolve, 2000));
    setUploading(false);
  };

  const handleUrlAdd = (e: React.FormEvent) => {
    e.preventDefault();
    if (newUrl && !urls.includes(newUrl)) {
      setUrls([...urls, newUrl]);
      setNewUrl('');
    }
  };

  return (
    <div className="min-h-screen bg-black text-white pt-32 px-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-8">
          Upload Media for <span className="text-[#06FF00]">Detection</span>
        </h1>

        {/* File Upload Section */}
        <div
          onDragOver={(e) => {
            e.preventDefault();
            setIsDragging(true);
          }}
          onDragLeave={() => setIsDragging(false)}
          onDrop={handleDrop}
          className={`
            border-2 border-dashed rounded-xl p-12 text-center mb-8 transition-colors
            ${isDragging ? 'border-[#06FF00] bg-[#06FF00]/10' : 'border-gray-700'}
          `}
        >
          <Upload className="w-12 h-12 text-[#06FF00] mx-auto mb-4" />
          <h3 className="text-xl font-semibold mb-2">
            Drag & Drop or Click to Upload
          </h3>
          <p className="text-gray-400 mb-4">
            Support for images, videos, and audio files
          </p>
          
          <input
            type="file"
            multiple
            accept="image/*,video/*,audio/*"
            className="hidden"
            id="file-upload"
          />
          <label
            htmlFor="file-upload"
            className="inline-block px-6 py-3 bg-[#06FF00] text-black rounded-lg cursor-pointer hover:bg-[#06FF00]/90"
          >
            Select Files
          </label>
        </div>

        {/* URL Input Section */}
        <div className="bg-black/50 border border-gray-800 rounded-xl p-6 mb-8">
          <h3 className="text-xl font-semibold mb-4 flex items-center">
            <LinkIcon className="w-5 h-5 mr-2" />
            Add URLs for Analysis
          </h3>
          
          <form onSubmit={handleUrlAdd} className="flex gap-4 mb-4">
            <input
              type="url"
              value={newUrl}
              onChange={(e) => setNewUrl(e.target.value)}
              placeholder="Enter media URL"
              className="flex-1 bg-black border border-gray-700 rounded-lg px-4 py-2 focus:border-[#06FF00] focus:ring-1 focus:ring-[#06FF00]"
            />
            <button
              type="submit"
              className="px-6 py-2 bg-[#06FF00] text-black rounded-lg hover:bg-[#06FF00]/90"
            >
              Add
            </button>
          </form>

          {urls.length > 0 && (
            <ul className="space-y-2">
              {urls.map((url, index) => (
                <li
                  key={index}
                  className="flex items-center justify-between bg-black/30 rounded-lg p-3"
                >
                  <span className="truncate">{url}</span>
                  <button
                    onClick={() => setUrls(urls.filter((_, i) => i !== index))}
                    className="text-red-500 hover:text-red-400"
                  >
                    Remove
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>

        {uploading && (
          <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center">
            <div className="bg-black border border-[#06FF00] rounded-xl p-8 text-center">
              <Loader2 className="w-12 h-12 text-[#06FF00] animate-spin mx-auto mb-4" />
              <p className="text-lg">Processing your media...</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Detect;