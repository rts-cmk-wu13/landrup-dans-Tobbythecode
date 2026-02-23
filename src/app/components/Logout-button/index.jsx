

import { cookies } from "next/headers";
import LogoutAction from "./action";
import { Link } from "react-router";

export default async function LogoutButton() {
    const cookieStore = await cookies();
const [isLoggedIn, setIsLoggedIn] = useState(false);


 return (
    <form action={LogoutAction}>
      {
        isLoggedIn
        ? <button type="submit">Log ud</button>
        : <Link href="/login">Log ind</Link>
      }
      
    </form>
  );
}