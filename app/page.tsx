import Image from "next/image";

export default function Home() {
  return (
    <div>
      <main className="min-h-screen justify-between bg-orange-200">
        <div className="flex bg-orange-100 flex-wrap">
          <div className="flex-1 min-h-[50vh] flex text-center align-middle bg-cover bg-[linear-gradient(to_right_bottom,rgba(0,0,0,0.8),rgba(0,0,0,0.4)),url('/images/banner-left.jpg')] p-6 min-w-full md:min-w-0">
            <div className="m-auto">
              <div className="text-4xl gistesy">Delphine Villetard</div>
              Créatrice indépendante basée dans l&apos;Yonne
            </div>
          </div>
          <div className="flex-1 min-h-[50vh] flex bg-orange-100 text-black text-justify p-6 min-w-full md:min-w-0">
            <div className="m-auto">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
              id mauris sollicitudin, auctor eros eu, aliquet magna. In
              dignissim urna ex, dapibus luctus tortor sagittis sed. Sed congue
              sapien nibh, et consectetur ipsum ornare eget. Cras bibendum
              lectus vel urna gravida, ut pulvinar dui sodales. Sed in tempus
              metus. Suspendisse porta facilisis ex, nec lobortis ligula
              sollicitudin vitae. Integer iaculis ut lacus at condimentum. Fusce
              gravida id eros et commodo. Proin sit amet efficitur ante. In sem
              augue, vulputate eu egestas molestie, semper sit amet purus. Sed
              sit amet interdum lectus.
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
