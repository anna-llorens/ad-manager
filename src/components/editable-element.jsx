import { useEffect, useRef, Children, cloneElement } from "react";

export const EditableElement = (props) => {
  const { onChange } = props;
  const element = useRef();
  let elements = Children.toArray(props.children);

  if (elements.length > 1) {
    throw Error("Can't have more than one child");
  }

  const onMouseUp = () => {
    const value = element.current?.value || element.current?.innerText;
    onChange(value);
  };

  useEffect(() => {
    const value = element.current?.value || element.current?.innerText;
    onChange(value);
  }, []);

  elements = cloneElement(elements[0], {
    contentEditable: true,
    suppressContentEditableWarning: true,
    ref: element,
    onKeyUp: onMouseUp,
  });

  return elements;
};
