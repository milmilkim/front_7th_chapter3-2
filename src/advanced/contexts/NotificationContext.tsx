import { createContext, useContext, ReactNode } from 'react';
import { useNotifications } from '../hooks/useNotifications';

interface NotificationContextType {
  notifications: Array<{
    id: number;
    message: string;
    type: 'error' | 'success' | 'warning';
  }>;
  addNotification: (
    message: string,
    type: 'error' | 'success' | 'warning'
  ) => void;
  setNotifications: React.Dispatch<
    React.SetStateAction<
      Array<{
        id: number;
        message: string;
        type: 'error' | 'success' | 'warning';
      }>
    >
  >;
}

const NotificationContext = createContext<NotificationContextType | undefined>(
  undefined
);

export const NotificationProvider = ({ children }: { children: ReactNode }) => {
  const notificationState = useNotifications();

  return (
    <NotificationContext.Provider value={notificationState}>
      {children}
    </NotificationContext.Provider>
  );
};

export const useNotificationContext = () => {
  const context = useContext(NotificationContext);
  if (!context) {
    throw new Error(
      'useNotificationContext must be used within NotificationProvider'
    );
  }
  return context;
};

