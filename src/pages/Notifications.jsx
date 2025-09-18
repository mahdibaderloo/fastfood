import HeaderNotification from "../features/notification/HeaderNotification";
import NotificationItem from "../features/notification/NotificationItem";

function Notifications() {
  return (
    <>
      <HeaderNotification />
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
