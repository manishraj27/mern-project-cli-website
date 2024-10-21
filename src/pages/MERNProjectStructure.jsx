import { File, Folder, Tree } from "@/components/ui/file-tree";

const MERNProjectStructure = () => {
  const ELEMENTS = [
    {
      id: "1",
      isSelectable: true,
      name: "your-project-name",
      children: [
        {
          id: "2",
          isSelectable: true,
          name: "backend",
          children: [
            { id: "3", isSelectable: false, name: "controllers/" },
            { id: "4", isSelectable: false, name: "db/" },
            { id: "5", isSelectable: false, name: "middlewares/" },
            { id: "6", isSelectable: false, name: "models/" },
            { id: "7", isSelectable: false, name: "routes/" },
            { id: "8", isSelectable: false, name: "utils/" },
            { id: "9", isSelectable: false, name: ".env.example" },
            { id: "10", isSelectable: false, name: ".gitignore" },
            { id: "11", isSelectable: false, name: "constants.js" },
            { id: "12", isSelectable: false, name: "package.json" },
            { id: "13", isSelectable: false, name: "README.md" },
            { id: "14", isSelectable: false, name: "server.js" },
          ],
        },
        {
          id: "15",
          isSelectable: true,
          name: "frontend",
          children: [
            { id: "16", isSelectable: false, name: "public/" },
            {
              id: "17",
              isSelectable: false,
              name: "src/",
              children: [
                { id: "18", isSelectable: false, name: "components/" },
                { id: "19", isSelectable: false, name: "pages/" },
                { id: "20", isSelectable: false, name: "utils/" },
                { id: "21", isSelectable: false, name: "App.js" },
              ],
            },
            { id: "22", isSelectable: false, name: ".env.example" },
            { id: "23", isSelectable: false, name: "package.json" },
          ],
        },
      ],
    },
  ];

  return (
    <div className="relative flex flex-col items-center justify-center overflow-hidden rounded-lg border bg-background md:shadow-xl">
      <Tree
        className="p-2 overflow-hidden rounded-md bg-background"
        initialSelectedId="1"
        initialExpandedItems={["1", "2", "15"]}
        elements={ELEMENTS}
      >
        <Folder element="your-project-name" value="1">
          <Folder element="backend" value="2">
            <Folder element="controllers" value="3" />
            <Folder element="db" value="4" />
            <Folder element="middlewares" value="5" />
            <Folder element="models" value="6" />
            <Folder element="routes" value="7" />
            <Folder element="utils" value="8" />
            <File value="9">.env.example</File>
            <File value="10">.gitignore</File>
            <File value="11">constants.js</File>
            <File value="12">package.json</File>
            <File value="13">README.md</File>
            <File value="14">server.js</File>
          </Folder>
          <Folder element="frontend" value="15">
            <File value="16">public</File>
            <Folder element="src" value="17">
              <File value="18">components</File>
              <File value="19">pages</File>
              <File value="20">utils</File>
              <File value="21">App.js</File>
            </Folder>
            <File value="22">.env.example</File>
            <File value="23">package.json</File>
          </Folder>
        </Folder>
      </Tree>
    </div>
  );
};

export default MERNProjectStructure;
