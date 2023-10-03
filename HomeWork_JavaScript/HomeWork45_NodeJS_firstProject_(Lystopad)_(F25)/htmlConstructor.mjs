import fs from "fs";

export class HTMLConstructor {
  constructor(fileName = "", content = "", styles = "", innerScripts = "", ...outerScriptsFiles) {
    this.fileName = fileName;
    this.content = content;
    this.styles = styles;
    this.innerScripts = innerScripts;
    this.outerScriptsFilesArray = Array.of(...outerScriptsFiles);
    this.outerScriptsPaths = this.connectScriptsFiles();
  }

  generateBasicHTMLContent(content, styles, innerScripts) {
   return `
   <html>
      <head>
         <style>
            ${styles}
         </style>
      </head>
      <body>
         <h1 id="title"></h1>
         <div class="card-wrapper">
         ${content}
         </div>
         <script>
            ${innerScripts}
         </script>
         ${this.outerScriptsPaths}
      </body>

   </html>`
  }

  generateFile(path = "") {

    if (path) {
      this.generateFoldersFromPath(path);
    }

    fs.writeFileSync(
      path ? `${path}/${this.fileName}.html` : `${this.fileName}.html`,
     this.generateBasicHTMLContent(this.content, this.styles, this.innerScripts) 
    );

    return this;
  }

  generateFoldersFromPath(path) {

      if (!path.includes("/")) {
         !fs.existsSync(path) && fs.mkdirSync(path);
         return path;
      }
      
      const pathItems = path.split("/");

      pathItems.forEach((path, i) => {
         let fullPathToCurrentFolder = pathItems.slice(0, i + 1).join("/");
         console.log(fullPathToCurrentFolder, "fullPath");
         !fs.existsSync(fullPathToCurrentFolder) && fs.mkdirSync(fullPathToCurrentFolder);
      })
  }

   connectScriptsFiles() {
      return this.outerScriptsFilesArray
               .map((scriptPath) => `<script src="${scriptPath}"></script>`)
               .join()
               .replace(",", "");
   }  
}