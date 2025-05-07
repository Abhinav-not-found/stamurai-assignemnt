"use client";
import React, { useEffect, useRef, useState } from "react";
import { Input } from "@/components/ui/input";

const SearchComponent = () => {
  const inputRef = useRef(null);
  const overlayBoxRef = useRef(null);
  const [isOverlayOpen, setIsOverlayOpen] = useState(false);
  const [hasTyped, setHasTyped] = useState(false);

  const openOverlay = () => setIsOverlayOpen(true);
  const closeOverlay = () => setIsOverlayOpen(false);

  useEffect(() => {
    const handleKeydown = (e) => {
      const isMac = navigator.userAgent.includes("Mac");
      const isCmdK = isMac && e.metaKey && e.key.toLowerCase() === "k";
      const isCtrlK = !isMac && e.ctrlKey && e.key.toLowerCase() === "k";

      if (isCmdK || isCtrlK) {
        e.preventDefault();
        openOverlay();
      }

      if (e.key === "Escape") {
        closeOverlay();
      }
    };

    window.addEventListener("keydown", handleKeydown);
    return () => window.removeEventListener("keydown", handleKeydown);
  }, []);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (overlayBoxRef.current && !overlayBoxRef.current.contains(e.target)) {
        closeOverlay();
      }
    };

    if (isOverlayOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isOverlayOpen]);

  const [searchTerm, setSearchTerm] = useState("");
  const [status, setStatus] = useState("");
  const [priority, setPriority] = useState("");
  const [date, setDate] = useState("");
  const [results, setResults] = useState([]);

  const handleSearch = async () => {
    const params = new URLSearchParams({
      query: searchTerm,
      status,
      priority,
      date,
    });

    const res = await fetch(`/api/task/search?${params.toString()}`);
    const data = await res.json();
    setResults(data.results || []);
  };

  useEffect(() => {
    const delay = setTimeout(() => {
      if (searchTerm.trim()) {
        handleSearch();
        setHasTyped(true); // Set `hasTyped` to true if something is typed
      } else {
        setHasTyped(false); // Set it back to false when the input is empty
      }
      
    }, 300);

    return () => clearTimeout(delay);
  }, [searchTerm, status, priority, date]);

  const handleSearchInputChange = (e) => {
    setSearchTerm(e.target.value);
    setHasTyped(e.target.value.trim() !== ""); // Set hasTyped to true if something is entered
  };

  return (
    <>
      <div className="*:not-first:mt-2">
        <div className="relative" onClick={openOverlay}>
          <Input
            ref={inputRef}
            className="pe-11 cursor-pointer"
            placeholder="Search..."
            type="search"
            readOnly
            autoFocus
            value={searchTerm}
            onChange={handleSearchInputChange}
          />
          <div className="text-muted-foreground pointer-events-none absolute inset-y-0 end-0 flex items-center justify-center pe-2">
            <kbd className="text-muted-foreground/70 inline-flex h-5 max-h-full items-center rounded border px-1 font-[inherit] text-[0.625rem] font-medium">
              ⌘K
            </kbd>
          </div>
        </div>
      </div>

      {isOverlayOpen && hasTyped && (
        <div className="fixed inset-0 z-50 bg-white/80 backdrop-blur-sm flex flex-col items-center justify-start p-10">
          <div ref={overlayBoxRef} className="w-full max-w-xl bg-white shadow-xl rounded-lg p-4">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg font-semibold">Search</h2>
              <button onClick={closeOverlay} className="text-sm text-gray-500 hover:text-black">
                ESC ✕
              </button>
            </div>
            <Input
              autoFocus
              placeholder="Type to search..."
              className="mb-4"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {/* Status Filter */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Status</label>
                  <select
                    className="w-full border rounded px-2 py-1 text-sm"
                    value={status}
                    onChange={(e) => setStatus(e.target.value)}
                  >
                    <option value="">All</option>
                    <option value="todo">To Do</option>
                    <option value="inprogress">In Progress</option>
                    <option value="done">Done</option>
                  </select>
                </div>

                {/* Priority Filter */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Priority</label>
                  <select
                    className="w-full border rounded px-2 py-1 text-sm"
                    value={priority}
                    onChange={(e) => setPriority(e.target.value)}
                  >
                    <option value="">All</option>
                    <option value="low">Low</option>
                    <option value="medium">Medium</option>
                    <option value="high">High</option>
                  </select>
                </div>

                {/* Date Filter */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Date</label>
                  <input
                    type="date"
                    className="w-full border rounded px-2 py-1 text-sm"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                  />
                </div>
              </div>

              <div className="mt-4 space-y-2">
                {results.length === 0 ? (
                  <p className="text-sm text-gray-500">No results found.</p>
                ) : (
                  results.map((item) => (
                    <div key={item._id} className="border rounded p-2 text-sm bg-gray-50 hover:bg-gray-100 transition">
                      <strong>{item.title}</strong>
                      <p className="text-gray-600">{item.description}</p>
                    </div>
                  ))
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default SearchComponent;
