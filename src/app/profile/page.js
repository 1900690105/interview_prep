// 'use client';

// import { useEffect, useState } from 'react';
// import { useRouter } from 'next/navigation';

// export default function ProfilePage() {
//   const [userData, setUserData] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const router = useRouter();

//   // Fetch user data
//   useEffect(() => {
//     const fetchUserData = async () => {
//       try {
//         const response = await fetch('/api/auth/profile', {
//           method: 'GET',
//           credentials: 'include',
//         });

//         const data = await response.json();

//         if (response.ok) {
//           setUserData(data.data);
//         } else {
//           throw new Error(data.error || 'Failed to authenticate user.');
//         }
//       } catch (err) {
//         setError(err.message || 'An error occurred.');
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchUserData();
//   }, []);

//   // Logout function
//   const handleLogout = async () => {
//     try {
//       await fetch('/api/auth/login', {
//         method: 'DELETE',
//         credentials: 'include',
//       });
//       router.push('/loginform');
//     } catch {
//       setError('Failed to log out. Please try again.');
//     }
//   };

//   if (loading) return <p>Loading...</p>;

//   if (error) {
//     return (
//       <div className="min-h-screen flex flex-col items-center justify-center">
//         <p className="text-red-500 font-bold">{error}</p>
//         <button
//           className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
//           onClick={() => router.push('/loginform')}
//         >
//           Go to Login
//         </button>
//       </div>
//     );
//   }

//   return (
//     <div className="min-h-screen flex flex-col items-center justify-center p-4">
//       <h1 className="text-2xl font-bold mb-4">Profile</h1>

//       <div className="bg-gray-100 p-6 rounded-lg shadow-lg w-full max-w-md">
//         <p>
//           <strong>Name:</strong> {userData?.name || 'N/A'}
//         </p>
//         <p>
//           <strong>Email:</strong> {userData?.email || 'N/A'}
//         </p>
//         <p>
//           <strong>Phone:</strong> {userData?.phone || 'N/A'}
//         </p>
//         <p>
//           <strong>Username:</strong> {userData?.username || 'N/A'}
//         </p>
//       </div>

//       <button
//         className="mt-6 px-6 py-2 bg-red-500 text-white rounded hover:bg-red-600"
//         onClick={handleLogout}
//       >
//         Logout
//       </button>
//     </div>
//   );
// }
