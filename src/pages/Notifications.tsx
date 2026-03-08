import Header from "../components/Header.js";
import NotificationItem from "../features/notification/NotificationItem.js";

function Notifications() {
  return (
    <>
      <Header classP="text-4xl dark:text-amber-300" pContent="Not!f!cat!ons" />
      <main className="overflow-y-scroll lg:overflow-hidden p-4 pt-20 h-screen">
        <p className="text-neutral-800 dark:text-amber-200 text-2xl text-center hidden lg:block">
          NOT!f!CAT!ONS
        </p>
        <ul className="flex flex-col gap-1 sm:w-90 lg:w-84 sm:mx-auto lg:mt-4">
          <NotificationItem id={1} isUnRead={true} />
          <NotificationItem id={2} isUnRead={true} />
          <NotificationItem id={3} isUnRead={false} />
          <NotificationItem id={4} isUnRead={false} />
        </ul>
      </main>
    </>
  );
}

export default Notifications;
