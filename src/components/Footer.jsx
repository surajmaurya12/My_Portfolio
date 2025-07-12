import React from "react";

export default function Footer() {
  return (
    <footer className="bg-white dark:bg-gray-900 text-center py-6 mt-20 border-t dark:border-gray-700">
      <p className="text-gray-600 dark:text-gray-300 text-sm">
        © {new Date().getFullYear()} <span className="font-semibold text-blue-600 dark:text-blue-400">Suraj Maurya</span>. All rights reserved.
      </p>
    </footer>
  );
}
