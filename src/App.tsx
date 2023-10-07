
import './App.css';

import {
  RouterProvider,
} from "react-router-dom";

import { router } from './router';
import { useAuth } from './providers/AuthProvider';
import { useEffect, useState } from 'react';
import { supabase } from './supabase';

function App() {
  return <RouterProvider router={router} fallbackElement={<p>Loading...</p>} />;
}

export default App;
function fetchData() {
  throw new Error('Function not implemented.');
}

