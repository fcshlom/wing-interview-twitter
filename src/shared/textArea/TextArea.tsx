import React, {ChangeEvent, FC, ReactElement, RefObject, useEffect } from 'react'
import './textArea.sass'

type TextAreaProps = {
    value: string
    name: string
    placeholder: string
    disabled?: boolean
    textAreaRef?: RefObject<HTMLTextAreaElement>
    onChange: (e: ChangeEvent<HTMLTextAreaElement>) => void
  }
export const TextArea: FC<TextAreaProps>  = ({
    value,
    name,
    placeholder,
    disabled,
    textAreaRef,
    onChange
}): ReactElement => {
  
  useAutosizeTextArea(textAreaRef!.current, value);

  return (
    <textarea 
        value={value} 
        name={name} 
        placeholder={placeholder} 
        disabled={disabled} 
        ref={textAreaRef}
        rows={2}
        onChange={onChange}/>
  )
}

// Updates the height of a <textarea> when the value changes.
const useAutosizeTextArea = (
    textAreaRef: HTMLTextAreaElement | null,
    value: string
  ) => {
    useEffect(() => {
      if (textAreaRef) {
        // We need to reset the height momentarily to get the correct scrollHeight for the textarea
        textAreaRef.style.height = '0px';
        const maxHeight = document.body.scrollHeight; // limit text area hight to prevent screen glitches
        const scrollHeight = textAreaRef.scrollHeight;
        // We then set the height directly, outside of the render loop
        // Trying to set this with state or a ref will product an incorrect value.
        textAreaRef.style.height = Math.min( scrollHeight, maxHeight/3) + 'px';
      }
    }, [textAreaRef, value]);
  
  }

