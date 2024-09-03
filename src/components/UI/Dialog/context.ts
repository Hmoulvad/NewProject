import { createContext } from 'react';

type DialogContext = {
  onClose?: () => void;
  labelId?: string;
};
export const Context = createContext<DialogContext>({
  labelId: 'dialog-title',
});
