// prettier.config.js or .prettierrc.js
module.exports = {
  "trailingComma": "all",  // Print trailing commas wherever possible when multi-line.
  "tabWidth": 2,           // Specify the number of spaces per indentation-level.
  "semi": true,            // Print semicolons at the ends of statements.
  "singleQuote": true,     // Use single quotes instead of double quotes.
  "printWidth": 120,       // Specify the line length that the printer will wrap on.
  "useTabs": false,        // Indent lines with tabs instead of spaces.
  "endOfLine": 'lf',       // Windows or Linux-style line endings.
  "overrides": [
    {
      "files": ["*.html"],
      "options": {"tabWidth": 2}
    }
  ]
};
