import Header from "../components/Header.js";
import NotificationItem from "../features/notification/NotificationItem.js";

function Notifications() {
  return (
    <>
      <Header classP="text-4xl dark:text-amber-300" pContent="Not!f!cat!ons" />
      <main className="overflow-y-scroll p-4 pt-20 h-screen">
        <ul className="flex flex-col gap-1">
          <NotificationItem color="#fef3c6" />
          <NotificationItem color="#fef3c6" />
          <NotificationItem />
          <NotificationItem />
        </ul>
      </main>
    </>
  );
}

export default Notifications;
