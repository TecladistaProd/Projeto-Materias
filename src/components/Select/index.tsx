import React, { useCallback, useMemo, useState, useLayoutEffect } from 'react';
import { createPortal } from "react-dom";
import { TbChevronDown } from 'react-icons/tb';
import { usePopper } from "react-popper";
import { AnimatePresence } from 'framer-motion';

import { Container, SelectOpts, Option, SelectBtn, ISProps, PopperContainer } from './styles';

interface IProps extends Partial<ISProps> {
  value?: string;
  options: Array<{
    label: string;
    value: string;
  }>;
  placeholder?: string;
  onChange?: (val: IProps['value']) => void;
}

const Select: React.FC<IProps> = ({ value, options, placeholder, onChange, outlined, minW }) => {
  const [isSelecting, setIsSelecting] = useState(false);
  const [triggerEl, setTriggerEl] = useState<HTMLButtonElement | null>(null);
  const [popperEl, setPopperEl] = useState<HTMLDivElement | null>(null);
  const [width, setWidth] = useState('0px');
  const { styles, attributes } = usePopper(
    triggerEl,
    popperEl,
    {
      placement: "bottom-start",
      modifiers: [
        {
          name: "offset",
          options: {
            offset: [0, 2],
          },
        },
      ],
    }
  );

  useLayoutEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (!event) return;
      if (
        popperEl &&
        !popperEl.contains(event.target as HTMLElement) &&
        triggerEl &&
        !triggerEl.contains(event.target as HTMLElement)
      ) {
        setIsSelecting(false);
      }
    };

    if(triggerEl?.offsetWidth) {
      setWidth(`${triggerEl?.offsetWidth}px`)
    }

    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [triggerEl, popperEl]);
  
  const title = useMemo(() => {
    if (value && options.findIndex(i => i.value === value) > -1)
      return value

    return placeholder || 'Selecione';
  }, [value, placeholder, options]);

  const handleSelect = useCallback((value: IProps['value']) => {
    onChange?.(value);
    setIsSelecting(false);
  }, [onChange]);

  const handleSelecting = useCallback(() => {
    setIsSelecting(v => !v);
  }, []);

  return (
    <Container>
      <SelectBtn
        ref={setTriggerEl}
        minW={minW}
        onClick={handleSelecting}
        outlined={!!outlined}>
        {title}
        <span className={`is-icon ${isSelecting ? 'active' : ''}`}>
          <TbChevronDown  fontSize={18} />
        </span>
      </SelectBtn>
      {
        isSelecting && (
          createPortal(
            <AnimatePresence>
              <PopperContainer
                css={{...styles.popper, minWidth: width} as any}
                {...attributes.popper}
                ref={setPopperEl}>
                <SelectOpts
                  initial={{ opacity: 0, scale: 0.1 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.3 }}
                  transition={{ duration: 0.25, delay: .25, type: 'spring' }}>
                  {
                    options.map((i, k) => (
                      <li key={k}>
                        <Option onClick={handleSelect.bind(null, i.value)}>
                          {i.label}
                        </Option>
                      </li>
                    ))
                  }
                </SelectOpts>
              </PopperContainer>
            </AnimatePresence>,
            document.body
          )
        )
      }
    </Container>
  );
}

export default Select;