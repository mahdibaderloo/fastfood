import { CgChevronRight } from "react-icons/cg";
import { Link } from "react-router-dom";

interface NotificationProps {
  id: number;
  isUnRead: boolean;
}

function NotificationItem({ id, isUnRead }: NotificationProps) {
  return (
    <li
      style={{ backgroundColor: isUnRead ? "#fef3c6" : "#fee685" }}
      className="bg-amber-100 rounded-lg p-3 lg:p-2 2xl:pl-3 2xl:w-full 2xl:h-14 2xl:flex 2xl:justify-between 2xl:items-center relative lg:cursor-pointer"
    >
      <Link to={`/notifications/${id}`} className="2xl:w-full">
        <div className="flex justify-between items-center">
          <p className="text-neutral-800 2xl:text-lg">Notification Title</p>
          <p className="mr-1">
            <CgChevronRight
              size={30}
              color="#262626"
              className="lg:w-3 2xl:w-4.5"
            />
          </p>
        </div>
      </Link>
    </li>
  );
}

export default NotificationItem;
