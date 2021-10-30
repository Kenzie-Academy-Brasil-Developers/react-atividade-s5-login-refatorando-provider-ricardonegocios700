import { useAuth } from "../../Providers/Auth/auth";

function Dashboard() {
  const { Logout } = useAuth();
  const handleClickLogout = () => {
    Logout();
  };
  return (
    <>
      <button onClick={handleClickLogout}>Logout</button>
    </>
  );
}

export default Dashboard;
