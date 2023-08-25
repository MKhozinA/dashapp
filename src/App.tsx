
import './App.css';

import {
  RouterProvider,
} from "react-router-dom";

import { router } from './router';
import { useAuth } from './providers/AuthProvider';
import { useEffect, useState } from 'react';
import { supabase } from './supabase';

// function App() {
//   const { session } = useAuth();
//   const [ todos, setTodos ] = useState<{
//     id: any;
//     task: any;
//     is_complete: any;
//   }[] | null>([])

//   useEffect(() => {
//     fetchData().then(({ todos, error }) => {
//       if (error) console.log('error', error)
//       else setTodos(todos)
//     })
//   }, [])

//   return (
//     <>
//       <h1>Supabase Todo List</h1>
//       <h2>Hi {session?.user?.email}</h2>
//       <button onClick={() => supabase.auth.signOut()}>Sign Out</button>
//       {
//         todos?.map((todo) => {
//           return <div key={todo.id}>{todo.task} {todo.is_complete ? 'v' : 'x'}</div>
//         })
//       }
//     </>
//   )
// }

function App() {
  return <RouterProvider router={router} fallbackElement={<p>Loading...</p>} />;
}

export default App;
function fetchData() {
  throw new Error('Function not implemented.');
}

