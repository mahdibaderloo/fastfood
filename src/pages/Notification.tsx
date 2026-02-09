import Header from "../components/Header";

function Notification() {
  return (
    <div>
      <Header classP="text-4xl dark:text-amber-300" pContent="" />
      <main className="p-4 pt-20 h-screen flex flex-col gap-2">
        <h2 className="text-lg text-amber-300">Notification Title</h2>
        <p className="text-amber-300/50 text-[0.7rem]">Today at 10:00 AM</p>
        <p className="text-amber-50/90 text-[0.6rem] mt-2 w-full text-justify">
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
