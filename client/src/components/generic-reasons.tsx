import styles from "../../styles/fue.module.css";
import { FadeInOnScroll } from "../components/ui/FadeInOnScroll";



type Reason = {highlight: string, description: string}

type GenericReasonProps = {
  reasons: Reason[]
  gradientClass: string
}
export default function GenericReasons({reasons, gradientClass}: GenericReasonProps) {

    return (
        <div className="w-full flex flex-col justify-center items-center py-20">
            <div className="\w-full flex flex-col items-center justify-center gap-9">
                {reasons.map((item, index) => (
                    <FadeInOnScroll
                        key={`reason-${index}`}
                        className="flex flex-col section-content"
                    >
                        <span className={`text-[28px] font-bold text-center ${gradientClass}`}>
                            {item.highlight}
                        </span>{" "}
                        <span className="text-[28px] font-bold text-center">
                            {item.description}
                        </span>
                    </FadeInOnScroll>
                ))}
            </div>
        </div>
    );
}
