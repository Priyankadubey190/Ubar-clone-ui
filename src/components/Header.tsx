import { Link } from "react-router-dom";
import { Show, SignInButton, SignUpButton, UserButton } from "@clerk/react";
export const Header = () => {
  return (
    <header className="bg-black text-white">
      <div className="m-auto flex p-6 max-w-7xl h-16 item-center">
        <Link className="mr-10 text-2xl font-bold flex items-center" to="/">
          Uber
        </Link>
        <nav className="flex gap-4">
          <Link to="/ride">Ride</Link>
          <Link to="/rent">Rent</Link>
        </nav>

        <div className="ml-auto flex gap-4 items-center">
          <Show when="signed-out">
            <SignInButton />
            <SignUpButton />
          </Show>
          <Show when="signed-in">
            <Link to="/activity">Activity</Link>
            <UserButton />
          </Show>
        </div>
      </div>
      {/* </div> */}
    </header>
  );
};
