import { ComponentProps } from 'react';
import AnimatePresence from 'services/ui/lib/AnimatePresence';

export type DrawerVariant = 'default' | 'mobile-mega-menu';

export type DrawerAnimations = ComponentProps<typeof AnimatePresence>['animation'];
