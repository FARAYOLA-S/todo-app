import Head from "next/head";
import Login from "../components/login";
import { useAuth } from "../context/AuthContext";
import { UserDashboard } from "../components/UserDashboard";

export default function Home() {
  const {currentUser} = useAuth()
  
  return (
    <>
      <Head>
        <title>Todo App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
     {currentUser? <UserDashboard /> : <Login />} 
    </>
  );
}
