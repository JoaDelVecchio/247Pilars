import { createContext, useState, ReactNode } from 'react';

// Define the user type or use an appropriate interface for your app
type User = {
  id: string;
  name: string;
  email: string;
} | null;

export const AuthContext = createContext<{
  currentUser: User;
  updateUser: (updatedUser: User) => void;
} | null>(null);

const AuthContextProvider = ({ children }: { children: ReactNode }) => {
  const [currentUser, setCurrentUser] = useState<User>(() => {
    const storedUser = localStorage.getItem('user');
    return storedUser ? JSON.parse(storedUser) : null;
  });

  const updateUser = (updatedUser: User) => setCurrentUser(updatedUser);

  return (
    <AuthContext.Provider value={{ currentUser, updateUser }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
