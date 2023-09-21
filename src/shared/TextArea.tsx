import React, {ChangeEvent, FC, ReactElement, useEffect, useRef } from 'react'
import { TextAreaInput } from '../styles/components'
interface TextAreaProps {
    value: string
    name: string
    placeholder: string
    disabled?: boolean
    onChange: (e: ChangeEvent<HTMLTextAreaElement>) => void
    setFocus: boolean
  }
const TextArea: FC<TextAreaProps>  = ({
    value,
    name,
    placeholder,
    disabled,
    onChange, setFocus
}): ReactElement => {
    const textAreaRef = useRef<HTMLTextAreaElement>(null);

    useAutosizeTextArea(textAreaRef.current, value);
    useFocusTextArea(textAreaRef.current, setFocus);

  return (
    <TextAreaInput 
        value={value} 
        name={name} 
        placeholder={placeholder} 
        disabled={disabled} 
        ref={textAreaRef}
        rows={1}
        onChange={onChange}>
    </TextAreaInput>
  )
}

export default TextArea

// Updates the height of a <textarea> when the value changes.
const useAutosizeTextArea = (
    textAreaRef: HTMLTextAreaElement | null,
    value: string
  ) => {
    useEffect(() => {
      if (textAreaRef) {
        // We need to reset the height momentarily to get the correct scrollHeight for the textarea
        textAreaRef.style.height = "0px";
        const scrollHeight = textAreaRef.scrollHeight;
        // We then set the height directly, outside of the render loop
        // Trying to set this with state or a ref will product an incorrect value.
        textAreaRef.style.height = scrollHeight + "px";
      }
    }, [textAreaRef, value]);
  
  }
const useFocusTextArea = (
    textAreaRef: HTMLTextAreaElement | null,
    setFocus: boolean
  ) => {
    useEffect(() => {
      if (textAreaRef && setFocus) {
        console.log("Focusing the textarea", setFocus);
        textAreaRef.focus();
      }
    }, [textAreaRef, setFocus]);
  };
