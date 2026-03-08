import { useParams } from "react-router-dom";
import Header from "../components/Header";
import BackButton from "../components/BackButton";

function Notification() {
  const params = useParams();

  return (
    <div>
      <Header classP="text-4xl dark:text-amber-300" showBackButton={true} />
      <main className="p-4 pt-16 lg:pt-24 h-screen flex flex-col gap-2 sm:w-90 lg:w-[70%] sm:mx-auto">
        <BackButton />
        <h2 className="text-lg sm:text-xl lg:text-2xl text-neutral-950 dark:text-amber-300 lg:mt-2">
          Notification Title #{params.notificationId}
        </h2>
        <p className="text-neutral-900/80 dark:text-amber-300/50 text-[0.7rem] sm:text-[0.8rem] lg:text-[1rem]">
          Today at 10:00 AM
        </p>
        <p className="text-neutral-800 dark:text-amber-50/90 text-[0.6rem] sm:text-[0.7rem] lg:text-[0.9rem] mt-2 lg:mt-8  w-full text-justify">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nemo quas
          beatae deleniti exercitationem sed labore rerum quae repudiandae ipsam
          laudantium laborum cum, saepe maxime culpa natus! Aperiam corporis
          magni, accusamus unde voluptate similique hic, esse voluptas
          architecto quidem atque. Recusandae minus ut commodi eos eveniet optio
          voluptatibus, minima repellat, quasi magnam consequuntur soluta
          voluptate reprehenderit earum! Corporis aliquam hic numquam esse
          laboriosam consequuntur sed illum sint obcaecati, nobis fuga? Facilis
          eveniet natus beatae nemo vero nisi suscipit? Doloremque molestias
          ipsa veritatis, deleniti nemo laborum! Rem quod doloribus earum eos,
          velit maxime nesciunt ad culpa explicabo quos inventore aut tempora
          laudantium!
        </p>
      </main>
    </div>
  );
}

export default Notification;
