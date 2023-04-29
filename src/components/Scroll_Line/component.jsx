import {useRef, useEffect} from "react";
import "./style.css"

function Scroll_line() {
    const pathsRef = useRef([]);

    useEffect(() => {
        const paths = pathsRef.current;

        if (paths.length > 0) {
            paths.forEach((path) => {
                const pathLength = path.getTotalLength();

                path.style.strokeDasharray = `${pathLength} ${pathLength}`;
                path.style.strokeDashoffset = pathLength;

                const handleScroll = () => {
                    const scrollPercentage = (window.scrollY + window.innerHeight) / document.body.scrollHeight;
                    const drawLength = pathLength * scrollPercentage * 2;

                    path.style.strokeDashoffset = pathLength - drawLength;
                };

                window.addEventListener('scroll', handleScroll);

                return () => {
                    window.removeEventListener('scroll', handleScroll);
                };
            });
        }
    }, [pathsRef]);

    return (
        <div className={"scroll-line"}>
        <svg viewBox="0 0 1182 2435" fill="none">
            <path d="M12 1376V1872C12 1883.05 20.9543 1892 32 1892H1150C1161.05 1892 1170 1900.95 1170 1912V2434.5" stroke="#343434" stroke-opacity="0.1" stroke-width="3" ref={(ref) => pathsRef.current.push(ref)} />
            <path d="M1170 966V1289.48C1170 1300.53 1161.05 1309.48 1150 1309.48H32C20.9543 1309.48 12 1318.44 12 1329.48V1376.5" stroke="#343434" stroke-opacity="0.1" stroke-width="3" ref={(ref) => pathsRef.current.push(ref)} />
            <circle cx="12.5" cy="1378.5" r="12.5" fill="#EBEBEB" />
            <path d="M12 13V605.017C12 616.063 20.9543 625.017 32 625.017H1150C1161.05 625.017 1170 633.971 1170 645.017V968.5" stroke="#343434" stroke-opacity="0.1" stroke-width="3" ref={(ref) => pathsRef.current.push(ref)} />
            <circle cx="12.5" cy="12.5" r="12.5" fill="#3D948E" />
            <circle cx="1169.5" cy="967.5" r="12.5" fill="#EBEBEB" />
        </svg>
        </div>
    );
}

export default Scroll_line