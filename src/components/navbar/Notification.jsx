import { IoMdNotificationsOutline } from "react-icons/io";

const NotificationBadge = ({ count = 0 }) => {
    return (
        <div className="relative">
            <IoMdNotificationsOutline className="text-slate-600 text-4xl" />
            {count > 0 && (
                <span className="bg-slate-900 text-white absolute top-0 left-5 rounded-full z-10 flex justify-center items-center text-xs font-bold w-5 h-5">
                    {count}
                </span>
            )}
        </div>
    );
};

export default NotificationBadge;