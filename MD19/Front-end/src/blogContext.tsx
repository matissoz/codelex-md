import {createContext} from 'react';
import { BlogType } from './api/types';

export const BlogContext = createContext<BlogType[]>([]);