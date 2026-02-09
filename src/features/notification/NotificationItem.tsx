import { CgChevronRight } from "react-icons/cg";
import { Link } from "react-router-dom";

function NotificationItem({ id, color = "#fee685" }) {
  return (
    <li
      style={{ backgroundColor: color }}
      className="bg-amber-100 rounded-lg p-3 relative"
    >
      <Link to={`/notifications/${id}`}>
        <div className="flex justify-between items-center">
          <p className="text-neutral-800">Notification Title</p>
          <p className="mr-1">
            <CgChevronRight size={30} color="#262626" />
          </p>
        </div>
      </Link>
    </li>
  );
}

export default NotificationItem;
