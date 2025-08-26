import Slider from "../component/slider";
import Testimonial from "../component/testimonial";
import RemoveBackground from "../component/RemoveBackground";
import Translator from "../component/Translator";

export default function about(){
    return(
        <main className=" bg-[#fffaf3] text-[#4b2e1e]">
              <Testimonial />
              <div className="imageslider max-w-4xl mx-auto py-20 px-4 text-center">
                <h1 className="slider-heading text-[#4b2e1e] text-3xl font-bold mb-8">
                    Our Portfolio
                </h1>
                <Slider />
                <RemoveBackground />
                <Translator />
              </div>
        </main>
    );
}

