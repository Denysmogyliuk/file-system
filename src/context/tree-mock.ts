export const treeMock = [
  {
    id: 1,
    text: "Frontend",
    data: {
      isRemovable: true,
      isDroppable: true,
    },
    children: [
      {
        id: 2,
        text: "HTML",
        data: {
          isRemovable: true,
          isDroppable: true,
        },
      },
      {
        id: 3,
        text: "CSS",
        data: {
          isRemovable: true,
          isDroppable: true,
        },
      },
      {
        id: 4,
        text: "JavaScript",
        data: {
          isRemovable: true,
          isDroppable: true,
        },
        children: [
          {
            id: 5,
            text: "React",
            data: {
              isRemovable: true,
              isDroppable: true,
            },
          },
          {
            id: 12,
            text: "Vue.js",
            data: {
              isRemovable: true,
              isDroppable: true,
            },
          },
        ],
      },
    ],
  },
  {
    id: 19,
    text: "Backend",
    data: {
      isRemovable: false,
      isDroppable: false,
    },
    children: [
      {
        id: 20,
        text: "Node",
        data: {
          isRemovable: false,
          isDroppable: false,
        },
        children: [
          {
            id: 21,
            text: "Express",
            data: {
              isRemovable: false,
              isDroppable: false,
            },
          },
          {
            id: 24,
            text: "Nest",
            data: {
              isRemovable: false,
              isDroppable: false,
            },
          },
        ],
      },
      {
        id: 27,
        text: "Python",
        data: {
          isRemovable: false,
          isDroppable: false,
        },
        children: [
          {
            id: 28,
            text: "Django",
            data: {
              isRemovable: false,
              isDroppable: false,
            },
            children: [
              {
                id: 29,
                text: "Django Models",
                data: {
                  isRemovable: false,
                  isDroppable: false,
                },
              },
              {
                id: 30,
                text: "Django Views",
                data: {
                  isRemovable: false,
                  isDroppable: false,
                },
              },
            ],
          },
          {
            id: 31,
            text: "Flask",
            data: {
              isRemovable: false,
              isDroppable: false,
            },
          },
        ],
      },
    ],
  },
];
