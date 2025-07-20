interface CoreDrive {
    id: number;
    trigger: (user: User, action: UserAction) => void;
  }
  
  interface User {
    level: number;
    points: number;
    completedActions: string[];
    streak: number;
  }