import ImageSlideShow from "@/components/UI/image_slide_show";

const IMAGES = [
  {
    src : "https://www.nitp.ac.in/_next/image?url=https%3A%2F%2Fi.postimg.cc%2Fd1QTjZhp%2F89998956-2599539480301340-8857950519889494016-n.jpg&w=828&q=75",
    alt : "Basketball court"
  },
  {
    src : "https://www.nitp.ac.in/_next/image?url=https%3A%2F%2Fi.postimg.cc%2FBbfsNJ53%2FDSC-0020.jpg&w=828&q=75",
    alt : "Lab"
  },
  {
    src : "https://www.nitp.ac.in/_next/image?url=https%3A%2F%2Fi.postimg.cc%2FzXXpkynK%2FDSC09197.jpg&w=828&q=75",
    alt : "Auditorium"
  }
]

export default function Home(){
  return (
    <div className="w-full px-4 flex flex-col items-center justify-center">
      <div className="w-5/6 text-center my-8">
        <h1 className="text-2xl md:text-3xl">Welcome To</h1>
        <h1 className="text-3xl md:text-4xl">National Institute of Technology Patna</h1>
      </div>

      <div className="w-full md:w-2/3 h-[60vh] rounded-md relative">
        <ImageSlideShow images = {IMAGES} delay = {5000}/>
      </div>

    </div>
  );
}
