import type { IUser } from "#shared/types/users";

export const useUser = () => {
  const user = ref<IUser>({
    id: 1,
    name: "Loic Maes",
    firstname: "Loic",
    lastname: "Maes",
    email: "loic@humonio.com",
    phone: "01 23 45 67 89",
    linkedin: "https://www.linkedin.com/in/maesloic",
    picture: "https://images.pexels.com/photos/2078467/pexels-photo-2078467.jpeg",
    admin: true,
    notifications: {
      programs: "web-and-app",
      summary: "weekly",
    },
  });

  return {
    user,
  };
};
