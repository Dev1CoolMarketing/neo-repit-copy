import styles from "../../styles/fue.module.css";
import { FadeInOnScroll } from "../ui/FadeInOnScroll";
export default function ExosomesReasons() {
    const exosomesResons = [
        {
            id: 1,
            title: "With Exosome Therapy,",
            description:
                "you can harness advanced cellular communication to restore hair follicle vitality and promote natural regrowth.",
            icon: "🧬",
            hasSuper: true,
        },
        {
            id: 2,
            title: "Cellular Activators",
            description:
                "contain powerful growth factors and proteins that activate dormant hair follicle stem cells.",
            icon: "⚡",
            hasSuper: true,
        },
        {
            id: 3,
            title: "Anti-Inflammatory Properties",
            description:
                "reduce scalp inflammation and create an optimal environment for hair follicle health.",
            icon: "🛡️",
            hasSuper: true,
        },
        {
            id: 4,
            title: "Everyone experiences",
            description:
                "enhanced follicle function, improved blood flow, and natural hair cycle renewal.",
            icon: "✨",
            hasSuper: true,
        },
    ];
    return (
        <div className="w-full flex flex-col justify-center items-center py-20">
            <div className="\w-full flex flex-col items-center justify-center gap-9">
                {exosomesResons.map((item, index) => (
                    <FadeInOnScroll
                        key={`reason-${index}`}
                        className="flex flex-col section-content"
                    >
                        <span className="text-[26px] font-bold text-center text-[#c17ff0]">
                            {item.title}
                        </span>{" "}
                        <span className="text-[26px] font-bold text-center">
                            {item.description}
                        </span>
                    </FadeInOnScroll>
                ))}
            </div>
        </div>
    );
}
