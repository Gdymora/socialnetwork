import { useEffect, useRef } from "react";
import SiriWave from "./lib/SiriWave"; // Шлях до файлу з вашим класом SiriWave

const SiriWaveComponent = (props: any) => {
    const waveRef = useRef(null);

    useEffect(() => {
        const siriWave = new SiriWave({
            ...props,
            container: waveRef.current,
            cover: true /* 
            speed: 0.03,
            amplitude: 0.7, */,
            frequency: 2,
        });
        siriWave.start();
        return () => {
            siriWave.stop();
            if (waveRef.current && (waveRef.current as any).firstChild) {
                (waveRef.current as any).removeChild(
                    (waveRef.current as any).firstChild
                );
            }
        };
    }, []);

    return <div ref={waveRef} />;
};

export default SiriWaveComponent;
