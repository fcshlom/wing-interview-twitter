import React, {ChangeEvent, FC, ReactElement, useEffect, useRef } from 'react'
import { FocusFlag } from 'models/Tweet'
import './textArea.sass'

type TextAreaProps = {
    value: string
    name: string
    placeholder: string
    disabled?: boolean
    focus?: FocusFlag
    onChange: (e: ChangeEvent<HTMLTextAreaElement>) => void
  }
export const TextArea: FC<TextAreaProps>  = ({
    value,
    name,
    placeholder,
    disabled,
    focus,
    onChange
}): ReactElement => {
    const textAreaRef = useRef<HTMLTextAreaElement>(null);
    useEffect(() => {
        if (focus?.setFocus ) {
          textAreaRef.current?.focus();
        }
    }, [focus]);

    useAutosizeTextArea(textAreaRef.current, value);

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
        debugger
        // We then set the height directly, outside of the render loop
        // Trying to set this with state or a ref will product an incorrect value.
        textAreaRef.style.height = Math.min( scrollHeight, maxHeight/3) + 'px';
      }
    }, [textAreaRef, value]);
  
  }

