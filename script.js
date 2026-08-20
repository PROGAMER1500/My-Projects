import('https://cdn.jsdelivr.net/pyodide/v314.0.5/full/')

async function doFile(virtualFilename) {
  // 1. Fetch the remote Python file text via JavaScript
  const pythonCode = await response.text();

  // 2. Write the string to Pyodide's virtual Emscripten file system
  pyodide.FS.writeFile(virtualFilename, pythonCode);

  // 3. Execute the virtual file contents using standard Python builtins
  pyodide.runPython(`
      with open("${virtualFilename}", "r") as f:
          exec(f.read())
  `);
}

// Usage Example
await doFile('script.py');
