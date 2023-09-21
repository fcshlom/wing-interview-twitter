import React, {ChangeEvent, FC, ReactElement, useEffect, useRef } from 'react'
import { TextAreaInput } from '../styles/components'
import { useRecoilState } from 'recoil'
import { inputFocusState } from '../features/twitter/atoms/tweetAtom'

type TextAreaProps = {
    value: string
    name: string
    placeholder: string
    disabled?: boolean
    onChange: (e: ChangeEvent<HTMLTextAreaElement>) => void
  }
const TextArea: FC<TextAreaProps>  = ({
    value,
    name,
    placeholder,
    disabled,
    onChange
}): ReactElement => {
    const textAreaRef = useRef<HTMLTextAreaElement>(null);
    const [focus, setInputFocus] = useRecoilState(inputFocusState);

    useAutosizeTextArea(textAreaRef.current, value);
    useFocusTextArea(textAreaRef.current, focus, setInputFocus);

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
    setFocus: boolean,
    setInputFocus: (focus: boolean) => void
  ) => {
    useEffect(() => {
      if (textAreaRef && setFocus) {
        textAreaRef.focus();
        setInputFocus(false);
      }
    }, [textAreaRef, setFocus, setInputFocus]);
  };
