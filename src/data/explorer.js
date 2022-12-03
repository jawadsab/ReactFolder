const explorer = {
  id: new Date().getTime(),
  name: "root",
  isFolder: true,
  items: [
    {
      id: new Date().getTime(),
      name: "public",
      isFolder: true,
      items: [
        {
          id: new Date().getTime(),
          name: "index.html",
          isFolder: false,
          items: []
        }
      ]
    },
    {
      id: new Date().getTime(),
      name: "src",
      isFolder: true,
      items: [
        {
          id: new Date().getTime(),
          name: "component",
          isFolder: true,
          items: [
            {
              id: new Date().getTime(),
              name: "Folder.js",
              isFolder: false,
              items: []
            }
          ]
        },
        {
          id: new Date().getTime(),
          name: "data",
          isFolder: true,
          items: [
            {
              id: new Date().getTime(),
              name: "explorer.js",
              isFolder: false,
              items: []
            }
          ]
        },
        {
          id: new Date().getTime(),
          name: "App.js",
          isFolder: false,
          items: []
        },
        {
          id: new Date().getTime(),
          name: "index.js",
          isFolder: false,
          items: []
        }
      ]
    },
    {
      id: new Date().getTime(),
      name: "package.json",
      isFolder: false,
      items: []
    }
  ]
};

export default explorer;
