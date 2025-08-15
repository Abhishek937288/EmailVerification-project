import { useState, useRef, useEffect } from "react";
import { TextField } from "@radix-ui/themes";

export default function OTPInput({ length = 6, onChange }) {
  const [values, setValues] = useState(Array(length).fill(""));
  const inputsRef = useRef([]);

  useEffect(() => {
    if (onChange) onChange(values.join(""));
  }, [values, onChange]);

  const focusInput = (index) => {
    if (inputsRef.current[index]) {
      inputsRef.current[index].focus();
    }
  };

  const handleChange = (e, index) => {
    const val = e.target.value;
    if (!/^\d*$/.test(val)) return; // Only digits allowed

    const newValues = [...values];
    newValues[index] = val.slice(-1); // Take last digit only
    setValues(newValues);

    if (val && index < length - 1) {
      focusInput(index + 1);
    }
  };

  const handleKeyDown = (e, index) => {
    switch (e.key) {
      case "Backspace":
        e.preventDefault();
        if (values[index]) {
          const newValues = [...values];
          newValues[index] = "";
          setValues(newValues);
        } else if (index > 0) {
          focusInput(index - 1);
          const newValues = [...values];
          newValues[index - 1] = "";
          setValues(newValues);
        }
        break;
      case "ArrowLeft":
        e.preventDefault();
        if (index > 0) focusInput(index - 1);
        break;
      case "ArrowRight":
        e.preventDefault();
        if (index < length - 1) focusInput(index + 1);
        break;
      default:
        break;
    }
  };

  const handlePaste = (e) => {
    e.preventDefault();
    const paste = e.clipboardData.getData("text").trim();
    if (!/^\d+$/.test(paste)) return;

    const pasteValues = paste.split("").slice(0, length);
    const newValues = [...values];
    pasteValues.forEach((char, idx) => {
      newValues[idx] = char;
    });
    setValues(newValues);

    const nextIndex = Math.min(pasteValues.length, length - 1);
    focusInput(nextIndex);
  };

  return (
    <div
      role="group"
      aria-label={`Enter ${length}-digit OTP code`}
      className="flex gap-3 justify-center"
    >
      {values.map((val, i) => (
        <TextField.Root
          key={i}
          size="3"
          type="text"
          inputMode="numeric"
          pattern="[0-9]*"
          maxLength={1}
          className="!w-9 text-center"
          value={val}
          onChange={(e) => handleChange(e, i)}
          onKeyDown={(e) => handleKeyDown(e, i)}
          onPaste={i === 0 ? handlePaste : undefined}
          ref={(el) => (inputsRef.current[i] = el)}
          aria-label={`Digit ${i + 1}`}
          autoComplete="one-time-code"
          spellCheck="false"
          placeholder="0"
        />
      ))}
    </div>
  );
}
