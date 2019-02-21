export const USER = 1;
export const QUIZZER = 2;
export const MODERATOR = 3;
export const ADMIN = 4;

const level = {
  user: USER,
  quizzer: QUIZZER,
  moderator: MODERATOR,
  admin: ADMIN
};

export const hasAccessLevel = (user, lvl) => {
  return level[user.level] >= lvl;
};
