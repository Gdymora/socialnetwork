import React from "react";

type RangeSliderProps = {
    min: number;
    max: number;
    value: number;
    step: number;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    className?: string;
};

const RangeSlider: React.FC<RangeSliderProps> = ({
    min,
    max,
    value,
    step,
    onChange,
    className,
}) => {
    return (
        <input
            type="range"
            value={value}
            min={min}
            max={max}
            step={step}
            onChange={onChange}
            className={`transparent h-2 w-full cursor-pointer appearance-none rounded-lg border-transparent accent-gray-700 hover:accent-gray-700 active:accent-gray-800 bg-gray-100 ${
                className || ""
            }`}
        />
    );
};

export default RangeSlider;
